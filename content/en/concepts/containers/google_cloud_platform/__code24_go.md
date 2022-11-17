
```go
import (
	"context"
	"net/http"

	ccomand "github.com/pip-services3-gox/pip-services3-commons-gox/commands"
	cconv "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	crun "github.com/pip-services3-gox/pip-services3-commons-gox/run"
	cvalid "github.com/pip-services3-gox/pip-services3-commons-gox/validate"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
	gcpcont "github.com/pip-services3-gox/pip-services3-gcp-gox/containers"
	gcpserv "github.com/pip-services3-gox/pip-services3-gcp-gox/services"
	gcputil "github.com/pip-services3-gox/pip-services3-gcp-gox/utils"
	rpcserv "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
)

type MyCommandSet struct {
	*ccomand.CommandSet
	controller *MyController
}

func NewMyCommandSet(controller *MyController) *MyCommandSet {
	c := &MyCommandSet{}
	c.controller = controller
	c.AddCommand(c.MakeGreeting())
	return c
}

func (c *MyCommandSet) MakeGreeting() *ccomand.Command {
	return ccomand.NewCommand(
		"greetings",
		cvalid.NewObjectSchema().WithRequiredProperty("name", cconv.String),
		func(ctx context.Context, correlationId string, args *crun.Parameters) (any, error) {
			name := args.GetAsString("name")
			return c.controller.Greetings(ctx, name)
		},
	)
}

type MyCommandableCloudService struct {
	*gcpserv.CommandableCloudFunctionService
}

func NewMyCommandableCloudService() *MyCommandableCloudService {
	c := &MyCommandableCloudService{}
	c.CommandableCloudFunctionService = gcpserv.NewCommandableCloudFunctionService("mygroup")
	// The "controller" dependency is required by all Commandable services
	c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("mygroup", "controller", "default", "controller", "1.0"))
	return c
}

type MyController struct {
	commandSet *MyCommandSet
}

func NewMyController() *MyController {
	return &MyController{}
}

func (c *MyController) GetCommandSet() *MyCommandSet {
	if c.commandSet == nil {
		c.commandSet = NewMyCommandSet(c)
	}

	return c.commandSet
}

func (c *MyController) SetReferences(ctx context.Context, references cref.IReferences) {

}

func (c *MyController) Greetings(ctx context.Context, name string) (string, error) {
	return "Hello, " + name + " !", nil
}

type MyFactory struct {
	*cbuild.Factory
}

func NewMyFactory() *MyFactory {
	c := &MyFactory{}
	c.Factory = cbuild.NewFactory()
	c.RegisterType(cref.NewDescriptor("mygroup", "controller", "default", "controller", "1.0"), NewMyController)
	c.RegisterType(cref.NewDescriptor("mygroup", "service", "commandable-gcp-function", "function", "1.0"), NewMyCommandableCloudService)
	return c
}

type MyCloudFunction struct {
	*gcpcont.CloudFunction
	controller *MyController
	service    *gcpserv.CloudFunctionService
}

func NewMyCloudFunction() *MyCloudFunction {
	c := &MyCloudFunction{}
	c.CloudFunction = gcpcont.InheritCloudFunctionWithParams(c, "mygroup", "Mygroup service")
	c.SetConfigPath("./config.yaml")
	c.AddFactory(NewMyFactory())
	// Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
	// c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("mygroup", "controller", "default", "controller", "*"))
	// c.DependencyResolver.Put(context.Background(), "service", cref.NewDescriptor("mygroup", "service", "commandable-gcp-function", "function", "*"))
	return c
}

func (c *MyCloudFunction) SetReferences(ctx context.Context, references cref.IReferences) {
    c.CloudFunction.SetReferences(ctx, references)
	c.Counters.SetReferences(ctx, references)

	// Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
	// ctrl, err := c.DependencyResolver.GetOneRequired("controller")
	// Comment out the next line of code when using the dependency resolver, uncomment for configuration file
	ctrl, err := references.GetOneRequired(cref.NewDescriptor("mygroup", "controller", "default", "controller", "*"))
	if err != nil {
		panic("Controller is not found")
	}

	// Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
	// serv, err := c.DependencyResolver.GetOneRequired("service")
	// Comment out the next line of code when using the dependency resolver, uncomment for configuration file
	serv, err := references.GetOneRequired(cref.NewDescriptor("mygroup", "service", "commandable-gcp-function", "function", "*"))
	if err != nil {
		panic("Service is not found")
	}

	c.controller = ctrl.(*MyController)
	c.service = serv.(*gcpserv.CloudFunctionService)
}

```