
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

type MyController1 struct {
}

func NewMyController1() *MyController1 {
	return &MyController1{}
}

func (c *MyController1) SetReferences(ctx context.Context, references cref.IReferences) {

}

func (c *MyController1) Greetings1(ctx context.Context, name string) (string, error) {
	return "greetings1: Hello, " + name + " !", nil
}

type MyController2 struct {
}

func NewMyController2() *MyController2 {
	return &MyController2{}
}

func (c *MyController2) SetReferences(ctx context.Context, references cref.IReferences) {

}

func (c *MyController2) Greetings2(ctx context.Context, name string) (string, error) {
	return "greetings2: Hello, " + name + " !", nil
}

type MyFactory struct {
	*cbuild.Factory
}

func NewMyFactory() *MyFactory {
	c := &MyFactory{}
	c.Factory = cbuild.NewFactory()
	c.RegisterType(cref.NewDescriptor("mygroup", "controller", "default", "controller1", "1.0"), NewMyController1)
	c.RegisterType(cref.NewDescriptor("mygroup", "controller", "default", "controller2", "1.0"), NewMyController2)
	return c
}

type MyCloudFunction struct {
	*gcpcont.CloudFunction
	controller1 *MyController1
	controller2 *MyController2
}

func NewMyCloudFunction() *MyCloudFunction {
	c := &MyCloudFunction{}
	c.CloudFunction = gcpcont.InheritCloudFunctionWithParams(c, "mygroup", "Mygroup")
	c.SetConfigPath("./config.yaml")
	c.AddFactory(NewMyFactory())
	c.DependencyResolver.Put(context.Background(), "controller1", cref.NewDescriptor("mygroup", "controller", "default", "controller1", "*"))
	c.DependencyResolver.Put(context.Background(), "controller2", cref.NewDescriptor("mygroup", "controller", "default", "controller2", "*"))
	return c
}

func (c *MyCloudFunction) SetReferences(ctx context.Context, references cref.IReferences) {
    c.CloudFunction.SetReferences(ctx, references)
	c.Counters.SetReferences(ctx, references)

	ctrl1, err := c.DependencyResolver.GetOneRequired("controller1")
	if err != nil {
		panic("Controller1 is not found")
	}

	ctrl2, err := c.DependencyResolver.GetOneRequired("controller2")
	if err != nil {
		panic("Controller2 is not found")
	}

	c.controller1 = ctrl1.(*MyController1)
	c.controller2 = ctrl2.(*MyController2)
}

func (c *MyCloudFunction) Action1(res http.ResponseWriter, req *http.Request) {
	params := gcputil.CloudFunctionRequestHelper.GetParameters(req)

	name := params.GetAsStringWithDefault("name", "default name")
	result, err := c.controller1.Greetings1(req.Context(), name)

	rpcserv.HttpResponseSender.SendResult(res, req, result, err)
}

func (c *MyCloudFunction) Action2(res http.ResponseWriter, req *http.Request) {
	params := gcputil.CloudFunctionRequestHelper.GetParameters(req)

	name := params.GetAsStringWithDefault("name", "default name")
	result, err := c.controller2.Greetings2(req.Context(), name)

	rpcserv.HttpResponseSender.SendResult(res, req, result, err)
}

func (c *MyCloudFunction) Register() {
	c.RegisterAction("greetings1", nil, c.Action1)
	c.RegisterAction("greetings2", nil, c.Action2)
}
```