---
type: docs
title: "DirectClient<T>"
linkTitle: "DirectClient"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-rpc-java"
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

#### _service
The controller reference.
> `protected` T **_service** T

#### _opened
The open flag.
> `protected` boolean **_opened** = false

#### _logger
The logger.
> `protected` [CompositeLogger](../../../observability/log/composite_logger) **_logger** = new CompositeLogger()

#### _counters
The performance counters
> `protected` [CompositeCounters](../../../observability/count/composite_counters) **_counters** = new CompositeCounters()

#### _dependencyResolver
The dependency resolver used to get the controller's reference.
> `protected` [DependencyResolver](../../../components/refer/dependency_resolver) **_dependencyResolver** = new DependencyResolver()

#### _tracer

> `protected` [CompositeTracer](../../../observability/trace/composite_tracer) _tracer = new CompositeTracer()

</span>



### Instance methods

#### close
Closes a component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.


#### configure
Configures component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` [InstrumentTiming](../../trace/instrument_timing) instrument([IContext](../../../components/context/icontext) context, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **name**: string - method name.
- **returns**: [InstrumentTiming](../../trace/instrument_timing) - InstrumentTiming object used to end the time measurement.



#### isOpen
Checks if the component is open.

> `public` boolean isOpen()

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context) throws ConnectionException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.


#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Examples

```java
 {
  class MyDirectClient extends DirectClient<IMyService> implements IMyClient {
 
    public MyDirectClient() {
        super();
        this._dependencyResolver.put('service', new Descriptor(
            "mygroup", "service", "*", "*", "*"));
     }
    ...
 
     public MyData getData(IContext context, String id) {
         Timing timing = this.instrument(context, 'myclient.get_data');
         MyData result = this._service.getData(context, id);
         timing.endTiming();
         return result;
     }
     ...
  }
 
  MyDirectClient client = new MyDirectClient();
  client.setReferences(References.fromTuples(
      new Descriptor("mygroup","service","default","default","1.0"), service
  ));
 
  MyData data = client.getData("123", "1");
  ...
  }
```
