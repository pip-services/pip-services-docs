
```go
import (
	"context"

	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	clog "github.com/pip-services4/pip-services4-go/pip-services4-observability-go/log"
)

type MyComponent struct {
	// ...
	logger *clog.CompositeLogger
}

func (c *MyComponent) SetReferences(ctx context.Context, references cref.IReferences) {
	c.logger.SetReferences(ctx, references)
}

func (c *MyComponent) DoSomething(ctx context.Context, correlationId string) {
	c.logger.Debug(ctx, correlationId, "Did something...")
	// ...
}

```
