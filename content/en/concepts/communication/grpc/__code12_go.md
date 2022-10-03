
```go
type MyGrpcClient struct {
	*grpcclients.GrpcClient
}

func NewMyGrpcClient() *MyGrpcClient {
	dgc := MyGrpcClient{}
	dgc.GrpcClient = grpcclients.NewGrpcClient("Summator")
	return &dgc
}

func (c *MyGrpcClient) GetData(ctx context.Context, correlationId string, value1 float32, value2 float32) (result float32, err error) {

	req := &protos.Number1{Value1: value1, Value2: value2}
	reply := new(protos.Number2)
	err = c.Call("sum", correlationId, req, reply)
	if err != nil {
		return 0, err
	}
	result = reply.GetValue()

	return result, nil
}
```
