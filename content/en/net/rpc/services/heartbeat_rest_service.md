---
type: docs
title: "HeartbeatRestService"
linkTitle: "HeartbeatRestService"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Service that returns a heartbeat via HTTP/REST protocol.



---

**Inherits:** [RestService](../rest_service)

### Description

The HeartbeatRestService class allows you to create services that return a heartbeat via the HTTP/REST protocol. 

**Important points**

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



### Instance methods

#### Configure
Configures a component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Register
Registers all service routes in HTTP endpoint.

> `public override` void Register()



### Examples

```cs
var service = new HeartbeatService();
service.Configure(ConfigParams.FromTuples(
    "route", "ping",
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080 ));

service.Open("123");
Console.Out.WriteLine("The Heartbeat service is accessible at http://+:8080/ping");
```

### See also
- #### [RestService](../rest_service)
- #### [RestClient](../../clients/rest_client)
