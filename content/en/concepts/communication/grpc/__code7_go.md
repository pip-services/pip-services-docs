
```go
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
```
