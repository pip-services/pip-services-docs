
**/test/fixture/TestReferences.go**

```go
package test_fixture

import (
	"context"
	"time"

	bclients1 "github.com/pip-services-samples/client-beacons-gox/clients/version1"
	fbuild "github.com/pip-services-samples/pip-samples-facade-go/build"
	operations1 "github.com/pip-services-samples/pip-samples-facade-go/operations/version1"
	services1 "github.com/pip-services-samples/pip-samples-facade-go/services/version1"
	accclients1 "github.com/pip-services-users/pip-clients-accounts-go/version1"
	passclients1 "github.com/pip-services-users/pip-clients-passwords-go/version1"
	roleclients1 "github.com/pip-services-users/pip-clients-roles-go/version1"
	sessclients1 "github.com/pip-services-users/pip-clients-sessions-go/version1"
	cbuild "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"
	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	bref "github.com/pip-services4/pip-services4-go/pip-services4-container-go/refer"
	rpcbuild "github.com/pip-services4/pip-services4-go/pip-services4-http-go/build"
	httpcontr "github.com/pip-services4/pip-services4-go/pip-services4-http-go/controllers"
)

type TestReferences struct {
	*bref.ManagedReferences

	factory *cbuild.CompositeFactory
}

func NewTestReferences() *TestReferences {
	c := TestReferences{
		ManagedReferences: bref.NewManagedReferences(context.Background(), nil),
		factory:           cbuild.NewCompositeFactory(),
	}

	c.setupFactories()
	c.appendDependencies()
	c.configureService()
	c.createUsersAndSessions()
	return &c
}

func (c *TestReferences) setupFactories() {
	c.factory.Add(fbuild.NewClientFacadeFactory())
	c.factory.Add(fbuild.NewServiceFacadeFactory())
	c.factory.Add(rpcbuild.NewDefaultHttpFactory())
}

func (c *TestReferences) Append(descriptor *cref.Descriptor) {
	component, err := c.factory.Create(descriptor)
	if err != nil {
		return
	}
	c.Put(context.Background(), descriptor, component)
}

func (c *TestReferences) appendDependencies() {
	// Add factories
	c.Put(context.Background(), nil, c.factory)

	// Add service
	c.Put(context.Background(), nil, services1.NewFacadeServiceV1())

	// Add user management services
	c.Put(context.Background(), cref.NewDescriptor("pip-services-accounts", "client", "memory", "default", "*"), accclients1.NewAccountsMemoryClientV1(nil))
	c.Put(context.Background(), cref.NewDescriptor("pip-services-sessions", "client", "memory", "default", "*"), sessclients1.NewSessionsMemoryClientV1())
	c.Put(context.Background(), cref.NewDescriptor("pip-services-passwords", "client", "commandable-http", "default", "*"), passclients1.NewPasswordsMemoryClientV1())
	c.Put(context.Background(), cref.NewDescriptor("pip-services-roles", "client", "commandable-http", "default", "*"), roleclients1.NewRolesMemoryClientV1())

	// Add content management services
	// Beacons
	c.Put(context.Background(), cref.NewDescriptor("beacons", "client", "memory", "default", "*"), bclients1.NewBeaconsMemoryClientV1(nil))
}

func (c *TestReferences) configureService() {
	// Configure Facade service
	dependency, _ := c.GetOneRequired(cref.NewDescriptor("pip-services", "endpoint", "http", "default", "*"))
	service, ok1 := dependency.(*httpcontr.HttpEndpoint)
	if !ok1 {
		panic("TestReferences: Cant't resolv dependency 'client' to IAccountsClientV1")
	}

	service.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"root_path", "", //"/api/1.0",
		"connection.protocol", "http",
		"connection.host", "0.0.0.0",
		"connection.port", 3000,
	))

}

func (c *TestReferences) createUsersAndSessions() {
	// Create accounts
	dependency, _ := c.GetOneRequired(cref.NewDescriptor("pip-services-accounts", "client", "*", "*", "*"))
	accountsClient, ok1 := dependency.(accclients1.IAccountsClientV1)
	if !ok1 {
		panic("TestReferences: Cant't resolv dependency 'client' to IAccountsClientV1")
	}

	adminUserAccount := accclients1.AccountV1{
		Id:         TestUsers.AdminUserId,
		Login:      TestUsers.AdminUserLogin,
		Name:       TestUsers.AdminUserName,
		Active:     true,
		CreateTime: time.Time{},
	}
	accountsClient.CreateAccount("", &adminUserAccount)

	user1Account := accclients1.AccountV1{
		Id:         TestUsers.User1Id,
		Login:      TestUsers.User1Login,
		Name:       TestUsers.User1Name,
		Active:     true,
		CreateTime: time.Time{},
	}
	accountsClient.CreateAccount("", &user1Account)

	user2Account := accclients1.AccountV1{
		Id:         TestUsers.User2Id,
		Login:      TestUsers.User2Login,
		Name:       TestUsers.User2Name,
		Active:     true,
		CreateTime: time.Time{},
	}
	accountsClient.CreateAccount("", &user2Account)

	// Create opened sessions

	dependency, _ = c.GetOneRequired(cref.NewDescriptor("pip-services-sessions", "client", "*", "*", "*"))
	sessionsClient, ok2 := dependency.(sessclients1.ISessionsClientV1)
	if !ok2 {
		panic("TestReferences: Cant't resolv dependency 'client' to ISessionsClientV1")
	}

	adminUserData := c.cloneAccountToUserData(&adminUserAccount)
	adminUserData.Roles = []string{"admin"}
	session, _ := sessionsClient.OpenSession(
		"", TestUsers.AdminUserId, TestUsers.AdminUserName,
		"", "", adminUserData, nil)
	session.Id = TestUsers.AdminUserSessionId

	user1Data := c.cloneAccountToUserData(&user1Account)
	user1Data.Roles = make([]string, 0)

	session, _ = sessionsClient.OpenSession(
		"", TestUsers.User1Id, TestUsers.User1Name,
		"", "", user1Data, nil)
	session.Id = TestUsers.User1SessionId

	user2Data := c.cloneAccountToUserData(&user2Account)
	user2Data.Roles = make([]string, 0)
	session, _ = sessionsClient.OpenSession(
		"", TestUsers.User2Id, TestUsers.User2Name,
		"", "", user2Data, nil)
	session.Id = TestUsers.User2SessionId
}

func (c *TestReferences) cloneAccountToUserData(account *accclients1.AccountV1) *operations1.SessionUserV1 {
	if account == nil {
		return nil
	}
	return &operations1.SessionUserV1{
		Id:    account.Id,
		Login: account.Login,
		Name:  account.Name,

		/* Activity tracking */
		CreateTime: account.CreateTime,
		/* User preferences */
		TimeZone: account.TimeZone,
		Language: account.Language,
		Theme:    account.Theme,

		/* Custom fields */
		CustomHdr: account.CustomHdr,
		CustomDat: account.CustomDat,
	}
}

```
