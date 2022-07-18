---
type: docs
title: "CommandableGrpcClient"
linkTitle: "CommandableGrpcClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-grpc-dotnet"
description: > 
    Abstract client that calls a commandable gRPC service.

---

**Inherits:** [GrpcClient](../grpc_client)

### Description

The CommandableGrpcClient class allows you to create clients that call a commandable GRPC service.

Important points

- Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable). Each command is exposed as an Invoke method that receives all parameters as args.

#### Configuration parameters

- **connection(s)**:   
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)   
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

> `public` CommandableGrpcClient(string name)

- **name**: string - service name.

Creates a new instance of the client.

> `public` CommandableGrpcClient()


### Fields

<span class="hide-title-link">

#### name
Service's name.
> `protected` **name**: string

</span>


### Instance methods

#### callCommand
Calls a remote method via the gRPC commadable protocol.
The call is made via the Invoke method and all parameters are sent in the args object.
The complete route to the remote method is defined as serviceName + '.' + name.

> `public` Task\<T\> CallCommandAsync\<T\>(string name, string correlationId, object requestEntity)

- **name**: string - name of the command to call.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **requestEntity**: object - command parameters.
- **returns**: Task\<T\> - feature that receives the result



### Examples

```cs
class MyCommandableHttpClient: CommandableHttpClient, IMyClient 
{
    ...
    public MyData GetData(string correlationId, string id)
    {
        return await CallCommandAsync<DataPage<MyData>>(        
        "get_data",
        correlationId,
        new {mydata.id = id}
    );        
    }
...
}

var client = new MyCommandableHttpClient();
client.Configure(ConfigParams.FromTuples(
"connection.protocol", "http",
"connection.host", "localhost",
"connection.port", 8080 ));

var data = client.GetData("123", "1");
...
```
