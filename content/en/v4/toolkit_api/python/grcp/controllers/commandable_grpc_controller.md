---
type: docs
title: "CommandableGrpcController"
linkTitle: "CommandableGrpcController"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-grpc-python"
description: > 
    Abstract controller that receives commands via the GRPC protocol.

---

**Implements:** [GrpcController](../../controllers/grpc_controller)

See also [CommandableGrpcClient](../../clients/commandable_grpc_client)


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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements as specified by the counter's source.
- **\*:endpoint:grpc:*:1.0** - (optional) [GrpcEndpoint](../grpc_endpoint) reference

### Constructors

Creates a new instance of the constructor.

> CommandableGrpcConstructor(name: str)

- **name**: str - constructor's name.


### Instance methods

#### register
Registers all constructor routes in a gRPC endpoint.

> register()


#### _register_commandable_method
Registers a commandable method in this objects GRPC server (constructor) by the given name.,

> _register_commandable_method(method: str, schema: [Schema](../../../data/validate/schema), action: Callable[[Optional[str], Any], Any])

- **method**: str - the GRPC method name.
- **schema**: [Schema](../../../data/validate/schema) - the schema to use for parameter validation.
- **action**: Callable[[Optional[str], Any], Any] - the action to perform at the given route.



### Examples

```python
class MyCommandableGrpcConstructor(CommandableGrpcConstructor):
   def __init__(self):
        super().__init__('constructor name')

        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup","controller","*","*","1.0")
        )

constructor = MyCommandableGrpcConstructor()
constructor.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))
constructor.set_references(References.from_tuples(
    Descriptor("mygroup","controller","default","default","1.0"), controller
))
constructor.open("123")
```


### See also
- #### [CommandableGrpcClient](../../clients/commandable_grpc_client)

 
