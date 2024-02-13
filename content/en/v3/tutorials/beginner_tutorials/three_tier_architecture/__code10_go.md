
```go
import (
    rpcbuild "github.com/pip-services3-gox/pip-services3-rpc-gox/build"
    crun "github.com/pip-services3-gox/pip-services3-container-gox/container"
)

type HelloFriendProcess struct {
	*crun.ProcessContainer
}

func NewHelloFriendProcess() *HelloFriendProcess {
	c := &HelloFriendProcess{}
	c.ProcessContainer = crun.NewProcessContainer("hello-friend", "HelloFriend microservice")
	c.AddFactory(NewHelloFriendServiceFactory())
	c.AddFactory(rpcbuild.NewDefaultRpcFactory())

	return c
}

```
