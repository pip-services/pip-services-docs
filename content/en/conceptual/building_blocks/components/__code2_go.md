
```go
type MyProcess struct {
	cproc.ProcessContainer
}

func NewMyProcess() *MyProcess {
	c := MyProcess{}
	c.ProcessContainer = *cproc.NewProcessContainer("mymicroservice", "Sample microservice container")
	c.AddFactory(factory.NewMyComponentFactory())
	c.AddFactory(rbuild.NewDefaultRpcFactory())
	c.AddFactory(rbuild.NewDefaultSwaggerFactory())
	c.AddFactory(gbuild.NewDefaultGrpcFactory())
	return &c
}

```
