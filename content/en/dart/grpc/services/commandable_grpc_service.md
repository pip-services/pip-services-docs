---
type: docs
title: "CommandableGrpcService"
linkTitle: "CommandableGrpcService"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-grpc-dart"
description: > 
    Abstract service that receives commands via the gRPC protocol.

---

**Extends:** [GrpcClient](../../clients/grpc_client)

See also [CommandableGrpcClient](../../clients/commandable_grpc_client), 
[GrpcService](../grpc_service)

### Description

Abstract service that receives commands via gRPC protocol
to operations automatically generated for commands defined in [ICommandable](../../../commons/commands/icommandable).

**Important points**

- Each command is exposed as an Invoke method that receives a command name and parameters.
- Commandable services require only 3 lines of code to implement a robust external
gRPC-based remote interface.

#### Configuration parameters

- **dependencies**:    
    - **endpoint**: override for HTTP Endpoint dependency    
    - **controller**: override for Controller dependency    
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)    
    - **protocol**: connection protocol: http or https    
    - **host**: host name or IP address    
    - **port**: port number    
    - **uri**: resource URI or connection string with all parameters in it    

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements as specified by the counter's source.
- **\*:endpoint:grpc:*:1.0** - (optional) [GrpcEndpoint](../grpc_endpoint) reference

### Constructors

Creates a new instance of the service.

> CommandableGrpcService(String name)

- **name**: String - service name.


### Instance methods

#### register
Registers all service routes in a gRPC endpoint.

`@override`
> void register()


### Examples

```dart
class MyCommandableGrpcService extends CommandableGrpcService {
   MyCommandableGrpcService():super('mydata') {
      _dependencyResolver.put(
          "controller",
          Descriptor("mygroup","controller","*","*","1.0")
      );
   }
}

var service = MyCommandableGrpcService();
service.configure(ConfigParams.fromTuples([
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
]));

service.setReferences(References.fromTuples([
    Descriptor("mygroup","controller","default","default","1.0"), controller
]));

await service.open("123");
print("The GRPC service is running on port 8080");
```


### See also
- #### [CommandableGrpcClient](../../clients/commandable_grpc_client)
- #### [GrpcService](../grpc_service)

 
