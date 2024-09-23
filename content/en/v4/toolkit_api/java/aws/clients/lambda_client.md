---
type: docs
title: "LambdaClient"
linkTitle: "LambdaClient"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-aws-java"
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

> `public` LambdaClient(String name)

- **name**: string - service name.


### Fields

<span class="hide-title-link">

#### _connection
AWS connection parameters
> `protected` [AwsConnectionParams](../../connect/aws_connection_params) **_connection**

### _connectionResolver
The connection resolver.
> `protected` [AwsConnectionResolver](../../connect/aws_connection_resolver) **_connectionResolver**

### _counters
Performance counters.
> `protected` [CompositeCounters](../../../observability/count/composite_counters) **_counters**


### _dependencyResolver
Dependencies resolver.
> `protected` [DependencyResolver](../../../components/refer/dependency_resolver) **_dependencyResolver**

### _client
AWS Lambda Client.
> `protected` software.amazon.awssdk.services.lambda.LambdaClient **_client**

### _logger
Logger.
> `protected` [CompositeLogger](../../../observability/log/composite_logger) **_logger**

### _connectTimeout
The connection timeout in milliseconds.
> `protected` long **_connectTimeout** = 10000;

### _opened
Opened flag.
> `protected` boolean **_opened**

### _tracer
Tracer.
> `protected` [CompositeTracer](../../../observability/trace/composite_tracer) **_tracer**

</span>

### Instance methods

#### call
Calls an AWS Lambda Function action.

> `protected` <T> T call(TypeReference<T> type, String cmd, IContext context, Map<String, Object> params) throws ApplicationException

- **cmd**: String - action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: Map<String, Object> - (optional) action parameters.
- **returns**: \<T\> - action result.


#### callOneWay
Calls a AWS Lambda Function action asynchronously without waiting for response.

> `protected` <T> T callOneWay(Class<T> type, String cmd,  [IContext](../../../components/context/icontext) context, Map<String, Object> params) throws ApplicationException

- **cmd**: String - an action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: Map<String, Object> - (optional) action parameters.
- **returns**: \<T\> - action result.

#### close
Closes component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### configure
Configures a component by passing its configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException
- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### instrument
Adds instrumentation to log calls and measures call time.
It returns a InstrumentTiming object that is used to end the time measurement.

> `protected` [InstrumentTiming](../../../rpc/trace/instrument_timing) instrument([IContext](../../../components/context/icontext) context, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: String - a method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - object to end the time measurement.

#### invoke
Performs AWS Lambda Function invocation.

> `protected` <T> T invoke(Class<T> type, String invocationType, String cmd, IContext context, Map<String, Object> args) throws ApplicationException

- **invocationType**: String - invocation type: "RequestResponse" or "Event"
- **cmd**: String - action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: Map<String, Object> - action arguments
- **returns**: \<T\> - action result.

#### isOpen
Checks if the component is open.

> `public` boolean isOpen([IContext](../../../components/context/icontext) context)

- **returns**: boolean - true if the component is open and false otherwise.

#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### setReferences
Sets references to dependent components.

> `public` void setReferences(IReferences references) throws ReferenceException

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


### Examples
```java
class MyLambdaClient extends LambdaClient implements IMyClient {
    ...
 
    public MyData getData(IContext context, String id) {
        Timing timing = this.instrument(context, "myclient.get_data");
        MyData result = this.call(MyData.class, "get_data", context, new MyData(id));
        timing.endTiming();
        return result;
    }
    ...
}
    MyLambdaClient  client = new MyLambdaClient();
    client.configure(ConfigParams.fromTuples(
        "connection.region", "us-east-1",
        "connection.access_id", "XXXXXXXXXXX",
        "connection.access_key", "XXXXXXXXXXX",
        "connection.arn", "YYYYYYYYYYYYY"
    ));
 
    MyData result = client.getData("123", "1");
```

### See also
- #### [LambdaFunction](../../containers/lambda_function)
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
