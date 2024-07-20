
```go
import (
	"context"
	"fmt"

	cexec "github.com/pip-services4/pip-services4-go/pip-services4-components-go/exec"
	ccmd "github.com/pip-services4/pip-services4-go/pip-services4-rpc-go/commands"
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
		func(ctx context.Context, args *cexec.Parameters) (result interface{}, err error) {
			fmt.Println("command 2")
			return
		},
	)
}

func (c *MyCommandSet) command3() ccmd.ICommand {
	return ccmd.NewCommand(
		"command3",
		nil,
		func(ctx context.Context, args *cexec.Parameters) (result interface{}, err error) {
			fmt.Println("command 3")
			return
		},
	)
}
```
