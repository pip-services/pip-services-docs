
**/HelloWorldRestService.go**
```go
package quickstart

import (
	"context"
	"net/http"

	crefer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	rpc "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
)

type HelloWorldRestService struct {
	*rpc.RestService
	controller *HelloWorldController
}

func NewHelloWorldRestService() *HelloWorldRestService {
	c := &HelloWorldRestService{}
	c.RestService = rpc.InheritRestService(c)
	c.BaseRoute = "/hello_world"
	c.DependencyResolver.Put(context.Background(), "controller", crefer.NewDescriptor("hello-world", "controller", "*", "*", "1.0"))
	return c
}

func (c *HelloWorldRestService) SetReferences(ctx context.Context, references crefer.IReferences) {
	c.RestService.SetReferences(ctx, references)
	depRes, depErr := c.DependencyResolver.GetOneRequired("controller")
	if depErr == nil && depRes != nil {
		c.controller = depRes.(*HelloWorldController)
	}
}

func (c *HelloWorldRestService) greeting(res http.ResponseWriter, req *http.Request) {
	name := req.URL.Query().Get("name")
	result, err := c.controller.Greeting(req.Context(), name)
	c.SendResult(res, req, result, err)
}

func (c *HelloWorldRestService) Register() {
	c.RegisterRoute("get", "/greeting", nil, c.greeting)
}

```
