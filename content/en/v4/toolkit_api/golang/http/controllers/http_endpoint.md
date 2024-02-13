---
type: docs
title: "HttpEndpoint"
linkTitle: "HttpEndpoint"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-http-go"
description: >
    Used for creating HTTP endpoints. 
---

### Description

The HttpEndpoint class allows you to create HTTP endpoints. 

Important points

- An endpoint is a URL, at which a given service can be accessed by a client. 

#### Configuration parameters
Parameters to pass to the [configure](#configure) method for component configuration:

- **cors_headers** - a comma-separated list of allowed CORS headers;
- **cors_origins** - a comma-separated list of allowed CORS origins;
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

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connections

### Constructors

#### NewHttpEndpoint
NewHttpEndpoint creates new HttpEndpoint

> NewHttpEndpoint() [*HttpEndpoint]()

### Methods

#### AddCorsHeader
Method adds allowed header, ignore if it already exist
> (c [*HttpEndpoint]()) AddCorsHeader(header string, origin string)

- **header**: string - the header
- **origin**: string - origin header

#### Close
Closes this endpoint and the REST server (service) that was opened earlier.

> (c [*HttpEndpoint]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - returns error if not closed


#### Configure
Configures this HttpEndpoint using the given configuration parameters.

> (c [*HttpEndpoint]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### IsOpen
Checks if the component is open.

> (c [*HttpEndpoint]()) IsOpen() bool

- **returns**: bool - whether or not this endpoint is open with an actively listening REST server.

> (c [*HttpEndpoint]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - returns error if not oepened.

#### Register
Registers a registerable object for dynamic endpoint discovery.

> (c [*HttpEndpoint]()) Register(registration [IRegisterable](../iregisterable))

- **registration**: [IRegisterable](../iregisterable) - the registration to add.


#### RegisterInterceptor
Registers a middleware action for the given route.

> (c [*HttpEndpoint]()) RegisterInterceptor(route string, action func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc))

- **route**: string - route to register in this object's REST server (service).
- **action**: func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) - middleware action to perform at the given route.


#### RegisterRoute
Registers an action in this objects REST server (service) by the given method and route.

> (c [*HttpEndpoint]()) RegisterRoute(method string, route string, schema [*cvalid.Schema](../../../data/validate/schema), action http.HandlerFunc)

- **method**: string - HTTP method of the route.
- **route**: string - route to register in this object's REST server (service).
- **schema**: [*cvalid.Schema](../../../data/validate/schema) - schema to use for parameter validation.
- **action**: http.HandlerFunc - action to perform at the given route.


#### RegisterRouteWithAuth
Registers an action with authorization in this objects REST server (service)
by the given method and route.

> (c [*HttpEndpoint]()) RegisterRouteWithAuth(method string, route string, schema [*cvalid.Schema](../../../data/validate/schema), authorize func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc), action http.HandlerFunc)

- **method**: string - HTTP method of the route.
- **route**: string - route to register in this object's REST server (service).
- **schema**: [*cvalid.Schema](../../../data/validate/schema) - schema to use for parameter validation.
- **authorize**: func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) - authorization interceptor
- **action**: http.HandlerFunc - action to perform at the given route.


#### SetReferences
Sets references to this endpoint's logger, counters, and connection resolver.

> (c [*HttpEndpoint]()) SetReferences(ctx context.Context, references [crefer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [crefer.IReferences](../../../components/refer/ireferences) - IReferences object, containing references to a logger, counters, and a connection resolver.


#### Unregister
Unregisters a registerable object, so that it is no longer used in dynamic endpoint discovery.

> (c [*HttpEndpoint]()) Unregister(registration [IRegisterable](../iregisterable))

- **registration**: [IRegisterable](../iregisterable) - registration to remove.

### Examples

```go
endpoint := NewHttpEndpoint()
endpoint.Configure(context.Background(), config)
endpoint.SetReferences(context.Background(), references)
...
endpoint.Open(context.Background(), context)
```

### See also
- #### [IConfigurable](../../../components/config/iconfigurable)
- #### [IReferenceable](../../../components/refer/ireferenceable)
- #### [IOpenable](../../../components/run/iopenable)

