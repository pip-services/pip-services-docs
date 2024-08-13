
**/services/version1/FacadeControllerV1.go**

```go
package controllers1

import (
	"context"
	"net/http"

	operations1 "github.com/pip-services-samples/pip-samples-facade-go/operations/version1"
	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	httpcontr "github.com/pip-services4/pip-services4-go/pip-services4-http-go/controllers"
)

type FacadeServiceV1 struct {
	*httpcontr.RestController
	sessionsOperations *operations1.SessionsOperationsV1
	beaconsOperations  *operations1.BeaconsOperationsV1
}

func NewFacadeServiceV1() *FacadeServiceV1 {
	c := &FacadeServiceV1{
		sessionsOperations: operations1.NewSessionsOperationsV1(context.Background()),
		beaconsOperations:  operations1.NewBeaconsOperationsV1(),
	}
	c.RestController = httpcontr.InheritRestController(c)
	c.BaseRoute = "api/v1"
	return c
}

func (c *FacadeServiceV1) Configure(config *cconf.ConfigParams) {
	c.RestController.Configure(context.Background(), config)

	c.sessionsOperations.Configure(context.Background(), config)
	c.beaconsOperations.Configure(context.Background(), config)
}

func (c *FacadeServiceV1) SetReferences(references cref.IReferences) {
	c.RestController.SetReferences(context.Background(), references)

	c.sessionsOperations.SetReferences(context.Background(), references)
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
