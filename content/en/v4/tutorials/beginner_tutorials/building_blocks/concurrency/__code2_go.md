
```go
import (
	"context"

	ccache "github.com/pip-services4/pip-services4-go/pip-services4-logic-go/cache"
)

type MyComponent struct {
	cache ccache.ICache[any]
}

// ...

func (c *MyComponent) GetMyObjectById(ctx context.Context, objectId string) any {
	// Get state from the store or create a new one if the state wasn't found
	result, err := c.cache.Retrieve(ctx, "mycomponent:"+objectId)
	if err != nil {
		return err
	}
	if result != nil {
		return result
	}

	// Retrieve the object
	// ...

	c.cache.Store(ctx, "mycomponent:"+objectId, result, 1000)
	return result
}
```
