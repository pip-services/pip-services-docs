
```go
import (
    cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
)

updated, _ = persistence.UpdatePartially("123", "2", cdata.NewAnyValueMapFromTuples(
	"content", "new content 2 - partially updated",
))
```
