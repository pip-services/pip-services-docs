---
type: docs
title: "CommandableLambdaClient"
linkTitle: "CommandableLambdaClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-aws-python"
description: >
    Abstract client that calls commandable AWS Lambda Functions.
---

**Implements:** [LambdaClient](../lambda_client)

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
    - **access_key**: AWS access/client key
- **options**:
    - **connect_timeout**: (optional) connection timeout in milliseconds (default: 10 sec)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors
Creates a new instance of this client.

> constructor(name: str)

- **name**: str - a service name.

### Instance methods

#### call_command
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> call_command(cmd: str, correlation_id: Optional[str], params: dict): Any

- **cmd**: str - action name
- **correlation_id**: correlation_id: Optional[str] - (optional) transaction id to trace execution through call chain.
- **params**: dict - command parameters.
- **returns**: Any - action result.



### Examples

```python
class MyLambdaClient(CommandableLambdaClient, IMyClient):

    ...

    def get_data(self, correlation_id: str, id: str) -> Any
        return this.callCommand("get_data", correlation_id, { 'id': id })

    ...

client = MyLambdaClient()

client.configure(ConfigParams.from_еuples(
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX",
    "connection.arn", "YYYYYYYYYYYYY"
))

result = client.get_data("123", "1")
...
```

### See also
- #### [LambdaFunction](../../containers/lambda_function)
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
