---
type: docs
title: "HeartbeatRestService"
linkTitle: "HeartbeatRestService"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rpc-go"
description: >
    Service returns heartbeat via HTTP/REST protocol.



---

**Implements:** [RestService](../rest_service)

### Description

The HeartbeatRestService class allows you to create services that return heartbeat via HTTP/REST protocol. 

Important points

- The service responds on /heartbeat route (can be changed) with a string with the current time in UTC.
- This service route can be used to perform health checks by loadbalancers and container orchestrators.

#### Configuration parameters

- **base_route**: base route for remote URI (default: "")
- **route**: route to heartbeat operation (default: "heartbeat")
- **dependencies**:
    - **endpoint**: override for HTTP Endpoint dependency
- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **protocol**: connection protocol: http or https
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../components/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection

### Constructors

#### NewHeartbeatRestService
Creates a new instance of c service.

> NewHeartbeatRestService() [*HeartbeatRestService]()

### Methods

#### Configure
Configures component by passing configuration parameters.

> (c *HeartbeatRestService) Configure(config *cconf.ConfigParams)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Register
Registers all service routes in HTTP endpoint.

> (c *HeartbeatRestService) Register()


### heartbeat
Handles heartbeat requests

> (c *HeartbeatRestService) heartbeat(req *http.Request, res http.ResponseWriter)

- **req**: *http.Request - an HTTP request
- **res**: http.ResponseWriter - an HTTP response



### Examples

```go
service := NewHeartbeatService();
service.Configure(cconf.NewConfigParamsFromTuples(
    "route", "ping",
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080,
));
opnErr := service.Open("123")
if opnErr == nil {
   fmt.Println("The Heartbeat service is accessible at http://+:8080/ping");
}
```

### See also
- #### [RestService](../rest_service)
- #### [RestClient](../../clients/rest_client)
