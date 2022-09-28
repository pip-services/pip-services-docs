
**/services/version1/Authorize.go**

```go
package services1

import (
	"net/http"

	"github.com/gorilla/mux"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	cerr "github.com/pip-services3-gox/pip-services3-commons-gox/errors"
	rpcauth "github.com/pip-services3-go/pip-services3-rpc-go/auth"
	rpcservices "github.com/pip-services3-go/pip-services3-rpc-go/services"
)

type AuthorizerV1 struct {
	basicAuth rpcauth.BasicAuthManager
	roleAuth  rpcauth.RoleAuthManager
}

func NewAuthorizerV1() *AuthorizerV1 {
	c := &AuthorizerV1{
		basicAuth: rpcauth.BasicAuthManager{},
		roleAuth:  rpcauth.RoleAuthManager{},
	}
	return c
}

// Anybody who entered the system
func (c *AuthorizerV1) Anybody() func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	return c.basicAuth.Anybody()
}

// Only registered and authenticated users
func (c *AuthorizerV1) Signed() func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	return c.basicAuth.Signed()
}

// System administrator
func (c *AuthorizerV1) Admin() func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	return c.roleAuth.UserInRole("admin")
}

// Only the user session owner
func (c *AuthorizerV1) Owner(idParam string) func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	if idParam == "" {
		idParam = "user_id"
	}
	return func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {

		user, ok := req.Context().Value("user").(cdata.AnyValueMap)
		partyId := req.URL.Query().Get(idParam)
		if partyId == "" {
			partyId = mux.Vars(req)[idParam]
		}

		if !ok {
			rpcservices.HttpResponseSender.SendError(
				res, req,
				cerr.NewUnauthorizedError(
					"", "NOT_SIGNED",
					"User must be signed in to perform c operation").WithStatus(401),
			)
		} else if partyId == "" {
			rpcservices.HttpResponseSender.SendError(
				res, req,
				cerr.NewUnauthorizedError(
					"", "NO_USER_ID",
					"User id is not defined").WithStatus(401),
			)
		} else {
			isOwner := partyId == user.GetAsString("id")

			if !isOwner {
				rpcservices.HttpResponseSender.SendError(
					res, req,
					cerr.NewUnauthorizedError(
						"", "NOT_OWNER", "Only user owner access is allowed").WithDetails("user_id", partyId).WithStatus(403),
				)
			} else {
				next.ServeHTTP(res, req)
			}
		}
	}
}

```

