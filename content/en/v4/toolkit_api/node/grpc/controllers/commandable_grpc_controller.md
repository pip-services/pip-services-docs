---
type: docs
title: "CommandableGrpcController"
linkTitle: "CommandableGrpcController"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-grpc-node"
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

> `public` constructor(name: string)

- **name**: string - service name.


### Instance methods

#### register
Registers all service routes in a gRPC endpoint.

> `public` register()

#### registerCommandableMethod
Registers a commandable method in this objects GRPC server (service) by the given name.,

> `protected` registerCommandableMethod(method: string, schema: [Schema](../../../data/validate/schema), action: (context: [IContext](../../../components/context/icontext), data: any) => Promise\<any\>): void

- **method**: string - the GRPC method name.
- **schema**: [Schema](../../../data/validate/schema) - the schema to use for parameter validation.
- **action**: (context: [IContext](../../../components/context/icontext), data: any) => Promise\<any\> - the action to perform at the given route.


### Examples

```typescript
class MyCommandableGrpcController extends CommandableGrpcController {
   public constructor() {
      super();
      this._dependencyResolver.put(
          "controller",
          new Descriptor("mygroup","controller","*","*","1.0")
      );
   }
}

let service = new MyCommandableGrpcController();
service.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

service.setReferences(References.fromTuples(
   new Descriptor("mygroup","controller","default","default","1.0"), controller
));

await service.open("123");
console.log("The GRPC service is running on port 8080");
```


### See also
- #### [CommandableGrpcClient](../../clients/commandable_grpc_client)
- #### [GrpcController](../grpc_service)

 
