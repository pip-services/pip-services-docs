
```go
type MyCommandableCloudService struct {
	*gcpserv.CommandableCloudFunctionService
}

func NewMyCommandableCloudService() *MyCommandableCloudService {
	c := &MyCommandableCloudService{}
	c.CommandableCloudFunctionService = gcpserv.NewCommandableCloudFunctionService("mygroup")
	// The "controller" dependency is required by all Commandable services
	c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("mygroup", "controller", "default", "controller", "1.0"))
	return c
}

```