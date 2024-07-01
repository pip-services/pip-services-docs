
```go
import (
	"context"
	"os"

	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"

	cbuild "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"
	ccont "github.com/pip-services4/pip-services4-go/pip-services4-container-go/container"
)

// Running the container
func main() {
	proc := NewMyProcess()
	proc.Run(context.Background(), os.Args)
}

type MyProcess struct {
	*ccont.ProcessContainer
}

func NewMyProcess() *MyProcess {
	c := &MyProcess{}
	c.ProcessContainer = ccont.NewProcessContainer("myservice", "My service running as a process")
	c.SetConfigPath("./configV4.yaml")

	myFactory1 := cbuild.NewFactory()

	myFactory1.RegisterType(cref.NewDescriptor("myservice", "component-a1", "default", "*", "1.0"), NewComponentA1)
	myFactory1.RegisterType(cref.NewDescriptor("myservice", "component-a2", "default", "*", "1.0"), NewComponentA2)
	myFactory1.RegisterType(cref.NewDescriptor("myservice", "component-b", "default", "*", "1.0"), NewComponentB)

	c.AddFactory(myFactory1)

	return c
}
```
```
