---
type: docs
title: "CommandableLambdaClient"
linkTitle: "CommandableLambdaClient"
gitUrl: "https://github.com/pip-services3-go/pip-services3-aws-go"
description: >
    Abstract client that calls commandable AWS Lambda Functions.
---

**Implements:** [LambdaClient](../lambda_client)

### Description

Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable).
Each command is exposed as an action determined by the "cmd" parameter.


#### Configuration parameters

- **connections**:                   
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **region**: (optional) AWS region
- **credentials**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client id
 - **options**:
    - **connect_timeout**: (optional) connection timeout in milliseconds (default: 10 sec)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors

#### NewCommandableLambdaClient
Creates a new instance of this client.

> NewCommandableLambdaClient(name string) [*CommandableLambdaClient]()

- **name**: string - service's name.

### Methods

#### CallCommand
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> (c [*CommandableLambdaClient]()) CallCommand(prototype reflect.Type, cmd string, correlationId string, params [*AnyValueMap](../../../commons/data/any_value_map)) (result interface{}, err error)

- **prototype**: reflect.Type - type for convert result. Set nil for return raw []byte
- **cmd**: string - action name
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **params**: [*AnyValueMap](../../../commons/data/any_value_map) - command parameters.
- **returns**: (result interface{}, err error) - action result.



### Examples

```go
type MyLambdaClient struct {
     *CommandableLambdaClient
}

...

func (c* MyLambdaClient) GetData(correlationId string, id string)(result MyDataPage, err error) {
  return c.callCommand(MyDataPageType,
        "get_data",
        correlationId,
        map[string]interface{}{ "id": id })
}

...

client := NewMyLambdaClient();

client.Configure(NewConfigParamsFromTuples(
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX",
    "connection.arn", "YYYYYYYYYYYYY"
));

res, err := client.GetData("123", "1")
...
```

### See also
- #### [LambdaFunction](../../containers/lambda_function)
