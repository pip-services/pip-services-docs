
```go
import cdata "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/data"

updated, _ = persistence.UpdatePartially(context.Background(), "2", *cdata.NewAnyValueMapFromTuples(
	"content", "new content 2 - partially updated",
))
```
