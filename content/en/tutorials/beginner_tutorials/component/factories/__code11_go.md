
```go
import (
    cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
)

factory1 := cbuild.NewFactory()
factory1.RegisterType(cref.NewDescriptor("mygroup", "mycomponent1", "default", "*", "1.0"), NewMyComponent1)
compositeFactory.Add(factory1)
```
