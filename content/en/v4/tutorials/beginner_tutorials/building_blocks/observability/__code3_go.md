
```go
import (
	"context"

	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	ctrace "github.com/pip-services4/pip-services4-go/pip-services4-observability-go/trace"
)

type MyComponent struct {
	// ...
	tracer *ctrace.CompositeTracer
}

func (c *MyComponent) SetReferences(ctx context.Context, references cref.IReferences) {
	c.tracer.SetReferences(ctx, references)
}

func (c *MyComponent) DoSomething(ctx context.Context) {
	timing := c.tracer.BeginTrace(ctx, "mycomponent", "do_something")

	// ...

	if err != nil {
		timing.EndFailure(err)
	} else {
		timing.EndTrace()
	}
}
```
