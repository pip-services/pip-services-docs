---
type: docs
title: "CommandableLambdaClient"
linkTitle: "CommandableLambdaClient"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-aws-dart"
description: >
    Abstract client that calls commandable AWS Lambda Functions.
---

**Extends:** [LambdaClient](../lambda_client)

### Description

Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable).
Each command is exposed as an action determined by the "cmd" parameter.


#### Configuration parameters

- **connections**:                   
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **region**: (optional) AWS region
- **credentials**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client id
- **options**:
    - **connect_timeout**: (optional) connection timeout in milliseconds (default: 10 sec)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors
Creates a new instance of this client.

> CommandableLambdaClient(String name)

- **name**: String - a service name.

### Instance methods

#### callCommand
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> Future callCommand(String cmd, String correlationId, params)

- **cmd**: String - action name
- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **params**: dynamic - command parameters.
- **returns**: Future - action result.



### Examples

```dart
class MyLambdaClient extends CommandableLambdaClient implements IMyClient {
    ...
    public getData(String correlationId, id: string,
        callback: (err: any, result: MyData) => void): void {
        this.callCommand(
            "get_data",
            correlationId,
            { id: id },
            (err, result) => {
                callback(err, result);
            }
        );
    }
    ...
}

var client = new MyLambdaClient();
client.configure(ConfigParams.fromTuples(
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX",
    "connection.arn", "YYYYYYYYYYYYY"
));

client.getData("123", "1", (err, result) => {
    ...
});
```

### See also
- #### [LambdaFunction](../../containers/lambda_function)
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
