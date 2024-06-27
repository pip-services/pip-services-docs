
```go
import (
	refer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
)

func main() {
	locator1 := refer.NewDescriptor("mygroup", "connector", "aws", "default", "1.0")
	locator1.String()
}
```
