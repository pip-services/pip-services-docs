
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

// Command set
type FriendsCommandSet struct {
	*ccmd.CommandSet
	service *HelloFriendService
}

func NewFriendsCommandSet(service *HelloFriendService) *FriendsCommandSet {
	c := &FriendsCommandSet{
		CommandSet: ccmd.NewCommandSet(),
		service:    service,
	}

	c.AddCommand(c.makeGreetingCommand())

	return c
}

func (c *FriendsCommandSet) makeGreetingCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"greeting",
		cvalid.NewObjectSchema().
			WithRequiredProperty("name", cvalid.NewFilterParamsSchema()),
		func(ctx context.Context, args *cexec.Parameters) (result interface{}, err error) {
			name := args.GetAsString("name")
			return c.service.Greeting(name), nil
		})
}

// Commandable REST controller (Swagger UI automatically generated from command set)

type FriendCommandableHttpController1 struct {
	*cntrl.CommandableHttpController
	_swaggerPath string
}

func NewFriendCommandableHttpController1() *FriendCommandableHttpController1 {
	c := &FriendCommandableHttpController1{}
	c.CommandableHttpController = cntrl.InheritCommandableHttpController(c, "commandable_hello_friend1")
	c.DependencyResolver.Put(context.Background(), "service", crefer.NewDescriptor("hello-friend", "service", "*", "*", "*"))
	return c
}

func (c *FriendCommandableHttpController1) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.RestController.Configure(ctx, config)

	// swagger
	c._swaggerPath, _ = config.GetAsNullableString("swagger.path")
}

func (c *FriendCommandableHttpController1) Register() {
	c.CommandableHttpController.Register()

	// swagger
	if c._swaggerPath != "" {
		c.RegisterOpenApiSpecFromFile(c._swaggerPath)
	}
}

// Commandable REST controller (Swagger UI generated from YAML file)

type FriendCommandableHttpController2 struct {
	cntrl.CommandableHttpController
	_swaggerPath string
}

func NewFriendCommandableHttpController2() *FriendCommandableHttpController2 {
	c := &FriendCommandableHttpController2{}
	c.CommandableHttpController = *cntrl.InheritCommandableHttpController(c, "commandable_hello_friend2")
	c.DependencyResolver.Put(context.Background(), "service", crefer.NewDescriptor("hello-friend", "service", "*", "*", "*"))
	return c
}

func (c *FriendCommandableHttpController2) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.RestController.Configure(ctx, config)

	// swagger
	c._swaggerPath, _ = config.GetAsNullableString("swagger.path")
}

func (c *FriendCommandableHttpController2) Register() {
	c.CommandableHttpController.Register()

	// swagger
	if c._swaggerPath != "" {
		c.RegisterOpenApiSpecFromFile(c._swaggerPath)
	}
}

// Service

type HelloFriendService struct {
	commandSet  *FriendsCommandSet
	defaultName string
}

func NewHelloFriendService() *HelloFriendService {
	c := &HelloFriendService{defaultName: "Pip User"}
	return c
}

func (c *HelloFriendService) Configure(config *cconf.ConfigParams) {
	c.defaultName = config.GetAsStringWithDefault("default_name", c.defaultName)
}

func (c *HelloFriendService) GetCommandSet() *ccmd.CommandSet {
	if c.commandSet == nil {
		c.commandSet = NewFriendsCommandSet(c)
	}
	return c.commandSet.CommandSet
}

func (c *HelloFriendService) Greeting(name string) string {
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

	HttpControllerDescriptor := crefer.NewDescriptor("hello-friend", "controller", "http", "*", "1.0")                          // Controller 1
	CommandableHttpControllerDescriptor1 := crefer.NewDescriptor("hello-friend", "controller", "commandable-http1", "*", "1.0") // Controller 2
	CommandableHttpControllerDescriptor2 := crefer.NewDescriptor("hello-friend", "controller", "commandable-http2", "*", "1.0") // Controller 2
	ServiceDescriptor := crefer.NewDescriptor("hello-friend", "service", "default", "*", "1.0")                                 // service

	c.RegisterType(HttpControllerDescriptor, NewHelloFriendRestController)                    // Controller 1
	c.RegisterType(CommandableHttpControllerDescriptor1, NewFriendCommandableHttpController1) // Controller 2
	c.RegisterType(CommandableHttpControllerDescriptor2, NewFriendCommandableHttpController2) // Controller 3
	c.RegisterType(ServiceDescriptor, NewHelloFriendService)                                  // service

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
	c.AddFactory(hbuild.NewDefaultHttpFactory())
	c.AddFactory(cswagger.NewDefaultSwaggerFactory())

	return c
}

// Runner
func main() {
	proc := NewHelloFriendProcess()
	proc.Run(context.Background(), os.Environ())
}

```
