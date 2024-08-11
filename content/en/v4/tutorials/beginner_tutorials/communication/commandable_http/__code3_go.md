
```go
import (
        ctrl "github.com/pip-services4/pip-services4-go/pip-services4-http-go/controllers"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
)

type FriendCommandableHttpController struct {
	*ctrl.CommandableHttpController 
}

func NewFriendCommandableHttpController () *FriendCommandableHttpController  {
	c := &FriendCommandableHttpController {}
	c.CommandableHttpController  = ctrl.InheritCommandableHttpController(c, "commandable_hello_friend")
	c.DependencyResolver.Put(context.Background(), "service", cref.NewDescriptor("hello-friend", "service", "*", "*", "*"))
	return c
}
```
