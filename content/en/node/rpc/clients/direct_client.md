---
type: docs
title: "DirectClient<T>"
linkTitle: "DirectClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
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

#### close
Closes a component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` instrument(correlationId: string, name: string): [InstrumentTiming](../../services/instrument_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [InstrumentTiming](../../services/instrument_timing) - InstrumentTiming object used to end the time measurement.



#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples

```typescript
class MyDirectClient extends DirectClient<IMyController> implements IMyClient {

    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor(
            "mygroup", "controller", "*", "*", "*"));
    }

    ...
    public async getData(correlationId: string, id: string): Promise<MyData> {
        let timing = this.instrument(correlationId, 'myclient.get_data');
        try {
            return await this._controller.getData(correlationId, id);
        } catch (ex) {
            timing.endFailure(ex);
        } finally {
            timing.endTiming();
        }
    }
    ...
}

let client = new MyDirectClient();
client.setReferences(References.fromTuples(
    new Descriptor("mygroup","controller","default","default","1.0"), controller
));
let result = await client.getData("123", "1");
```
