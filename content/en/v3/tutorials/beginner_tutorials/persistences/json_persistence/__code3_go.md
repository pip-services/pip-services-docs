
```go
import (
	config "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	persist "github.com/pip-services3-gox/pip-services3-data-gox/persistence"
)

persister := persist.NewJsonFilePersister[any]("")
myConfig := config.NewConfigParamsFromTuples("path", "./data.json")
persister.Configure(context.Background(), myConfig)
```
