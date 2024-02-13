
```go
import (
	"context"

	ccache "github.com/pip-services3-gox/pip-services3-components-gox/cache"
)

type MyComponent struct {
	cache ccache.ICache[any]
}

// ...

func (c *MyComponent) GetMyObjectById(ctx context.Context, correlationId string, objectId string) any {
	// Get state from the store or create a new one if the state wasn't found
	result, err := c.cache.Retrieve(ctx, correlationId, "mycomponent:"+objectId)
	if err != nil {
		return err
	}
	if result != nil {
		return result
	}

	// Retrieve the object
	// ...

	c.cache.Store(ctx, correlationId, "mycomponent:"+objectId, result, 1000)
	return result
}

```
