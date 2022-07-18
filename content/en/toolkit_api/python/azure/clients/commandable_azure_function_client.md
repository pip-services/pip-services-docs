---
type: docs
title: "CommandableAzureFunctionClient"
linkTitle: "CommandableAzureFunctionClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-azure-python"
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

> CommandableAzureFunctionClient(name: str)

- **values**: srt - a service name.


### Instance methods

#### call_command
Calls a remote action in Azure Function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> call_command(cmd: str, correlation_id: string, params: dict): Any

- **cmd**: str - an action name
- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **params**: dict - command parameters.
- **returns**: Any - action result.


### Examples

```python
class MyCommandableAzureClient(CommandableAzureFunctionClient, IMyClient):
    ...

    def get_data(self, correlation_id: Optional[str], id: str) -> Any:
        return self.call_command('get_data', correlation_id, {'id': id})
        
    ...

client = MyCommandableAzureClient('client_name')

client.configure(ConfigParams.from_еuples(
    "connection.uri", "http://myapp.azurewebsites.net/api/myfunction",
    "connection.protocol", "http",
    "connection.app_name", "myapp",
    "connection.function_name", "myfunction"
    "credential.auth_code", "XXXX"
))

result = client.get_data("123", "1")
```

### See also
- #### [AzureFunction](../../azure_function/)
