
```go
import (
	"fmt"

	ccmd "github.com/pip-services3-gox/pip-services3-commons-gox/commands"
	crun "github.com/pip-services3-gox/pip-services3-commons-gox/run"
)

type MyCommandSet struct {
	ccmd.CommandSet
}

func NewMyCommandSet() *MyCommandSet {
	c := &MyCommandSet{
		CommandSet: *ccmd.NewCommandSet(),
	}

	c.AddCommands([]ccmd.ICommand{c.command2(), c.command3()})
	return c
}

func (c *MyCommandSet) command2() ccmd.ICommand {
	return ccmd.NewCommand(
		"command2",
		nil,
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result interface{}, err error) {
			fmt.Println("command 2")
			return
		},
	)
}

func (c *MyCommandSet) command3() ccmd.ICommand {
	return ccmd.NewCommand(
		"command3",
		nil,
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result interface{}, err error) {
			fmt.Println("command 3")
			return
		},
	)
}

```
