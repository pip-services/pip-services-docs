
```go
import (
	"context"
	"net/http"

	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
	gcpcont "github.com/pip-services3-gox/pip-services3-gcp-gox/containers"
	gcpserv "github.com/pip-services3-gox/pip-services3-gcp-gox/services"
	gcputil "github.com/pip-services3-gox/pip-services3-gcp-gox/utils"
	rpcserv "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
)

type MyCloudFunctionService struct {
	*gcpserv.CloudFunctionService
	controller *MyController1

	headers map[string]string
}

func NewMyCloudFunctionService() *MyCloudFunctionService {
	c := &MyCloudFunctionService{}
	c.CloudFunctionService = gcpserv.NewCloudFunctionService("myservice")
	return c
}

func (c *MyCloudFunctionService) SetReferences(ctx context.Context, references cref.IReferences) {
	c.CloudFunctionService.SetReferences(ctx, references)
	res, err := references.GetOneRequired(cref.NewDescriptor("mygroup", "controller", "*", "controller1", "1.0"))
	if err != nil {
		panic("Controller is not found")
	}

	c.controller = res.(*MyController1)
}

func (c *MyCloudFunctionService) Action(res http.ResponseWriter, req *http.Request) {
	params := gcputil.CloudFunctionRequestHelper.GetParameters(req)

	name := params.GetAsStringWithDefault("name", "default name")
	result, err := c.controller.Greetings1(req.Context(), name)

	rpcserv.HttpResponseSender.SendResult(res, req, result, err)
}

func (c *MyCloudFunctionService) Register() {
	c.RegisterAction("greetings1", nil, c.Action)
}

type MyController1 struct {
}

func NewMyController1() *MyController1 {
	return &MyController1{}
}

func (c *MyController1) SetReferences(ctx context.Context, references cref.IReferences) {

}

func (c *MyController1) Greetings1(ctx context.Context, name string) (string, error) {
	return "Greetings from service: Hello, " + name + " !", nil
}

type MyController2 struct {
}

func NewMyController2() *MyController2 {
	return &MyController2{}
}

func (c *MyController2) SetReferences(ctx context.Context, references cref.IReferences) {

}

func (c *MyController2) Greetings2(ctx context.Context, name string) (string, error) {
	return "Greetings from container: Hello, " + name + " !", nil
}

type MyFactory struct {
	*cbuild.Factory
}

func NewMyFactory() *MyFactory {
	c := &MyFactory{}
	c.Factory = cbuild.NewFactory()
	c.RegisterType(cref.NewDescriptor("mygroup", "controller", "default", "controller1", "1.0"), NewMyController1)
	c.RegisterType(cref.NewDescriptor("mygroup", "controller", "default", "controller2", "1.0"), NewMyController2)
	c.RegisterType(cref.NewDescriptor("mygroup", "service", "gcp-function", "*", "1.0"), NewMyCloudFunctionService)
	return c
}

type MyCloudFunction struct {
	*gcpcont.CloudFunction
	controller *MyController2
}

func NewMyCloudFunction() *MyCloudFunction {
	c := &MyCloudFunction{}
	c.CloudFunction = gcpcont.InheritCloudFunctionWithParams(c, "mygroup", "Mygroup")
	c.SetConfigPath("./config.yaml")
	c.AddFactory(NewMyFactory())
	return c
}

func (c *MyCloudFunction) SetReferences(ctx context.Context, references cref.IReferences) {
    c.CloudFunction.SetReferences(ctx, references)
	c.Counters.SetReferences(ctx, references)

	ctrl, err := references.GetOneRequired(cref.NewDescriptor("mygroup", "controller", "*", "controller2", "1.0"))
	if err != nil {
		panic("Controller2 is not found")
	}

	c.controller = ctrl.(*MyController2)
}

func (c *MyCloudFunction) Action(res http.ResponseWriter, req *http.Request) {
	params := gcputil.CloudFunctionRequestHelper.GetParameters(req)

	name := params.GetAsStringWithDefault("name", "default name")
	result, err := c.controller.Greetings2(req.Context(), name)

	rpcserv.HttpResponseSender.SendResult(res, req, result, err)
}

func (c *MyCloudFunction) Register() {
	c.RegisterAction("greetings2", nil, c.Action)
}

```