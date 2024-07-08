
```go
import (
	"context"

	clock "github.com/pip-services4/pip-services4-go/pip-services4-logic-go/lock"
)

type MyComponent struct {
	lock clock.ILock
}

// ...

func (c *MyComponent) ProcessMyObject(ctx context.Context, objectId string) error {
	// Try to acquire lock for 10 secs
	ok, err := c.lock.TryAcquireLock(ctx, "mycomponent:"+objectId, 10000)
	if !ok || err != nil {
		// Other instance already executing that transaction
		return err
	}

	// ...
}
```
