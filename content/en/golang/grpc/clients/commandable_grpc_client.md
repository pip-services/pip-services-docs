---
type: docs
title: "CommandableGrpcClient"
linkTitle: "CommandableGrpcClient"
gitUrl: "https://github.com/pip-services3-go/pip-services3-grpc-go"
description: > 
    Abstract client that calls a commandable GRPC service.

---

**Implements:** [GrpcClient](../grpc_client)

### Description

The CommandableGrpcClient class allows you to create clients that call a commandable GRPC service.

Important points

- Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable). Each command is exposed as an Invoke method that receives all parameters as args.

#### Configuration parameters

**connection(s)**:   
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)   
    - **protocol**: connection protocol: http or https   
    - **host**: host name or IP address   
    - **port**: port number   
    - **uri**: resource URI or connection string with all parameters in it   
**options**:   
    - **retries**: number of retries (default: 3)   
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)   
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)   

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements and specify the counter's source.

### Constructors

#### NewCommandableGrpcClient
Creates a new instance of the client.

> NewCommandableGrpcClient(name string) [*CommandableGrpcClient]()

- **name**: string - service name.


### Fields

<span class="hide-title-link">

#### Name
A service name.
> **Name**: string

</span>


### Instance methods

#### CallCommand
Calls a remote method via the GRPC commadable protocol.
The call is made via Invoke method and all parameters are sent in args object.
The complete route to remote method is defined as serviceName + '.' + name.

> (c [*CommandableGrpcClient]()) CallCommand(prototype reflect.Type, name string, correlationId string, params [*cdata.AnyValueMap](../../../commons/data/any_value_map)) (result interface{}, err error)

- **prototype**: reflect.Type - a prototype for properly convert result
- **name**: string - name of the command to call.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **params**: [*cdata.AnyValueMap](../../../commons/data/any_value_map) - command parameters.
- **returns**: (result interface{}, err error) - feature that receives the result



### Examples

```go
type MyCommandableGrpcClient struct {
 *CommandableGrpcClient
   ...
}

func (c * MyCommandableGrpcClient) GetData(correlationId string, id string) (result *MyData, err error
   params := cdata.NewEmptyStringValueMap()
   params.Put("id", id)
    calValue, calErr := c.CallCommand(MyDataType, "get_mydata_by_id", correlationId, params)
    if calErr != nil {
        return nil, calErr
    }
    result, _ = calValue.(*tdata.MyData)
    return result, err
}
...

client := NewMyCommandableGrpcClient();
client.Configure(cconf.NewConfigParamsFromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080,
));

result, err := client.GetData("123", "1")
...
```
