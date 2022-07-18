---
type: docs
title: "CommandableGoogleFunctionClient"
linkTitle: "CommandableGoogleFunctionClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-gcp-nodex"
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

> `public` constructor(name: string)

- **values**: string - a service name.


### Instance methods

#### callCommand
Calls a remote action in Google Function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` callCommand\<T\>(cmd: string, correlationId: string, params: any): Promise\<T\>

- **cmd**: string - an action name
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **params**: any - command parameters.
- **returns**: Promise\<T\> - action result.


### Examples

```typescript
class MyCommandableGoogleClient extends CommandableGoogleFunctionClient implements IMyClient {
    ...
 
    public async getData(correlationId: string, id: string): Promise<any> {
        return this.callCommand("get_data", correlationId, { id: id });
    }
    ...
}

let client = new MyCommandableGoogleClient();

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
- #### [GoogleFunction](../../google_function/)
