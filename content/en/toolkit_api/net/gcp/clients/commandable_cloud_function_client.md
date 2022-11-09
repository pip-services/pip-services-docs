---
type: docs
title: "CommandableCloudFunctionClient"
linkTitle: "CommandableCloudFunctionClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-gcp-dotnet"
description: >
    Abstract client that calls commandable Google Functions.
 
---

**Inherits:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

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
    - **auth_token**:    Google-generated ID token, if use custom authorization provide empty string

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors
Creates a new instance of this client.

> `public` CommandableCloudFunctionClient(string name)

- **values**: string - a service name.


### Instance methods

#### CallCommand
Calls a remote action in Google Function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` async Task\<T\> CallCommand\<T\>(string cmd, string correlationId, object args)

- **cmd**: string - an action name
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: object - command parameters.
- **returns**: Task\<T\> - action result.


### Examples

```cs
class MyCommandableGoogleClient : CommandableCloudFunctionClient, IMyClient
{
...
    /// 
    public async Task<MyData> GetDataAsync(string correlationId, string id) {
        return await this.CallCommand<MyData>("get_data", correlationId, new { id=id });
    }
    ...
    /// 
    public async Task Main()
    {
        var client = new MyCommandableGoogleClient();
        client.Configure(ConfigParams.FromTuples(
            "connection.uri", "http://region-id.cloudfunctions.net/myfunction",
            "connection.protocol", "http",
            "connection.region", "region",
            "connection.function", "myfunction",
            "connection.project_id", "id",
            "credential.auth_token", "XXX"
        ));
    /// 
        var  result = await client.GetDataAsync("123", "1");
    }
}
```

### See also
- #### [CloudFunction](../../cloud_function/)
