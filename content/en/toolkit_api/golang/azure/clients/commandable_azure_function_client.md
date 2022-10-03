---
type: docs
title: "CommandableAzureFunctionClient"
linkTitle: "CommandableAzureFunctionClient"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-azure-gox"
description: >
    Abstract client that calls commandable Azure Functions.
 
---

### Description

Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable.md) objects. Each command is exposed as action determined by "cmd" parameter.


#### Configuration parameters

- **connections**:
    - **uri**: (optional) full connection string or use protocol, app_name and function_name to build
    - **protocol**: (optional) connection protocol
    - **app_name**: (optional) Azure Function application name
    - **function_name**: (optional) Azure Function name
- **options**:
    - **retries**: number of retries (default: 3)
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)
- **credentials**:
    - **auth_code**: Azure Function auth code if use custom authorization provide empty string

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors

#### NewCommandableAzureFunctionClient
Creates a new instance of this client.

> NewCommandableAzureFunctionClient(name string) [*CommandableAzureFunctionClient]()

- **name**: string - a service name.


### Instance methods

#### CallCommand
Calls a remote action in Azure Function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> (c [*CommandableAzureFunctionClient]()) CallCommand(ctx context.Context, cmd string, correlationId string, params [*cdata.AnyValueMap](../../../commons/data/any_value_map)) (*http.Response, error) 

- **ctx**: context.Context - operation context.
- **cmd**: string - an action name
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **params**: [*cdata.AnyValueMap](../../../commons/data/any_value_map) - command parameters.
- **returns**: (*http.Response, error)  - action result.


### Examples

```go
type MyCommandableAzureClient struct {
	*clients.CommandableAzureFunctionClient
}

func NewMyCommandableAzureClient() *MyCommandableAzureClient {
	return &MyCommandableAzureClient{
		CommandableAzureFunctionClient: azureclient.NewCommandableAzureFunctionClient(),
	}
}

func (c *MyCommandableAzureClient) GetData(ctx context.Context, correlationId string, id string) MyData {
	response, err := c.CallCommand(ctx, "dummies.get_dummies", correlationId, cdata.NewAnyValueMapFromTuples("id", id))
	if err != nil {
		return MyData{}, err
	}

	return rpcclient.HandleHttpResponse[MyData](response, correlationId)
}

...
client := NewMyCommandableAzureClient()
client.Configure(config.NewConfigParamsFromTuples(
	"connection.uri", "http://myapp.azurewebsites.net/api/myfunction",
	"connection.protocol", "http",
	"connection.app_name", "myapp",
	"connection.function_name", "myfunction"
	"credential.auth_code", "XXXX"
))
result := client.GetData("123", "1")
...
```

### See also
- #### [AzureFunction](../../azure_function/)
