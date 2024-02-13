
```go
// Pre-requisites
import (
	"context"
	"time"
	"tst/calculations"
	"tst/protos"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	grpcservices "github.com/pip-services3-gox/pip-services3-grpc-gox/services"
)

// gRPC server
type MyGrpcService struct {
	*grpcservices.GrpcService
	protos.SummatorServer
}

func NewMyGrpcService() *MyGrpcService {
	c := &MyGrpcService{}
	c.GrpcService = grpcservices.InheritGrpcService(c, "Summator")
	return c
}

func (c *MyGrpcService) Sum(ctx context.Context, req *protos.Number1) (result *protos.Number2, err error) {

	res := calculations.Summator(req.GetValue1(), req.GetValue2())
	result = &protos.Number2{Value: res}
	return result, nil
}

func (c *MyGrpcService) Register() {
	protos.RegisterSummatorServer(c.Endpoint.GetServer(), c)
}

func main() {
	service := NewMyGrpcService()
	service.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 50055,
	))

	service.SetReferences(context.Background(), cref.NewEmptyReferences())

	err := service.Open(context.Background(), "123")

	if err != nil {
		panic(err)
	}

	<-time.After(1 * time.Hour)
	
	err = service.Close(context.Background(), "123")

	if err != nil {
		panic(err)
	}
}
```
