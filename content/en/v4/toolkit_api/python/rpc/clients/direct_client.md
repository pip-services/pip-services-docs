---
type: docs
title: "DirectClient"
linkTitle: "DirectClient"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-rpc-python"
description: >
    Abstract client that calls a controller directly in the same memory space.

   
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable)

### Description

The DirectClientclass allows you to create clients that call a controller directly in the same memory space.

Important points

-  It is used when multiple microservices are deployed in a single container (monolyth) and communication between them can be done by direct calls rather than through the network.

#### Configuration parameters

- **dependencies**:
    - **controller**: override controller descriptor

#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../observability/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve a connection


### Fields

<span class="hide-title-link">

#### _controller
The controller reference.
> **_controller**: Any

#### _opened
The open flag.
> **_opened**: bool = True

#### _logger
The logger.
> **_logger**: [CompositeLogger](../../../observability/log/composite_logger) = CompositeLogger()

#### _counters
The performance counters
> **_counters**: [CompositeCounters](../../../observability/count/composite_counters) = CompositeCounters()

#### _dependency_resolver
The dependency resolver used to get the controller's reference.
> **_dependency_resolver**: [DependencyResolver](../../../components/refer/dependency_resolver) = DependencyResolver()

</span>



### Instance methods

#### close
Closes a component and frees used resources.

> close(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### _instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> _instrument(context: Optional[str], name: str): [InstrumentTiming](../../rpc/trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: str - method name.
- **returns**: [InstrumentTiming](../../rpc/trace/instrument_timing) - InstrumentTiming object used to end the time measurement.



#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - True if the component has been opened and False otherwise.


#### open
Opens the component.

> open(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Examples

```python
class MyDirectClient(DirectClient, IMyClient):
    def __init__(self):
        super(MyDirectClient, self).__init__()
        self._dependencyResolver.put('controller', Descriptor("mygroup", "controller", "*", "*", "*"))

    # ...

    def get_data(self, context, id):
        timing = self.instrument(context, 'myclient.get_data')
        result = self._controller.get_data(context, id)
        timing.end_timing()
        return result

    client = MyDirectClient()
    client.set_references(References.from_tuples(Descriptor("mygroup","controller","default","default","1.0"), controller))
    data = client.get_data("123", "1")
    # ...
```
