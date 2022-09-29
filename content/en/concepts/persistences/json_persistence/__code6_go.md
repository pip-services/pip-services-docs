
```go
import (
	"fmt"
	"reflect"

	persist "github.com/pip-services3-gox/pip-services3-data-gox/persistence"
)

// Create the JSON persistence component
var p interface{}
persister := persist.NewJsonFilePersister(reflect.TypeOf(p), "./data.json")

// Save data on the JSON persistence object
persister.Save("123", []interface{}{"A1", "B1", "C1"})

// Read data from the JSON persistence object
items, _ := persister.Load("123")

fmt.Print(items)
```