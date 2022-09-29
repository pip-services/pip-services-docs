
```go
import (
	build "github.com/pip-services3-gox/pip-services3-components-gox/build"
)

// Creating a factory

type MyClassFactory struct {
	build.Factory
}

func NewMyClassFactory() *MyClassFactory {
	c := MyClassFactory{}

	ComponentADescriptor := refer.NewDescriptor("myservice", "mycomponentA", "default", "*", "1.0")
	ComponentBDescriptor := refer.NewDescriptor("myservice", "mycomponent-b", "default", "*", "1.0")

	c.RegisterType(ComponentADescriptor, NewMyComponentA)
	c.RegisterType(ComponentBDescriptor, NewMyComponentB)

	return &c
}

```

