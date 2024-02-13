
```go
import (
	"context"

	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	clog "github.com/pip-services3-gox/pip-services3-components-gox/log"
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
