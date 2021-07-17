---
type: docs
title: "HttpEndpoint"
linkTitle: "HttpEndpoint"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Used for creating HTTP endpoints. 
---

**Inherits:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

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


### Instance methods

#### CloseAsync
Closes this endpoint and the REST server (service) that was opened earlier.

> `public virtual` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures this HttpEndpoint using the given configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters, containing a "connection(s)" section.

#### Initialize
TODO: add description

> `public` void Initialize([IInitializable](../iinitializable) initialization)

- **initialization**: [IInitializable](../iinitializable) - TODO: add description

#### Instrument
Adds instrumentation to log calls and measure call time. It returns a CounterTiming 
object that is used to end the time measurement.

> `protected` [CounterTiming](../../../components/count/counter_timing) Instrument(string correlationId, string name)
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - a method name.
- **returns**: [CounterTiming](../../../components/count/counter_timing) - CounterTiming object to end the time measurement.

#### IsOpen
Checks if the component is open.

> `public virtual` bool IsOpen()

- **returns**: bool - whether or not this endpoint is open with an actively listening REST server.


#### Register
Registers a registerable object for dynamic endpoint discovery.

> `public` void Register([IRegisterable](../../services/iregisterable) registration)

- **registration**: [IRegisterable](../../services/iregisterable) - the registration to add.


#### RegisterInterceptor
Registers a middleware action for the given route.

> `public` void RegisterInterceptor(string route, Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Task\>, Task\> action)

- **route**: string - route to register in this object's REST server (service).
- **action**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Task\>, Task\> - middleware action to perform at the given route.


#### RegisterRoute
Registers an action in this objects REST server (service) by the given method and route.

> `public` void RegisterRoute(string method, string route, Func\<HttpRequest, HttpResponse, RouteData, Task\> action)

- **method**: string - HTTP method of the route.
- **route**: string - route to register in this object's REST server (service).
- **action**: Func\<HttpRequest, HttpResponse, RouteData, Task\> - action to perform at the given route.


#### RegisterRouteWithAuth
Registers an action with authorization in this objects REST server (service)
by the given method and route.

> `public` void RegisterRouteWithAuth(string method, string route, Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> authorize, Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Task\> action)

- **method**: string - HTTP method of the route.
- **route**: string - route to register in this object's REST server (service).
- **authorize**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> - authorization interceptor
- **action**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Task\> - action to perform at the given route.


#### SetReferences
Sets references to this endpoint's logger, counters, and connection resolver.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - IReferences object, containing references to a logger, counters, and a connection resolver.


#### Uninitialize
TODO: add description

> `public` void Uninitialize([IInitializable](../iinitializable) initialization)

- **initialization**: [IInitializable](../iinitializable) - TODO: add description


#### Unregister
Unregisters a registerable object, so that it is no longer used in dynamic endpoint discovery.

> `public` void Unregister([IRegisterable](../services/iregisterable) registration)

- **registration**: [IRegisterable](../services/iregisterable) - registration to remove.

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

### See also
- #### [IConfigurable](../../../commons/config/iconfigurable)
- #### [IReferenceable](../../../commons/refer/ireferenceable)
- #### [IOpenable](../../../commons/run/iopenable)
