---
type: docs
title: "CommandableGrpcController"
linkTitle: "CommandableGrpcController"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-grpc-java"
description: > 
    Abstract service that receives commands via the GRPC protocol.

---

**Extends:** [GrpcController](../../controllers/grpc_controller)

See also [CommandableGrpcClient](../../clients/commandable_grpc_client), 
[GrpcController](../grpc_controller)

### Description

Abstract service that receives commands via GRPC protocol
to operations automatically generated for commands defined in [ICommandable](../../../rpc/commands/icommandable).

Important points

- Each command is exposed as an Invoke method that receives a command name and parameters.
- Commandable services require only 3 lines of code to implement a robust external
GRPC-based remote interface.

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

Creates a new instance of the service.

> `public` CommandableGrpcController(String name)

- **name**: String - service name.


### Instance methods

#### register
Registers all service routes in a gRPC endpoint.

> `public` void register()

#### registerCommandableMethod
Registers a commandable method in this objects GRPC server (service) by the given name.,

> `protected` void registerCommadableMethod(String method, CommandFunction action)

- **method**: String - the GRPC method name.
- **action**: CommandFunction - the action to perform at the given route.


### Examples

```java
{@code
  class MyCommandableGrpcController extends CommandableGrpcController {

      public MyCommandableGrpcController() {
          super();
          this._dependencyResolver.put("service",new Descriptor("mygroup","service","*","*","1.0"));
      }
 
      public static void main(String[] args) throws ApplicationException {
          var controller = new MyCommandableGrpcController();
          controller.configure(ConfigParams.fromTuples(
                  "connection.protocol", "http",
                  "connection.host", "localhost",
                  "connection.port", 8080
          ));
          controller.setReferences(References.fromTuples(
                  new Descriptor("mygroup","service","default","default","1.0"), service
          ));
 
          controller.open("123");
          System.out.println("The GRPC service is running on port 8080");
      }
  }
  }
```


### See also
- #### [CommandableGrpcClient](../../clients/commandable_grpc_client)
- #### [GrpcController](../grpc_service)

 

