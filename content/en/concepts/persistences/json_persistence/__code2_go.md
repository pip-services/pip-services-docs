
```go
import (
	"reflect"
	persist "github.com/pip-services3-gox/pip-services3-data-gox/persistence"
)

var p interface{}
persister := persist.NewJsonFilePersister(reflect.TypeOf(p), "./data.json")

```
