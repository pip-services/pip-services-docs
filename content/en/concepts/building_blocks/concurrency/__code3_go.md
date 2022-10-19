
```go
import (
	"context"

	ccache "github.com/pip-services3-gox/pip-services3-components-gox/lock"
)

type MyComponent struct {
	lock ccache.ILock
}

// ...

func (c *MyComponent) ProcessMyObject(ctx context.Context, correlationId string, objectId string) {
	// Acquire lock for 10 secs
	c.lock.AcquireLock(ctx, correlationId, "mycomponent:"+objectId, 10000, 10000)
	// Release lock
	defer c.lock.ReleaseLock(ctx, correlationId, "mycomponent:"+objectId)

	// ...
}

```
