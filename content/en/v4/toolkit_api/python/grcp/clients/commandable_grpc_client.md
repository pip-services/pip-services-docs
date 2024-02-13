---
type: docs
title: "CommandableGrpcClient"
linkTitle: "CommandableGrpcClient"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-grpc-python"
description: > 
    Abstract client that calls a commandable GRPC controller.

---

**Implements:** [GrpcClient](../grpc_client)

### Description

The CommandableGrpcClient class allows you to create clients that call a commandable GRPC controller.

Important points

- Commandable controllerss are generated automatically for [ICommandable](../../../rpc/commands/icommandable). Each command is exposed as an Invoke method that receives all parameters as args.

#### Configuration parameters

- **connection(s)**:   
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)   
    - **protocol**: connection protocol: http or https   
    - **host**: host name or IP address   
    - **port**: port number   
    - **uri**: resource URI or connection string with all parameters in it   
- **options**:   
    - **retries**: number of retries (default: 3)   
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)   
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)   

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements and specify the counter's source.

### Constructors

Creates a new instance of the client.

> CommandableGrpcClient(name: str)

- **name**: str - controller name.


### Fields

<span class="hide-title-link">

#### _name
A controller's name.
> **_name**: str

</span>


### Instance methods

#### call_command
Calls a remote method via the GRPC commadable protocol.
The call is made via Invoke method and all parameters are sent in args object.
The complete route to remote method is defined as controllerName + '.' + name.

> call_command(name: str, context: Optional[IContext], params: dict): Any

- **name**: str - name of the command to call.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: dict - command parameters.
- **returns**: Any - feature that receives the result



### Examples

```python
class MyCommandableGrpcClient(CommandableGrpcClient, IMyClient):
     def __init__(self):
        super().__init__('my_data')
    ...
    def get_data(self, context, id):

        return self.call_command(
                    "get_data",
                    context,
                    { 'id': id }
                )

client = new MyCommandableGrpcClient()
client.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))
result = client.get_data("123", "1")
```
