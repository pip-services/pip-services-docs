
**/operations/version1/BeaconsOperationsV1.go**
```go
package services1

import (
	"net/http"

	operations1 "github.com/pip-services-samples/pip-samples-facade-go/operations/version1"
	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	rpcservices "github.com/pip-services3-go/pip-services3-rpc-go/services"
)

type FacadeServiceV1 struct {
	*rpcservices.RestService
	sessionsOperations *operations1.SessionsOperationsV1
	beaconsOperations  *operations1.BeaconsOperationsV1
}

func NewFacadeServiceV1() *FacadeServiceV1 {
	c := &FacadeServiceV1{
		sessionsOperations: operations1.NewSessionsOperationsV1(),
		beaconsOperations:  operations1.NewBeaconsOperationsV1(),
	}
	c.RestService = rpcservices.InheritRestService(c)
	c.BaseRoute = "api/v1"
	return c
}

func (c *FacadeServiceV1) Configure(config *cconf.ConfigParams) {
	c.RestService.Configure(config)

	c.sessionsOperations.Configure(config)
	c.beaconsOperations.Configure(config)
}

func (c *FacadeServiceV1) SetReferences(references cref.IReferences) {
	c.RestService.SetReferences(references)

	c.sessionsOperations.SetReferences(references)
	c.beaconsOperations.SetReferences(references)
}

func (c *FacadeServiceV1) Register() {
	auth := NewAuthorizerV1()

	// Restore session middleware
	c.RegisterInterceptor("",
		func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
			c.sessionsOperations.LoadSession(res, req, next)
		})

	c.registerContentManagementRoutes(auth)
	c.registerUsersRoutes(auth)
}

func (c *FacadeServiceV1) registerContentManagementRoutes(auth *AuthorizerV1) {
	// Beacons routes
	c.RegisterRouteWithAuth("get", "/beacons", nil, auth.Signed(),
		func(res http.ResponseWriter, req *http.Request) { c.beaconsOperations.GetBeacons(res, req) })
	c.RegisterRouteWithAuth("get", "/beacons/{id}", nil, auth.Owner("user_id"),
		func(res http.ResponseWriter, req *http.Request) { c.beaconsOperations.GetBeaconById(res, req) })
	c.RegisterRouteWithAuth("get", "/beacons/udi/{udi}", nil, auth.Owner(""),
		func(res http.ResponseWriter, req *http.Request) { c.beaconsOperations.GetBeaconByUdi(res, req) })
	c.RegisterRouteWithAuth("post", "/beacons", nil, auth.Signed(),
		func(res http.ResponseWriter, req *http.Request) { c.beaconsOperations.CreateBeacon(res, req) })
	c.RegisterRouteWithAuth("put", "/beacons", nil, auth.Signed(),
		func(res http.ResponseWriter, req *http.Request) { c.beaconsOperations.UpdateBeacon(res, req) })
	c.RegisterRouteWithAuth("delete", "/beacons/{id}", nil, auth.Signed(),
		func(res http.ResponseWriter, req *http.Request) { c.beaconsOperations.DeleteBeaconById(res, req) })
	c.RegisterRouteWithAuth("post", "/beacons/position", nil, auth.Signed(),
		func(res http.ResponseWriter, req *http.Request) { c.beaconsOperations.CalculatePosition(res, req) })
}

func (c *FacadeServiceV1) registerUsersRoutes(auth *AuthorizerV1) {
	// Session Routes
	c.RegisterRouteWithAuth("post", "/users/signup", nil, auth.Anybody(),
		func(res http.ResponseWriter, req *http.Request) { c.sessionsOperations.Signup(res, req) })
	c.RegisterRouteWithAuth("post", "/users/signin", nil, auth.Anybody(),
		func(res http.ResponseWriter, req *http.Request) { c.sessionsOperations.Signin(res, req) })
	c.RegisterRouteWithAuth("post", "/users/signout", nil, auth.Anybody(),
		func(res http.ResponseWriter, req *http.Request) { c.sessionsOperations.Signout(res, req) })
}
```

