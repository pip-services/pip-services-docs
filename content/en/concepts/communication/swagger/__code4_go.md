
```go
import (
    crun "github.com/pip-services3-gox/pip-services3-commons-gox/run"
    cvalid "github.com/pip-services3-gox/pip-services3-commons-gox/validate"
    ccmd "github.com/pip-services3-gox/pip-services3-commons-gox/commands"
)


// Command set
type FriendsCommandSet struct {
	*ccmd.CommandSet
	controller *HelloFriendController
}

func NewFriendsCommandSet(controller *HelloFriendController) *FriendsCommandSet {
	c := &FriendsCommandSet{
		CommandSet: ccmd.NewCommandSet(),
		controller: controller,
	}

	c.AddCommand(c.makeGreetingCommand())

	return c
}

func (c *FriendsCommandSet) makeGreetingCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"greeting",
		cvalid.NewObjectSchema().
			WithRequiredProperty("name", cvalid.NewFilterParamsSchema()),
		func(ctx context.Context, correllationId string, args *crun.Parameters) (result interface{}, err error) {
			name := args.GetAsString("name")
			return c.controller.Greeting(name), nil
		})
}
```
