
```go
import (
	"context"
	"os"

	cconv "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
	cbuild "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"
	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cexec "github.com/pip-services4/pip-services4-go/pip-services4-components-go/exec"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	cproc "github.com/pip-services4/pip-services4-go/pip-services4-container-go/container"
	cvalid "github.com/pip-services4/pip-services4-go/pip-services4-data-go/validate"
	hbuild "github.com/pip-services4/pip-services4-go/pip-services4-http-go/build"
	ctrl "github.com/pip-services4/pip-services4-go/pip-services4-http-go/controllers"
	ccomand "github.com/pip-services4/pip-services4-go/pip-services4-rpc-go/commands"
	sbuild "github.com/pip-services4/pip-services4-go/pip-services4-swagger-go/build"
)

func main() {
	proc := NewHelloFriendProcess()
	proc.Run(context.Background(), os.Args)
}

type HelloFriendProcess struct {
	*cproc.ProcessContainer
}

func NewHelloFriendProcess() *HelloFriendProcess {
	c := &HelloFriendProcess{
		ProcessContainer: cproc.NewProcessContainer("Hellow", "Hello friend microservice"),
	}

	c.SetConfigPath("./config.yaml")

	c.AddFactory(NewHelloFriendServiceFactory())
	c.AddFactory(hbuild.NewDefaultHttpFactory())
	c.AddFactory(sbuild.NewDefaultSwaggerFactory())
	return c
}

type HelloFriendServiceFactory struct {
	*cbuild.Factory
}

func NewHelloFriendServiceFactory() *HelloFriendServiceFactory {
	c := HelloFriendServiceFactory{}
	c.Factory = cbuild.NewFactory()

	commandableHttpControllerDescriptor := cref.NewDescriptor("hello-friend", "controller", "commandable-http", "*", "1.0")
	serviceDescriptor := cref.NewDescriptor("hello-friend", "service", "default", "*", "1.0")

	c.RegisterType(commandableHttpControllerDescriptor, NewFriendCommandableHttpController)
	c.RegisterType(serviceDescriptor, NewHelloFriendService)

	return &c
}

type HelloFriendService struct {
	commandSet  *FriendsCommandSet
	defaultName string
}

func NewHelloFriendService() *HelloFriendService {
	c := HelloFriendService{}
	c.defaultName = "World"
	return &c
}

func (c *HelloFriendService) Configure(ctx context.Context, config *cconf.ConfigParams) {
	// You can read configuration parameters here...
}

func (c *HelloFriendService) GetCommandSet() *ccomand.CommandSet {
	if c.commandSet == nil {
		c.commandSet = NewFriendsCommandSet(*c)
	}
	return c.commandSet.CommandSet
}

func (c *HelloFriendService) Greeting(name string) string {
	if name != "" {
		return "Hello, " + name + " !"
	}
	return "Hello, " + c.defaultName + " !"
}

type FriendCommandableHttpController struct {
	*ctrl.CommandableHttpController
}

func NewFriendCommandableHttpController() *FriendCommandableHttpController {
	c := &FriendCommandableHttpController{}
	c.CommandableHttpController = ctrl.InheritCommandableHttpController(c, "commandable_hello_friend")
	c.DependencyResolver.Put(context.Background(), "service", cref.NewDescriptor("hello-friend", "service", "*", "*", "*"))
	return c
}

type FriendsCommandSet struct {
	*ccomand.CommandSet
	service HelloFriendService
}

func NewFriendsCommandSet(service HelloFriendService) *FriendsCommandSet {
	c := FriendsCommandSet{}
	c.service = service
	c.CommandSet = ccomand.NewCommandSet()
	c.AddCommand(c.makeGreeting())
	return &c
}

func (c *FriendsCommandSet) makeGreeting() ccomand.ICommand {
	return ccomand.NewCommand(
		"greeting",
		cvalid.NewObjectSchema().
			WithRequiredProperty("name", cconv.String),
		func(ctx context.Context, args *cexec.Parameters) (result interface{}, err error) {
			name := args.GetAsString("name")
			return c.service.Greeting(name), nil
		},
	)
}
```
