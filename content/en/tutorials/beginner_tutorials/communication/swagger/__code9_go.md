
```go
import (
    cproc "github.com/pip-services3-gox/pip-services3-container-gox/container"
	rbuild "github.com/pip-services3-gox/pip-services3-rpc-gox/build"
    sbuild "github.com/pip-services3-gox/pip-services3-swagger-gox/build"
)


type HelloFriendProcess struct {
	*cproc.ProcessContainer
}

func NewHelloFriendProcess() *HelloFriendProcess {
	c := &HelloFriendProcess{
		ProcessContainer: cproc.NewProcessContainer("hello-friend", "HelloFriend microservice"),
	}

	c.SetConfigPath("./config.yml")

	c.AddFactory(NewHelloFriendServiceFactory())
	c.AddFactory(rbuild.NewDefaultRpcFactory())
	c.AddFactory(cswagger.NewDefaultSwaggerFactory())

	return c
}


```
