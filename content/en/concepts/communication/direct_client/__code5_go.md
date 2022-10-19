
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	rpcclnt "github.com/pip-services3-gox/pip-services3-rpc-gox/clients"
)

func main() {
	// Instantiation
	myController := &MyController{}

	// Instantiation
	client := NewMyDirectClient()

	// Reference setting
	client.SetReferences(context.Background(), cref.NewReferencesFromTuples(context.Background(),
		cref.NewDescriptor("pip-services", "controller", "controller", "default", "1.0"), myController,
	))

	// Calling "my_method"
	client.MyMethod()
}

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

type MyController struct {
}

func (c *MyController) Configure(ctx context.Context, config *cconf.ConfigParams) {

}

func (c *MyController) SetReferences(ctx context.Context, references cref.IReferences) {

}

func (c *MyController) MyMethod() {
	fmt.Println("Hello world")
}
```
