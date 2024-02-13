---
type: docs
title: "CompositeTracer"
linkTitle: "CompositeTracer"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-observability-python"
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

> CompositeTracer(references: [IReferences](../../../components/refer/ireferences) = None)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Fields

<span class="hide-title-link">

#### _TRACERS
List of tracers
> **_TRACERS**: List[[ITracer](../itracer)] = []

</span>

### Instance methods

#### begin_trace
Begings recording an operation trace

> begin_trace(context: Optional[IContext], component: str, operation: str): [TraceTiming](../trace_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: str - name of the called component
- **operation**: str - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### failure
Records an operation failure with its name, duration and error

> failure(context: Optional[IContext], component: str, operation: str, error: Exception,
duration: float)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: str - name of the called component
- **operation**: str - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: float - execution duration in milliseconds.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration

> trace(context: Optional[IContext], component: str, operation: str, duration: float)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: str - a name of called component
- **operation**: str - a name of the executed operation.
- **duration**: float - execution duration in milliseconds.

### Examples

```python
class MyComponent(IReferenceable):
    def __init__(self):
        self.__tracer = CompositeTracer()

    def set_references(self, references: IReferences):
        self.__tracer.set_references(references)
        ...

    def my_method(self, correlaton_id):
        timing = self.__tracer.begin_trace(correlaton_id, "mycomponent", "mymethod")
        try:
            ...
            timing.end_trace()
        except Exception as err:
            timing.end_failure(err)
```

### See also
- #### [ITracer](../itracer)
