
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	refer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	run "github.com/pip-services4/pip-services4-go/pip-services4-components-go/run"
)

type MyComponentB struct {
	// ...
}

type MyComponentA struct {
	cconf.IConfigurable
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
