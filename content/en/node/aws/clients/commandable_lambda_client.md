---
type: docs
title: "CommandableLambdaClient"
linkTitle: "CommandableLambdaClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-aws-nodex"
description: >
    Abstract client that calls commandable AWS Lambda Functions.
---

**Extends:** [LambdaClient](../lambda_client)

### Description

Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable).
Each command is exposed as action determined by "cmd" parameter.


#### Configuration parameters

- **connections**:                   
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **region**: (optional) AWS region
- **credentials**:    
    - **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client id

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors
Creates a new instance of this client.

> `public` constructor(name: string)

- **name**: string - a service name.

### Instance methods

#### callCommand
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` callCommand(cmd: string, correlationId: string, params: any): Promise\<any\>

- **cmd**: string - an action name
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **params**: any - command parameters.
- **returns**: Promise\<any\> - action result.



### Examples

```typescript
class MyLambdaClient extends CommandableLambdaClient implements IMyClient {
    ...
 
    public async getData(correlationId: string, id: string): Promise\<any\> {
        return this.callCommand("get_data", correlationId, { id: id });
    }
    ...
}
let client = new MyLambdaClient();
client.configure(ConfigParams.fromTuples(
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX",
    "connection.arn", "YYYYYYYYYYYYY"
));
     
const result = await client.getData("123", "1");
...
```

### See also
- #### [LambdaFunction](../../containers/lambda_function)
