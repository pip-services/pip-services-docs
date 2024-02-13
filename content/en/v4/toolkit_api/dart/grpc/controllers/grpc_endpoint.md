---
type: docs
title: "GrpcEndpoint"
linkTitle: "GrpcEndpoint"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-grpc-dart"
description: > 
    Used for creating GRPC endpoints. 

---

**Implements:** [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)


### Description 
The GrpcEndpoint class allows you to create GRPC endpoints. An endpoint is a URL at which a given service can be accessed by a client.

#### Configuration parameters
Parameters to pass to the :func:`configure` method for component configuration:

**connection(s)**: the connection resolver's connections:
- **"connection.discovery_key"**: key used for connection resolving in a discovery service;
- **"connection.protocol"**: connection's protocol
- **"connection.host"**: target host
- **"connection.port"**: target port
- **"connection.uri"**: target URI   
**credential**: HTTPS credentials:
- **"credential.ssl_key_file"**: SSL private key in PEM
- **"credential.ssl_crt_file"**: SSL certificate in PEM
- **"credential.ssl_ca_file"**: certificate authorities (root cerfiticates) in PEM

#### References
A logger, counters, and a connection resolver can be referenced by passing the
following references to the object's [set_references](#set_references)

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurementsand as specified by the counter's source.


### Instance methods


#### close
Closes this endpoint and the gRPC server (service) that was opened earlier.

`@override`
> Future close(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures this HttpEndpoint using the given configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if this endpoint is open with an actively listening GRPC server and false otherwise.


#### open
Opens a connection using the parameters resolved by the referenced connection resolver and creates a gRPC server (service) using the set options and parameters.

`@override`
> Future open(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### register
Registers a registerable object for dynamic endpoint discovery.

> void register([IRegisterable](../iregisterable) registration)

- **registration**: [IRegisterable](../iregisterable) - registration to be added.

#### registerCommadableMethod
Registers a commandable method in this objects GRPC server (service) by the given name.

> void registerCommadableMethod(String method, [Schema?](../../../data/validate/schema) schema, Future\<dynamic\> Function(IContext? context, [Parameters](../../../components/exec/parameters) args) action)

- **method**: String - the GRPC method name.
- **schema**: [Schema?](../../../data/validate/schema) - the schema to use for parameter validation.
- **action**: Future\<dynamic\> Function(IContext? context, [Parameters](../../../components/exec/parameters) args) - the action to perform at the given route.

#### registerInterceptor
Registers a interceptor in this objects GRPC server (service)

> void registerInterceptor(grpc.Interceptor action)

- **action**: grpc.Interceptor - the action to perform.

#### registerService
Registers a service with related implementation.

> void registerService(grpc.Service implementation)

- **implementation**: grpc.Service - service implementation methods.

#### setReferences
Sets references to this endpoint's logger, counters, and connection resolver.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)
- **references**: [IReferences](../../../components/refer/ireferences) - IReferences object containing references to a logger, counters, and a connection resolver.

#### unregister
Unregisters a registerable object, so that it is no longer used in dynamic endpoint discovery.

> void unregister([IRegisterable](../iregisterable) registration)

- **registration**: [IRegisterable](../iregisterable) - registration to remove.


### Examples

```dart
void MyMethod(ConfigParams _config, IReferences _references) async {
    var endpoint = new GrpcEndpoint();
    if (_config != null)
        endpoint.configure(_config);
    if (_references 1= null)
        endpoint.setReferences(_references);
    ...
    _opened = false;
    await endpoint.open(context);
    _opened = true;
    ...
}
```


