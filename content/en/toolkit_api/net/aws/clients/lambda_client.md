---
type: docs
title: "LambdaClient"
linkTitle: "LambdaClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
description: >
    Abstract client that calls AWS Lambda Functions.
---

**Implements:** [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

When making calls, the "cmd" parameter determines which what action shall be called, while the 
other parameters are passed to the action itself.


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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors
Creates a new instance of this client.

> `public` LambdaClient()


### Fields

<span class="hide-title-link">

#### _connection
AWS connection parameters
> `protected` **_connection**: [AwsConnectionParams](../../connect/aws_connection_params)

### _connectionResolver
The connection resolver.
> `protected` **_connectionResolver**: [AwsConnectionResolver](../../connect/aws_connection_resolver)

### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters)


### _dependencyResolver
Dependencies resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

### _lambda
Reference to AWS Lambda Function.
> `protected` **_lambda**: AmazonLambdaClient

### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

### _opened
Opened flag.
> `protected` **_opened**: boolean

### _tracer
Tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

</span>

### Instance methods

#### CallAsync
Calls an AWS Lambda Function action.

> `protected` Task\<T\> CallAsync\<T\>(string cmd, string correlationId, object args)

- **cmd**: string - action name to be called.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **args**: object - (optional) action parameters.
- **returns**: Task\<T\> - action result.


#### CallOneWayAsync
Calls a AWS Lambda Function action asynchronously without waiting for response.

> `protected` Task\<T\> CallOneWayAsync\<T\>(string cmd, string correlationId, object data)

- **cmd**: string - an action name to be called.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **data**: object - (optional) action parameters.
- **returns**: Task\<T\> - action result.

#### CloseAsync
Closes component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### Configure
Configures a component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### Instrument
Adds instrumentation to log calls and measure call time. It returns a CounterTiming 
object that is used to end the time measurement.

> `protected` [CounterTiming](../../../components/count/counter_timing) Instrument(string correlationId, string name)
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method name.
- **returns**: [CounterTiming](../../../components/count/counter_timing) - CounterTiming object to end the time measurement.

#### InstrumentError
Adds instrumentation to error handling.

> `protected` void InstrumentError(string correlationId, string methodName, Exception ex, bool rethrow = false)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **methodName**: string - a method name.
- **ex**: Exception - Error that occured during the method call.
- **rethrow**: bool - True to throw the exception.

#### InvokeAsync
Performs AWS Lambda Function invocation.

> `protected` Task\<T\> InvokeAsync\<T\>(string invocationType, string cmd, string correlationId, object args)

- **invocationType**: string - invocation type: "RequestResponse" or "Event"
- **cmd**: string - action name to be called.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **args**: object - action arguments
- **returns**: Task\<T\> - action result.

#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.

#### OpenAsync
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```cs
class MyLambdaClient: LambdaClient, IMyClient
{
    /// ...

    public async Task<MyData> GetDataAsync(string correlationId, string id) {
        var timing = this.Instrument(correlationId, "myclient.get_data");
        var result = await this.CallAsync<MyData>("get_data", correlationId, new { id=id });
        timing.EndTiming();
        return result;
    }
    /// ...

    public async Task Main()
    {
        var client = new MyLambdaClient();
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
