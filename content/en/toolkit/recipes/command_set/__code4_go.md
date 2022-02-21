
```go
import (
	"fmt"

	ccmd "github.com/pip-services3-go/pip-services3-commons-go/commands"
	crun "github.com/pip-services3-go/pip-services3-commons-go/run"
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
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {
			fmt.Println("command 2")
			return
		},
	)
}

func (c *MyCommandSet) command3() ccmd.ICommand {
	return ccmd.NewCommand(
		"command3",
		nil,
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {
			fmt.Println("command 3")
			return
		},
	)
}

```
