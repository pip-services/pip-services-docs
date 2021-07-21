---
type: docs
title: "GrpcService"
linkTitle: "GrpcService"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-grpc-dotnet"
description: > 
    Abstract service that receives remote calls via the gRPC protocol.

---

**Inherits:** [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IRegisterable](../iregisterable), [IUnreferenceable](../../../commons/refer/iunreferenceable)


### Description

The GrpcService class allows you to create services that receive remote calls via the gRPC protocol.

#### Configuration parameters
- **dependencies**:   
    - **endpoint**: override for GRPC Endpoint dependency    
    - **controller**: override for Controller dependency    
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)    
    - **protocol**: connection protocol: http or https    
    - **host**: host name or IP address    
    - **port**: port number   
    - **uri**: resource URI or connection string with all parameters in it    
- **credentials**:   
    - **ssl_key_file**: SSL private key in PEM    
    - **ssl_crt_file**: SSL certificate in PEM    
    - **ssl_ca_file**: certificate authorities (root cerfiticates) in PEM    
 
#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurementsand as specified by the counter's source.


### Constructors

Creates a new instance of the service.

> `public` GrpcService(string serviceName)

- **serviceName**: string - service name.


### Fields

<span class="hide-title-link">

#### _endpoint
gRPC endpoint that exposes this service.
> `protected` **_endpoint**: [GrpcEndpoint](../grpc_endpoint)

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _serviceName
Service name.
> `protected` **_serviceName**: [CompositeTracer](../../../components/trace/composite_tracer)

</span>


### Instance methods

#### CloseAsync
Closes the component and frees used resources.

> `public virtual` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures component by passing configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool -true if the endpoint is open with an actively listening gRPC server.


#### Instrument
Adds instrumentation to log calls and measures call time. 
It returns a CounterTiming object that is used to end the time measurement.

> `protected` [CounterTiming](../../../components/count/counter_timing) Instrument(string correlationId, string methodName)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **methodName**: string - method name.
- **returns**: [CounterTiming](../../../components/count/counter_timing) - Timing object to end the time measurement.

#### InstrumentError
Adds instrumentation to error handling.

> `protected` void InstrumentError(string correlationId, string methodName, Exception ex, bool rethrow = false)
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **methodName**: string - method name.
- **ex**: Exception - error that occured during the method call.
- **rethrow**: bool - true to throw the exception.

#### OnRegister
Registers all service routes in a gRPC endpoint.

This method is called by the service and must be overriden
in child classes.

> `protected virtual` void OnRegister()

#### OpenAsync
Opens the component.

> `public virtual` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Register
Registers all service routes in the HTTP endpoint.

> `public` void Register()


#### RegisterMethod

Registers a method in a gRPC service.

- where TRequest : class, IMessage\<TRequest\>, new()
- where TResponse : class, IMessage\<TResponse\>, new()

> `protected` void RegisterMethod\<TRequest, TResponse\>(string name, UnaryServerMethod\<TRequest, TResponse\> handler)

- **name**: string - method name
- **handler**: UnaryServerMethod\<TRequest, TResponse\> - handler
#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> `public virtual` void UnsetReferences()


### Examples

```cs
class MyRestService: RestService 
{
    private IMyController _controller;
    ...
    public MyRestService()
    {
        base();
        this._dependencyResolver.put(
        "controller", new Descriptor("mygroup", "controller", "*", "*", "1.0"));
    }
    
    public void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        this._controller = this._dependencyResolver.getRequired<IMyController>("controller");
    }
    
    public void register()
    {
        ...
    }
}

var service = new MyRestService();
service.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080 
));

service.SetReferences(References.FromTuples(
    new Descriptor("mygroup","controller","default","default","1.0"), controller ));
 
service.Open("123");
Console.Out.WriteLine("The REST service is running on port 8080");
```


