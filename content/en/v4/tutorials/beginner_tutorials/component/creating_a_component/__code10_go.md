
```go
import (
	"fmt"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	refer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
)

func main() {
	// Step 1 - Creation
	myComponentA := NewMyComponentA()
	myComponentB := NewMyComponentB()

	// Step 2 - Configure the component
	myComponentA.Configure(ctx context.Context, cconf.NewConfigParamsFromTuples(
		"param1", "XYZ",
		"param2", "987",
	))

	// Step 3 - Referencing
	// Set references to the component
	myComponentA.SetReferences(ctx context.Context, refer.NewReferencesFromTuples(
		refer.NewDescriptor("myservice", "mycomponent-b", "default", "default", "1.0"), myComponentB,
	))

	// Step 4 - Openning
	myComponentA.Open(ctx context.Context, "123")

	// Step 5 - Execution
	myComponentA.MyTask(ctx context.Context, "123")

	// Step 6 - Closing
	myComponentA.Close(ctx context.Context, "123")

	// Step 7 - Un-referencing
	myComponentA.UnsetReferences(ctx context.Context)

	// Step 8 - Destruction
	defer func() {
		if !NewMyComponentA().IsOpen() {
			fmt.Println("Component destroyed")
		}
	}()
}

```
