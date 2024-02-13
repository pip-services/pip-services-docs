---
type: docs
title: "DirectClient<T>"
linkTitle: "DirectClient"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-rpc-node"
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
> `protected` **_controller**: T

#### _opened
The open flag.
> `protected` **_opened**: boolean = True

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger) = CompositeLogger()

#### _counters
The performance counters
> `protected` **_counters**: [CompositeCounters](../../../observability/count/composite_counters) = CompositeCounters()

#### _dependencyResolver
The dependency resolver used to get the controller's reference.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver) = DependencyResolver()

</span>



### Instance methods

#### close
Closes a component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` instrument(context: [IContext](../../../components/context/icontext), name: string): [InstrumentTiming](../../trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **name**: string - method name.
- **returns**: [InstrumentTiming](../../trace/instrument_timing) - InstrumentTiming object used to end the time measurement.



#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Examples

```typescript
class MyDirectClient extends DirectClient<IMyService> implements IMyClient {
    public constructor() {
      super();
      this._dependencyResolver.put('service', new Descriptor(
          "mygroup", "service", "*", "*", "*"));
    }
    ...
    public async getData(context: IContext, id: string): Promise<MyData> {
      let timing = this.instrument(context, 'myclient.get_data');
      try {
        let res = await this._service.getData(context, id);
        timing.endTiming();
        return res;
      } catch (ex) {
        timing.endFailure(ex);
      }
    }
    ...
}

let client = new MyDirectClient();
client.setReferences(References.fromTuples(
    new Descriptor("mygroup","service","default","default","1.0"), service
));

let result = await client.getData(new Context(), "1");
```
