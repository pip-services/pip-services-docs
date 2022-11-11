
```go
// Controller's and service’s descriptors are defined in the configuration file
type MyCloudFunction struct {
	*gcpcont.CloudFunction
	controller  *MyController
	service     *MyCloudService
}

func NewMyCloudFunction() *MyCloudFunction {
	c := &MyCloudFunction{}
	c.CloudFunction = gcpcont.InheritCloudFunctionWithParams(c, "mygroup", "Mygroup service")
	c.SetConfigPath("./config.yaml")
	c.AddFactory(NewMyFactory())
	return c
}

func (c *MyCloudFunction) SetReferences(ctx context.Context, references cref.IReferences) {
	c.CloudFunction.SetReferences(ctx, references)
	c.Counters.SetReferences(ctx, references)
	ctrl, err := references.GetOneRequired(cref.NewDescriptor("mygroup", "controller", "default", "controller", "*"))
	if err != nil {
		panic("Controller is not found")
	}

	serv, err := references.GetOneRequired(cref.NewDescriptor("mygroup", "service", "gcp-function", "controller", "*"))
	if err != nil {
		panic("Service is not found")
	}

	c.controller = ctrl.(*MyController)
	c.service = serv.(*MyCloudService)
}

```