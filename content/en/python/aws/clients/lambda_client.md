---
type: docs
title: "LambdaClient"
linkTitle: "LambdaClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-aws-python"
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
    - **access_key**: AWS access/client id
- **options**:
    - **connect_timeout**: (optional) connection timeout in milliseconds (default: 10 sec)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors
Creates a new instance of this client.

> LambdaClient(name: str)

- **name**: str - service name.


### Fields

<span class="hide-title-link">

#### _connection
AWS connection parameters
> **_connection**: [AwsConnectionParams](../../connect/aws_connection_params)

### _connection_resolver
The connection resolver.
> **_connection_resolver**: [AwsConnectionResolver](../../connect/aws_connection_resolver)

### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)


### _dependency_resolver
Dependencies resolver.
> **_dependency_resolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

### _lambda
Reference to AWS Lambda Function.
> **_lambda**: Any

### _logger
Logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

### _opened
Opened flag.
> **_opened**: bool

### _tracer
Tracer.
> **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

</span>

### Instance methods

#### call
Calls an AWS Lambda Function action.

> _call(cmd: str, correlation_id: Optional[str], params: dict = None): Any

- **cmd**: str - action name to be called.
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **params**: dict - (optional) action parameters.
- **returns**: Any - action result.


#### call_one_way
Calls a AWS Lambda Function action asynchronously without waiting for response.

> call_one_way(cmd: str, correlation_id: Optional[str], params: dict = None): Any

- **cmd**: str - an action name to be called.
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **params**: dict - (optional) action parameters.
- **returns**: Any - action result.

#### close
Closes component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### _instrument
Adds instrumentation to log calls and measures call time.
It returns a InstrumentTiming object that is used to end the time measurement.

> _instrument(correlation_id: Optional[str], name: str): [InstrumentTiming](../../../rpc/services/instrument_timing) 

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **name**: str - a method name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing) - object to end the time measurement.

#### invoke
Performs AWS Lambda Function invocation.

> _invoke(invocation_type: str, cmd: str, correlation_id: Optional[str], args: Any) -> Any

- **invocation_type**: str - invocation type: "RequestResponse" or "Event"
- **cmd**: str - action name to be called.
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **args**: Any - action arguments
- **returns**: Any - action result.

#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - true if the component is open and false otherwise.

#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```python
class MyLambdaClient(LambdaClient, IMyClient):

    ...

    def get_data(self, correlation_id: str, id: str) -> MyData: 
        timing = self._instrument(correlation_id, 'myclient.get_data')
        result = self._call("get_data" correlation_id, { 'id': id })
        timing.end_timing()
        return result
    
    ...

client = MyLambdaClient()

client.configure(ConfigParams.from_tuples(
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX",
    "connection.arn", "YYYYYYYYYYYYY"
))

result = client.get_data("123", "1")
```

### See also
- #### [LambdaFunction](../../containers/lambda_function)
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
