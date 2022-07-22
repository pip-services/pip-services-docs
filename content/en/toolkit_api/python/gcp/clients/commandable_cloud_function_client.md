---
type: docs
title: "CommandableCloudFunctionClient"
linkTitle: "CommandableCloudFunctionClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-gcp-python"
description: >
    Abstract client that calls commandable Google Functions.
 
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable.md) objects. Each command is exposed as action determined by "cmd" parameter.


#### Configuration parameters

- **connections**:
    - **uri**:           full connection uri with specific app and function name
    - **protocol**:      connection protocol
    - **project_id**:    is your Google Cloud Platform project ID
    - **region**:        is the region where your function is deployed
    - **function_name**: is the name of the HTTP function you deployed
- **credentials**:
    - **auth_token**:    Google-generated ID token, if use custom authorization provide empty string

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections.
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

> call_command(cmd: str, correlation_id: Optional[str], params: dict): Any

- **cmd**: str - an action name
- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **params**: dict - command parameters.
- **returns**: Any - action result.


### Examples

```python
class MyCommandableGoogleClient(CommandableCloudFunctionClient, IMyClient):
    
    def get_data(self, correlation_id, id) -> MyData:
        timing = self._instrument(correlation_id, 'myclient.get_data')
        result = self.call_command("get_data", correlation_id, {'id': id})
        data = MyData(**result)
        timing.end_timing()
        return data

client = MyCommandableGoogleClient('mydata')

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
- #### [CloudFunction](../../cloud_function/)
