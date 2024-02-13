---
type: docs
title: "CommandableCloudFunctionClient"
linkTitle: "CommandableCloudFunctionClient"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-gcp-node"
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
	- **retries**: number of retries (default: 3)
	- **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
	- **timeout**: invocation timeout in milliseconds (default: 10 sec)
- **credentials**:
    - **auth_token**:    Google-generated ID token, if use custom authorization provide empty string

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors
Creates a new instance of this client.

> `public` constructor(name: string)

- **values**: string - a service name.


### Instance methods

#### callCommand
Calls a remote action in Google Function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` callCommand\<T\>(cmd: string, context: [IContext](../../../components/context/icontext), params: any): Promise\<T\>

- **cmd**: string - an action name
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: any - command parameters.
- **returns**: Promise\<T\> - action result.


### Examples

```typescript
class MyCommandableCloudFunctionClient extends CommandableCloudFunctionClient implements IMyClient {
    ...
 
    public async getData(context: IContext, id: string): Promise<any> {
        return this.callCommand("get_data", context, { id: id });
    }
    ...
}

let client = new MyCommandableCloudFunctionClient();

client.configure(ConfigParams.fromTuples(
     'connection.uri", "http://region-id.cloudfunctions.net/myfunction',
     'connection.protocol', 'http',
     'connection.region', 'region',
     'connection.function_name', 'myfunction',
     'credential.project_id', 'id',
     'credential.auth_token', 'XXX',
));

const result = await client.getData("123", "1");
...
...
```

### See also
- #### [CloudFunction](../../containers/cloud_function/)
