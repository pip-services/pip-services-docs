---
type: docs
title: "GrpcEndpoint"
linkTitle: "GrpcEndpoint"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-grpc-dotnet"
description: > 
    Used for creating gRPC endpoints. 

---

**Inherits:** [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)


### Description
The GrpcEndpoint class allows you to create gRPC endpoints. An endpoint is a URL at which a given service can be accessed by a client.

#### Configuration parameters
Parameters to pass to the :func:`configure` method for component configuration:

**connection(s)**: the connection resolver's connections:
- **"connection.discovery_key"**: key used for connection resolving in a discovery service
- **"connection.protocol"**: connection protocol
- **"connection.host"**: target host
- **"connection.port"**: target port
- **"connection.uri"**: target URI    
**credential**: HTTPS credentials:
- **"credential.ssl_key_file"**: SSL private key in PEM
- **"credential.ssl_crt_file"**: SSL certificate in PEM
- **"credential.ssl_ca_file"**: certificate authorities (root cerfiticates) in PEM

#### References
A logger, counters, and a connection resolver can be referenced by passing the
following references to the object's [set_references](#setreferences)

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements as specified by the counter's source.


### Instance methods


#### Close
Closes this endpoint and the gRPC server (service) that was opened earlier.

> `public virtual` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures this HttpEndpoint using the given configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters, containing a "connection(s)" section.

#### Instrument
Adds instrumentation to log calls and measure call time. It returns a CounterTiming 
object that is used to end the time measurement.

> `protected` [CounterTiming](../../../components/count/counter_timing) Instrument(string correlationId, string name)

- **correlationId**: string - (optional) transaction id to trace execution through the call chain.
- **name**: string - method name.
- **returns**: [CounterTiming](../../../components/count/counter_timing) - CounterTiming object to end the time measurement.


#### IsOpen
Checks if the component is open.

> `public virtual` bool IsOpen()

- **returns**: bool - true if this endpoint is open with an actively listening gRPC server and false otherwise


#### Open
Opens a connection using the parameters resolved by the referenced connection resolver and creates a gRPC server (service) using the set options and parameters.

> `public virtual` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Register
Registers a registerable object for dynamic endpoint discovery.

> `public` void Register([IRegisterable](../iregisterable) registration)

- **registration**: [IRegisterable](../iregisterable) - registration to be added.


#### RegisterService
Registers a service with related implementation

> `public` void RegisterService(ServerServiceDefinition serverServiceDefinition)

- **serverServiceDefinition**: ServerServiceDefinition - a gRPC service object.

#### SetReferences
Sets references to this endpoint's logger, counters, and connection resolver.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)
- **references**: [IReferences](../../../commons/refer/ireferences) - IReferences object, containing references to a logger, counters, and a connection resolver.

#### Unregister
Unregisters a registerable object, so that it is no longer used in dynamic endpoint discovery.

> `public` void Unregister([IRegisterable](../iregisterable) registration)

- **registration**: [IRegisterable](../iregisterable) - registration to remove.


### Examples

```cs
public MyMethod(string correlationId, ConfigParams _config, IReferences _references) 
{
    var endpoint = new HttpEndpoint();
    if (this._config)
        endpoint.Configure(this._config);
    if (this._references)
        endpoint.SetReferences(this._references);
    ...
    this._endpoint.Open(correlationId);
    ...
}
```


