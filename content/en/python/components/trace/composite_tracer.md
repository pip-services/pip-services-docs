---
type: docs
title: "CompositeTracer"
linkTitle: "CompositeTracer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Aggregates all tracers from component references under a single component.

    It allows to record traces and conveniently send them to multiple destinations. 
---

**Implemenst:** [ITracer](../itracer), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The CompositeTracer class allows you to ggregate all tracers from component references under a single component.

#### References

- **\*:tracer:\*:\*:1.0** - (optional) [ITracer](../itracer) components to pass operation tracessource

### Constructors
Creates a new instance of the tracer.

> CompositeTracer(references: [IReferences](../../../commons/refer/ireferences) = None)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Fields

<span class="hide-title-link">

#### _TRACERS
List of tracers
> **_TRACERS**: List[ITracer] = []

</span>

### Methods

#### begin_trace
Begings recording an operation trace

> begin_trace(correlation_id: Optional[str], component: str, operation: str): [TraceTiming](../trace_timing)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **component**: str - a name of called component
- **operation**: str - a name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### failure
Records an operation failure with its name, duration and error

> failure(correlation_id: Optional[str], component: str, operation: str, error: Exception,
duration: float)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **component**: str - a name of called component
- **operation**: str - a name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: float - execution duration in milliseconds.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration

> trace(correlation_id: Optional[str], component: str, operation: str, duration: float)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **component**: str - a name of called component
- **operation**: str - a name of the executed operation.
- **duration**: float - execution duration in milliseconds.

**Example:**

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
