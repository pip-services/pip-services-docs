
```go
import (
	"context"
	"fmt"
	"os"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	crefer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	crun "github.com/pip-services3-gox/pip-services3-commons-gox/run"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
	ccont "github.com/pip-services3-gox/pip-services3-container-gox/container"
)

func main() {
	proc := NewMyProcess()
	proc.SetConfigPath("./config/config.yml")
	proc.Run(context.Background(), os.Args)
}

type MyProcess struct {
	*ccont.ProcessContainer
}

func NewMyProcess() *MyProcess {
	c := &MyProcess{}
	c.ProcessContainer = ccont.NewProcessContainer("myservice", "My service running as a process")
	c.SetConfigPath("./config.yaml")
	c.AddFactory(NewMyFactory())
	return c
}

type MyFactory struct {
	*cbuild.Factory
}

func NewMyFactory() *MyFactory {
	c := &MyFactory{}
	c.Factory = cbuild.NewFactory()
	c.RegisterType(crefer.NewDescriptor("myservice", "MyComponentA", "*", "*", "1.0"), NewMyComponentA)
	return c
}

type MyComponentA struct {
	opened bool
}

func NewMyComponentA() *MyComponentA {
	defer fmt.Println("MyComponentA has been created.")
	c := &MyComponentA{}
	return c
}

func (c *MyComponentA) Configure(ctx context.Context, config *cconf.ConfigParams) {
	fmt.Println("MyComponentA has been configured.")
}

func (c *MyComponentA) SetReferences(ctx context.Context, references crefer.IReferences) {
	fmt.Println("MyComponentA's references have been defined.")
}

func (c *MyComponentA) UnsetReferences() {
	fmt.Println("References cleared")
}

func (c *MyComponentA) IsOpen() bool {
	return c.opened
}

func (c *MyComponentA) Open(ctx context.Context, correlationId string) error {
	fmt.Println("MyComponentA has been opened.")
	return nil
}

func (c *MyComponentA) Close(ctx context.Context, correlationId string) error {
	fmt.Println("MyComponentA has been closed.")
	return nil
}

func (c *MyComponentA) Execute(ctx context.Context, correlationId string, args crun.Parameters) (result any, err error) {
	fmt.Println("Executing")
	result = args
	return result, nil
}

```
