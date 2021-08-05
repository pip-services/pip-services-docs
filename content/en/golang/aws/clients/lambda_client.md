---
type: docs
title: "LambdaClient"
linkTitle: "LambdaClient"
gitUrl: "https://github.com/pip-services3-go/pip-services3-aws-go"
description: >
    Abstract client that calls AWS Lambda Functions.
---

### Description

When making calls, the "cmd" parameter determines what action shall be called, while the 
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
> **Counters**: [*CompositeCounters](../../../components/count/composite_counters)


### DependencyResolver
Dependencies resolver.
> **DependencyResolver**: [*DependencyResolver](../../../commons/refer/dependency_resolver)

### Lambda
Reference to AWS Lambda Function.
> **Lambda**: *lambda.Lambda

### Logger
Logger.
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

### Opened
Opened flag.
> **Opened**: bool

### Tracer
Tracer.
> **Tracer**: [*CompositeTracer](../../../components/trace/composite_tracer)

</span>

### Methods

#### Call
Calls an AWS Lambda Function action.

> (c [*LambdaClient]()) Call(prototype reflect.Type, cmd string, correlationId string, params map[string]interface{}) (result interface{}, err error)

- **prototype**: reflect.Type - type for convert result. Set nil for return raw []byte
- **cmd**: string - action name to be called.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **params**: map[string]interface{} - (optional) action parameters.
- **returns**: (result interface{}, err error) - action result.


#### CallOneWay
Calls an AWS Lambda Function action asynchronously without waiting for response.

> (c [*LambdaClient]()) CallOneWay(prototype reflect.Type, cmd string, correlationId string, params map[string]interface{}) error

- **prototype**: reflect.Type - type for convert result. Set nil for return raw []byte
- **cmd**: string - action name to be called.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **params**: map[string]interface{} - (optional) action parameters.
- **returns**: error - error or null for success.

#### Close
Closes component and frees used resources.

> (c [*LambdaClient]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or null for success.

#### Configure
Configures a component by passing its configuration parameters.

> (c [*LambdaClient]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### Instrument
Adds instrumentation to log calls and measures call time.
It returns an InstrumentTiming object that is used to end the time measurement.

> (c [*LambdaClient]()) Instrument(correlationId string, name string) [*CounterTiming](../../../components/count/counter_timing) 

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method name.
- **returns**: [*CounterTiming](../../../components/count/counter_timing) - object to end the time measurement.

#### Invoke
Performs AWS Lambda Function invocation.

> (c [*LambdaClient]()) Invoke(prototype reflect.Type, invocationType string, cmd string, correlationId string, args map[string]interface{}) (result interface{}, err error)

- **prototype**: reflect.Type - type for convert result. Set nil for return raw []byte
- **invocationType**: string - invocation type: "RequestResponse" or "Event"
- **cmd**: string - action name to be called.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **args**: map[string]interface{} - action arguments
- **returns**: (result interface{}, err error) - action result.

#### IsOpen
Checks if the component is open.

> (c [*LambdaClient]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.

#### Open
Opens the component.

> (c [*LambdaClient]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or null for success.

#### SetReferences
Sets references to dependent components.

> (c [*LambdaClient]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```go
type MyLambdaClient struct  {
   *LambdaClient
    ...
}

func (c* MyLambdaClient) getData(correlationId string, id string)(result MyData, err error){

   timing := c.Instrument(correlationId, "myclient.get_data");
   callRes, callErr := c.Call(MyDataPageType ,"get_data" correlationId, map[string]interface{ "id": id })
   timing.EndTiming();
   return callRes, callErr
}

...

client = NewMyLambdaClient();
client.Configure(NewConfigParamsFromTuples(
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX",
    "connection.arn", "YYYYYYYYYYYYY"
));

data, err := client.GetData("123", "1",)
...
```

### See also
- #### [LambdaFunction](../../containers/lambda_function)
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
