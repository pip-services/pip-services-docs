
```go
type MyController struct{}

func NewMyController() *MyController {
	return &MyController{}
}

func (c *MyController) SetReferences(ctx context.Context, references cref.IReferences) {

}

func (c *MyController) Greetings(ctx context.Context, name string) (string, error) {
	return "Hello, " + name + " !", nil
}

```