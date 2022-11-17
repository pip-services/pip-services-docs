
```go
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

```