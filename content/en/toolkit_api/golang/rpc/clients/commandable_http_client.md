---
type: docs
title: "CommandableHttpClient"
linkTitle: "CommandableHttpClient"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rpc-go"
description: >
    Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable)
   
---

**Implements:** [RestClient](../../clients/rest_client)

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

> NewCommandableHttpClient(baseRoute string) [*CommandableHttpClient]()

- **baseRoute**: string - base route for a remote service.



### Methods

#### CallCommand
Calls a remote method via the HTTP commadable protocol. The call is made via a POST operation and all parameters are sent in the body object. The complete route to the remote method is defined as baseRoute + "/" + name.

> (c [*CommandableHttpClient]()) CallCommand(prototype reflect.Type, name string, correlationId string, params [*cdata.AnyValueMap](../../../commons/data/any_value_map)) (result interface{}, err error)

- **prototype**: reflect.Type - type of returned data
- **name**: string - name of the command to call.
- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **params**: [*cdata.AnyValueMap](../../../commons/data/any_value_map) - command parameters.
- **returns**: (result interface{}, err error) - result of the command.


### Examples

```go
type MyCommandableHttpClient struct{
    *CommandableHttpClient
    prototype reflect.Type // type of operation data
   ...
}
   result, err := func (c * MyCommandableHttpClient) GetData(correlationId string, id string)(result MyData, err error){
       params:= cdata.NewEmptyStringValueMap()
       params.Set("id",id)
        res, err := c.CallCommand(
            prototype
           "get_data",
           correlationId,
           params)
           ...
           // convert response to MyData
           ...
           return result, err
    }
client = NewMyCommandableHttpClient();
client.Configure(cconf.NewConfigParamsFromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));
result, err := client.GetData("123", "1")
...
```
