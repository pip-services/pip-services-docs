---
type: docs
title: "StatusRestService"
linkTitle: "StatusRestService"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rpc-go"
description: >
    Service that returns microservice status information via HTTP/REST protocol.
---

**Implements:** [RestService](../rest_service)


### Description

The StatusRestService class allows you to create a service that returns microservice status information via the HTTP/REST protocol.

```
The service responds on /status route (can be changed) with a JSON object:
{
    - "id":            unique container id (usually hostname)
    - "name":          container name (from ContextInfo)
    - "description":   container description (from ContextInfo)
    - "start_time":    time when container was started
    - "current_time":  current time in UTC
    - "uptime":        duration since container start time in milliseconds
    - "properties":    additional container properties (from ContextInfo)
    - "components":    descriptors of components registered in the container
}

```

#### Configuration parameters

- **base_route**: base route for remote URI
- **route**: status route (default: "status")
- **dependencies**:
    - **endpoint**: override for HTTP Endpoint dependency
    - **controller**: override for Controller dependency
- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **protocol**: connection protocol (http or https)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection
- **\*:endpoint:http:\*:1.0** - (optional) [HttpEndpoint](../http_endpoint) reference

### Constructors

#### NewStatusRestService

> NewStatusRestService() [*StatusRestService]()

### Methods


#### Configure
Configures the component by passing its configuration parameters.

> (c [*StatusRestService]()) Configure(config )

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### SetReferences
Sets references to dependent components.

> (c [*StatusRestService]()) SetReferences(references [crefer.IReferences](../../../commons/refer/ireferences))

- **references**: [crefer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### Register
Registers all service routes in HTTP endpoint.

> (c [*StatusRestService]()) Register()


### Examples

```go
service = NewStatusService();
service.Configure(cref.NewConfigParamsFromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080,
));
opnErr:= service.Open("123")
if opnErr == nil {
   fmt.Println("The Status service is accessible at http://localhost:8080/status");
}
```


### See also
- #### [RestClient](../../clients/rest_client)
- #### [RestService](../rest_service)
