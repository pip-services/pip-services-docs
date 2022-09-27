
```go
import (
    cproc "github.com/pip-services3-go/pip-services3-container-go/container"
	rbuild "github.com/pip-services3-go/pip-services3-rpc-go/build"
    sbuild "github.com/pip-services3-go/pip-services3-swagger-go/build"
)


type HelloFriendProcess struct {
	cproc.ProcessContainer
}

func NewHelloFriendProcess() *HelloFriendProcess {
	c := &HelloFriendProcess{
		ProcessContainer: *cproc.NewProcessContainer("hello-friend", "HelloFriend microservice"),
	}

	c.SetConfigPath("./config.yml")

	c.AddFactory(NewHelloFriendServiceFactory())
	c.AddFactory(rbuild.NewDefaultRpcFactory())
	c.AddFactory(sbuild.NewDefaultSwaggerFactory())

	return c
}


```
