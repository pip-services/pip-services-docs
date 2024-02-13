---
type: docs
title: "CommandableGrpcController"
linkTitle: "CommandableGrpcController"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
description: > 
    Abstract controller that receives commands via the GRPC protocol.

---

**Implements:** [GrpcController](../../controllers/grpc_controller)


### Description

Abstract controller that receives commands via GRPC protocol
to operations automatically generated for commands defined in [ICommandable](../../../rpc/commands/icommandable).

Important points

- Each command is exposed as an Invoke method that receives a command name and parameters.
- Commandable controllers require only 3 lines of code to implement a robust external
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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) controllers
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements as specified by the counter's source.
- **\*:endpoint:grpc:*:1.0** - (optional) [GrpcEndpoint](../grpc_endpoint) reference

### Constructors

#### InheritCommandableGrpcController
Creates a new instance of the controller.

> InheritCommandableGrpcController(overrides IGrpcControllerOverrides, name string) [*CommandableGrpcController]()

- **overrides**: IGrpcControllerOverrides - structure thath overrides `Register` method.
- **name**: string - controller name.


### Methods

#### Register
Registers all controller routes in a gRPC endpoint.

> (c *CommandableGrpcController) Register()


### Examples

```go
type MyCommandableGrpcController struct {
	*CommandableGrpcController
}
func NewCommandableGrpcController() *CommandableGrpcController {
	c := DummyCommandableGrpcController{}
	c.CommandableGrpcController = grpccontrollers.NewCommandableGrpcControllers("mycontroller")
	c.DependencyResolver.Put("controller", cref.NewDescriptor("mygroup", "controller", "default", "*", "*"))
	return &c
}

controller := NewMyCommandableGrpcControllers();
controller.Configure(ctx, cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", "8080",
))

controller.SetReferences(ctx, cref.NewReferencesFromTuples(
	cref.NewDescriptor("mygroup","controller","default","default","1.0"), controller
))

opnErr := controller.Open(ctx, "123")
if opnErr == nil {
	fmt.Println("The GRPC controller is running on port 8080")
}
```


### See also
- #### [CommandableGrpcClient](../../clients/commandable_grpc_client)
- #### [GrpcController](../grpc_controller)

 

