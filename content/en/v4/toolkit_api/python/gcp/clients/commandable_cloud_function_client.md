---
type: docs
title: "CommandableCloudFunctionClient"
linkTitle: "CommandableCloudFunctionClient"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-gcp-python"
description: >
    Abstract client that calls commandable Google Functions.
 
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

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
    - **retries**:               number of retries (default: 3)
    - **connect_timeout**:       connection timeout in milliseconds (default: 10 sec)
    - **timeout**:               invocation timeout in milliseconds (default: 10 sec)
- **credentials**:
    - **account**: the service account name
    - **auth_token**:    Google-generated ID token, if use custom authorization provide empty string
    
#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors
Creates a new instance of this client.

> CommandableCloudFunctionClient(name: str)

- **name**: str - a service name.


### Instance methods

#### callCommand
Calls a remote action in Google Function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> call_command(cmd: str, context: Optional[IContext], params: dict): Any

- **cmd**: str - an action name
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: dict - command parameters.
- **returns**: Any - action result.


### Examples

```python
class MyCommandableCloudFunctionClient(CommandableCloudFunctionClient, IMyClient):
    
    def get_data(self, context, id) -> MyData:
        timing = self._instrument(context, 'myclient.get_data')
        result = self.call_command("get_data", context, {'id': id})
        data = MyData(**result)
        timing.end_timing()
        return data

client = MyCommandableCloudFunctionClient('mydata')

client.configure(ConfigParams.from_tuples(
    'connection.uri", "http://region-id.cloudfunctions.net/myfunction',
    'connection.protocol', 'http',
    'connection.region', 'region',
    'connection.function', 'myfunction',
    'connection.project_id', 'id',
    'credential.auth_token', 'XXX',
))

result = client.get_data("123", "1")

...
```

### See also
- #### [CloudFunction](../../containers/cloud_function/)
