
```go
import (
	"context"

	cconv "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
	cexec "github.com/pip-services4/pip-services4-go/pip-services4-components-go/exec"
	cvalid "github.com/pip-services4/pip-services4-go/pip-services4-data-go/validate"
	ccomand "github.com/pip-services4/pip-services4-go/pip-services4-rpc-go/commands"
)

type FriendsCommandSet struct {
	*ccomand.CommandSet
	service HelloFriendService
}

func NewFriendsCommandSet(service HelloFriendService) *FriendsCommandSet {
	c := FriendsCommandSet{}
	c.service = service
	c.CommandSet = ccomand.NewCommandSet()
	c.AddCommand(c.makeGreeting())
	return &c
}

func (c *FriendsCommandSet) makeGreeting() ccomand.ICommand {
	return ccomand.NewCommand(
		"greeting",
		cvalid.NewObjectSchema().
			WithRequiredProperty("name", cconv.String),
		func(ctx context.Context, args *cexec.Parameters) (result interface{}, err error) {
			name := args.GetAsString("name")
			return c.service.Greeting(name), nil
		},
	)
}
```
