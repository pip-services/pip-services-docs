
```go
import (
    cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
)

updated, _ = persistence.UpdatePartially("123", "2", cdata.NewAnyValueMapFromTuples(
	"content", "new content 2 - partially updated",
))
```
