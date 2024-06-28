
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	crefer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	ccache "github.com/pip-services4/pip-services4-go/pip-services4-logic-go/cache"
	clock "github.com/pip-services4/pip-services4-go/pip-services4-logic-go/lock"
)

type MyComponent struct {
	cache ccache.ICache[any]
	lock  *clock.NullLock
}

func (c *MyComponent) SetReferences(ctx context.Context, references crefer.IReferences) {
	res, descrErr := references.GetOneRequired(crefer.NewDescriptor("*", "cache", "*", "*", "1.0"))
	if descrErr != nil {
		panic(descrErr)
	}
	c.cache = res.(ccache.ICache[any])

	res, descrErr = references.GetOneRequired(crefer.NewDescriptor("*", "lock", "*", "*", "1.0"))
	if descrErr != nil {
		panic(descrErr)
	}
	c.lock = res.(*clock.NullLock)
}

func (c *MyComponent) StoreResult(ctx context.Context, param1 string) {
	// Lock
	c.lock.AcquireLock(ctx, "mykey", 1000, 1000)

	// Do processing
	// ...
	fmt.Println("The stored value is " + param1)

	// Store result to cache async
	c.cache.Store(ctx, "mykey", param1, 3600000)

	// Release lock async
	c.lock.ReleaseLock(ctx, "mykey")
}

func (c *MyComponent) ObtainResult(ctx context.Context) any {
	// Lock..
	c.lock.AcquireLock(ctx, "mykey", 1000, 1000)

	// Do processing
	// ...
	result, _ := c.cache.Retrieve(ctx, "mykey")

	// Release lock async
	c.lock.ReleaseLock(ctx, "mykey")

	return result
}

func main() {
	ctx := context.Background()
	lock := clock.NewMemoryLock()
	config := cconf.NewConfigParamsFromTuples("retry_timeout", 200)
	lock.Configure(context.Background(), config)

	lock.AcquireLock(context.Background(), "mykey", 1000, 1000)
	lock.ReleaseLock(context.Background(), "mykey")

	// Use the component
	my_component := &MyComponent{}
	my_component.SetReferences(ctx, crefer.NewReferencesFromTuples(ctx,
		crefer.NewDescriptor("pip-services", "cache", "memory", "default", "1.0"), ccache.NewMemoryCache[any](),
		crefer.NewDescriptor("pip-services", "lock", "memory", "default", "1.0"), clock.NewNullLock(),
	))

	my_component.StoreResult(ctx, "param1")

	result := my_component.ObtainResult(ctx)

	fmt.Println("The retrieved value is ", result)
}

```
