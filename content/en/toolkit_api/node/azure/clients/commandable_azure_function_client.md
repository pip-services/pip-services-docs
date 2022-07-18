---
type: docs
title: "CommandableAzureFunctionClient"
linkTitle: "CommandableAzureFunctionClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
description: >
    Abstract client that calls commandable Azure Functions.
 
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable.md) objects. Each command is exposed as action determined by "cmd" parameter.


#### Configuration parameters

- **connections**:
    - **uri**: (optional) full connection string or use protocol, app_name and function_name to build
    - **protocol**: (optional) connection protocol
    - **app_name**: (optional) Azure Function application name
    - **function_name**: (optional) Azure Function name
- **credentials**:
    - **auth_code**: Azure Function auth code if use custom authorization provide empty string

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors
Creates a new instance of this client.

> `public` constructor(name: string)

- **values**: string - a service name.


### Instance methods

#### callCommand
Calls a remote action in Azure Function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` callCommand\<T\>(cmd: string, correlationId: string, params: any): Promise\<T\>

- **cmd**: string - an action name
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **params**: any - command parameters.
- **returns**: Promise\<T\> - action result.


### Examples

```typescript
class MyCommandableAzureClient extends CommandableAzureFunctionClient implements IMyClient {
    ...
 
    public async getData(correlationId: string, id: string): Promise<any> {
        return this.callCommand("get_data", correlationId, { id: id });
    }
    ...
}

let client = new MyCommandableAzureClient();

client.configure(ConfigParams.fromTuples(
    "connection.uri", "http://myapp.azurewebsites.net/api/myfunction",
    "connection.protocol", "http",
    "connection.app_name", "myapp",
    "connection.function_name", "myfunction"
    "credential.auth_code", "XXXX"
));

const result = await client.getData("123", "1");
...
```

### See also
- #### [AzureFunction](../../azure_function/)
