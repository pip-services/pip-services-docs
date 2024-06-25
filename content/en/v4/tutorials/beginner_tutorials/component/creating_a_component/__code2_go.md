
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
)

type MyComponentA struct {
	cconf.IConfigurable

	param1 string
	param2 int
	open   bool

	status string
}

// Creates a new instance of the component.
func NewMyComponentA() *MyComponentA {
	fmt.Println("MyComponentA has been created.")

	return &MyComponentA{
		param1: "ABC",
		param2: 123,
		open:   false,
		status: "Created",
	}
}

func (c *MyComponentA) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.param1 = config.GetAsStringWithDefault("param1", "ABC")
	c.param2 = config.GetAsIntegerWithDefault("param2", 123)
	c.status = "Configured"
	fmt.Println("MyComponentA has been configured.")
}
```
