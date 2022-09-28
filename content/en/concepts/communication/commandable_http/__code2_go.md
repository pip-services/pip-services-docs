
```go
import (
	ccomand "github.com/pip-services3-gox/pip-services3-commons-gox/commands"
	cconv "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
	crun "github.com/pip-services3-gox/pip-services3-commons-gox/run"
	cvalid "github.com/pip-services3-gox/pip-services3-commons-gox/validate"
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
