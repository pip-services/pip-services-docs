
```go
import (
	"context"

	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
)

type IMyDataPersistence[T any] interface {
	GetOneRandom(ctx context.Context, filter cquery.FilterParams) (item T, err error)
	Create(ctx context.Context, item T) (result T, err error)
}
```
