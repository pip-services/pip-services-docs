
```go
// Pre-requisites
import (
	"context"
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	rpcclnt "github.com/pip-services3-gox/pip-services3-rpc-gox/clients"
)


// Direct client
type MyDirectClient struct {
	*rpcclnt.DirectClient
	dependencyResolver *cref.DependencyResolver
	controller         *MyController
}

func NewMyDirectClient() *MyDirectClient {
	c := &MyDirectClient{}
    c.dependencyResolver = cref.NewDependencyResolver()
	c.dependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("pip-services", "controller", "*", "*", "1.0"))
	return c
}

func (c *MyDirectClient) SetReferences(ctx context.Context, references cref.IReferences) {
	c.dependencyResolver.SetReferences(ctx, references)
	res, err := c.dependencyResolver.GetOneRequired("controller")
	if err != nil {
		panic(err)
	}
	c.controller = res.(*MyController)
}

func (c *MyDirectClient) MyMethod() {
	c.controller.MyMethod()
}

// Instantiation
client := NewMyDirectClient();
```
