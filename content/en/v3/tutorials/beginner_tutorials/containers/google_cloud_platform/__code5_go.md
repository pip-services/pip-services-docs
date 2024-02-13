
```go
import (
	"context"
	"net/http"

	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
	gcpcont "github.com/pip-services3-gox/pip-services3-gcp-gox/containers"
	gcputil "github.com/pip-services3-gox/pip-services3-gcp-gox/utils"
	rpcserv "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
)

type MyController struct{}

func NewMyController() *MyController {
	return &MyController{}
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

type MyCloudFunction struct {
	*gcpcont.CloudFunction
	controller *MyController
}

func NewMyCloudFunction() *MyCloudFunction {
	c := &MyCloudFunction{}
	c.CloudFunction = gcpcont.InheritCloudFunction(c)
	c.SetConfigPath("./config.yaml")
	// Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
	// c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("mygroup", "controller", "default", "controller", "*"))
	c.AddFactory(NewMyFactory())
	return c
}

func (c *MyCloudFunction) SetReferences(ctx context.Context, references cref.IReferences) {
	c.CloudFunction.SetReferences(ctx, references)
	c.Counters.SetReferences(ctx, references)
	// Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
	// res, err := c.DependencyResolver.GetOneRequired("conroller")
	// Comment out the next line of code when using the dependency resolver, uncomment for configuration file
	res, err := references.GetOneRequired(cref.NewDescriptor("mygroup", "controller", "default", "controller", "*"))
	if err != nil {
		panic("Controller is not found")
	}

	c.controller = res.(*MyController)
}

func (c *MyCloudFunction) action(res http.ResponseWriter, req *http.Request) {
	var body map[string]string

	_ = gcputil.CloudFunctionRequestHelper.DecodeBody(req, &body)
	defer req.Body.Close()

	name := body["name"]

	result, err := c.controller.Greetings(req.Context(), name)
	rpcserv.HttpResponseSender.SendResult(res, req, result, err)
}

func (c *MyCloudFunction) Register() {
	c.RegisterAction("greetings", nil, c.action)
}
```