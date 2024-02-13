---
type: docs
title: "HeartbeatRestController"
linkTitle: "HeartbeatRestController"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-http-go"
description: >
    Controller returns heartbeat via HTTP/REST protocol.



---

**Implements:** [RestController](../rest_controller)

### Description

The HeartbeatRestController class allows you to create controller that return heartbeat via HTTP/REST protocol. 

Important points

- The controller responds on /heartbeat route (can be changed) with a string with the current time in UTC.
- This controller route can be used to perform health checks by loadbalancers and container orchestrators.

#### Configuration parameters

- **base_route**: base route for remote URI (default: "")
- **route**: route to heartbeat operation (default: "heartbeat")
- **dependencies**:
    - **endpoint**: override for HTTP Endpoint dependency
- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **protocol**: connection protocol: http or https
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../observability/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connection

### Constructors

#### NewHeartbeatRestController
Creates a new instance of c controller.

> NewHeartbeatRestController() [*HeartbeatRestController]()

### Methods

#### Configure
Configures component by passing configuration parameters.

> (c [*HeartbeatRestController]()) Configure(ctx context.Context, config *cconf.ConfigParams)

- **ctx**: context.Context - operation context.
- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Register
Registers all the controller's routes in HTTP endpoint.

> (c [*HeartbeatRestController]()) Register()


### heartbeat
Handles heartbeat requests

> (c [*HeartbeatRestController]()) heartbeat(req *http.Request, res http.ResponseWriter)

- **req**: *http.Request - an HTTP request
- **res**: http.ResponseWriter - an HTTP response



### Examples

```go
controller := NewHeartbeatController();
controller.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"route", "ping",
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8080,
))

opnErr := controller.Open(context.Background(), "123")
if opnErr == nil {
	fmt.Println("The Heartbeat controller is accessible at http://+:8080/ping")
}
```

### See also
- #### [RestController](../rest_controller)
- #### [RestClient](../../clients/rest_client)

