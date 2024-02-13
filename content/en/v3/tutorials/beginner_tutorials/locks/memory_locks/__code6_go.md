
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	crefer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	ccache "github.com/pip-services3-gox/pip-services3-components-gox/cache"
	clock "github.com/pip-services3-gox/pip-services3-components-gox/lock"
)

type MyComponent struct {
	cache ccache.ICache[any]
	lock  clock.MemoryLock
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
	c.lock = res.(clock.MemoryLock)
}

func (c *MyComponent) StoreResult(ctx context.Context, correlationId string, param1 string) {
	// Lock
	c.lock.AcquireLock(ctx, correlationId, "mykey", 1000, 1000)

	config := cconf.NewConfigParamsFromTuples("retry_timeout", 200)
	c.lock.Configure(ctx, config)

	// Do processing
	// ...
	fmt.Println("The stored value is " + param1)

	// Store result to cache async
	c.cache.Store(ctx, correlationId, "mykey", param1, 3600000)

	// Release lock async
	c.lock.ReleaseLock(ctx, correlationId, "mykey")
}

func (c *MyComponent) ObtainResult(ctx context.Context, correlationId string) any {
	// Lock..
	c.lock.AcquireLock(ctx, correlationId, "mykey", 1000, 1000)

	// Do processing
	// ...
	result, err := c.cache.Retrieve(ctx, correlationId, "mykey")

	// Release lock async
	c.lock.ReleaseLock(ctx, correlationId, "mykey")

	return result
}
    
    
func main() {
	ctx := context.Background()
	lock := clock.NewMemoryLock()
	config := cconf.NewConfigParamsFromTuples("retry_timeout", 200)
	lock.Configure(context.Background(), config)

	lock.AcquireLock(context.Background(), "123", "mykey", 1000, 1000)
	lock.ReleaseLock(context.Background(), "123", "mykey")

	// Use the component
	my_component := &MyComponent{}
	my_component.SetReferences(ctx, crefer.NewReferencesFromTuples(ctx,
		crefer.NewDescriptor("pip-services", "cache", "memory", "default", "1.0"), ccache.NewMemoryCache[any](),
		crefer.NewDescriptor("pip-services", "lock", "memory", "default", "1.0"), clock.NewMemoryLock(),
	))

	my_component.StoreResult(ctx, "123", "param1")

	result := my_component.ObtainResult(ctx, "123")

	fmt.Println("The retrieved value is " + result)
}
```
