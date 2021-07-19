---
type: docs
title: "CommandableGrpcClient"
linkTitle: "CommandableGrpcClient"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-grpc-dart"
description: > 
    Abstract client that calls a commandable GRPC service.

---

**Extends:** [GrpcClient](../grpc_client)

### Description

The CommandableGrpcClient class allows you to create clients that call a commandable GRPC service.

Important points

- Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable). Each command is exposed as an Invoke method that receives all parameters as args.

#### Configuration parameters

- **connection(s)**:   
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)   
    - **protocol**: connection protocol: http or https   
    - **host**: host name or IP address   
    - **port**: port number   
    - **uri**: resource URI or connection string with all parameters in it   
- **options**:   
    - **retries**: number of retries (default: 3)   
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)   
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)   

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements and specify the counter's source.

### Constructors

Creates a new instance of the client.

> CommandableGrpcClient(String name)

- **name**: String - service name.


### Fields

<span class="hide-title-link">

#### _serviceName
A service name.
> **_serviceName**: String

</span>


### Instance methods

#### callCommand
Calls a remote method via the GRPC commadable protocol.
The call is made via Invoke method and all parameters are sent in args object.
The complete route to remote method is defined as serviceName + '.' + name.

> Future callCommand(String name, String correlationId, params)

- **name**: String - name of the command to call.
- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **params**: dynamic - command parameters.
- **returns**: Future - feature that receives the result



### Examples

```dart
class MyCommandableGrpcClient extends CommandableGrpcClient implements IMyClient {
   ...
    Future<MyData> getData(String correlationId, String id) async {
       var result = await callCommand(
           'get_data',
           correlationId,
           { 'id': id }
        );
       var item = MyData()
       item.fromJson(result);
       return item;
    }
    ...
}

var client = MyCommandableGrpcClient();
client.configure(ConfigParams.fromTuples([
    'connection.protocol', 'http',
    'connection.host', 'localhost',
    'connection.port', 8080
]));

var item = await client.getData('123', '1')
...
```
