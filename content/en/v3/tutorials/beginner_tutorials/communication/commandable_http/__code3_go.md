
```go
import (
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	srvc "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
)

type FriendCommandableHttpService struct {
	*srvc.CommandableHttpService

	DependencyResolver *cref.DependencyResolver
}

func NewFriendCommandableHttpService() *FriendCommandableHttpService {
	c := &FriendCommandableHttpService{}
	c.CommandableHttpService = srvc.InheritCommandableHttpService(c, "commandable_hello_friend")
	c.DependencyResolver.Put("controller", cref.NewDescriptor("hello-friend", "controller", "*", "*", "*"))
	return c
}

```
