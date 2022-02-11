
```go
import (
	"net/http"

	"github.com/gorilla/mux"
	cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
	crefer "github.com/pip-services3-go/pip-services3-commons-go/refer"
	refer "github.com/pip-services3-go/pip-services3-commons-go/refer"
	rpc "github.com/pip-services3-go/pip-services3-rpc-go/services"
)

type HelloFriendRestService struct {
	*rpc.RestService

	_swaggerContent string
	_swaggerPath    string
	_controller     HelloFriendController
}

func NewHelloFriendRestService() *HelloFriendRestService {
	c := &HelloFriendRestService{}
	c.RestService = rpc.InheritRestService(c)
	c.BaseRoute = "/hello_friend"

	controllerDescriptor := refer.NewDescriptor("hello-friend", "controller", "*", "*", "1.0")
	c.DependencyResolver.Put("controller", controllerDescriptor)
	return c
}

func (c *HelloFriendRestService) Configure(config *cconf.ConfigParams) {
	c.RestService.Configure(config)

	// swagger
	c._swaggerContent = *config.GetAsNullableString("swagger.content")
	c._swaggerPath = *config.GetAsNullableString("swagger.path")
}

func (c *HelloFriendRestService) SetReferences(references crefer.IReferences) {
	c.RestService.SetReferences(references)
	depRes, depErr := c.DependencyResolver.GetOneRequired("controller")
	if depErr == nil && depRes != nil {
		c._controller = depRes.(HelloFriendController)
	}
}

func (c *HelloFriendRestService) greeting(res http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)

	name := req.URL.Query().Get("message")
	message := vars["name"]
	result := c._controller.Greeting(message)

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
