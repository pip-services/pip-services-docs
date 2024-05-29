
**‍/HelloWorldProcess.go**

```go
package quickstart

import (
	cproc "github.com/pip-services3-gox/pip-services3-container-gox/container"
	rpcbuild "github.com/pip-services3-gox/pip-services3-rpc-gox/build"
)

type HelloWorldProcess struct {
	*cproc.ProcessContainer
}

func NewHelloWorldProcess() *HelloWorldProcess {
	c := HelloWorldProcess{}
	c.ProcessContainer = cproc.NewProcessContainer("hello-world", "HelloWorld microservice")
	c.SetConfigPath("./config.yaml")
	c.AddFactory(NewHelloWorldServiceFactory())
	c.AddFactory(rpcbuild.NewDefaultRpcFactory())
	return &c
}

```

