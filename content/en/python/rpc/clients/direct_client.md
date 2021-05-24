---
type: docs
title: "DirectClient"
linkTitle: "DirectClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    Abstract client that calls controller directly in the same memory space.

   
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

The DirectClientclass allows you to create clients that call a controller directly in the same memory space.

Important points

-  It is used when multiple microservices are deployed in a single container (monolyth) and communication between them can be done by direct calls rather then through the network.

##### Configuration parameters

- **dependencies**:
    - **controller**: override controller descriptor

#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../components/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection


### Fields

<span class="hide-title-link">

#### _counters
A list of counters.
> **_counters**: List[[ICounters](../icounters)] = []

#### _controller
The controller reference.
> **_controller**: Any

#### _opened
The open flag.
> **_opened**: bool = True

#### _logger
The logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### _tracer
The tracer.
> **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer) = CompositeTracer()

#### _counters
The performance counters
> **_counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### _dependency_resolver
The dependency resolver to get controller reference.
> **_dependency_resolver**: [DependencyResolver](../../../commons/refer/dependency_resolver) = DependencyResolver()

</span>



### Instance methods

#### close
Closes component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### _instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> _instrument(correlation_id: Optional[str], name: str): [InstrumentTiming](../../services/instrument_timing)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.
- **name**: str - method name.
- **returns**: [InstrumentTiming](../../services/instrument_timing) - InstrumentTiming object to end the time measurement.



#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - True if the component has been opened and False otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

**Examples

```python
class MyDirectClient(DirectClient, IMyClient):
    def __init__(self):
        super(MyDirectClient, self).__init__()
        self._dependencyResolver.put('controller', Descriptor("mygroup", "controller", "*", "*", "*"))

    # ...

    def get_data(self, correlation_id, id):
        timing = self.instrument(correlationId, 'myclient.get_data')
        result = self._controller.get_data(correlationId, id)
        timing.end_timing()
        return result

    client = MyDirectClient()
    client.set_references(References.from_tuples(Descriptor("mygroup","controller","default","default","1.0"), controller))
    data = client.get_data("123", "1")
    # ...
```
