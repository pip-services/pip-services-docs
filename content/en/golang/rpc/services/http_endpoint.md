---
type: docs
title: "HttpEndpoint"
linkTitle: "HttpEndpoint"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rpc-go"
description: >
    Used for creating HTTP endpoints. 
---

### Description

The HttpEndpoint class allows you to create HTTP endpoints. 

Important points

- An endpoint is a URL, at which a given service can be accessed by a client. 

#### Configuration parameters
Parameters to pass to the [configure](#configure) method for component configuration:

- **connection(s)**: the connection resolver's connections:
    - **"connection.discovery_key"**: key to use for connection resolving in a discovery service;
    - **"connection.protocol"**: connection's protocol;
    - **"connection.host"**: target host;
    - **"connection.port"**: target port;
    - **"connection.uri"**: target URI.
- **credential**: the HTTPS credentials:
    - **"credential.ssl_key_file"**: SSL private key in PEM
    - **"credential.ssl_crt_file"**: SSL certificate in PEM
    - **"credential.ssl_ca_file"**: certificate authorities (root cerfiticates) in PEM


#### References
A logger, counters, and a connection resolver can be referenced by passing the 
following references to the object's [set_references](#set_references) method:

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections

### Constructors

#### NewHttpEndpoint
NewHttpEndpoint creates new HttpEndpoint

> NewHttpEndpoint() [*HttpEndpoint]()

### Methods

#### Close
Closes this endpoint and the REST server (service) that was opened earlier.

> (c [*HttpEndpoint]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not closed


#### Configure
Configures this HttpEndpoint using the given configuration parameters.

> (c [*HttpEndpoint]()) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### IsOpen
Checks if the component is open.

> (c [*HttpEndpoint]()) IsOpen() bool

- **returns**: bool - whether or not this endpoint is open with an actively listening REST server.


#### Register
Registers a registerable object for dynamic endpoint discovery.

> (c [*HttpEndpoint]()) Register(registration [IRegisterable](../../services/iregisterable))

- **registration**: [IRegisterable](../../services/iregisterable) - the registration to add.


#### RegisterInterceptor
Registers a middleware action for the given route.

> (c [*HttpEndpoint]()) RegisterInterceptor(route string, action func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc))

- **route**: string - route to register in this object's REST server (service).
- **action**: func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) - middleware action to perform at the given route.


#### RegisterRoute
Registers an action in this objects REST server (service) by the given method and route.

> (c [*HttpEndpoint]()) RegisterRoute(method string, route string, schema [*cvalid.Schema](../../../commons/validate/schema), action http.HandlerFunc)

- **method**: string - HTTP method of the route.
- **route**: string - route to register in this object's REST server (service).
- **schema**: [*cvalid.Schema](../../../commons/validate/schema) - schema to use for parameter validation.
- **action**: http.HandlerFunc - action to perform at the given route.


#### RegisterRouteWithAuth
Registers an action with authorization in this objects REST server (service)
by the given method and route.

> (c [*HttpEndpoint]()) RegisterRouteWithAuth(method string, route string, schema [*cvalid.Schema](../../../commons/validate/schema), authorize func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc), action http.HandlerFunc)

- **method**: string - HTTP method of the route.
- **route**: string - route to register in this object's REST server (service).
- **schema**: [*cvalid.Schema](../../../commons/validate/schema) - schema to use for parameter validation.
- **authorize**: func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) - authorization interceptor
- **action**: http.HandlerFunc - action to perform at the given route.


#### SetReferences
Sets references to this endpoint's logger, counters, and connection resolver.

> (c [*HttpEndpoint]()) SetReferences(references [crefer.IReferences](../../../commons/refer/ireferences))

- **references**: [crefer.IReferences](../../../commons/refer/ireferences) - IReferences object, containing references to a logger, counters, and a connection resolver.


#### Unregister
Unregisters a registerable object, so that it is no longer used in dynamic endpoint discovery.

> (c [*HttpEndpoint]()) Unregister(registration [IRegisterable](../services/iregisterable))

- **registration**: [IRegisterable](../services/iregisterable) - registration to remove.

### Examples

```go
endpoint := NewHttpEndpoint();
endpoint.Configure(config);
endpoint.SetReferences(references);
...
endpoint.Open(correlationId)
```

### See also
- #### [IConfigurable](../../../commons/config/iconfigurable)
- #### [IReferenceable](../../../commons/refer/ireferenceable)
- #### [IOpenable](../../../commons/run/iopenable)
