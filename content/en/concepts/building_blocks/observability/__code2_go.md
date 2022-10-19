
```go
import (
	"context"

	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	ccount "github.com/pip-services3-gox/pip-services3-components-gox/count"
	cmsg "github.com/pip-services3-gox/pip-services3-messaging-gox/queues"
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
