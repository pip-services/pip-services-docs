---
type: docs
title: "LambdaClient"
linkTitle: "LambdaClient"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-aws-go"
description: >
    Abstract client that calls AWS Lambda Functions.
---

### Description

When making calls, the "cmd" parameter determines what action shall be called, while the 
other parameters are passed to the action itself.


#### Configuration parameters

- **connections**:                   
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **region**: (optional) AWS region
- **credentials**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client key
- **options**:
    - **connect_timeout**: (optional) connection timeout in milliseconds (default: 10 sec)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors

#### NewLambdaClient
Creates a new instance of this client.

> NewLambdaClient() [*LambdaClient]()

- **name**: string - service name.


### Fields

<span class="hide-title-link">

#### Connection
AWS connection parameters
> **Connection**: [*AwsConnectionParams](../../connect/aws_connection_params)

### ConnectionResolver
The connection resolver.
> **ConnectionResolver**: [*AwsConnectionResolver](../../connect/aws_connection_resolver)

### Counters
Performance counters.
> **Counters**: [*CompositeCounters](../../../observability/count/composite_counters)


### DependencyResolver
Dependencies resolver.
> **DependencyResolver**: [*DependencyResolver](../../../components/refer/dependency_resolver)

### Lambda
Reference to AWS Lambda Function.
> **Lambda**: *lambda.Lambda

### Logger
Logger.
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

### Opened
Opened flag.
> **Opened**: bool

### Tracer
Tracer.
> **Tracer**: [*CompositeTracer](../../../observability/trace/composite_tracer)

</span>

### Methods

#### Call
Calls an AWS Lambda Function action.

> (c [*LambdaClient]()) Call(ctx context.Context, cmd string, context [IContext](../../../components/context/icontext), params map[string]interface{}) (result *lambda.InvokeOutput, err error)

- **ctx**: context.Context -  operation context.
- **cmd**: string - action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: map[string]interface{} - (optional) action parameters.
- **returns**: (result *lambda.InvokeOutput, err error) - action result.


#### CallOneWay
Calls an AWS Lambda Function action asynchronously without waiting for response.

> (c [*LambdaClient]()) CallOneWay(prototype reflect.Type, cmd string, context [IContext](../../../components/context/icontext), params map[string]interface{}) error

- **prototype**: reflect.Type - type for convert result. Set nil for return raw []byte
- **cmd**: string - action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: map[string]interface{} - (optional) action parameters.
- **returns**: error - error or null for success.

#### Close
Closes component and frees used resources.

> (c [*LambdaClient]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context -  operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or null for success.

#### Configure
Configures a component by passing its configuration parameters.

> (c [*LambdaClient]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### Instrument
Adds instrumentation to log calls and measures call time.
It returns an InstrumentTiming object that is used to end the time measurement.

> (c [*LambdaClient]()) Instrument(ctx context.Context, context [IContext](../../../components/context/icontext), name string) [*CounterTiming](../../../observability/count/counter_timing) 

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [*CounterTiming](../../../observability/count/counter_timing) - object to end the time measurement.

#### Invoke
Performs AWS Lambda Function invocation.

> (c [*LambdaClient]()) Invoke(ctx context.Context, invocationType string, cmd string, context [IContext](../../../components/context/icontext), args map[string]interface{}) (result *lambda.InvokeOutput, err error)

- **ctx**: context.Context - operation context.
- **invocationType**: string - invocation type: "RequestResponse" or "Event"
- **cmd**: string - action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: map[string]interface{} - action arguments
- **returns**: (result *lambda.InvokeOutput, err error) - action result.

#### IsOpen
Checks if the component is open.

> (c [*LambdaClient]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.

#### Open
Opens the component.

> (c [*LambdaClient]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or null for success.

#### SetReferences
Sets references to dependent components.

> (c [*LambdaClient]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


### Examples

```go
type MyLambdaClient struct  {
	*LambdaClient
	...
}

func (c* MyLambdaClient) getData(ctx context.Context, context [IContext](../../../components/context/icontext), id string)(result MyData, err error){
	timing := c.Instrument(ctx, context, "myclient.get_data");
	callRes, callErr := c.Call(ctx ,"get_data" context, map[string]interface{ "id": id })
	if callErr != nil {
		return callErr
	}
	defer timing.EndTiming(ctx, nil)
	return awsclient.HandleLambdaResponse[*cdata.DataPage[MyData]](calValue)
}
...


client = NewMyLambdaClient();
client.Configure(context.Background(), NewConfigParamsFromTuples(
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX",
    "connection.arn", "YYYYYYYYYYYYY"
))

data, err := client.GetData(context.Background(), "123", "1")
...
```

### See also
- #### [LambdaFunction](../../containers/lambda_function)
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)

