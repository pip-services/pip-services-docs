
```go
import (
	"context"
	"net/http"
	"os"

	ccmd "github.com/pip-services3-gox/pip-services3-commons-gox/commands"
	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	crefer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	crun "github.com/pip-services3-gox/pip-services3-commons-gox/run"
	cvalid "github.com/pip-services3-gox/pip-services3-commons-gox/validate"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
	cproc "github.com/pip-services3-gox/pip-services3-container-gox/container"
	rbuild "github.com/pip-services3-gox/pip-services3-rpc-gox/build"
	rpcservices "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
	cswagger "github.com/pip-services3-gox/pip-services3-swagger-gox/build"
)

// REST service (Swagger UI from YAML file)

type HelloFriendRestService struct {
	*rpcservices.RestService

	_swaggerContent string
	_swaggerPath    string
	_controller     *HelloFriendController
}

func NewHelloFriendRestService() *HelloFriendRestService {
	c := &HelloFriendRestService{}
	c.RestService = rpcservices.InheritRestService(c)
	c.BaseRoute = "/hello_friend"

	controllerDescriptor := crefer.NewDescriptor("hello-friend", "controller", "*", "*", "1.0")
	c.DependencyResolver.Put(context.Background(), "controller", controllerDescriptor)
	return c
}

func (c *HelloFriendRestService) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.RestService.Configure(context.Background(), config)

	// swagger
	c._swaggerContent, _ = config.GetAsNullableString("swagger.content")
	c._swaggerPath, _ = config.GetAsNullableString("swagger.path")
}

func (c *HelloFriendRestService) SetReferences(ctx context.Context, references crefer.IReferences) {
	c.RestService.SetReferences(ctx, references)
	depRes, depErr := c.DependencyResolver.GetOneRequired("controller")
	if depErr == nil && depRes != nil {
		c._controller = depRes.(*HelloFriendController)
	}
}

func (c *HelloFriendRestService) greeting(res http.ResponseWriter, req *http.Request) {
	// vars := mux.Vars(req)

	name := req.URL.Query().Get("message")
	// message := vars["name"]
	result := c._controller.Greeting(name)

	c.SendResult(res, req, result, nil)
}

func (c *HelloFriendRestService) Register() {
	c.RegisterRoute("GET", "/greeting", nil, c.greeting)

	// swagger
	if c._swaggerContent != "" {
		c.RegisterOpenApiSpec(c._swaggerContent)
	}

	if c._swaggerPath != "" {
		c.RegisterOpenApiSpecFromFile(c._swaggerPath)
	}
}

```
