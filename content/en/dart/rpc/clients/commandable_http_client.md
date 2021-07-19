---
type: docs
title: "CommandableHttpClient"
linkTitle: "CommandableHttpClient"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
description: >
    Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable)
   
---

**Extends:** [RestClient](../../clients/rest_client)

### Description

The CommandableHttpClient class allows you to create commandable services. Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable) objects.

Important points

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

> CommandableHttpClient(String baseRoute)

- **baseRoute**: String - base route for a remote service.



### Instance methods

#### callCommand
Calls a remote method via the HTTP commadable protocol. The call is made via a POST operation and all parameters are sent in the body object. The complete route to the remote method is defined as baseRoute + "/" + name.

> Future callCommand(String name, String correlationId, params)

- **name**: String - name of the command to call.
- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **params**: dynamic - command parameters.
- **returns**: Future - that receives result or error.


### Examples

```dart
class MyCommandableHttpClient extends CommandableHttpClient implements IMyClient {
   ...
   Future<MyData> getData(String correlationId, String id) async {
       var result = await callCommand(
           "get_data",
           correlationId,
           { 'id': id });
      if (result == null) return null;
      return MyData.fromJson(json.decode(result));
    }
    ...
}

var client = MyCommandableHttpClient();
client.configure(ConfigParams.fromTuples([
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
]));

var result = await client.getData("123", "1")
...
```
