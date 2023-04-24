
```go
import (
	rbuild "github.com/pip-services3-gox/pip-services3-rpc-gox/build"
	sbuild "github.com/pip-services3-gox/pip-services3-swagger-gox/build"
	cproc "github.com/pip-services3-gox/pip-services3-container-gox/container"
)

type HelloFriendProcess struct {
	*cproc.ProcessContainer
}

func NewHelloFriendProcess() *HelloFriendProcess {
	c := &HelloFriendProcess{
		ProcessContainer: cproc.NewProcessContainer("Hellow", "Hello friend microservice"),
	}

	c.SetConfigPath("./config.yaml")

	c.AddFactory(NewHelloFriendServiceFactory())
	c.AddFactory(rbuild.NewDefaultRpcFactory())
	c.AddFactory(sbuild.NewDefaultSwaggerFactory())
	return c
}

```

