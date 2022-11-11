
```go
// Controller is added as a dependency
type MyCommandableCloudFunction struct {
	*gcpcont.CommandableCloudFunction
	controller *MyController
}

func NewMyCommandableCloudFunction() *MyCommandableCloudFunction {
	c := &MyCommandableCloudFunction{}
	c.CommandableCloudFunction = gcpcont.NewCommandableCloudFunction()
	c.SetConfigPath("./config.yaml")
	c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("mygroup", "controller", "default", "controller", "*"))
	c.AddFactory(NewMyFactory())
	return c
}

func (c *MyCommandableCloudFunction) SetReferences(ctx context.Context, references cref.IReferences) {
	c.CommandableCloudFunction.SetReferences(ctx, references)
	res, err := c.DependencyResolver.GetOneRequired("controller")
	if err != nil {
		panic("Controller is not found")
	}

	c.controller = res.(*MyController)
}

```