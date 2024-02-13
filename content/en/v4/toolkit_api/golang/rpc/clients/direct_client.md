---
type: docs
title: "DirectClient"
linkTitle: "DirectClient"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-sqlite-go"
description: >
    Abstract client that calls a controller directly in the same memory space.

   
---

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

### Constructors

#### NewDirectClient
NewDirectClient is creates a new instance of the client.

> NewDirectClient() [*DirectClient]()


### Fields

<span class="hide-title-link">

#### Controller
The controller reference.
> **Controller**: interface{}

#### Opened
The open flag.
> **Opened**: bool = True

#### Logger
The logger.
> **Logger**: [CompositeLogger](../../../observability/log/composite_logger) 

#### Counters
The performance counters
> **Counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### DependencyResolver
The dependency resolver used to get the controller's reference.
> **DependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### Tracer
The tracer.
> Tracer [*ctrace.CompositeTracer](../../../observability/trace/composite_tracer)
</span>



### Methods

#### Close
Closes a component and frees used resources.

> (c [*DirectClient]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - returns error if not closed


#### Configure
Configures component by passing configuration parameters.

> (c [*DirectClient]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> (c [*DirectClient]()) Instrument(ctx context.Context, context [IContext](../../../components/context/icontext), name string) [*service.InstrumentTiming](../../trace/instrument_timing)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [*service.InstrumentTiming](../../trace/instrument_timing) - InstrumentTiming object used to end the time measurement.



#### IsOpen
Checks if the component is open.

> (c *DirectClient) IsOpen() bool

- **returns**: bool - True if the component has been opened and False otherwise.


#### Open
Opens the component.

> (c [*DirectClient]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### SetReferences
Sets references to dependent components.

> (c [*DirectClient]()) SetReferences(ctx context.Context, references [crefer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [crefer.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Examples

```go
type MyDirectClient struct {
	*DirectClient
}
func NewMyDirectClient()* MyDirectClient {
	c:= MyDirectClient{}
	c.DirectClient = NewDirectClient()
	c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor(
        "mygroup", "controller", "*", "*", "*"))
	return &c
}

func (c *MyDirectClient) SetReferences(ctx context.Context, references cref.IReferences) {
	c.DirectClient.SetReferences(ctx, references)
	specificController, ok := c.Controller.(tdata.IMyDataController)
	if !ok {
		panic("MyDirectClient: Cant't resolv dependency 'controller' to IMyDataController")
	}
	c.specificController = specificController
}
...
func (c * MyDirectClient) GetData(ctx context.Context, context IContext, id string)(result MyData, err error) {
	timing := c.Instrument(ctx, context, "myclient.get_data")
	defer timing.EndTiming(ctx);

	return c.specificController.GetData(ctx, context, id)
}
...

client = NewMyDirectClient();
client.SetReferences(context.Background(), cref.NewReferencesFromTuples(
	cref.NewDescriptor("mygroup","controller","default","default","1.0"), controller,
));
res, err := client.GetData(context.Background(), "123", "1")
```
