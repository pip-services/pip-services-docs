
```go
import (
	"reflect"

	config "github.com/pip-services3-go/pip-services3-commons-go/config"
	persist "github.com/pip-services3-go/pip-services3-data-go/persistence"
)

var p interface{}
persister := persist.NewJsonFilePersister(reflect.TypeOf(p), "")
myConfig := config.NewConfigParamsFromTuples("path", "./data.json")
persister.Configure(myConfig)
```
