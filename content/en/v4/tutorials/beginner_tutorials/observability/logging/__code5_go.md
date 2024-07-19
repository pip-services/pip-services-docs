
```go
import (
      cproc "github.com/pip-services4/pip-services4-go/pip-services4-container-go/container"
)

// Creating a process container
type MyProcess struct {
	*cproc.ProcessContainer
}

func NewMyProcess() *MyProcess {
	c := MyProcess{}
	c.ProcessContainer = cproc.NewProcessContainer("myservice", "My service running as a process")
	c.SetConfigPath("./config/config.yml")
	MyFactory1 := cbuild.NewFactory()

	MyFactory1.RegisterType(crefer.NewDescriptor("myservice", "mycomponentA", "default", "*", "1.0"), NewMyComponentA)
	MyFactory1.RegisterType(crefer.NewDescriptor("myservice", "mycomponent-b", "default", "*", "1.0"), NewMyComponentB)

	c.AddFactory(MyFactory1)
	return &c
}
```
