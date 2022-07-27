
```ts
import (
    crun "github.com/pip-services3-go/pip-services3-commons-go/run"
    cvalid "github.com/pip-services3-go/pip-services3-commons-go/validate"
    ccmd "github.com/pip-services3-go/pip-services3-commons-go/commands"
)


type FriendsCommandSet struct {
	ccmd.CommandSet
	controller HelloFriendController
}

func NewFriendsCommandSet(controller HelloFriendController) *FriendsCommandSet {
	c := &FriendsCommandSet{
		CommandSet: *ccmd.NewCommandSet(),
		controller: controller,
	}

	c.AddCommand(c.makeGreetingCommand())

	return c
}

func (c *FriendsCommandSet) makeGreetingCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"get_beacons",
		cvalid.NewObjectSchema().
			WithOptionalProperty("filter", cvalid.NewFilterParamsSchema()).
			WithOptionalProperty("paging", cvalid.NewPagingParamsSchema()),
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {
			name := args.GetAsString("name")
			return c.controller.Greeting(name), nil
		})
}
```
