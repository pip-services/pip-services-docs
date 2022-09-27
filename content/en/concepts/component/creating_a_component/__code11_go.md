
```go
import (
	build "github.com/pip-services3-go/pip-services3-components-go/build"
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

