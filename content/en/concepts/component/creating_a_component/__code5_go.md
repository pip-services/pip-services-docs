
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
	dummyVariable    string

	status string
}
    
// ...

func (c *MyComponentA) MyTask(correlationId string) {
	fmt.Println("Doing my business task")
	c.dummyVariable = "dummy value"
}

```

