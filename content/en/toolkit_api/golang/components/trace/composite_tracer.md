---
type: docs
title: "CompositeTracer"
linkTitle: "CompositeTracer"
MethodsgitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Aggregates all tracers from component references under a single component.

    It allows to record traces and conveniently send them to multiple destinations. 
---

### Description

The CompositeTracer class allows you to aggregate all tracers from component references under a single component.

#### References

- **\*:tracer:\*:\*:1.0** - (optional) [ITracer](../itracer) components to pass operation tracessource

### Constructors

#### NewCompositeTracer
NewCompositeTracer creates a new instance of the tracer.

> NewCompositeTracer() [*CompositeTracer]()

#### NewCompositeTracerFromReferences
Creates a new instance of the tracer.

> NewCompositeTracerFromReferences(ctx context.Context, references [cref.IReferences](../../../commons/refer/ireferences)) [*CompositeTracer]()

- **ctx**: context.Context - operation context.
- **references**: [cref.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Fields

<span class="hide-title-link">

#### Tracers
List of tracers
> **Tracers**: [][ITracer](../itracer)

</span>

### Methods

#### BeginTrace
Begings recording an operation trace

> (c [*CompositeTracer]()) BeginTrace(ctx context.Context, correlationId string, component string, operation string) [*TraceTiming](../trace_timing)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [*TraceTiming](../trace_timing) - trace timing object.


#### Failure
Records an operation failure with its name, duration and error

> (c [*CompositeTracer]()) Failure(ctx context.Context, correlationId string, component string, operation string, err error, duration int64)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **err**: error - error object associated with this trace.
- **duration**: int64 - execution duration in milliseconds.


#### SetReferences
Sets references to dependent components.

> (c [*CompositeTracer]()) SetReferences(ctx context.Context, references [cref.IReferences](../../../commons/refer/ireferences)

- **ctx**: context.Context - operation context.
- **references**: [cref.IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.

#### Trace
Records an operation trace with its name and duration

> (c [*CompositeTracer]()) Trace(ctx context.Context, correlationId string, component string, operation string, duration int64)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: int64 - execution duration in milliseconds.

### Examples

```go
type MyComponent struct {
	tracer *CompositeTracer
}
func NewMyComponent() *MyComponent{
	return &MyComponent{
		tracer: NewCompositeTracer(nil);
	}
}
func (c* MyComponent) SetReferences(ctx context.Context, references IReferences) {
	c.tracer.SetReferences(references)
	...
}
public MyMethod(ctx context.Context, correlatonId string) {
	timing := c.tracer.BeginTrace(ctx, correlationId, "mycomponent", "mymethod");
	...
	defer timing.EndTrace(ctx);
	if err != nil {
		timing.EndFailure(ctx, err);
	}
}
```

### See also
- #### [ITracer](../itracer)
