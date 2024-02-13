---
type: docs
title: "CommandableAzureFunctionClient"
linkTitle: "CommandableAzureFunctionClient"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-azure-dart"
description: >
    Abstract client that calls commandable Azure Functions.
 
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

Commandable services are generated automatically for [ICommandable](../../../rpc/commands/icommandable) objects. Each command is exposed as action determined by "cmd" parameter.


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

> CommandableAzureFunctionClient(String name) : super()

- **name**: string - a controller name.


### Instance methods

#### callCommand
Calls a remote action in Azure Function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> Future callCommand(String cmd, IContext? context, params) async

- **cmd**: string - an action name
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: command parameters.
- **returns**: Future - action result.


### Examples

```dart
   class MyAzureFunctionClient extends CommandableAzureFunctionClient implements IMyClient {
///         ...
///
///         Future<MyData> getData(IContext? context, id: string) async {
///             var result = await callCommand(
///                 "get_data",
///                 context,
///                 { id: id }
///             );
///         }
///         ...
///     }
///
///     var client = new MyAzureFunctionClient();
///     client.configure(ConfigParams.fromTuples([
///        "connection.uri", "http://myapp.azurewebsites.net/api/myfunction",
///        "connection.protocol", "http",
///        "connection.app_name", "myapp",
///        "connection.function_name", "myfunction"
///        "credential.auth_code", "XXXX"
///     ]));
///
///     var data = client.getData(Context.fromTraceId('123'), '1');

```

### See also
- #### [AzureFunction](../../container/azure_function/)
