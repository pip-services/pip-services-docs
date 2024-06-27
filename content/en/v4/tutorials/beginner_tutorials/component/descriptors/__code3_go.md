
```go
import (
	"fmt"

	refer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
)

func main() {
	locator := refer.NewDescriptor("mygroup", "connector", "aws", "default", "1.0")

	fmt.Println(locator.Group())   // returns "my_group"
	fmt.Println(locator.Kind())    // returns "aws"
	fmt.Println(locator.Name())    // returns "default"
	fmt.Println(locator.Version()) // returns "1.0"
}
```
