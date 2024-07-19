
```go
import (
      cbuild "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"
)

MyFactory1 := cbuild.NewFactory()

MyFactory1.RegisterType(crefer.NewDescriptor("myservice", "mycomponentA", "default", "*", "1.0"), NewMyComponentA)
MyFactory1.RegisterType(crefer.NewDescriptor("myservice", "mycomponent-b", "default", "*", "1.0"), NewMyComponentB)
```
