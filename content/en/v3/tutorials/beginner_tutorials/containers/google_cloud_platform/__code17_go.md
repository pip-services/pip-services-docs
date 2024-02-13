
```go
import (
	"context"
	"net/http"

	cconv "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cvalid "github.com/pip-services3-gox/pip-services3-commons-gox/validate"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
	gcpcont "github.com/pip-services3-gox/pip-services3-gcp-gox/containers"
	gcpserv "github.com/pip-services3-gox/pip-services3-gcp-gox/services"
	gcputil "github.com/pip-services3-gox/pip-services3-gcp-gox/utils"
	rpcserv "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
)

type MyCloudService struct {
	*gcpserv.CloudFunctionService
	controller *MyController
	headers    map[string]string
}

func NewMyCloudService() *MyCloudService {
	c := &MyCloudService{}
	c.CloudFunctionService = gcpserv.NewCloudFunctionService("")
	// Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
	// c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("mygroup", "controller", "default", "controller", "1.0"))
	return c
}

func (c *MyCloudService) SetReferences(ctx context.Context, references cref.IReferences) {
	c.CloudFunctionService.SetReferences(ctx, references)
	// Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
	// res, err := c.DependencyResolver.GetOneRequired("controller")
	res, err := references.GetOneRequired(cref.NewDescriptor("mygroup", "controller", "default", "controller", "1.0"))
	if err != nil {
		panic("Controller is not found")
	}

	c.controller = res.(*MyController)
}

func (c *MyCloudService) Register() {
	c.RegisterAction(
		"greetings",
		cvalid.NewObjectSchema().WithRequiredProperty("body", cvalid.NewObjectSchema().WithRequiredProperty("name", cconv.String)).Schema,
		func(res http.ResponseWriter, req *http.Request) {
			params := gcputil.CloudFunctionRequestHelper.GetParameters(req)
	        name := params.GetAsString("name")

			result, err := c.controller.Greetings(req.Context(), name)

			for key, value := range c.headers {
				res.Header().Add(key, value)
			}

			rpcserv.HttpResponseSender.SendResult(res, req, result, err)
		},
	)
}

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
	c.RegisterType(cref.NewDescriptor("mygroup", "service", "gcp-function", "function", "1.0"), NewMyCloudService)
	return c
}

type MyCloudFunction struct {
	*gcpcont.CloudFunction
	controller *MyController
	service    *MyCloudService
}

func NewMyCloudFunction() *MyCloudFunction {
	c := &MyCloudFunction{}
	c.CloudFunction = gcpcont.InheritCloudFunctionWithParams(c, "mygroup", "Mygroup service")
	c.SetConfigPath("./config.yaml")
	c.AddFactory(NewMyFactory())
	// Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
	// c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("mygroup", "controller", "default", "controller", "*"))
	// c.DependencyResolver.Put(context.Background(), "service", cref.NewDescriptor("mygroup", "service", "gcp-function", "function", "*"))
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
	
```