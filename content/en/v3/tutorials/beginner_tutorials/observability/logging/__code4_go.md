
```go
// Creating a factory
import (
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
)

MyFactory1 := cbuild.NewFactory()

MyFactory1.RegisterType(crefer.NewDescriptor("myservice", "mycomponentA", "default", "*", "1.0"), NewMyComponentA)
MyFactory1.RegisterType(crefer.NewDescriptor("myservice", "mycomponent-b", "default", "*", "1.0"), NewMyComponentB)

```
