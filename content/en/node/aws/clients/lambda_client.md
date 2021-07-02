---
type: docs
title: "LambdaClient"
linkTitle: "LambdaClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-aws-nodex"
description: >
    Abstract client that calls AWS Lambda Functions.
---

**Implements:** [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

When making calls "cmd" parameter determines which what action shall be called, while
other parameters are passed to the action itself.


#### Configuration parameters

- **connections**:                   
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **region**: (optional) AWS region
- **credentials**:    
    - **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client id
- **options**:
    - **connect_timeout**: (optional) connection timeout in milliseconds (default: 10 sec)

#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0**: (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection.
- **\*:credential-store:\*:\*:1.0**: (optional) Credential stores to resolve credentials.

### Constructors
Creates a new instance of this client.

> `public` constructor(name: string)

- **name**: string - a service name.


### Fields

<span class="hide-title-link">

#### _connection
The AWS connection parameters
> `protected` **_connection**: [AwsConnectionParams](../../connect/aws_connection_params)

### _connectionResolver
The connection resolver.
> `protected` **_connectionResolver**: [AwsConnectionResolver](../../connect/aws_connection_resolver)

### _counters
The performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters)


### _dependencyResolver
The dependencies resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

### _lambda
The reference to AWS Lambda Function.
> `protected` **_lambda**: any

### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

### _opened
The opened flag.
> `protected` **_opened**: boolean

### _tracer
The tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

</span>

### Instance methods

#### call
Calls a AWS Lambda Function action.

> `protected` call(cmd: string, correlationId: string, params: any = {}): Promise\<any\>

- **cmd**: string - an action name to be called.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **params**: any - (optional) action parameters.
- **returns**: Promise\<any\> - action result.


#### callOneWay
Calls a AWS Lambda Function action asynchronously without waiting for response.

> `protected` callOneWay(cmd: string, correlationId: string, params: any = {}): Promise\<any\>

- **cmd**: string - an action name to be called.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **params**: any - (optional) action parameters.
- **returns**: Promise\<any\> - action result.

#### close
Closes component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### instrument
Adds instrumentation to log calls and measure call time.
It returns a InstrumentTiming object that is used to end the time measurement.

> `protected` instrument(correlationId: string, name: string): [InstrumentTiming](../../../rpc/services/instrument_timing) 

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **name**: string - a method name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing) - object to end the time measurement.

#### invoke
Performs AWS Lambda Function invocation.

> `protected` invoke(invocationType: string, cmd: string, correlationId: string, args: any): Promise\<any\>

- **invocationType**: string - an invocation type: "RequestResponse" or "Event"
- **cmd**: string - an action name to be called.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: any - action arguments
- **returns**: Promise\<any\> - action result.

#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```typescript
class MyLambdaClient extends LambdaClient implements IMyClient {
    ...
 
    public async getData(correlationId: string, id: string): Promise<MyData> {
        let timing = this.instrument(correlationId, 'myclient.get_data');
        const result = await this.call("get_data" correlationId, { id: id });
        timing.endTiming();
        return result;
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
 *     
const result = await client.getData("123", "1");
```

### See also
- #### [LambdaFunction](../../containers/lambda_function)
