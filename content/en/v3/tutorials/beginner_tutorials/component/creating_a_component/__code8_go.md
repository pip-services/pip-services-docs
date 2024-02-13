
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

