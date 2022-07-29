
```go
import (
    ccomand "github.com/pip-services3-go/pip-services3-commons-go/commands"
	cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
)

type HelloFriendController struct {
	commandSet  *FriendsCommandSet
	defaultName string
}

func NewHelloFriendController() *HelloFriendController {
	c := HelloFriendController{}
	c.defaultName = "World"
	return &c
}

func (c *HelloFriendController) Configure(config *cconf.ConfigParams) {
	// You can read configuration parameters here...
}

func (c *HelloFriendController) GetCommandSet() *ccomand.CommandSet {
	if c.commandSet == nil {
		c.commandSet = NewFriendsCommandSet(*c)
	}
	return &c.commandSet.CommandSet
}

func (c *HelloFriendController) Greeting(name string) string {
	if name != "" {
		return "Hello, " + name + " !"
	}
	return "Hello, " + c.defaultName + " !"
}

```
