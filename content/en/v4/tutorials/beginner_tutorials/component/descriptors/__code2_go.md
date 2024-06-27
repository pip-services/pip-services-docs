
```go
import (
	refer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
)

func main() {
	// Locate all connectors (match by type)
	locator, _ := refer.ParseDescriptorFromString("*:connector:*:*:*")

	// Locate all connectors for a specific microservice (match by group and type)
	locator, _ = refer.ParseDescriptorFromString("mygroup:connector:*:*:*")

	// Locate a specific component (match by name)
	locator, _ = refer.ParseDescriptorFromString("*:*:*:my_name:*")
}
```
