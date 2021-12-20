
```go
import (
    cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
)

result, _ := persistence.UpdatePartially("", "1", cdata.NewAnyValueMap(map[string]interface{}{"content": "new content 1.1"}))
```
