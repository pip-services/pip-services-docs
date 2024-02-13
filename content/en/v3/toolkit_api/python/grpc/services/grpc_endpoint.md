---
type: docs
title: "GrpcEndpoint"
linkTitle: "GrpcEndpoint"
gitUrl: "https://github.com/pip-services3-python/pip-services3-grpc-python"
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

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures this HttpEndpoint using the given configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - whether or not this endpoint is open with an actively listening GRPC server.


#### open
Opens a connection using the parameters resolved by the referenced connection resolver and creates a GRPC server (service) using the set options and parameters.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### register
Registers a registerable object for dynamic endpoint discovery.

> register(registration: [IRegisterable](../iregisterable))

- **registration**: [IRegisterable](../iregisterable) - registration to be added.


#### register_service
Registers a service with related implementation

> register_service(service: Any)

- **service**: Any - a GRPC service object.


#### _register_commandable_method
Registers a commandable method in the object's GRPC server (service) by the given name.

> _register_commandable_method(method: str, schema: [Schema](../../../commons/validate/schema), action: Callable[[Optional[str], Any], Any])

- **method**: str - GRPC method name.
- **schema**: [Schema](../../../commons/validate/schema) - schema to use for parameter validation.
- **action**: action: Callable[[Optional[str], Any], Any] - action to perform at the given route.


### Examples

```python
def my_method(self, _config, _references):
    
    endpoint = GrpcEndpoint()

    if self._config:
        endpoint.configure(self._config)
    if self._references:
        endpoint.set_references(self._references)
    ...

    self._endpoint.open(correlation_id)
    ...

```


