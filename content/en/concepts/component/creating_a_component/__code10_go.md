
```go
import (
	"fmt"

	config "github.com/pip-services3-go/pip-services3-commons-go/config"
	refer "github.com/pip-services3-go/pip-services3-commons-go/refer"
)

func main() {
	// Step 1 - Creation
	myComponentA := NewMyComponentA()
	myComponentB := NewMyComponentB()

	// Step 2 - Configure the component
	myComponentA.Configure(config.NewConfigParamsFromTuples(
		"param1", "XYZ",
		"param2", "987",
	))

	// Step 3 - Referencing
	// Set references to the component
	myComponentA.SetReferences(refer.NewReferencesFromTuples(
		refer.NewDescriptor("myservice", "mycomponent-b", "default", "default", "1.0"), myComponentB,
	))

	// Step 4 - Openning
	myComponentA.Open("123")

	// Step 5 - Execution
	myComponentA.MyTask("123")

	// Step 6 - Closing
	myComponentA.Close("123")

	// Step 7 - Un-referencing
	myComponentA.UnsetReferences()

	// Step 8 - Destruction
	defer func() {
		if !NewMyComponentA().IsOpen() {
			fmt.Println("Component destroyed")
		}
	}()
}

```

