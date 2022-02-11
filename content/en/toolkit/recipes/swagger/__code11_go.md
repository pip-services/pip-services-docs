
```go
package main

import (
	"net/http"
	"os"

	ccmd "github.com/pip-services3-go/pip-services3-commons-go/commands"
	cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
	cref "github.com/pip-services3-go/pip-services3-commons-go/refer"
	crefer "github.com/pip-services3-go/pip-services3-commons-go/refer"
	crun "github.com/pip-services3-go/pip-services3-commons-go/run"
	cvalid "github.com/pip-services3-go/pip-services3-commons-go/validate"
	cbuild "github.com/pip-services3-go/pip-services3-components-go/build"
	cproc "github.com/pip-services3-go/pip-services3-container-go/container"
	rbuild "github.com/pip-services3-go/pip-services3-rpc-go/build"
	cservices "github.com/pip-services3-go/pip-services3-rpc-go/services"
	rpc "github.com/pip-services3-go/pip-services3-rpc-go/services"
	sbuild "github.com/pip-services3-go/pip-services3-swagger-go/build"
)

// Runner
func main() {
	proc := NewHelloFriendProcess()
	proc.Run(os.Args)
}

// REST service (Swagger UI from YAML file)

type HelloFriendRestService struct {
	*rpc.RestService

	_swaggerContent string
	_swaggerPath    string
	_controller     *HelloFriendController
}

func NewHelloFriendRestService() *HelloFriendRestService {
	c := &HelloFriendRestService{}
	c.RestService = rpc.InheritRestService(c)
	c.BaseRoute = "/hello_friend"

	controllerDescriptor := cref.NewDescriptor("hello-friend", "controller", "*", "*", "1.0")
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

// Command set

type FriendsCommandSet struct {
	ccmd.CommandSet
	controller HelloFriendController
}

func NewFriendsCommandSet(controller *HelloFriendController) *FriendsCommandSet {
	c := &FriendsCommandSet{
		CommandSet: *ccmd.NewCommandSet(),
		controller: *controller,
	}

	c.AddCommand(c.makeGreetingCommand())

	return c
}

func (c *FriendsCommandSet) makeGreetingCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"greeting",
		cvalid.NewObjectSchema().
			WithRequiredProperty("name", cvalid.NewFilterParamsSchema()),
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {
			name := args.GetAsString("name")
			return c.controller.Greeting(name), nil
		})
}

// Commandable REST service (Swagger UI automatically generated from command set)

type FriendCommandableHttpService1 struct {
	cservices.CommandableHttpService
	_swaggerPath string
}

func NewFriendCommandableHttpService1() *FriendCommandableHttpService1 {
	c := &FriendCommandableHttpService1{}
	c.CommandableHttpService = *cservices.InheritCommandableHttpService(c, "commandable_hello_friend1")
	c.DependencyResolver.Put("controller", cref.NewDescriptor("hello-friend", "controller", "*", "*", "*"))
	return c
}

func (c *FriendCommandableHttpService1) Configure(config *cconf.ConfigParams) {
	c.RestService.Configure(config)

	// swagger
	c._swaggerPath = *config.GetAsNullableString("swagger.path")
}

func (c *FriendCommandableHttpService1) Register() {
	c.CommandableHttpService.Register()

	// swagger
	if c._swaggerPath != "" {
		c.RegisterOpenApiSpecFromFile(c._swaggerPath)
	}
}

// Commandable REST service (Swagger UI generated from YAML file)

type FriendCommandableHttpService2 struct {
	cservices.CommandableHttpService
	_swaggerPath string
}

func NewFriendCommandableHttpService2() *FriendCommandableHttpService2 {
	c := &FriendCommandableHttpService2{}
	c.CommandableHttpService = *cservices.InheritCommandableHttpService(c, "commandable_hello_friend2")
	c.DependencyResolver.Put("controller", cref.NewDescriptor("hello-friend", "controller", "*", "*", "*"))
	return c
}

func (c *FriendCommandableHttpService2) Configure(config *cconf.ConfigParams) {
	c.RestService.Configure(config)

	// swagger
	c._swaggerPath = *config.GetAsNullableString("swagger.path")
}

func (c *FriendCommandableHttpService2) Register() {
	c.CommandableHttpService.Register()

	// swagger
	if c._swaggerPath != "" {
		c.RegisterOpenApiSpecFromFile(c._swaggerPath)
	}
}

// Controller

type HelloFriendController struct {
	commandSet  *FriendsCommandSet
	defaultName string
}

func NewHelloFriendController() *HelloFriendController {
	c := &HelloFriendController{defaultName: "Pip User"}
	return c
}

func (c *HelloFriendController) Configure(config *cconf.ConfigParams) {
	c.defaultName = config.GetAsStringWithDefault("default_name", c.defaultName)
}

func (c *HelloFriendController) GetCommandSet() *ccmd.CommandSet {
	if c.commandSet == nil {
		c.commandSet = NewFriendsCommandSet(c)
	}
	return &c.commandSet.CommandSet
}

func (c *HelloFriendController) Greeting(name string) string {
	if name != "" {
		return "Hello " + name + " !"
	} else {
		return "Hello " + c.defaultName + " !"
	}
}

// Factory

type HelloFriendServiceFactory struct {
	cbuild.Factory
}

func NewHelloFriendServiceFactory() *HelloFriendServiceFactory {
	c := &HelloFriendServiceFactory{
		Factory: *cbuild.NewFactory(),
	}

	HttpServiceDescriptor := cref.NewDescriptor("hello-friend", "service", "http", "*", "1.0")                          // View 1
	CommandableHttpServiceDescriptor1 := cref.NewDescriptor("hello-friend", "service", "commandable-http1", "*", "1.0") // View 2
	CommandableHttpServiceDescriptor2 := cref.NewDescriptor("hello-friend", "service", "commandable-http2", "*", "1.0") // View 2
	ControllerDescriptor := cref.NewDescriptor("hello-friend", "controller", "default", "*", "1.0")                     // Controller

	c.RegisterType(HttpServiceDescriptor, NewHelloFriendRestService)                    // View 1
	c.RegisterType(CommandableHttpServiceDescriptor1, NewFriendCommandableHttpService1) // View 2
	c.RegisterType(CommandableHttpServiceDescriptor2, NewFriendCommandableHttpService2) // View 3
	c.RegisterType(ControllerDescriptor, NewHelloFriendController)                      // Controller

	return c
}

// Container

type HelloFriendProcess struct {
	cproc.ProcessContainer
}

func NewHelloFriendProcess() *HelloFriendProcess {
	c := &HelloFriendProcess{
		ProcessContainer: *cproc.NewProcessContainer("hello-friend", "HelloFriend microservice"),
	}

	c.SetConfigPath("./config.yml")

	c.AddFactory(NewHelloFriendServiceFactory())
	c.AddFactory(rbuild.NewDefaultRpcFactory())
	c.AddFactory(sbuild.NewDefaultSwaggerFactory())

	return c
}

```
