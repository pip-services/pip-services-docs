
```go
import (
	"reflect"
	persist "github.com/pip-services3-go/pip-services3-data-go/persistence"
)

var p interface{}
persister := persist.NewJsonFilePersister(reflect.TypeOf(p), "./data.json")

```
