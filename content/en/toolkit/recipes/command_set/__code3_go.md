
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

	c.AddCommand(c.command1())
	return c
}

func (c *MyCommandSet) command1() ccmd.ICommand {
	return ccmd.NewCommand(
		"command1",
		nil,
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {
			fmt.Println("command 1")
			return
		},
    )
}
```
