
```go
import (
	"context"

	ccomand "github.com/pip-services3-gox/pip-services3-commons-gox/commands"
	cconv "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	crun "github.com/pip-services3-gox/pip-services3-commons-gox/run"
	cvalid "github.com/pip-services3-gox/pip-services3-commons-gox/validate"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
	gcpcont "github.com/pip-services3-gox/pip-services3-gcp-gox/containers"
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
	return c
}

type MyCommandableCloudFunction struct {
	*gcpcont.CommandableCloudFunction
	controller *MyController
}

func NewMyCommandableCloudFunction() *MyCommandableCloudFunction {
	c := &MyCommandableCloudFunction{}
	c.CommandableCloudFunction = gcpcont.NewCommandableCloudFunction()
	c.SetConfigPath("./config.yaml")
	// Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
	// c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("mygroup", "controller", "default", "controller", "*"))
	c.AddFactory(NewMyFactory())
	return c
}

func (c *MyCommandableCloudFunction) SetReferences(ctx context.Context, references cref.IReferences) {
	c.CommandableCloudFunction.SetReferences(ctx, references)
	// Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
	// res, err := c.DependencyResolver.GetOneRequired("controller")
	// Comment out the next line of code when using dependency resolver, uncomment for configuration file
	res, err := references.GetOneRequired(cref.NewDescriptor("mygroup", "controller", "default", "controller", "*"))
	if err != nil {
		panic("Controller is not found")
	}

	c.controller = res.(*MyController)
}

```