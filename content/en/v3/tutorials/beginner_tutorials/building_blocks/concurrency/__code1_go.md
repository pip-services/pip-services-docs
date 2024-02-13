
```go
import (
	"context"

	cstate "github.com/pip-services3-gox/pip-services3-components-gox/state"
)

type MyComponent struct {
	store cstate.IStateStore[any]
}

// ...

func (c *MyComponent) DoSomething(ctx context.Context, correlationId string, objectId string) {
	// Get state from the store or create a new one if the state wasn't found
	state := c.store.Load(ctx, correlationId, "mycomponent:"+objectId)
	if state != nil {
		// ...
	}

	c.store.Save(ctx, correlationId, "mycomponent:"+objectId, state)
}

```
