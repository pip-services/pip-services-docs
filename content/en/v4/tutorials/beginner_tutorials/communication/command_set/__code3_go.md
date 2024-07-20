
```go
import (
	"context"
	"fmt"

	cexec "github.com/pip-services4/pip-services4-go/pip-services4-components-go/exec"
	ccmd "github.com/pip-services4/pip-services4-go/pip-services4-rpc-go/commands"
)

type MyCommandSet struct {
	*ccmd.CommandSet
}

func NewMyCommandSet() *MyCommandSet {
	c := &MyCommandSet{
		CommandSet: ccmd.NewCommandSet(),
	}

	c.AddCommand(c.command1())
	return c
}

func (c *MyCommandSet) command1() ccmd.ICommand {
	return ccmd.NewCommand(
		"command1",
		nil,
		func(ctx context.Context, args *cexec.Parameters) (result interface{}, err error) {
			fmt.Println("command 1")
			return
		},
	)
}
```
