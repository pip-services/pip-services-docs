---
type: docs
title: "CommandableLambdaClient"
linkTitle: "CommandableLambdaClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
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

> `public` CommandableLambdaClient(string name)

- **name**: string - a service name.

### Instance methods

#### CallCommandAsync
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` Task\<T\> CallCommandAsync\<T\>(string cmd, string correlationId, object args)

- **cmd**: string - action name
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: object - command parameters.
- **returns**: Task\<T\> - action result.



### Examples

```cs
class MyCommandableLambdaClient : CommandableLambdaClient, IMyClient
{
    /// ...

    public async Task<MyData> GetDataAsync(string correlationId, string id) {
        return await this.CallCommandAsync<MyData>("get_data", correlationId, new { id=id });
    }
    /// ...

    public async Task Main()
    {
        var client = new MyCommandableLambdaClient();
        client.Configure(ConfigParams.FromTuples(
            "connection.region", "us-east-1",
            "connection.access_id", "XXXXXXXXXXX",
            "connection.access_key", "XXXXXXXXXXX",
            "connection.arn", "YYYYYYYYYYYYY"
        ));

        var  result = await client.GetDataAsync("123", "1");
    }
}
```

### See also
- #### [LambdaFunction](../../containers/lambda_function)
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
