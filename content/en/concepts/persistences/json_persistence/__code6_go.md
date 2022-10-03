
```go
import (
	"fmt"
	persist "github.com/pip-services3-gox/pip-services3-data-gox/persistence"
)

// Create the JSON persistence component
persister := persist.NewJsonFilePersister[any]("./data.json")
// Save data on the JSON persistence object
persister.Save(context.Background(), "123", []interface{}{"A1", "B1", "C1"})
// Read data from the JSON persistence object
items, _ := persister.Load(context.Background(), "123")

fmt.Print(items)
```