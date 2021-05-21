---
type: docs
title: "CompositeTracer"
linkTitle: "CompositeTracer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Aggregates all tracers from component references under a single component.

    It allows to record traces and conveniently send them to multiple destinations. 
---

**Implemenst:** [ITracer](../itracer), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The CompositeTracer class allows you to aggregate all tracers from component references under a single component.

#### References

- **\*:tracer:\*:\*:1.0** - (optional) [ITracer](../itracer) components to pass operation tracessource

### Constructors
Creates a new instance of the tracer.

> `public` constructor(references: [IReferences](../../../commons/refer/ireferences) = null)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Fields

<span class="hide-title-link">

#### _tracers
List of tracers
> `protected` **_tracers**: [ITracer](../itracer)[]

</span>

### Methods

#### beginTrace
Begings recording an operation trace

> `public` beginTrace(correlationId: string, component: string, operation: string): [TraceTiming](../trace_timing)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### failure
Records an operation failure with its name, duration and error

> `public` failure(correlationId: string, component: string, operation: string, error: Error,
duration: number)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **error**: Error - an error object associated with this trace.
- **duration**: number - execution duration in milliseconds.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration

> `public` trace(correlationId: string, component: string, operation: string, duration: number)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - a name of called component
- **operation**: string - a name of the executed operation.
- **duration**: number - execution duration in milliseconds.

### Examples

```typescript
class MyComponent implements IReferenceable {
    private _tracer: CompositeTracer = new CompositeTracer();

    public setReferences(references: IReferences): void {
        this._tracer.setReferences(references);
        ...
    }

    public myMethod(correlatonId: string): void {
        var timing = this._tracer.beginTrace(correlationId, "mycomponent", "mymethod");
        try {
            ...
            timing.endTrace();
        } catch (err) {
            timing.endFailure(err);
        }
    }
}
```

### See also
- #### [ITracer](../itracer)
