
**/HelloWorldRestController.go**
```go
package quickstart

import (
	"context"
	"net/http"

	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	rpc "github.com/pip-services4/pip-services4-go/pip-services4-http-go/controllers"
)

type HelloWorldRestController struct {
	*rpc.RestController
	service *HelloWorldService
}

func NewHelloWorldRestController() *HelloWorldRestController {
	c := &HelloWorldRestController{}
	c.RestController = rpc.InheritRestController(c)
	c.BaseRoute = "/hello_world"
	c.DependencyResolver.Put(context.Background(), "service", cref.NewDescriptor("hello-world", "service", "*", "*", "1.0"))
	return c
}

func (c *HelloWorldRestController) SetReferences(ctx context.Context, references cref.IReferences) {
	c.RestController.SetReferences(ctx, references)
	depRes, depErr := c.DependencyResolver.GetOneRequired("service")
	if depErr == nil && depRes != nil {
		c.service = depRes.(*HelloWorldService)
	}
}

func (c *HelloWorldRestController) greeting(res http.ResponseWriter, req *http.Request) {
	name := req.URL.Query().Get("name")
	result, err := c.service.Greeting(req.Context(), name)
	c.SendResult(res, req, result, err)
}

func (c *HelloWorldRestController) Register() {
	c.RegisterRoute("get", "/greeting", nil, c.greeting)
}

```
