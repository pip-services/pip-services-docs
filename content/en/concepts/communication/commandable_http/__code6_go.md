
```go
import (
    cproc "github.com/pip-services3-gox/pip-services3-container-gox/container"
	rbuild "github.com/pip-services3-go/pip-services3-rpc-go/build"
    sbuild "github.com/pip-services3-go/pip-services3-swagger-go/build"
)

type HelloFriendProcess struct {
	cproc.ProcessContainer
}

func NewHelloFriendProcess() *HelloFriendProcess {
	c := &HelloFriendProcess{
		ProcessContainer: *cproc.NewProcessContainer("Hellow", "Hello friend microservice"),
	}

	c.SetConfigPath("./config.yaml")

	c.AddFactory(NewHelloFriendServiceFactory())
	c.AddFactory(rbuild.NewDefaultRpcFactory())
	c.AddFactory(sbuild.NewDefaultSwaggerFactory())
	return c
}

```

