
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
    
// Unsets (clears) previously set references to dependent components.
func (c *MyComponentA) UnsetReferences(ctx context.Context) {
	c.anotherComponent = nil
	c.status = "Un-referenced"
	fmt.Println("References cleared")

}

```

