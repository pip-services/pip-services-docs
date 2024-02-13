---
type: docs
title: "CompositeTracer"
linkTitle: "CompositeTracer"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
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

> public CompositeTracer( [IReferences](../../../components/refer/ireferences) references) throws ReferenceException, ConfigException

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Fields

<span class="hide-title-link">

#### _TRACERS
List of tracers
> List<[[ITracer](../itracer)]> **_tracers** = new ArrayList<>()
</span>

### Instance methods

#### begin_trace
Begings recording an operation trace

> [TraceTiming](../trace_timing) beginTrace([IContext](../../../components/context/icontext) context, String component, String operation)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### failure
Records an operation failure with its name, duration and error

> void failure([IContext](../../../components/context/icontext) context, String component, String operation, Exception error, long duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: float - execution duration in milliseconds.


#### set_references
Sets references to dependent components.

> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration

> trace(context: Optional[IContext], component: str, operation: str, duration: float)
void trace([IContext](../../../components/context/icontext) context, String component, String operation, Long duration)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: String - a name of called component
- **operation**: String - a name of the executed operation.
- **duration**: Long - execution duration in milliseconds.

### Examples

```java
{@code
  public class MyComponent implements IReferenceable {
      private CompositeTracer _tracer = new CompositeTracer();
 
      @Override
      public void setReferences(IReferences references) throws ReferenceException, ConfigException {
          this._tracer.setReferences(references);
          // ...
      }
 
      public void myMethod(IContext context) {
          var timing = this._tracer.beginTrace(context, "mycomponent", "mymethod");
          try {
              // ...
              timing.endTrace();
          } catch (Exception err) {
              timing.endFailure(err);
          }
      }
  }
  }
```

### See also
- #### [ITracer](../itracer)
