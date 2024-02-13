---
type: docs
title: "CompositeTracer"
linkTitle: "CompositeTracer"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-observability-dart"
description: >
    Aggregates all tracers from component references under a single component.

    It allows to record traces and conveniently send them to multiple destinations. 
---

**Implements:** [ITracer](../itracer), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The CompositeTracer class allows you to aggregate all tracers from component references under a single component.

#### References

- **\*:tracer:\*:\*:1.0** - (optional) [ITracer](../itracer) components to pass operation tracessource

### Constructors
Creates a new instance of the tracer.

> CompositeTracer([[IReferences?](../../../components/refer/ireferences) references])

- **references**: [IReferences?](../../../components/refer/ireferences) - references to locate the component dependencies.

### Fields

<span class="hide-title-link">

#### _tracers
List of tracers
> **_tracers**: List<[ITracer](../itracer)>

</span>

### Instance methods

#### beginTrace
Begings recording an operation trace

`@override`
> [TraceTiming](../trace_timing) beginTrace(IContext? context, String component, String operation)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### failure
Records an operation failure with its name, duration and error

`@override`
> void failure(IContext? context, String component, String operation, Exception error, int duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: int - execution duration in milliseconds.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration

> void trace(IContext? context, String component, String operation, int duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: String - a name of called component
- **operation**: String - a name of the executed operation.
- **duration**: int - execution duration in milliseconds.

### Examples

```dart
class MyComponent implements IReferenceable {
    var _tracer = CompositeTracer();
    void setReferences(IReferences references) {
        _tracer.setReferences(references);
        ...
    }
    void myMethod(String correlatonId) {
        var timing = _tracer.beginTrace(context, "mycomponent", "mymethod");
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
