
```go
import (
	"context"

	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	cmsg "github.com/pip-services4/pip-services4-go/pip-services4-messaging-go/queues"
	ccount "github.com/pip-services4/pip-services4-go/pip-services4-observability-go/count"
)

type MyComponent struct {
	// ...
	counters *ccount.CompositeCounters
}

func (c *MyComponent) SetReferences(ctx context.Context, references cref.IReferences) {
	c.counters.SetReferences(ctx, references)
}

func (c *MyComponent) OnMessage(ctx context.Context, message *cmsg.MessageEnvelope) {
	timing := c.counters.BeginTiming(ctx, "mycomponent:msg_time")
	defer timing.EndTiming(ctx)

	c.counters.Increment(ctx, "mycomponent:msg_count", 1)
	// ...

	if err != nil {
		c.counters.Increment(ctx, "mycomponent:msg_errors", 1)
	}
}
```
