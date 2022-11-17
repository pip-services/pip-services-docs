
```go
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

```