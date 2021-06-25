---
type: docs
title: "CompositeTracer"
linkTitle: "CompositeTracer"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
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
Creates a new instance of the tracer.

> NewCompositeTracer(references [cref.IReferences](../../../commons/refer/ireferences)) [*CompositeTracer]()

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

> (c [*CompositeTracer]()) BeginTrace(correlationId string, component string, operation string) [*TraceTiming](../trace_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [*TraceTiming](../trace_timing) - trace timing object.


#### Failure
Records an operation failure with its name, duration and error

> (c [*CompositeTracer]()) Failure(correlationId string, component string, operation string, err error, duration int64)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **err**: error - error object associated with this trace.
- **duration**: int64 - execution duration in milliseconds.


#### SetReferences
Sets references to dependent components.

> (c [*CompositeTracer]()) SetReferences(references [cref.IReferences](../../../commons/refer/ireferences)

- **references**: [cref.IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.

#### Trace
Records an operation trace with its name and duration

> (c [*CompositeTracer]()) Trace(correlationId string, component string, operation string, duration int64)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: int64 - execution duration in milliseconds.

### Examples

```go
type MyComponent struct {
    tracer CompositeTracer
}

func NewMyComponent() *MyComponent{
	return &MyComponent{
		tracer: NewCompositeTracer(nil);
   }
}
func (c* MyComponent) SetReferences(references IReferences) {
    c.tracer.SetReferences(references)
    ...
}
func (c* MyComponent) MyMethod(correlatonId string) {
    timing := c.tracer.BeginTrace(correlationId, "mycomponent", "mymethod");
        ...
        timing.EndTrace();
    if err != nil {
        timing.EndFailure(err);
    }
}
```

### See also
- #### [ITracer](../itracer)
