
```go
import (
	"context"

	clock "github.com/pip-services4/pip-services4-go/pip-services4-logic-go/lock"
)

type MyComponent struct {
	lock clock.ILock
}

// ...

func (c *MyComponent) ProcessMyObject(ctx context.Context, objectId string) {
	// Acquire lock for 10 secs
	c.lock.AcquireLock(ctx, "mycomponent:"+objectId, 10000, 10000)
	// Release lock
	defer c.lock.ReleaseLock(ctx, "mycomponent:"+objectId)

	// ...
}
```
