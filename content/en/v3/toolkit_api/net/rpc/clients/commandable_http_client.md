---
type: docs
title: "CommandableHttpClient"
linkTitle: "CommandableHttpClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable)
   
---

**Inherits:** [RestClient](../../clients/rest_client)

### Description

The CommandableHttpClient class allows you to create commandable services. Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable) objects.

**Important points**

- Each command is exposed as a POST operation that receives all parameters in the body object.

#### Configuration parameters

- **base_route**: base route for a remote URI
- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **protocol**: connection protocol (http or https)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **options**:
    - **retries**: number of retries (default: 3)
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../components/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve a connection




### Constructors
Creates a new instance of the client.

> `public` CommandableHttpClient(string baseRoute)

- **baseRoute**: string - base route for a remote service.



### Instance methods

#### CallCommand
Calls a remote method via the HTTP commadable protocol. The call is made via a POST operation and all parameters are sent in the body object. The complete route to the remote method is defined as baseRoute + "/" + name.

> `protected` Task\<T\> CallCommandAsync\<T\>(string route, string correlationId, object requestEntity)

- **route**: string - name of the command to call.
- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **requestEntity**: object - body object.
- **returns**: Task\<T\> - result of the command.


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
client.Configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080 ));
 
var data = client.GetData("123", "1");
...
```
