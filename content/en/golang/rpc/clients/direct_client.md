---
type: docs
title: "DirectClient<T>"
linkTitle: "DirectClient"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rpc-go"
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

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../components/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve a connection

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
> **Logger**: [CompositeLogger](../../../components/log/composite_logger) 

#### Counters
The performance counters
> **Counters**: [CompositeCounters](../../../components/count/composite_counters)

#### DependencyResolver
The dependency resolver used to get the controller's reference.
> **DependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)
</span>



### Methods

#### Close
Closes a component and frees used resources.

> (c [*DirectClient]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **returns**: error - returns error if not closed


#### Configure
Configures component by passing configuration parameters.

> (c [*DirectClient]()) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### _instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> (c [*DirectClient]()) Instrument(correlationId string, name string) [*ccount.Timing](../../../components/count/timing)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [*ccount.Timing](../../../components/count/timing) - InstrumentTiming object used to end the time measurement.



#### IsOpen
Checks if the component is open.

> (c *DirectClient) IsOpen() bool

- **returns**: bool - True if the component has been opened and False otherwise.


#### Open
Opens the component.

> (c [*DirectClient]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.


#### SetReferences
Sets references to dependent components.

> (c [*DirectClient]()) SetReferences(references [crefer.IReferences](../../../commons/refer/ireferences))

- **references**: [crefer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples

```go
type MyDirectClient struct {
*DirectClient
}
    func MyDirectClient()* MyDirectClient {
	  c:= MyDirectClient{}
	  c.DirectClient = NewDirectClient()
      c.DependencyResolver.Put("controller", cref.NewDescriptor(
          "mygroup", "controller", "*", "*", "*"));
	}
	func (c *MyDirectClient) SetReferences(references cref.IReferences) {
		c.DirectClient.SetReferences(references)
		specificController, ok := c.Controller.(testrpc.IMyDataController)
		if !ok {
			panic("MyDirectClient: Cant't resolv dependency 'controller' to IMyDataController")
		}
		c.specificController = specificController
	}
    ...
    func (c * MyDirectClient) GetData(correlationId string, id string)(result MyData, err error) {
       timing := c.Instrument(correlationId, "myclient.get_data")
       cmRes, cmdErr := c.specificController.GetData(correlationId, id)
       timing.EndTiming();
       return  c.InstrumentError(correlationId, "myclient.get_data", cmdRes, cmdErr)
    }
    ...
client = NewMyDirectClient();
client.SetReferences(cref.NewReferencesFromTuples(
    cref.NewDescriptor("mygroup","controller","default","default","1.0"), controller,
));
res, err := client.GetData("123", "1")
```
