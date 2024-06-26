
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
	refer.IUnreferenceable
	run.IOpenable

	param1 string
	param2 int
	open   bool

	anotherComponent interface{}
	dummyVariable    string

	status string
}

// ...

component := NewMyComponentA()

defer func() {
	if !component.IsOpen() {
		fmt.Println("Component destroyed")
	}
}()

// ...

component.Close(context.Background(), nil)
```
