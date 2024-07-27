
```go
import (
    cdata "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/data"
)

result, _ = persistence.UpdatePartially(context.Background(), "1", *cdata.NewAnyValueMap(map[string]interface{}{"content": "new content 1.1"}))
```
