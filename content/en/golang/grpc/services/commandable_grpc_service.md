---
type: docs
title: "CommandableGrpcService"
linkTitle: "CommandableGrpcService"
gitUrl: "https://github.com/pip-services3-go/pip-services3-grpc-go"
description: > 
    Abstract service that receives commands via the GRPC protocol.

---

**Implements:** [GrpcClient](../grpc_client)


### Description

Abstract service that receives commands via GRPC protocol
to operations automatically generated for commands defined in [ICommandable](../../../commons/commands/icommandable).

Important points

- Each command is exposed as an Invoke method that receives a command name and parameters.
- Commandable services require only 3 lines of code to implement a robust external
GRPC-based remote interface.

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

#### InheritCommandableGrpcService
Creates a new instance of the service.

> InheritCommandableGrpcService(overrides IGrpcServiceOverrides, name string) [*CommandableGrpcService]()

- **overrides**: IGrpcServiceOverrides - TODO: add description
- **name**: string - service name.


### Instance methods

#### register
Registers all service routes in a gRPC endpoint.

> (c *CommandableGrpcService) Register()


### Examples

```go
type MyCommandableGrpcService struct {
    *CommandableGrpcService
}
func NewCommandableGrpcService() *CommandableGrpcService {
    c := DummyCommandableGrpcService{}
    c.CommandableGrpcService = grpcservices.NewCommandableGrpcService("myservice")
    c.DependencyResolver.Put("controller", cref.NewDescriptor("mygroup", "controller", "default", "*", "*"))
    return &c
}

service := NewMyCommandableGrpcService();
service.Configure(cconf.NewConfigParamsFromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", "8080",
));

service.SetReferences(cref.NewReferencesFromTuples(
   cref.NewDescriptor("mygroup","controller","default","default","1.0"), controller
));

opnErr:= service.Open("123")
if opnErr == nil {
    console.log("The GRPC service is running on port 8080");
}
```


### See also
- #### [CommandableGrpcClient](../../clients/commandable_grpc_client)
- #### [GrpcService](../grpc_service)

 
