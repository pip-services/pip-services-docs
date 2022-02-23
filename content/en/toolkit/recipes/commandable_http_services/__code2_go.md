
```go
import (
	ccomand "github.com/pip-services3-go/pip-services3-commons-go/commands"
	cconv "github.com/pip-services3-go/pip-services3-commons-go/convert"
	crun "github.com/pip-services3-go/pip-services3-commons-go/run"
	cvalid "github.com/pip-services3-go/pip-services3-commons-go/validate"
)

type FriendsCommandSet struct {
	ccomand.CommandSet
	controller HelloFriendController
}

func NewFriendsCommandSet(controller HelloFriendController) *FriendsCommandSet {
	c := FriendsCommandSet{}
	c.controller = controller
	c.CommandSet = *ccomand.NewCommandSet()
	c.AddCommand(c.makeGreeting())
	return &c
}

func (c *FriendsCommandSet) makeGreeting() ccomand.ICommand {
	return ccomand.NewCommand(
		"greeting",
		cvalid.NewObjectSchema().
			WithRequiredProperty("name", cconv.String),
		func(correlationId string, args *crun.Parameters) (result interface{}, err error) {
			name := args.GetAsString("name")
			return c.controller.Greeting(name), nil
		},
	)
}
```
