
```go
// Controller and service are added as dependencies
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
	c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("mygroup", "controller", "default", "controller", "*"))
	c.DependencyResolver.Put(context.Background(), "service", cref.NewDescriptor("mygroup", "service", "commandable-gcp-function", "function", "*"))
	return c
}

func (c *MyCloudFunction) SetReferences(ctx context.Context, references cref.IReferences) {
    c.CloudFunction.SetReferences(ctx, references)
	c.Counters.SetReferences(ctx, references)

	ctrl, err := c.DependencyResolver.GetOneRequired("controller")
	if err != nil {
		panic("Controller is not found")
	}

	serv, err := c.DependencyResolver.GetOneRequired("service")
	if err != nil {
		panic("Service is not found")
	}

	c.controller = ctrl.(*MyController)
	c.service = serv.(*gcpserv.CloudFunctionService)
}
```