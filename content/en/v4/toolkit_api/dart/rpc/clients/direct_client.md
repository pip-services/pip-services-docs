---
type: docs
title: "DirectClient<T>"
linkTitle: "DirectClient"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-rpc-dart"
description: >
    Abstract client that calls a controller directly in the same memory space.

   
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable)

### Description

The DirectClientclass allows you to create clients that call a controller directly in the same memory space.

**Important points**

-  It is used when multiple microservices are deployed in a single container (monolyth) and communication between them can be done by direct calls rather than through the network.

#### Configuration parameters

- **dependencies**:
    - **controller**: override controller descriptor

#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../observability/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve a connection

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
> **logger**: [CompositeLogger](../../../observability/log/composite_logger) = CompositeLogger()

#### tracer
The tracer.
> **tracer**: [CompositeTracer](../../../observability/trace/composite_tracer) = CompositeTracer()

#### counters
The performance counters
> **counters**: [CompositeCounters](../../../observability/count/composite_counters) = CompositeCounters()

#### dependencyResolver
The dependency resolver used to get the controller's reference.
> **dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver) = DependencyResolver()

</span>



### Instance methods

#### close
Closes a component and frees used resources.

`@override`
> Future close(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures component by passing configuration parameters.

`@override`
void configure([ConfigParams](../../../components/config/config_params) config)
- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a CounterTiming object that is used to end the time measurement.

> [InstrumentTiming](../../trace/instrument_timing) instrument(IContext? contextd, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: String - method name.
- **returns**: [InstrumentTiming](../../trace/instrument_timing) - InstrumentTiming object used to end the time measurement.



#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

`@override`
> Future open(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences(IReferences references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

### Examples

```dart
class MyDirectClient extends DirectClient<IMyController> implements IMyClient {
    MyDirectClient(): super() {
      dependencyResolver.put('controller', Descriptor(
          "mygroup", "controller", "*", "*", "*"));
    }
    ...
    Future<MyData> getData(IContext? context, String id) async {
      var counter_timing = instrument(contextd, 'myclient.get_data');
      try {
      var result = await controller.getData(context, id)
      counter_timing.endTiming();
      return result;
      } catch (err){
         counter_timing.endTiming();
         instrumentError(context, 'myclient.get_data', err, reerror=true);
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
