
```go
import (
    cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
)

result, _ := persistence.UpdatePartially("", "1", cdata.NewAnyValueMap(map[string]interface{}{"content": "new content 1.1"}))
```
