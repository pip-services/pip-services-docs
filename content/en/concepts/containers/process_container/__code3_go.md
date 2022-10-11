
```go
import (
    cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
)

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
