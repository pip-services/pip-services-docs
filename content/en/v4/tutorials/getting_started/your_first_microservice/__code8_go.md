
**‍/HelloWorldProcess.go**

```go
package quickstart

import (
	cproc "github.com/pip-services4/pip-services4-go/pip-services4-container-go/container"
	rbuild "github.com/pip-services4/pip-services4-go/pip-services4-http-go/build"
)

type HelloWorldProcess struct {
	*cproc.ProcessContainer
}

func NewHelloWorldProcess() *HelloWorldProcess {
	c := HelloWorldProcess{}
	c.ProcessContainer = cproc.NewProcessContainer("hello-world", "HelloWorld microservice")
	c.SetConfigPath("./config.yaml")
	c.AddFactory(NewHelloWorldControllerFactory())
	c.AddFactory(rbuild.NewDefaultHttpFactory())
	return &c
}


```

