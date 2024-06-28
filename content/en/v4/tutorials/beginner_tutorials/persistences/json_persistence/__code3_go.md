
```go
import (
	"context"

	config "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	persist "github.com/pip-services4/pip-services4-go/pip-services4-persistence-go/persistence"
)

persister := persist.NewJsonFilePersister[any]("")
myConfig := config.NewConfigParamsFromTuples("path", "./data.json")
persister.Configure(context.Background(), myConfig)
```
