
```go
import (
        sbuild "github.com/pip-services4/pip-services4-go/pip-services4-swagger-go/build"
        cproc "github.com/pip-services4/pip-services4-go/pip-services4-container-go/container"
        hbuild "github.com/pip-services4/pip-services4-go/pip-services4-http-go/build"
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
	c.AddFactory(hbuild.NewDefaultHttpFactory())
	c.AddFactory(sbuild.NewDefaultSwaggerFactory())
	return c
}
```
