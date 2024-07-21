
```go
import cbuild "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"

type MyFactory struct {
	*cbuild.Factory
}

func NewMyFactory() *MyFactory {
	c := &MyFactory{}
	c.Factory = cbuild.NewFactory()
	c.RegisterType(crefer.NewDescriptor("myservice", "MyComponentA", "*", "*", "1.0"), NewMyComponentA)
	return c
}
```
