---
type: docs
title: "LambdaFunction"
linkTitle: "LambdaFunction"
gitUrl: "https://github.com/pip-services3-go/pip-services3-aws-go"
description: >
    Abstract AWS Lambda function that acts as a container to instantiate and run components, 
    and expose them via an external entry point. 
---

**Implements:** [Container](../../../container/containers), [ILambdaFunctionOverrides](../ilambda_function_overrides)

### Description
The LambdaFunction class allows you to create an abstract AWS Lambda function that acts as a container to instantiate and run components, and expose them via an external entry point.

**Important points**

- When handling calls the "cmd" parameter determines what action shall be called, while the other parameters are passed to the action itself.

- Container configuration for this Lambda function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.

#### Configuration parameters

- **dependencies**:
    - **controller**: override for Controller dependency
- **connections**:
    - **discovery_key**: (optional) key to retrieve the connection from IDiscovery
    - **region**: (optional) AWS region
- **credentials**:
    - **store_key**: (optional) key to retrieve the credentials from ICredentialStore
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client key

#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:service:lambda:\*:1.0**: (optional) [ILambdaService](../../services/ilambda_service) services to handle action requests
- **\*:service:commandable-lambda:\*:1.0**: (optional) [ILambdaService](../../services/ilambda_service) services to handle action requests

### Constructors

#### InheriteLambdaFunction
Creates a new instance of this lambda function.

> InheriteLambdaFunction(overrides [ILambdaFunctionOverrides](../ilambda_function_overrides), name string, description string, register [IRegisterable](../iregisterable)) [*LambdaFunction]()

- **overrides**: [ILambdaFunctionOverrides](../ilambda_function_overrides) - TODO: add description
- **name**: string - (optional) container name (accessible via [ContextInfo](../../../components/info/context_info)).
- **description**: string - (optional) container description (accessible via [ContextInfo](../../../components/info/context_info)).
- **register**: [IRegisterable](../iregisterable) - created instance

### Fields

<span class="hide-title-link">

#### actions
Map containing registered actions.
> **actions**: map[string]func(map[string]interface{}) (interface{}, error)

#### configPath
Default path to config file.
> **configPath**: string

#### counters
Performance counters.
> **counters**: [*CompositeCounters](../../../components/count/composite_counters)

#### DependencyResolver
Dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../commons/refer/dependency_resolver)

#### schemas
Map of registred validation schemas.
> **schemas**: map[string]*[Schema](../../../commons/validate/schema)

#### tracer
Tracer.
> **tracer**: [*CompositeTracer](../../../components/trace/composite_tracer)

</span>


### Methods

#### Act
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
what action shall be called.

- This method shall only be used in testing.

> (c [*LambdaFunction]()) Act(params map[string]interface{}) (string, error) 

- **params**: map[string]interface{} - action parameters.
- **returns**: (string, error) - result

#### Handler
Executes this AWS Lambda function and returns the result.
This method can be overloaded in child classes
if it is necessary to change the default behavior

> (c [*LambdaFunction]()) Handler(ctx context.Context, event map[string]interface{}) (string, error)

- **event**: map[string]interface{} - event parameters (or function arguments)
- **returns**: (string, error) - result of the function execution.

#### GetHandler
Gets an entry point into this lambda function.

> (c [*LambdaFunction]()) GetHandler() func(ctx context.Context, event map[string]interface{}) (string, error)

- **returns**: func(ctx context.Context, event map[string]interface{}) (string, error) - incoming event object with invocation parameters.
    - **context**: context.Context - context object with local references.
    - **event**: map[string]interface{} - incoming event object with invocation parameters.


#### Instrument
Gets entry point into this lambda function.

> (c [*LambdaFunction]()) Instrument(correlationId string, name string) [*InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method name.
- **returns**: [*InstrumentTiming](../../../rpc/services/instrument_timing) - object to end the time measurement.

#### Open
Opens the component.

> (c [*LambdaFunction]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.


#### RegisterAction
Registers an action in this lambda function.
 
- Note: This method has been deprecated. Use [LambdaService](../../services/lambda_service) instead.

> (c [*LambdaFunction]()) RegisterAction(cmd string, schema [*Schema](../../../commons/validate/schema), action func(params map[string]interface{}) (result interface{}, err error)) error

- **cmd**: string - action/command name.
- **schema**: [*Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: func(params map[string]interface{}) - action function that is called when the action is invoked.
- **returns**: error - error or nil if no errors occured.


#### RegisterServices
Registers all actions in this lambda function.

- Note: Overloading of this method has been deprecated. Use [LambdaService](../../services/lambda_service) instead.

> (c [*LambdaFunction]()) RegisterServices()


#### Run
Runs this lambda function, loads container configuration,
instantiates components and manages their lifecycle.
Makes this function ready to access action calls.

> (c [*LambdaFunction]()) Run() error

- **returns**: error - error or nil no errors occured.


#### SetReferences
Sets references to dependent components.

> (c [*LambdaFunction]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```go
TODO: add description
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
