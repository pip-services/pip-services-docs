---
type: docs
title: "CommandableHttpController"
linkTitle: "CommandableHttpController"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-http-dart"
description: >
    Abstract controller that receives remote calls via HTTP/REST protocol to operations automatically generated for commands defined in ICommandable components. 
    
---

**Extends:** [RestController](../rest_controller)

See also [RestController](../rest_controller), [CommandableHttpClient](../../clients/commandable_http_client)

### Description

The CommandableHttpController class allows you to create controllers that receive remote calls via the HTTP/REST protocol to operations automatically generated for commands defined in ICommandable components.

**Important points**

- Each command is exposed as POST operation that receives all parameters in the body object. 
- Commandable controllers require only three lines of code to implement a robust external HTTP-based remote interface.

#### Configuration parameters

- **base_route**:              base route for remote URI
- **dependencies**:
    - **endpoint**:              override for HTTP Endpoint dependency
    - **controller**:            override for Controller dependency
- **connection(s)**:           
    - **discovery_key**:         (optional) a key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **protocol**:              connection protocol: http or https
    - **host**:                  host name or IP address
    - **port**:                  port number
    - **uri**:                   resource URI or connection string with all parameters in it


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../observability/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connection




### Constructors
Creates a new instance of the controller.

> CommandableHttpController(String baseRoute)

- **baseRoute**: String - controller base route.


### Fields

<span class="hide-title-link">

#### _commandSet
Set of commands.
> **_commandSet**: [CommandSet?](../../../rpc/commands/command_set)

</span>


### Instance methods


#### register
Registers all controller routes in the HTTP endpoint.

`@override`
> void register()


### Examples

```dart
class MyCommandableHttpController extends CommandableHttpController {
   MyCommandableHttpController(): base() {
      dependencyResolver.put(
          "controller",
           Descriptor("mygroup","controller","*","*","1.0")
      );
   }
}

var controller = MyCommandableHttpController();
controller.configure(ConfigParams.fromTuples([
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
]));

controller.setReferences(References.fromTuples([
   new Descriptor("mygroup","controller","default","default","1.0"), controller
]));

await controller.open("123");
print("The REST controller is running on port 8080");
```


### See also
- #### [RestController](../rest_controller)
- #### [CommandableHttpClient](../../clients/commandable_http_client)
