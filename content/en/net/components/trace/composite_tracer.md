---
type: docs
title: "CompositeTracer"
linkTitle: "CompositeTracer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Aggregates all tracers from component references under a single component.

    It allows to record traces and conveniently send them to multiple destinations. 
---

**Inherits**: [ITracer](../itracer), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The CompositeTracer class allows you to aggregate all tracers from component references under a single component.

#### References

- **\*:tracer:\*:\*:1.0** - (optional) [ITracer](../itracer) components to pass operation tracessource

### Constructors
Creates a new instance of the tracer.

> `public` CompositeTracer([IReferences](../../../commons/refer/ireferences) references = null)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Fields

<span class="hide-title-link">

#### _tracers
List of tracers
> `protected` **_tracers**: IList<[ITracer](../itracer)> = new List<[ITracer](../itracer)>()

</span>

### Instance methods

#### BeginTrace
Begings recording an operation trace

> `public` [TraceTiming](../trace_timing) BeginTrace(string correlationId, string component, string operation)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### Failure
Records an operation failure with its name, duration and error

> `public` void Failure(string correlationId, string component, string operation, Exception error,
long duration)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: long - execution duration in milliseconds.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### Trace
Records an operation trace with its name and duration

> `public` void Trace(string correlationId, string component, string operation, long duration)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - a name of called component
- **operation**: string - a name of the executed operation.
- **duration**: long - execution duration in milliseconds.

### Examples

```cs
class MyComponent: IReferenceable {
    private CompositeTracer _tracer = new CompositeTracer();
    public void SetReferences(IReferences references)
    {
        _tracer.SetReferences(references);
        ...
    }
    public void MyMethod(string correlatonId)
    {
        var timing = this._tracer.BeginTrace(correlationId, "mycomponent", "mymethod");
        try {
            ...
            timing.EndTrace();
        } catch {
            timing.EndFailure(err);
        }
    }
}
```

### See also
- #### [ITracer](../itracer)
