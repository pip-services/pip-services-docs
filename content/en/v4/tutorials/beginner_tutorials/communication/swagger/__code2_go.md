
```go
import (
	"context"
	"net/http"
	"os"

	cbuild "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"
	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cexec "github.com/pip-services4/pip-services4-go/pip-services4-components-go/exec"
	crefer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	cproc "github.com/pip-services4/pip-services4-go/pip-services4-container-go/container"
	cvalid "github.com/pip-services4/pip-services4-go/pip-services4-data-go/validate"
	hbuild "github.com/pip-services4/pip-services4-go/pip-services4-http-go/build"
	cntrl "github.com/pip-services4/pip-services4-go/pip-services4-http-go/controllers"
	ccmd "github.com/pip-services4/pip-services4-go/pip-services4-rpc-go/commands"
	cswagger "github.com/pip-services4/pip-services4-go/pip-services4-swagger-go/build"
)

// REST controller (Swagger UI from YAML file)

type HelloFriendRestController struct {
	*cntrl.RestController

	_swaggerContent string
	_swaggerPath    string
	_service        *HelloFriendService
}

func NewHelloFriendRestController() *HelloFriendRestController {
	c := &HelloFriendRestController{}
	c.RestController = cntrl.InheritRestController(c)
	c.BaseRoute = "/hello_friend"

	serviceDescriptor := crefer.NewDescriptor("hello-friend", "service", "*", "*", "1.0")
	c.DependencyResolver.Put(context.Background(), "service", serviceDescriptor)
	return c
}

func (c *HelloFriendRestController) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.RestController.Configure(context.Background(), config)

	// swagger
	c._swaggerContent, _ = config.GetAsNullableString("swagger.content")
	c._swaggerPath, _ = config.GetAsNullableString("swagger.path")
}

func (c *HelloFriendRestController) SetReferences(ctx context.Context, references crefer.IReferences) {
	c.RestController.SetReferences(ctx, references)
	depRes, depErr := c.DependencyResolver.GetOneRequired("service")
	if depErr == nil && depRes != nil {
		c._service = depRes.(*HelloFriendService)
	}
}

func (c *HelloFriendRestController) greeting(res http.ResponseWriter, req *http.Request) {
	// vars := mux.Vars(req)

	name := req.URL.Query().Get("message")
	// message := vars["name"]
	result := c._service.Greeting(name)

	c.SendResult(res, req, result, nil)
}

func (c *HelloFriendRestController) Register() {
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
