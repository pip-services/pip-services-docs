
```go
package main

import (
	"context"
	"fmt"

	ccmd "github.com/pip-services3-gox/pip-services3-commons-gox/commands"
	crun "github.com/pip-services3-gox/pip-services3-commons-gox/run"
)

func main() {

	mySet := NewMyCommandSet()

	mySet.Execute(context.Background(), "", "command1", nil)
	mySet.Execute(context.Background(), "", "command2", nil)
	mySet.Execute(context.Background(), "", "command3", nil)
	mySet.Execute(context.Background(), "", "command1B", nil)
}

type MyCommandSetB struct {
	ccmd.CommandSet
}

func NewMyCommandSetB() *MyCommandSetB {
	c := &MyCommandSetB{
		CommandSet: *ccmd.NewCommandSet(),
	}

	c.AddCommand(c.command1B())
	return c
}

func (c *MyCommandSetB) command1B() ccmd.ICommand {
	return ccmd.NewCommand(
		"command1B",
		nil,
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result interface{}, err error) {
			fmt.Println("command 1B")
			return
		},
	)
}

type MyCommandSet struct {
	ccmd.CommandSet
}

func NewMyCommandSet() *MyCommandSet {
	c := &MyCommandSet{
		CommandSet: *ccmd.NewCommandSet(),
	}

	c.AddCommand(c.command1())
	c.AddCommandSet(&NewMyCommandSetB().CommandSet)
	c.AddCommands([]ccmd.ICommand{c.command2(), c.command3()})
	return c
}

func (c *MyCommandSet) command1() ccmd.ICommand {
	return ccmd.NewCommand(
		"command1",
		nil,
		func(ctx context.Context, correlationId string, args *crun.Parameters) (result interface{}, err error) {
			fmt.Println("command 1")
			return
		},
	)
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

After running it, this code produces the following output:         
   
![figure 1](./figure1.png) 
