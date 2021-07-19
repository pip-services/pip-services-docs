---
type: docs
title: "LambdaClient"
linkTitle: "LambdaClient"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-aws-dart"
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


### Fields

<span class="hide-title-link">

#### connection
AWS connection parameters
> **connection**: [AwsConnectionParams](../../connect/aws_connection_params)

### _connectionResolver
The connection resolver.
> **connectionResolver**: [AwsConnectionResolver](../../connect/aws_connection_resolver)

### counters
Performance counters.
> **counters**: [CompositeCounters](../../../components/count/composite_counters)


### dependencyResolver
Dependencies resolver.
> **dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

### lambda
Reference to AWS Lambda Function.
> **lambda**: Lambda

### logger
Logger.
> **logger**: [CompositeLogger](../../../components/log/composite_logger)

### opened
Opened flag.
> **opened**: bool

</span>

### Instance methods

#### call
Calls an AWS Lambda Function action.

> Future call(String cmd, String correlationId, params)

- **cmd**: String - action name to be called.
- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **params**: dynamic - (optional) action parameters.
- **returns**: Future - action result.


#### callOneWay
Calls a AWS Lambda Function action asynchronously without waiting for response.

> Future callOneWay(String cmd, String correlationId, params)

- **cmd**: String - an action name to be called.
- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **params**: dynamic - (optional) action parameters.
- **returns**: Future - action result.

#### close
Closes component and frees used resources.

`@override`
> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### instrument
Adds instrumentation to log calls and measures call time.
It returns a InstrumentTiming object that is used to end the time measurement.

> [Timing](../../../components/count/timing) instrument(String correlationId, String name) 

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **name**: String - a method name.
- **returns**: [Timing](../../../components/count/timing) - object to end the time measurement.

#### invoke
Performs AWS Lambda Function invocation.

> Future invoke(LambdaInvocationType invocationType, String cmd, String correlationId, Map args)

- **invocationType**: String - invocation type: "RequestResponse" or "Event"
- **cmd**: String - action name to be called.
- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **args**: Map - action arguments
- **returns**: Future - action result.

#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.

#### open
Opens the component.

`@override`
> Future open(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```dart
class MyLambdaClient extends LambdaClient implements IMyClient {
    ...
    public getData(String correlationId, id: string,
        callback: (err: any, result: MyData) => void): void {
        var timing = this.instrument(correlationId, 'myclient.get_data');
        this.call('get_data' correlationId, { id: id }, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
    ...
}

var client = new MyLambdaClient();
client.configure(ConfigParams.fromTuples(
    'connection.region', 'us-east-1',
    'connection.access_id', 'XXXXXXXXXXX',
    'connection.access_key', 'XXXXXXXXXXX',
    'connection.arn', 'YYYYYYYYYYYYY'
));

client.getData('123', '1', (err, result) => {
    ...
});
```

### See also
- #### [LambdaFunction](../../containers/lambda_function)
