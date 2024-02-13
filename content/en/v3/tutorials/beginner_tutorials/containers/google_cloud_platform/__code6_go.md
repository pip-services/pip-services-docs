
```go
// Controller's descriptor is defined in the configuration file
type MyCommandableCloudFunction struct {
	*gcpcont.CommandableCloudFunction
	controller *MyController
}

func NewMyCommandableCloudFunction() *MyCommandableCloudFunction {
	c := &MyCommandableCloudFunction{}
	c.CommandableCloudFunction = gcpcont.NewCommandableCloudFunction()
	c.SetConfigPath("./config.yaml")
	c.AddFactory(NewMyFactory())
	return c
}

func (c *MyCommandableCloudFunction) SetReferences(ctx context.Context, references cref.IReferences) {
	c.CommandableCloudFunction.SetReferences(ctx, references)
	res, err := references.GetOneRequired(cref.NewDescriptor("mygroup", "controller", "default", "controller", "*"))
	if err != nil {
		panic("Controller is not found")
	}

	c.controller = res.(*MyController)
}

```