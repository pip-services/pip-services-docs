
```go
import (
	"reflect"

	config "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	persist "github.com/pip-services3-gox/pip-services3-data-gox/persistence"
)

var p interface{}
persister := persist.NewJsonFilePersister(reflect.TypeOf(p), "")
myConfig := config.NewConfigParamsFromTuples("path", "./data.json")
persister.Configure(myConfig)
```
