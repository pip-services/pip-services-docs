
```go
package main

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

// Runner
func main() {
	proc := NewHelloFriendProcess()
	proc.Run(context.Background(), os.Environ())
}

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

// Command set
type FriendsCommandSet struct {
	*ccmd.CommandSet
	controller *HelloFriendController
}

func NewFriendsCommandSet(controller *HelloFriendController) *FriendsCommandSet {
	c := &FriendsCommandSet{
		CommandSet: ccmd.NewCommandSet(),
		controller: controller,
	}

	c.AddCommand(c.makeGreetingCommand())

	return c
}

func (c *FriendsCommandSet) makeGreetingCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"greeting",
		cvalid.NewObjectSchema().
			WithRequiredProperty("name", cvalid.NewFilterParamsSchema()),
		func(ctx context.Context, correllationId string, args *crun.Parameters) (result interface{}, err error) {
			name := args.GetAsString("name")
			return c.controller.Greeting(name), nil
		})
}

// Commandable REST service (Swagger UI automatically generated from command set)

type FriendCommandableHttpService1 struct {
	*rpcservices.CommandableHttpService
	_swaggerPath string
}

func NewFriendCommandableHttpService1() *FriendCommandableHttpService1 {
	c := &FriendCommandableHttpService1{}
	c.CommandableHttpService = rpcservices.InheritCommandableHttpService(c, "commandable_hello_friend1")
	c.DependencyResolver.Put(context.Background(), "controller", crefer.NewDescriptor("hello-friend", "controller", "*", "*", "*"))
	return c
}

func (c *FriendCommandableHttpService1) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.RestService.Configure(ctx, config)

	// swagger
	c._swaggerPath, _ = config.GetAsNullableString("swagger.path")
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
	rpcservices.CommandableHttpService
	_swaggerPath string
}

func NewFriendCommandableHttpService2() *FriendCommandableHttpService2 {
	c := &FriendCommandableHttpService2{}
	c.CommandableHttpService = *rpcservices.InheritCommandableHttpService(c, "commandable_hello_friend2")
	c.DependencyResolver.Put(context.Background(), "controller", crefer.NewDescriptor("hello-friend", "controller", "*", "*", "*"))
	return c
}

func (c *FriendCommandableHttpService2) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.RestService.Configure(ctx, config)

	// swagger
	c._swaggerPath, _ = config.GetAsNullableString("swagger.path")
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
	return c.commandSet.CommandSet
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
	*cbuild.Factory
}

func NewHelloFriendServiceFactory() *HelloFriendServiceFactory {
	c := &HelloFriendServiceFactory{
		Factory: cbuild.NewFactory(),
	}

	HttpServiceDescriptor := crefer.NewDescriptor("hello-friend", "service", "http", "*", "1.0")                          // View 1
	CommandableHttpServiceDescriptor1 := crefer.NewDescriptor("hello-friend", "service", "commandable-http1", "*", "1.0") // View 2
	CommandableHttpServiceDescriptor2 := crefer.NewDescriptor("hello-friend", "service", "commandable-http2", "*", "1.0") // View 2
	ControllerDescriptor := crefer.NewDescriptor("hello-friend", "controller", "default", "*", "1.0")                     // Controller

	c.RegisterType(HttpServiceDescriptor, NewHelloFriendRestService)                    // View 1
	c.RegisterType(CommandableHttpServiceDescriptor1, NewFriendCommandableHttpService1) // View 2
	c.RegisterType(CommandableHttpServiceDescriptor2, NewFriendCommandableHttpService2) // View 3
	c.RegisterType(ControllerDescriptor, NewHelloFriendController)                      // Controller

	return c
}

// Container

type HelloFriendProcess struct {
	*cproc.ProcessContainer
}

func NewHelloFriendProcess() *HelloFriendProcess {
	c := &HelloFriendProcess{
		ProcessContainer: cproc.NewProcessContainer("hello-friend", "HelloFriend microservice"),
	}

	c.SetConfigPath("./config.yml")

	c.AddFactory(NewHelloFriendServiceFactory())
	c.AddFactory(rbuild.NewDefaultRpcFactory())
	c.AddFactory(cswagger.NewDefaultSwaggerFactory())

	return c
}

```
