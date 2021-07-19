---
type: docs
title: "DirectClient<T>"
linkTitle: "DirectClient"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
description: >
    Abstract client that calls a controller directly in the same memory space.

   
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

The DirectClientclass allows you to create clients that call a controller directly in the same memory space.

Important points

-  It is used when multiple microservices are deployed in a single container (monolyth) and communication between them can be done by direct calls rather than through the network.

#### Configuration parameters

- **dependencies**:
    - **controller**: override controller descriptor

#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../components/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve a connection

### Constructors

Creates a new instance of the client.
> DirectClient()

### Fields

<span class="hide-title-link">

#### controller
The controller reference.
> **controller**: T

#### opened
The open flag.
> **opened**: bool = True

#### logger
The logger.
> **logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### counters
The performance counters
> **counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### dependencyResolver
The dependency resolver used to get the controller's reference.
> **dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver) = DependencyResolver()

</span>



### Instance methods

#### close
Closes a component and frees used resources.

`@override`
> Future close(String correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.


#### configure
Configures component by passing configuration parameters.

`@override`
> void configure(ConfigParams config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> [Timing](../../../components/timing) instrument(String correlationId, String name)

- **correlationId**: String - (optional) transaction id used to trace execution through a call chain.
- **name**: String - method name.
- **returns**: [Timing](../../../components/timing) - InstrumentTiming object used to end the time measurement.



#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - True if the component has been opened and False otherwise.


#### open
Opens the component.

`@override`
> Future open(String correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences(IReferences references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples

```dart
class MyDirectClient extends DirectClient<IMyController> implements IMyClient {
    public MyDirectClient(): super() {
      dependencyResolver.put('controller', Descriptor(
          "mygroup", "controller", "*", "*", "*"));
    }
    ...
    Future<MyData> getData(String correlationId, String id) async {
      var timing = instrument(correlationId, 'myclient.get_data');
      try {
      var result = await controller.getData(correlationId, id)
      timing.endTiming();
      return result;
      } catch (err){
         timing.endTiming();
         instrumentError(correlationId, 'myclient.get_data', err, reerror=true);
      });
    }
    ...
}

var client = MyDirectClient();
client.setReferences(References.fromTuples([
     Descriptor("mygroup","controller","default","default","1.0"), controller
]));

var result = await client.getData("123", "1")
  ...
```
