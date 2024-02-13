---
type: docs
title: "HeartbeatRestController"
linkTitle: "HeartbeatRestController"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-http-dart"
description: >
    This controllers returns heartbeat via HTTP/REST protocol.



---

**Extends:** [RestController](../rest_controller)

### Description

The HeartbeatRestController class allows you to create controllers that return heartbeat via HTTP/REST protocol. 

**Important points**

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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) controllers to resolve connection

### Constructors
Creates a new instance of this controller.
> HeartbeatRestController()

### Instance methods

#### configure
Configures component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### register
Registers all controller routes in HTTP endpoint.

`@override`
> void register()



### Examples

```dart
var controller = HeartbeatController();
controller.configure(ConfigParams.fromTuples(
    'route', 'ping',
    'connection.protocol', 'http',
    'connection.host', 'localhost',
    'connection.port', 8080
));

await controller.open('123');

print('The Heartbeat controller is accessible at http://+:8080/ping');
```

### See also
- #### [RestController](../rest_controller)
- #### [RestClient](../../clients/rest_client)
