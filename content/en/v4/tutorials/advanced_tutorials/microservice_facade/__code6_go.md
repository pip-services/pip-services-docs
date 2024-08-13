
**/operations/version1/SessionOperationsV1.go**

```go
package operations1

import (
	"context"
	"encoding/json"
	"net/http"
	"sync"
	"time"

	accclients1 "github.com/pip-services-users/pip-clients-accounts-go/version1"
	passclients1 "github.com/pip-services-users/pip-clients-passwords-go/version1"
	roleclients1 "github.com/pip-services-users/pip-clients-roles-go/version1"
	sessclients1 "github.com/pip-services-users/pip-clients-sessions-go/version1"

	cdata "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/data"
	cerr "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/errors"
	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	httpcontroller "github.com/pip-services4/pip-services4-go/pip-services4-http-go/controllers"
)

type SessionsOperationsV1 struct {
	*httpcontroller.RestOperations
	defaultConfig *cconf.ConfigParams

	cookie        string
	cookieEnabled bool
	maxCookieAge  int64

	accountsClient  accclients1.IAccountsClientV1
	sessionsClient  sessclients1.ISessionsClientV1
	passwordsClient passclients1.IPasswordsClientV1
	rolesClient     roleclients1.IRolesClientV1
}

func NewSessionsOperationsV1(ctx context.Context) *SessionsOperationsV1 {
	c := SessionsOperationsV1{
		RestOperations: httpcontroller.NewRestOperations(),
	}

	c.defaultConfig = cconf.NewConfigParamsFromTuples(
		"options.cookie_enabled", true,
		"options.cookie", "x-session-id",
		"options.max_cookie_age", 365*24*60*60*1000,
	)
	c.cookie = "x-session-id"
	c.cookieEnabled = true
	c.maxCookieAge = 365 * 24 * 60 * 60 * 1000

	c.DependencyResolver.Put(ctx, "accounts", cref.NewDescriptor("pip-services-accounts", "client", "*", "*", "1.0"))
	c.DependencyResolver.Put(ctx, "passwords", cref.NewDescriptor("pip-services-passwords", "client", "*", "*", "1.0"))
	c.DependencyResolver.Put(ctx, "roles", cref.NewDescriptor("pip-services-roles", "client", "*", "*", "1.0"))
	c.DependencyResolver.Put(ctx, "sessions", cref.NewDescriptor("pip-services-sessions", "client", "*", "*", "1.0"))
	return &c
}

func (c *SessionsOperationsV1) Configure(ctx context.Context, config *cconf.ConfigParams) {
	config = config.SetDefaults(c.defaultConfig)
	c.DependencyResolver.Configure(ctx, config)

	c.cookieEnabled = config.GetAsBooleanWithDefault("options.cookie_enabled", c.cookieEnabled)
	c.cookie = config.GetAsStringWithDefault("options.cookie", c.cookie)
	c.maxCookieAge = config.GetAsLongWithDefault("options.max_cookie_age", c.maxCookieAge)
}

func (c *SessionsOperationsV1) SetReferences(ctx context.Context, references cref.IReferences) {
	c.RestOperations.SetReferences(ctx, references)

	dependency, _ := c.DependencyResolver.GetOneRequired("sessions")
	sesionsClient, ok1 := dependency.(sessclients1.ISessionsClientV1)
	if !ok1 {
		panic("SessionOperationsV1: Cant't resolv dependency 'client' to ISessionsClientV1")
	}
	c.sessionsClient = sesionsClient

	dependency, _ = c.DependencyResolver.GetOneRequired("accounts")
	acountClient, ok2 := dependency.(accclients1.IAccountsClientV1)
	if !ok2 {
		panic("SessionOperationsV1: Cant't resolv dependency 'client' to IAccountsClientV1")
	}
	c.accountsClient = acountClient

	dependency, _ = c.DependencyResolver.GetOneRequired("passwords")
	passClient, ok3 := dependency.(passclients1.IPasswordsClientV1)
	if !ok3 {
		panic("SessionOperationsV1: Cant't resolv dependency 'client' to IPasswordsClientV1")
	}
	c.passwordsClient = passClient

	dependency, _ = c.DependencyResolver.GetOneRequired("roles")
	rolesClient, ok4 := dependency.(roleclients1.IRolesClientV1)
	if !ok4 {
		panic("SessionOperationsV1: Cant't resolv dependency 'client' to IRolesClientV1")
	}
	c.rolesClient = rolesClient
}

func (c *SessionsOperationsV1) LoadSession(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	sessionId := req.Header.Get("x-session-id")

	if sessionId != "" {
		session, err := c.sessionsClient.GetSessionById("facade", sessionId)
		if session == nil && err == nil {
			err = cerr.NewUnauthorizedError(
				"facade",
				"SESSION_NOT_FOUND",
				"Session invalid or already expired.",
			).WithDetails("session_id", sessionId).WithStatus(440)
		}

		if err == nil {
			// Associate session user with the request
			buf, _ := json.Marshal(session.User)
			user := make(map[string]interface{}, 0)
			json.Unmarshal(buf, &user)
			req = req.WithContext(context.WithValue(req.Context(), "user_id", session.UserId))
			req = req.WithContext(context.WithValue(req.Context(), "user_name", session.UserName))
			req = req.WithContext(context.WithValue(req.Context(), "user", *cdata.NewAnyValueMapFromValue(user)))
			req = req.WithContext(context.WithValue(req.Context(), "session_id", session.Id))
			next.ServeHTTP(res, req)
		} else {
			c.SendError(res, req, err)
		}

	} else {
		next.ServeHTTP(res, req)
	}
}

func (c *SessionsOperationsV1) OpenSession(res http.ResponseWriter, req *http.Request, account *accclients1.AccountV1, roles []string) {
	var session *sessclients1.SessionV1
	var settings cconf.ConfigParams

	wg := sync.WaitGroup{}
	wg.Add(1)

	go func() {

		defer wg.Done()
		passwordInfo, err := c.passwordsClient.GetPasswordInfo("", account.Id)
		if err != nil {
			c.SendError(res, req, err)
			return
		}

		var changePwdTime time.Time
		if passwordInfo != nil {
			changePwdTime = passwordInfo.ChangeTime
		}

		var user = SessionUserV1{
			Id:            account.Id,
			Name:          account.Name,
			Login:         account.Login,
			CreateTime:    account.CreateTime,
			TimeZone:      account.TimeZone,
			Language:      account.Language,
			Theme:         account.Theme,
			Roles:         roles,
			Settings:      settings,
			ChangePwdTime: changePwdTime,
			CustomHdr:     account.CustomHdr,
			CustomDat:     account.CustomDat,
		}

		address := httpcontroller.HttpRequestDetector.DetectAddress(req)
		client := httpcontroller.HttpRequestDetector.DetectBrowser(req)

		session, err = c.sessionsClient.OpenSession("", account.Id, account.Name, address, client, user, nil)
		if err != nil {
			c.SendError(res, req, err)
			return
		}
		//res.json(session)
		c.SendResult(res, req, session, nil)
	}()

	wg.Wait()

}

func (c *SessionsOperationsV1) Signup(res http.ResponseWriter, req *http.Request) {

	signupData := make(map[string]interface{})
	c.DecodeBody(req, &signupData)
	r, ok := signupData["roles"].([]string)
	roles := make([]string, 0)
	if ok {
		roles = append(roles, r...)
	}
	wg := sync.WaitGroup{}
	wg.Add(1)

	go func() {
		defer wg.Done()
		// Use email by default
		login, ok := signupData["login"].(string)
		if !ok {
			login, _ = signupData["email"].(string)
		}
		// Create account
		newAccount := accclients1.AccountV1{}
		newAccount.Name, _ = signupData["name"].(string)
		newAccount.Login = login
		newAccount.Language, _ = signupData["language"].(string)
		newAccount.Theme, _ = signupData["theme"].(string)
		newAccount.TimeZone, _ = signupData["time_zone"].(string)

		account, err := c.accountsClient.CreateAccount("", &newAccount)
		if err != nil {
			c.SendError(res, req, err)
			return
		}

		// Create password for the account
		password, _ := signupData["password"].(string)

		err = c.passwordsClient.SetPassword(
			"", account.Id, password)
		if err != nil {
			c.SendError(res, req, err)
			return
		}
		// Create roles for the account
		if len(roles) > 0 {
			c.rolesClient.GrantRoles(
				"", account.Id, roles)
		}
		c.OpenSession(res, req, account, roles)
	}()
	wg.Wait()
}

func (c *SessionsOperationsV1) Signin(res http.ResponseWriter, req *http.Request) {

	login := c.GetParam(req, "login")
	password := c.GetParam(req, "password")

	if login == "" && password == "" {
		params := make(map[string]string, 0)
		c.DecodeBody(req, &params)
		login = params["login"]
		password = params["password"]
	}

	roles := make([]string, 0)

	wg := sync.WaitGroup{}
	wg.Add(1)

	go func() {
		defer wg.Done()
		// Find user account

		account, err := c.accountsClient.GetAccountByIdOrLogin("", login)
		if err != nil {
			c.SendError(res, req, err)
			return
		}
		if err == nil && account == nil {
			err = cerr.NewBadRequestError(
				"",
				"WRONG_LOGIN",
				"Account "+login+" was not found",
			).WithDetails("login", login)
			if err != nil {
				c.SendError(res, req, err)
				return
			}
		}

		// Authenticate user
		result, err := c.passwordsClient.Authenticate("", account.Id, password)

		// wrong password error is UNKNOWN when use http client
		if (err == nil && result == false) || (err != nil && err.(*cerr.ApplicationError).Cause == "Invalid password") {
			err = cerr.NewBadRequestError(
				"",
				"WRONG_PASSWORD",
				"Wrong password for account "+login,
			).WithDetails("login", login)
			if err != nil {
				c.SendError(res, req, err)
				return
			}
		}

		// Retrieve user roles
		if c.rolesClient != nil {
			roles, err = c.rolesClient.GetRolesById("", account.Id)
			if err != nil {
				c.SendError(res, req, err)
				return
			}

		} else {
			roles = make([]string, 0)
		}

		c.OpenSession(res, req, account, roles)
	}()
	wg.Wait()

}

func (c *SessionsOperationsV1) Signout(res http.ResponseWriter, req *http.Request) {

	sessionId, ok := req.Context().Value("session_id").(string)
	if ok {
		_, err := c.sessionsClient.CloseSession("", sessionId)

		if err != nil {
			c.SendError(res, req, err)
		} else {
			// res.json(204);
			c.SendEmptyResult(res, req, nil)
		}

	} else {
		//res.json(204);
		c.SendEmptyResult(res, req, nil)
	}
}

```
