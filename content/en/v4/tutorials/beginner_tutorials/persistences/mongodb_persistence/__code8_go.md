
```go
import (
    cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
)

item, err = persistence.GetOneRandom(context.Background(), cquery.NewFilterParamsFromTuples("key", "key 3"))
```
