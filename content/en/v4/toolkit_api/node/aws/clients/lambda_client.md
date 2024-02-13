---
type: docs
title: "LambdaClient"
linkTitle: "LambdaClient"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-aws-node"
description: >
    Abstract client that calls AWS Lambda Functions.
---

**Implements:** [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

When making calls, the "cmd" parameter determines which what action shall be called, while the 
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
Creates a new instance of this client.

> `public` constructor(name: string)

- **name**: string - service name.


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
> `protected` **_counters**: [CompositeCounters](../../../observability/count/composite_counters)


### _dependencyResolver
Dependencies resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

### _lambda
Reference to AWS Lambda Function.
> `protected` **_lambda**: any

### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

### _opened
Opened flag.
> `protected` **_opened**: boolean

### _tracer
Tracer.
> `protected` **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

</span>

### Instance methods

#### call
Calls an AWS Lambda Function action.

> `protected` call(cmd: string, context: [IContext](../../../components/context/icontext), params: any = {}): Promise\<any\>

- **cmd**: string - action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: any - (optional) action parameters.
- **returns**: Promise\<any\> - action result.


#### callOneWay
Calls a AWS Lambda Function action asynchronously without waiting for response.

> `protected` callOneWay(cmd: string, context: [IContext](../../../components/context/icontext), params: any = {}): Promise\<any\>

- **cmd**: string - an action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: any - (optional) action parameters.
- **returns**: Promise\<any\> - action result.

#### close
Closes component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### instrument
Adds instrumentation to log calls and measures call time.
It returns a InstrumentTiming object that is used to end the time measurement.

> `protected` instrument(context: [IContext](../../../components/context/icontext), name: string): [InstrumentTiming](../../../rpc/trace/instrument_timing) 

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - a method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - object to end the time measurement.

#### invoke
Performs AWS Lambda Function invocation.

> `protected` invoke(invocationType: string, cmd: string, context: [IContext](../../../components/context/icontext), args: any): Promise\<any\>

- **invocationType**: string - invocation type: "RequestResponse" or "Event"
- **cmd**: string - action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: any - action arguments
- **returns**: Promise\<any\> - action result.

#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.

#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


### Examples

```typescript
class MyLambdaClient extends LambdaClient implements IMyClient {
    ...
 
    public async getData(context: IContext, id: string): Promise<MyData> {
        let timing = this.instrument(context, 'myclient.get_data');
        const result = await this.call("get_data" context, { id: id });
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
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
