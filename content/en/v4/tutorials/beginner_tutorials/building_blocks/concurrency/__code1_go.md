
```go
import (
	"context"

	cstate "github.com/pip-services4/pip-services4-go/pip-services4-logic-go/state"
)

type MyComponent struct {
	store cstate.IStateStore[any]
}

// ...

func (c *MyComponent) DoSomething(ctx context.Context, objectId string) {
	// Get state from the store or create a new one if the state wasn't found
	state := c.store.Load(ctx, "mycomponent:"+objectId)
	if state != nil {
		// ...
	}

	c.store.Save(ctx, "mycomponent:"+objectId, state)
}
```
