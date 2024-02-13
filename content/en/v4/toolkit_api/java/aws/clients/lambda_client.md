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

> `protected` <T> T call(TypeReference<T> type, String cmd, IContext context, Map<String, Object> params) throws ApplicationException

- **cmd**: string - action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: Map<String, Object> - (optional) action parameters.
- **returns**: \<T\> - action result.


#### callOneWay
Calls a AWS Lambda Function action asynchronously without waiting for response.

> `protected` <T> T callOneWay(Class<T> type, String cmd,  [IContext](../../../components/context/icontext) context, Map<String, Object> params) throws ApplicationException

- **cmd**: string - an action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: Map<String, Object> - (optional) action parameters.
- **returns**: \<T\> - action result.

#### close
Closes component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### configure
Configures a component by passing its configuration parameters.

> `public`  void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException
- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### instrument
Adds instrumentation to log calls and measures call time.
It returns a InstrumentTiming object that is used to end the time measurement.

> `protected` [InstrumentTiming](../../../rpc/trace/instrument_timing) instrument([IContext](../../../components/context/icontext) context, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - a method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - object to end the time measurement.

#### invoke
Performs AWS Lambda Function invocation.

> `protected` <T> T invoke(Class<T> type, String invocationType, String cmd, IContext context, Map<String, Object> args) throws ApplicationException

- **invocationType**: string - invocation type: "RequestResponse" or "Event"
- **cmd**: string - action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: any - action arguments
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


### See also
- #### [LambdaFunction](../../containers/lambda_function)
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
