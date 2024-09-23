---
type: docs
title: "StatusRestController"
linkTitle: "StatusRestController"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
description: >
    Service that returns microservice status information via HTTP/REST protocol.
---

**Extends:** [RestController](../rest_controller)


### Description

The StatusRestController class allows you to create a service that returns microservice status information via the HTTP/REST protocol.

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
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **protocol**: connection protocol (http or https)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connection
- **\*:endpoint:http:\*:1.0** - (optional) [HttpEndpoint](../http_endpoint) reference


### Instance methods


#### configure
Configures the component by passing its configuration parameters.

> `public` void configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException, ConfigException

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### register
Registers all service routes in HTTP endpoint.

> `public` void register()


### Examples

```java
{@code
  StatusRestController controller = new StatusRestController();
  controller.configure(ConfigParams.fromTuples(
      "connection.protocol", "http",
      "connection.host", "localhost",
      "connection.port", 8080
  ));
 
  controller.open("123");
  System.out.println("The Status controller is accessible at http://+:8080/status");
  }
```


### See also
- #### [RestClient](../../clients/rest_client)
- #### [RestController](../rest_controller)
