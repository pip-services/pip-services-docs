
```go
import (
	"fmt"

	config "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	refer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	run "github.com/pip-services3-gox/pip-services3-commons-gox/run"
)


type MyComponentB struct {
    // ...
}
   

type MyComponentA struct {
	config.IConfigurable
	refer.IReferenceable
	run.IOpenable

	param1 string
	param2 int
	open   bool

	anotherComponent interface{}

	status string
}
    

func (c *MyComponentA) IsOpen() bool {
	return c.open
}

func (c *MyComponentA) Open(ctx context.Context, correlationId string) error {
	c.open = true
	c.status = "Open"
	fmt.Println("MyComponentA has been opened.")
	return nil
}


```

