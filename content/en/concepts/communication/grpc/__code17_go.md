
```go
// Pre-requisites
import (
	"context"
	"fmt"
	"mymodule/calculations"
	"mymodule/protos"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	grpcclients "github.com/pip-services3-gox/pip-services3-grpc-gox/clients"
	grpcservices "github.com/pip-services3-gox/pip-services3-grpc-gox/services"
)

// gRPC client
type MyGrpcClient struct {
	*grpcclients.GrpcClient
}

func NewMyGrpcClient() *MyGrpcClient {
	dgc := MyGrpcClient{}
	dgc.GrpcClient = grpcclients.NewGrpcClient("Summator")
	return &dgc
}

func (c *MyGrpcClient) GetData(correlationId string, value1 float32, value2 float32) (result float32, err error) {

	req := &protos.Number1{Value1: value1, Value2: value2}
	reply := new(protos.Number2)
	err = c.Call("sum", correlationId, req, reply)
	if err != nil {
		return 0, err
	}
	result = reply.GetValue()

	return result, nil
}
 
client := NewMyGrpcClient()
client.Configure(cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 50055,
))

client.SetReferences(cref.NewEmptyReferences())

err := client.Open("123")

// Function call and result
result, err := client.GetData("123", 3, 5) // Returns 8
```
