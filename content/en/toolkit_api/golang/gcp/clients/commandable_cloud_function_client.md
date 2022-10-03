---
type: docs
title: "CommandableCloudFunctionClient"
linkTitle: "CommandableCloudFunctionClient"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-gcp-gox"
description: >
    Abstract client that calls commandable Google Functions.
 
---

### Description

Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable.md) objects. Each command is exposed as action determined by "cmd" parameter.


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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors

#### NewCommandableCloudFunctionClient
Creates a new instance of this client.

> NewCommandableCloudFunctionClient(name string) [*CommandableCloudFunctionClient]()

- **name**: string - a service name.


### Instance methods

#### CallCommand
Calls a remote action in Google Function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> (c [*CommandableCloudFunctionClient]()) CallCommand(ctx context.Context, cmd string, correlationId string, params [*AnyValueMap](../../../commons/data/any_value_map)) (*http.Response, error)

- **ctx**: context.Context - operation context.
- **cmd**: string - an action name
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **params**: [*AnyValueMap](../../../commons/data/any_value_map) - command parameters.
- **returns**: (*http.Response, error) - action result.


### Examples

```go
type MyCommandableGoogleClient struct {
	*clients.CommandableCloudFunctionClient
}

func NewMyCommandableGoogleClient() *MyCommandableGoogleClient {
	return &MyCommandableGoogleClient{
		CommandableCloudFunctionClient: gcpclient.NewCommandableCloudFunctionClient(),
	}
}

func (c *MyCommandableGoogleClient) GetData(ctx context.Context, correlationId string, id string) MyData {
	response, err := c.CallCommand(ctx, "dummies.get_dummies", correlationId, cdata.NewAnyValueMapFromTuples("id", id))
	if err != nil {
		return MyData{}, err
	}

	return rpcclient.HandleHttpResponse[MyData](response, correlationId)
}

...
client := NewMyCommandableGoogleClient()
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
- #### [CloudFunction](../../cloud_function/)
