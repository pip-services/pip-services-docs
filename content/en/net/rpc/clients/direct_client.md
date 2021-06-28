---
type: docs
title: "DirectClient<T>"
linkTitle: "DirectClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Abstract client that calls a controller directly in the same memory space.

   
---

**Inherits:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

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


### Fields

<span class="hide-title-link">

#### _controller
The controller reference.
> `protected` **_controller**: T

#### _opened
The open flag.
> `protected` **_opened**: boolean = True

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### _counters
The performance counters
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### _dependencyResolver
The dependency resolver used to get the controller's reference.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver) = DependencyResolver()

</span>



### Instance methods

#### CloseAsync
Closes a component and frees used resources.

> `public virtual` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.


#### Configure
Configures component by passing configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` [CounterTiming](../../../components/count/counter_timing) Instrument(string correlationId, [CallerMemberName]string methodName = null)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **methodName**: [CallerMemberName]string - method name.
- **returns**: [CounterTiming](../../../components/count/counter_timing) - CounterTiming object used to end the time measurement.


#### InstrumentError
Adds instrumentation to error handling.

> `protected` void InstrumentError(string correlationId, [CallerMemberName]string methodName = null, Exception ex = null, bool rethrow = false)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **methodName**: [CallerMemberName]string - method name.
- **ex**: Exception - Error that occured during the method call.
- **rethrow**: bool - True to throw the exception.


#### IsOpen
Checks if the component is open.

> `public virtual` bool IsOpen()

- **returns**: bool - True if the component has been opened and False otherwise.


#### OpenAsync
Opens the component.

> `public virtual` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples

```cs
class MyDirectClient: DirectClient<IMyController>, IMyClient 
{
    public MyDirectClient()
    {   
        base();
        this._dependencyResolver.put('controller', new Descriptor("mygroup", "controller", "*", "*", "*"));
    }
    ...
    
    public MyData GetData(string correlationId, string id)
    {
        var timing = this.Instrument(correlationId, 'myclient.get_data');
        var result = this._controller.GetData(correlationId, id);
        timing.EndTiming();
        return result;
    }
    ...
}

var client = new MyDirectClient();
client.SetReferences(References.FromTuples(
    new Descriptor("mygroup","controller","default","default","1.0"), controller)
);
var data = client.GetData("123", "1");
...
```
