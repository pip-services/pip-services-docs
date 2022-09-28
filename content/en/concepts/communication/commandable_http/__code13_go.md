

```go
package main

import (
	"os"

	ccomand "github.com/pip-services3-gox/pip-services3-commons-gox/commands"
	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cconv "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	crun "github.com/pip-services3-gox/pip-services3-commons-gox/run"
	cvalid "github.com/pip-services3-gox/pip-services3-commons-gox/validate"
	cbuild "github.com/pip-services3-go/pip-services3-components-go/build"
	cproc "github.com/pip-services3-go/pip-services3-container-go/container"
	rbuild "github.com/pip-services3-go/pip-services3-rpc-go/build"
	srvc "github.com/pip-services3-go/pip-services3-rpc-go/services"
	sbuild "github.com/pip-services3-go/pip-services3-swagger-go/build"
)

// Runner
func main() {
	proc := NewHelloFriendProcess()
	proc.Run(os.Args)
}

// Command set
type FriendsCommandSet struct {
	ccomand.CommandSet
	controller HelloFriendController
}

func NewFriendsCommandSet(controller HelloFriendController) *FriendsCommandSet {
	c := FriendsCommandSet{}
	c.controller = controller
	c.CommandSet = *ccomand.NewCommandSet()
	c.AddCommand(c.makeGreeting())
	return &c
}

func (c *FriendsCommandSet) makeGreeting() ccomand.ICommand {
	return ccomand.NewCommand(
		"greeting",
		cvalid.NewObjectSchema().
			WithRequiredProperty("name", cconv.String),
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {
			name := args.GetAsString("name")
			return c.controller.Greeting(name), nil
		},
	)
}

// Service
type FriendCommandableHttpService struct {
	*srvc.CommandableHttpService
}

func NewFriendCommandableHttpService() *FriendCommandableHttpService {
	c := &FriendCommandableHttpService{}
	c.CommandableHttpService = srvc.InheritCommandableHttpService(c, "commandable_hello_friend")
	c.DependencyResolver.Put("controller", cref.NewDescriptor("hello-friend", "controller", "*", "*", "*"))
	return c
}

// Controller
type HelloFriendController struct {
	commandSet  *FriendsCommandSet
	defaultName string
}

func NewHelloFriendController() *HelloFriendController {
	c := HelloFriendController{}
	c.defaultName = "World"
	return &c
}

func (c *HelloFriendController) Configure(config *cconf.ConfigParams) {
	// You can read configuration parameters here...
}

func (c *HelloFriendController) GetCommandSet() *ccomand.CommandSet {
	if c.commandSet == nil {
		c.commandSet = NewFriendsCommandSet(*c)
	}
	return &c.commandSet.CommandSet
}

func (c *HelloFriendController) Greeting(name string) string {
	if name != "" {
		return "Hello, " + name + " !"
	}
	return "Hello, " + c.defaultName + " !"
}

// Factory
type HelloFriendServiceFactory struct {
	cbuild.Factory
}

func NewHelloFriendServiceFactory() *HelloFriendServiceFactory {
	c := HelloFriendServiceFactory{}
	c.Factory = *cbuild.NewFactory()

	commandableHttpServiceDescriptor := cref.NewDescriptor("hello-friend", "service", "commandable-http", "*", "1.0") // View
	controllerDescriptor := cref.NewDescriptor("hello-friend", "controller", "default", "*", "1.0")                   // Controller

	c.RegisterType(commandableHttpServiceDescriptor, NewFriendCommandableHttpService)
	c.RegisterType(controllerDescriptor, NewHelloFriendController)

	return &c
}

// Container
type HelloFriendProcess struct {
	cproc.ProcessContainer
}

func NewHelloFriendProcess() *HelloFriendProcess {
	c := &HelloFriendProcess{
		ProcessContainer: *cproc.NewProcessContainer("Hellow", "Hello friend microservice"),
	}

	c.SetConfigPath("./config.yaml")

	c.AddFactory(NewHelloFriendServiceFactory())
	c.AddFactory(rbuild.NewDefaultRpcFactory())
	c.AddFactory(sbuild.NewDefaultSwaggerFactory())
	return c
}

```
