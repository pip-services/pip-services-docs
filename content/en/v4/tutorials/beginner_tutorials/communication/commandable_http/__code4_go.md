
```go
import (
        ccomand "github.com/pip-services4/pip-services4-go/pip-services4-rpc-go/commands"
        cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
)

type HelloFriendService struct {
	commandSet  *FriendsCommandSet
	defaultName string
}

func NewHelloFriendService() *HelloFriendService {
	c := HelloFriendService{}
	c.defaultName = "World"
	return &c
}

func (c *HelloFriendService) Configure(ctx context.Context,  config *cconf.ConfigParams) {
	// You can read configuration parameters here...
}


func (c *HelloFriendService) GetCommandSet() *ccomand.CommandSet {
	if c.commandSet == nil {
		c.commandSet = NewFriendsCommandSet(*c)
	}
	return c.commandSet.CommandSet
}

func (c *HelloFriendService) Greeting(name string) string {
	if name != "" {
		return "Hello, " + name + " !"
	}
	return "Hello, " + c.defaultName + " !"
}
```
