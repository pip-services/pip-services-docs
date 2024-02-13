---
type: docs
title: "DirectClient<T>"
linkTitle: "DirectClient"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-rpc-dotnet"
description: >
    Abstract client that calls a controller directly in the same memory space.

   
---

**Inherits:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable)

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


### Fields

<span class="hide-title-link">

#### _controller
Controller reference.
> `protected` **_controller**: T

#### _opened
Open flag.
> `protected` **_opened**: boolean = True

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/count/composite_counters) = CompositeLogger()

#### _counters
Performance counters
> `protected` **_counters**: [CompositeCounters](../../../observability/count/composite_counters) = CompositeCounters()

#### _dependencyResolver
Dependency resolver used to get the controller's reference.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver) = DependencyResolver()

</span>



### Instance methods

#### CloseAsync
Closes a component and frees used resources.

> `public virtual` Task CloseAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Configure
Configures component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` [CounterTiming](../../../observability/count/counter_timing) Instrument(IContext context, [CallerMemberName]string methodName = null)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **methodName**: [CallerMemberName]string - method name.
- **returns**: [CounterTiming](../../../observability/count/counter_timing) - CounterTiming object used to end the time measurement.


#### InstrumentError
Adds instrumentation to error handling.

> `protected` void InstrumentError(IContext context, [CallerMemberName]string methodName = null, Exception ex = null, bool rethrow = false)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **methodName**: [CallerMemberName]string - method name.
- **ex**: Exception - error that occured during the method call.
- **rethrow**: bool - true to throw the exception.


#### IsOpen
Checks if the component is open.

> `public virtual` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### OpenAsync
Opens the component.

> `public virtual` Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

### Examples

```cs
class MyDirectClient: DirectClient<IMyController>, IMyClient 
{
    public MyDirectClient()
    {   
        base();
        this._dependencyResolver.put("controller", new Descriptor("mygroup", "controller", "*", "*", "*"));
    }
    ...
    
    public MyData GetData(IContext context, string id)
    {
        var timing = this.Instrument(context, 'myclient.get_data');
        var result = this._controller.GetData(context, id);
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
