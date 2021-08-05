---
type: docs
title: "GrpcEndpoint"
linkTitle: "GrpcEndpoint"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-grpc-nodex"
description: > 
    Used for creating GRPC endpoints. 

---

**Implements:** [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)


### Description
The GrpcEndpoint class allows you to create GRPC endpoints. An endpoint is a URL, at which a given service can be accessed by a client.

#### Configuration parameters
Parameters to pass to the :func:`configure` method for component configuration:

**connection(s)**: the connection resolver's connections:
- **"connection.discovery_key"**: key used for connection resolving in a discovery service;
- **"connection.protocol"**: connection's protocol;
- **"connection.host"**: target host;
- **"connection.port"**: target port;
- **"connection.uri"**: target URI.
**credential**: HTTPS credentials:
- **"credential.ssl_key_file"**: SSL private key in PEM
- **"credential.ssl_crt_file"**: SSL certificate in PEM
- **"credential.ssl_ca_file"**: certificate authorities (root cerfiticates) in PEM

#### References
A logger, counters, and a connection resolver can be referenced by passing the
following references to the object's [set_references](#set_references)

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurementsand as specified by the counter's source.


### Instance methods


#### close
Closes this endpoint and the GRPC server (service) that was opened earlier.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures this HttpEndpoint using the given configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - whether or not this endpoint is open with an actively listening GRPC server.


#### open
Opens a connection using the parameters resolved by the referenced connection resolver and creates a GRPC server (service) using the set options and parameters.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### register
Registers a registerable object for dynamic endpoint discovery.

> `public` register(registration: [IRegisterable](../iregisterable)): void

- **registration**: [IRegisterable](../iregisterable) - registration to be added.

#### registerService
Registers a service with related implementation

> `public` registerService(service: any, implementation: any): void

- **service**: any - a GRPC service object.
- **implementation**: any - the service implementation methods.

#### registerCommandableMethod
Registers a commandable method in the object's GRPC server (service) by the given name.

> `public` registerCommandableMethod(method: string, schema: [Schema](../../../commons/validate/schema), action: (call: any) => Promise\<any\>): void

- **method**: string - GRPC method name.
- **schema**: [Schema](../../../commons/validate/schema) - schema to use for parameter validation.
- **action**: (call: any) => Promise\<any\> - action to perform at the given route.

#### registerService
Registers a service with related implementation

> `public` registerService(service: any, implementation: any): void

- **service**: any - a GRPC service object.
- **implementation**: any - the service implementation methods.

#### setReferences
Sets references to this endpoint's logger, counters, and connection resolver.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void 
- **references**: [IReferences](../../../commons/refer/ireferences) - an IReferences object, containing references to a logger, counters, and a connection resolver.

#### unregister
Unregisters a registerable object, so that it is no longer used in dynamic 

> `public` unregister(registration: [IRegisterable](../iregisterable)): void

- **registration**: [IRegisterable](../iregisterable) - the registration to remove.


### Examples

```typescript
public MyMethod(_config: ConfigParams, _references: IReferences) {
    let endpoint = new HttpEndpoint();
    if (this._config)
        endpoint.configure(this._config);
    if (this._references)
        endpoint.setReferences(this._references);
    ...
    await this._endpoint.open(correlationId);
}
```


