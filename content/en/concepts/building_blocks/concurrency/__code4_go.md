
```go
import (
	"context"

	ccache "github.com/pip-services3-gox/pip-services3-components-gox/lock"
)

type MyComponent struct {
	lock ccache.ILock
}

// ...

func (c *MyComponent) ProcessMyObject(ctx context.Context, correlationId string, objectId string) error {
	// Try to acquire lock for 10 secs
	ok, err := c.lock.TryAcquireLock(ctx, correlationId, "mycomponent:"+objectId, 10000)
	if !ok || err != nil {
		// Other instance already executing that transaction
		return err
	}

	// ...
}
```
