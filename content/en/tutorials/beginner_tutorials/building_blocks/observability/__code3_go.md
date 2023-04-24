
```go
import (
	"context"

	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	ctrace "github.com/pip-services3-gox/pip-services3-components-gox/trace"
)

type MyComponent struct {
	// ...
	tracer *ctrace.CompositeTracer
}

func (c *MyComponent) SetReferences(ctx context.Context, references cref.IReferences) {
	c.tracer.SetReferences(ctx, references)
}

func (c *MyComponent) DoSomething(ctx context.Context, correlationId string) {
	timing := c.tracer.BeginTrace(ctx, correlationId, "mycomponent", "do_something")

	// ...

	if err != nil {
		timing.EndFailure(ctx, err)
	} else {
		timing.EndTrace(ctx)
	}
}


```
