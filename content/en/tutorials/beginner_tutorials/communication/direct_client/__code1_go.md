
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

func main() {
    // Instantiation
	myController := &MyController{}
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
