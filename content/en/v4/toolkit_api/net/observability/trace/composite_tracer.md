---
type: docs
title: "CompositeTracer"
linkTitle: "CompositeTracer"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-observability-dotnet"
description: >
    Aggregates all tracers from component references under a single component.

    It allows to record traces and conveniently send them to multiple destinations. 
---

**Inherits**: [ITracer](../itracer), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The CompositeTracer class allows you to aggregate all tracers from component references under a single component.

#### References

- **\*:tracer:\*:\*:1.0** - (optional) [ITracer](../itracer) components to pass operation traces source

### Constructors
Creates a new instance of the tracer.

> `public` CompositeTracer([IReferences](../../../components/refer/ireferences) references = null)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Fields

<span class="hide-title-link">

#### _tracers
List of tracers
> `protected` **_tracers**: IList<[ITracer](../itracer)> = new List<[ITracer](../itracer)>()

</span>

### Instance methods

#### BeginTrace
Begings recording an operation trace

> `public` [TraceTiming](../trace_timing) BeginTrace(IContext context, string component, string operation)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### Failure
Records an operation failure with its name, duration and error

> `public` void Failure(IContext context, string component, string operation, Exception error,
long duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **error**: Exception - error object associated with this trace.
- **duration**: long - execution duration in milliseconds.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

#### Trace
Records an operation trace with its name and duration.

> `public` void Trace(IContext context, string component, string operation, long duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of called component
- **operation**: string - name of the executed operation.
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
        var timing = this._tracer.BeginTrace(context, "mycomponent", "mymethod");
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

