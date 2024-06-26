
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
	dummyVariable    string

	status string
}

// ...

func (c *MyComponentA) MyTask(ctx context.Context, correlationId string) {
	fmt.Println("Doing my business task")
	c.dummyVariable = "dummy value"
}
```
