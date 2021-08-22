---
type: docs
title: "CommandableHttpService"
linkTitle: "CommandableHttpService"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
description: >
    Abstract service that receives remote calls via HTTP/REST protocol to operations automatically generated for commands defined in ICommandable components. 
    
---

**Extends:** [RestService](../rest_service)

See also [RestService](../rest_service), [CommandableHttpClient](../../clients/commandable_http_client)

### Description

The CommandableHttpService class allows you to create services that receive remote calls via the HTTP/REST protocol to operations automatically generated for commands defined in ICommandable components.

**Important points**

- Each command is exposed as POST operation that receives all parameters in the body object. 
- Commandable services require only three lines of code to implement a robust external HTTP-based remote interface.

#### Configuration parameters

- **base_route**:              base route for remote URI
- **dependencies**:
    - **endpoint**:              override for HTTP Endpoint dependency
    - **controller**:            override for Controller dependency
- **connection(s)**:           
    - **discovery_key**:         (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **protocol**:              connection protocol: http or https
    - **host**:                  host name or IP address
    - **port**:                  port number
    - **uri**:                   resource URI or connection string with all parameters in it


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../components/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection




### Constructors
Creates a new instance of the service.

> CommandableHttpService(String baseRoute)

- **baseRoute**: String - service base route.


### Fields

<span class="hide-title-link">

#### _commandSet
Set of commands.
> **_commandSet**: [CommandSet](../../../commons/commands/command_set)

</span>


### Instance methods


#### register
Registers all service routes in the HTTP endpoint.

`@override`
> void register()


### Examples

```dart
class MyCommandableHttpService extends CommandableHttpService {
   MyCommandableHttpService(): base() {
      dependencyResolver.put(
          "controller",
           Descriptor("mygroup","controller","*","*","1.0")
      );
   }
}

var service = MyCommandableHttpService();
service.configure(ConfigParams.fromTuples([
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
]));

service.setReferences(References.fromTuples([
   new Descriptor("mygroup","controller","default","default","1.0"), controller
]));

 await service.open("123");
 print("The REST service is running on port 8080");
```


### See also
- #### [RestService](../rest_service)
- #### [CommandableHttpClient](../../clients/commandable_http_client)
