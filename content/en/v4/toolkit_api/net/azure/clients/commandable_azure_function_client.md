---
type: docs
title: "CommandableAzureFunctionClient"
linkTitle: "CommandableAzureFunctionClient"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-azure-dotnet"
description: >
    Abstract client that calls commandable Azure Functions.
 
---

**Inherits:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

Commandable controllers are generated automatically for [ICommandable](../../../rpc/commands/icommandable) objects. Each command is exposed as action determined by "cmd" parameter.


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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors
Creates a new instance of this client.

> `public` CommandableAzureFunctionClient(string name)

- **values**: string - a controller name.


### Instance methods

#### CallCommandAsync
Calls a remote action in Azure Function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` Task\<T\> CallCommandAsync\<T\>(string cmd, IContext context, object args)

- **cmd**: string - an action name
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: object - command parameters.
- **returns**: Task\<T\> - action result.


### Examples

```cs
class MyCommandableAzureClient : CommandableAzureFunctionClient, IMyClient
{
    /// ...
    public async Task<MyData> GetDataAsync(IContext context, string id) {
        return await this.CallCommand<MyData>("get_data", context, new { id=id });
    }
    /// ...

    public async Task Main()
    {
        var client = new MyCommandableAzureClient();
        client.Configure(ConfigParams.FromTuples(
            "connection.uri", "http://<APP_NAME>.azurewebsites.net/api/<FUNCTION_NAME>",
            "connection.protocol", protocol,
            "connection.app_name", appName,
            "connection.function_name", functionName,
            "credential.auth_code", authCode
        ));

        var  result = await client.GetDataAsync("123", "1");
    }
}
```

### See also
- #### [AzureFunction](../../containers/azure_function/)
