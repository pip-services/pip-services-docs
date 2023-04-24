
```go
import (
    ccont "github.com/pip-services3-gox/pip-services3-container-gox/container"
    grpcbuild "github.com/pip-services3-gox/pip-services3-grpc-gox/build"
)

type MyDataProcess struct {
	*ccont.ProcessContainer
}

func NewMyDataProcess() *MyDataProcess {
	c := &MyDataProcess{}
	c.ProcessContainer = ccont.NewProcessContainer("my_data", "simple my data microservice")
	c.AddFactory(NewDefaultMyDataFactory())
	c.AddFactory(grpcbuild.NewDefaultGrpcFactory())

	return c
}
```
