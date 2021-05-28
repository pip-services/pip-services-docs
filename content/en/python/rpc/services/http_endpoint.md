---
type: docs
title: "HttpEndpoint"
linkTitle: "HttpEndpoint"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    Used for creating HTTP endpoints. 
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

The HttpEndpoint class allows you to create HTTP endpoints. 

Important points

- An endpoint is a URL, at which a given service can be accessed by a client. 

#### Configuration parameters
Parameters to pass to the [configure](#configure) method for component configuration:

- **connection(s)**: the connection resolver's connections:
    - **"connection.discovery_key"**: the key to use for connection resolving in a discovery service;
    - **"connection.protocol"**: the connection's protocol;
    - **"connection.host"**: the target host;
    - **"connection.port"**: the target port;
    - **"connection.uri"**: the target URI.
- **credential**: the HTTPS credentials:
    - **"credential.ssl_key_file"**: the SSL private key in PEM
    - **"credential.ssl_crt_file"**: the SSL certificate in PEM
    - **"credential.ssl_ca_file"**: the certificate authorities (root cerfiticates) in PEM


#### References
A logger, counters, and a connection resolver can be referenced by passing the 
following references to the object's [set_references](#set_references) method:

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections


### Instance methods

#### close
Closes this endpoint and the REST server (service) that was opened earlier.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### configure
Configures this HttpEndpoint using the given configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### get_correlation_id
Returns correlationId from request

> get_correlation_id(): Optional[str]

- **returns**: Optional[str] - http response to the request.


#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - whether or not this endpoint is open with an actively listening REST server.


#### register
Registers a registerable object for dynamic endpoint discovery.

> register(registration: [IRegisterable](../../services/iregisterable))

- **registration**: [IRegisterable](../../services/iregisterable) - the registration to add.


#### register_interceptor
Registers a middleware action for the given route.

> register_interceptor(route: str, action: Callable)

- **route**: str - the route to register in this object's REST server (service).
- **action**: Callable - the middleware action to perform at the given route.


#### register_route
Registers an action in this objects REST server (service) by the given method and route.

> register_route(method: str, route: str, schema: [Schema](../../../commons/validate/schema), handler: Callable)

- **method**: str - the HTTP method of the route.
- **route**: str - the route to register in this object's REST server (service).
- **schema**: [Schema](../../../commons/validate/schema) - the schema to use for parameter validation.
- **handler**: Callable - the action to perform at the given route.


#### register_route_with_auth
Registers an action with authorization in this objects REST server (service)
by the given method and route.

> register_route_with_auth(method: str, route: str, schema: Schema, authorize: Callable, action: Callable)

- **method**: str - the HTTP method of the route.
- **route**: str - the route to register in this object's REST server (service).
- **schema**: [Schema](../../../commons/validate/schema) - the schema to use for parameter validation.
- **authorize**: Callable - the authorization interceptor
- **action**: Callable - the action to perform at the given route.


#### set_references
Sets references to this endpoint's logger, counters, and connection resolver.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - an IReferences object, containing references to a logger, counters, and a connection resolver.


#### unregister
Unregisters a registerable object, so that it is no longer used in dynamic endpoint discovery.

> unregister(registration: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - the registration to remove.

### Examples

```python
def my_method(_config, _references):
    endpoint = HttpEndpoint()
    if (_config)
        endpoint.configure(_config)
    if (_references)
        endpoint.setReferences(_references)
    # ...

    endpoint.open(correlationId)
    # ...
```

### See also
- #### [IConfigurable](../../../commons/config/iconfigurable)
- #### [IReferenceable](../../../commons/refer/ireferenceable)
- #### [IOpenable](../../../commons/run/iopenable)
