
```go
type MyCommandSetB struct {
	*ccmd.CommandSet
}

func NewMyCommandSetB() *MyCommandSetB {
	c := &MyCommandSetB{
		CommandSet: ccmd.NewCommandSet(),
	}

	c.AddCommand(c.command1B())
	return c
}

func (c *MyCommandSetB) command1B() ccmd.ICommand {
	return ccmd.NewCommand(
		"command1B",
		nil,
		func(ctx context.Context, args *cexec.Parameters) (result interface{}, err error) {
			fmt.Println("command 1B")
			return
		},
	)
}

type MyCommandSet struct {
	*ccmd.CommandSet
}

func NewMyCommandSet() *MyCommandSet {
	c := &MyCommandSet{
		CommandSet: ccmd.NewCommandSet(),
	}

	c.AddCommandSet(NewMyCommandSetB().CommandSet)
	return c
}
```
