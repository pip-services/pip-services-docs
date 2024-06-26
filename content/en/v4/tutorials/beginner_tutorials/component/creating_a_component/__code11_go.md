
```go
import (
	build "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"
	refer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
)

// Creating a factory

type MyClassFactory struct {
	*build.Factory
}

func NewMyClassFactory() *MyClassFactory {
	c := MyClassFactory{}
	c.Factory = build.NewFactory()

	ComponentADescriptor := refer.NewDescriptor("myservice", "mycomponentA", "default", "*", "1.0")
	ComponentBDescriptor := refer.NewDescriptor("myservice", "mycomponent-b", "default", "*", "1.0")

	c.RegisterType(ComponentADescriptor, NewMyComponentA)
	c.RegisterType(ComponentBDescriptor, NewMyComponentB)

	return &c
}
```
