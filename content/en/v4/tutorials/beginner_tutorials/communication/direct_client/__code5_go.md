
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	rpcclnt "github.com/pip-services4/pip-services4-go/pip-services4-rpc-go/clients"
)

func main() {
	// Instantiation
	myService := &MyService{}

	// Instantiation
	client := NewMyDirectClient()

	// Reference setting
	client.SetReferences(context.Background(), cref.NewReferencesFromTuples(context.Background(),
		cref.NewDescriptor("pip-services", "service", "service", "default", "1.0"), myService,
	))

	// Calling "my_method"
	client.MyMethod()
}

// Direct client
type MyDirectClient struct {
	*rpcclnt.DirectClient
	dependencyResolver *cref.DependencyResolver
	service            *MyService
}

func NewMyDirectClient() *MyDirectClient {
	c := &MyDirectClient{}
	c.dependencyResolver = cref.NewDependencyResolver()
	c.dependencyResolver.Put(context.Background(), "service", cref.NewDescriptor("pip-services", "service", "*", "*", "1.0"))
	return c
}

func (c *MyDirectClient) SetReferences(ctx context.Context, references cref.IReferences) {
	c.dependencyResolver.SetReferences(ctx, references)
	res, err := c.dependencyResolver.GetOneRequired("service")
	if err != nil {
		panic(err)
	}
	c.service = res.(*MyService)
}

func (c *MyDirectClient) MyMethod() {
	c.service.MyMethod()
}

type MyService struct {
}

func (c *MyService) Configure(ctx context.Context, config *cconf.ConfigParams) {

}

func (c *MyService) SetReferences(ctx context.Context, references cref.IReferences) {

}

func (c *MyService) MyMethod() {
	fmt.Println("Hello world")
}
```
