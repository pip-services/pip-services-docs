---
type: docs
title: "CommandableGrpcController"
linkTitle: "CommandableGrpcController"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-grpc-dart"
description: > 
    Abstract controller that receives commands via the gRPC protocol.

---

**Extends:** [GrpcController](../../controllers/grpc_controller)

See also [CommandableGrpcClient](../../clients/commandable_grpc_client), 
[GrpcController](../grpc_controller)

### Description

Abstract controller that receives commands via gRPC protocol
to operations automatically generated for commands defined in [ICommandable](../../../rpc/commands/icommandable).

**Important points**

- Each command is exposed as an Invoke method that receives a command name and parameters.
- Commandable controllers require only 3 lines of code to implement a robust external
gRPC-based remote interface.

#### Configuration parameters

- **dependencies**:    
    - **endpoint**: override for HTTP Endpoint dependency    
    - **controller**: override for Controller dependency    
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)    
    - **protocol**: connection protocol: http or https    
    - **host**: host name or IP address    
    - **port**: port number    
    - **uri**: resource URI or connection string with all parameters in it    

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements as specified by the counter's source.
- **\*:endpoint:grpc:*:1.0** - (optional) [GrpcEndpoint](../grpc_endpoint) reference

### Constructors

Creates a new instance of the controller.

> CommandableGrpcController(String name)

- **name**: String - controller's name.


### Instance methods

#### register
Registers all controller routes in a gRPC endpoint.

`@override`
> void register()


### Examples

```dart
class MyCommandableGrpcController extends CommandableGrpcController {
   MyCommandableGrpcController():super('mydata') {
      _dependencyResolver.put(
          "controller",
          Descriptor("mygroup","controller","*","*","1.0")
      );
   }
}

var controller = MyCommandableGrpcController();
controller.configure(ConfigParams.fromTuples([
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
]));

controller.setReferences(References.fromTuples([
    Descriptor("mygroup","controller","default","default","1.0"), controller
]));

await controller.open("123");
print("The GRPC controller is running on port 8080");
```


### See also
- #### [CommandableGrpcClient](../../clients/commandable_grpc_client)
- #### [GrpcController](../grpc_controller)

 
