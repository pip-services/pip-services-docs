
```go
import (
	"context"

	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
)

type IMyDataPersistence[T any] interface {
	GetOneRandom(ctx context.Context, correlationId string, filter cdata.FilterParams) (item T, err error)
	Create(ctx context.Context, correlationId string, item T) (result T, err error)
}

```

