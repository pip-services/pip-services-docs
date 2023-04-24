
```go
import (
    grpcsrv "github.com/pip-services3-gox/pip-services3-grpc-gox/services"
    cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)


type MyDataCommandableGrpcService struct {
	*grpcsrv.CommandableGrpcService
}

func NewMyDataCommandableGrpcService() *MyDataCommandableGrpcService {
	c := &MyDataCommandableGrpcService{}
	c.CommandableGrpcService = grpcsrv.InheritCommandableGrpcService(c, "mydata")
	c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("service-mydata", "controller", "default", "*", "*"))
	return c
}
```
