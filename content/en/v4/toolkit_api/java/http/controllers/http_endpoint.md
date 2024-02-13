---
type: docs
title: "HttpEndpoint"
linkTitle: "HttpEndpoint"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
description: >
    Used for creating HTTP endpoints. 
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable)

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
following references to the object's [set_references](#setreferences) method:

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connections


### Instance methods

#### close
Closes this endpoint and the REST server (service) that was opened earlier.

> `public` void close([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures this HttpEndpoint using the given configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### getTraceId
Returns traceId from request

> `public` String getTraceId(ContainerRequestContext req)

- **returns**: String - http response to the request.


#### isOpen
Checks if the component is open.

> `public` boolean isOpen()

- **returns**: boolean - whether or not this endpoint is open with an actively listening REST server.


#### register
Registers a registerable object for dynamic endpoint discovery.

> `public` void register([IRegisterable](../iregisterable) registration)

- **registration**: [IRegisterable](../iregisterable) - the registration to add.


#### registerInterceptor
Registers a middleware action for the given route.

> `public` void registerInterceptor(String route, Function<ContainerRequestContext, ?> action)

- **route**: String - route to register in this object's REST server (service).
- **action**: Function<ContainerRequestContext, ?> - middleware action to perform at the given route.


#### registerRoute
Registers an action in this objects REST server (service) by the given method and route.

> `public` void registerRoute(String method, String route, Inflector<ContainerRequestContext, Response> action)

- **method**: string - HTTP method of the route.
- **route**: string - route to register in this object's REST server (service).
- **action**: Inflector<ContainerRequestContext, Response> - action to perform at the given route.


#### registerRouteWithAuth
Registers an action with authorization in this objects REST server (service)
by the given method and route.

> `public` void registerRouteWithAuth(String method, String route, Schema schema,
                                      AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> authorize,
                                      Inflector<ContainerRequestContext, Response> action)

- **method**: String - HTTP method of the route.
- **route**: String - route to register in this object's REST server (service).
- **schema**: [Schema](../../../data/validate/schema) - schema to use for parameter validation.
- **authorize**: AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> - authorization interceptor
- **action**: Inflector<ContainerRequestContext, Response> - action to perform at the given route.


#### setReferences
Sets references to this endpoint's logger, counters, and connection resolver.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException

- **references**: [IReferences](../../../components/refer/ireferences) - IReferences object, containing references to a logger, counters, and a connection resolver.


#### unregister
Unregisters a registerable object, so that it is no longer used in dynamic endpoint discovery.

> `public` void unregister([IRegisterable](../iregisterable) registration)

- **registration**: [IRegisterable](../iregisterable) - registration to remove.

### Examples

```java
{@code
      public MyMethod(IContext context, ConfigParams _config, IReferences _references) {
          HttpEndpoint endpoint = new HttpEndpoint();
          if (this._config)
              endpoint.configure(this._config);
          if (this._references)
              endpoint.setReferences(this._references);
          ...
 
          this._endpoint.open(context);
          ...
      }
  }
```

### See also
- #### [IConfigurable](../../../components/config/iconfigurable)
- #### [IReferenceable](../../../components/refer/ireferenceable)
- #### [IOpenable](../../../components/run/iopenable)
