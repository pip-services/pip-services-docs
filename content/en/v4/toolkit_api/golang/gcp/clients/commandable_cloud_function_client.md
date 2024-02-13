---
type: docs
title: "CommandableCloudFunctionClient"
linkTitle: "CommandableCloudFunctionClient"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-gcp-go"
description: >
    Abstract client that calls commandable Google Functions.
 
---

### Description

Commandable services are generated automatically for [ICommandable](../../../rpc/commands/icommandable) objects. Each command is exposed as action determined by "cmd" parameter.


#### Configuration parameters

- **connections**:
    - **uri**:           full connection uri with specific app and function name
    - **protocol**:      connection protocol
    - **project_id**:    is your Google Cloud Platform project ID
    - **region**:        is the region where your function is deployed
    - **function_name**: is the name of the HTTP function you deployed
- **options**:
	- **retries**: number of retries (default: 3)
	- **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
	- **timeout**: invocation timeout in milliseconds (default: 10 sec)
- **credentials**:
    - **account**: the service account name
    - **auth_token**: Google-generated ID token, if use custom authorization provide empty string

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors

#### NewCommandableCloudFunctionClient
Creates a new instance of this client.

> NewCommandableCloudFunctionClient(name string) [*CommandableCloudFunctionClient]()

- **name**: string - a controller name.


### Instance methods

#### CallCommand
Calls a remote action in Google Function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> (c [*CommandableCloudFunctionClient]()) CallCommand(ctx context.Context, cmd string, context [IContext](../../../components/context/icontext), params [*AnyValueMap](../../../commons/data/any_value_map)) (*http.Response, error)

- **ctx**: context.Context - operation context.
- **cmd**: string - an action name
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: [*AnyValueMap](../../../commons/data/any_value_map) - command parameters.
- **returns**: (*http.Response, error) - action result.


### Examples

```go
type MyCommandableCloudFunctionClient struct {
	*clients.CommandableCloudFunctionClient
}

func NewMyCommandableCloudFunctionClient() *MyCommandableCloudFunctionClient {
	return &MyCommandableCloudFunctionClient{
		CommandableCloudFunctionClient: gcpclient.NewCommandableCloudFunctionClient(),
	}
}

func (c *MyCommandableCloudFunctionClient) GetData(ctx context.Context, context [IContext](../../../components/context/icontext), id string) MyData {
	response, err := c.CallCommand(ctx, "dummies.get_dummies", context, cdata.NewAnyValueMapFromTuples("id", id))
	if err != nil {
		return MyData{}, err
	}

	return rpcclient.HandleHttpResponse[MyData](response, context)
}

...
client := NewMyCommandableCloudFunctionClient()
client.Configure(config.NewConfigParamsFromTuples(
	"connection.uri", "http://region-id.cloudfunctions.net/myfunction",
	"connection.protocol", "http",
	"connection.region", "region",
	"connection.function", "myfunction",
	"connection.project_id", "id",
	"credential.auth_token", "XXX",
))
result := client.GetData("123", "1")
...
```

### See also
- #### [CloudFunction](../../containers/cloud_function/)

