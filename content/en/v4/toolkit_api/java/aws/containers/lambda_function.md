---
type: docs
title: "LambdaFunction"
linkTitle: "LambdaFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-aws-java"
description: >
    Abstract AWS Lambda function that acts as a container to instantiate and run components, 
    and expose them via an external entry point. 
---

**Extends:** [Container](../../../container/containers/container)

### Description
The LambdaFunction class allows you to create an abstract AWS Lambda function that acts as a container to instantiate and run components, and expose them via an external entry point.

**Important points**

- When handling calls the "cmd" parameter determines what action shall be called, while the other parameters are passed to the action itself.

- Container configuration for this Lambda function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:service:lambda:\*:1.0**: (optional) [ILambdaController](../../controllers/ilambda_controller) services to handle action requests
- **\*:service:commandable-lambda:\*:1.0**: (optional) [ILambdaController](../../controllers/ilambda_controller) services to handle action requests

### Constructors
Creates a new instance of this lambda function.

> `public` LambdaFunction(String name, String description)

- **name**: string - (optional) a container name (accessible via [ContextInfo](../../../components/context/context_info)).
- **description**: string - (optional) container description (accessible via [ContextInfo](../../../components/context/context_info)).

### Fields

<span class="hide-title-link">

#### _actions
Map containing registered actions.
> `protected` Map<String, Function<Map<String, Object>, ?>> **_actions** = new HashMap<>();

#### _configPath
Default path to config file.
> `protected` String **_configPath** = './config/config.yml'
 
#### _counters
Performance counters.
> `protected` CompositeCounters **_counters** = new [CompositeCounters()](../../../observability/count/composite_counters)

#### _dependencyResolver
Dependency resolver.
> `protected` DependencyResolver **_dependencyResolver** = new [DependencyResolver()](../../../components/refer/dependency_resolver)

#### _schemas
Map of registred validation schemas.
> `protected`  Map<String,[Schema](../../../data/validate/schema)> **_schemas** = new HashMap<>();

#### _tracer
Tracer.
> `protected` CompositeTracer **_tracer** = new [CompositeTracer()](../../../observability/trace/composite_tracer)


</span>


### Instance methods

#### act
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
what action shall be called.

- This method shall only be used in testing.

> `public` Object act(Map<String, Object> params)

- **params**: Object - action parameters.
- **returns**: Object - result

#### execute
Executes this AWS Lambda function and returns the result.
This method can be overloaded in child classes
if it is necessary to change the default behavior

> `protected` Object execute(Map<String, Object> params) throws ApplicationException

- **params**: Object - event parameters (or function arguments)
- **returns**: Object - result of the function execution.

#### getHandler
Gets an entry point into this lambda function.

> `public` Function<Map<String, Object>, ?> getHandler()

- **returns**: Function<Map<String, Object>, ?> - incoming event object with invocation parameters.

#### instrument
Gets entry point into this lambda function.

> `protected` [InstrumentTiming](../../../rpc/trace/instrument_timing) instrument([IContext](../../../components/context/icontext) context, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: String - method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - object to end the time measurement.

#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext)) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### register
Registers all actions in this lambda function.

- Note: Overloading of this method has been deprecated. Use [LambdaController](../../controllers/lambda_controller) instead.

> `protected` void register() throws ReferenceException


#### registerAction
Registers an action in this lambda function.
 
- Note: This method has been deprecated. Use [LambdaController](../../controllers/lambda_controller) instead.

> `protected` void registerAction(String cmd, [Schema](../../../data/validate/schema) schema, Function<Map<String, Object>, ?> action)

- **cmd**: String - action/command name.
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **action**: Function<Map<String, Object>, ?> - action function that is called when the action is invoked.


#### registerServices
Registers all lambda controllers in the container.

> `protected` void registerControllers() throws UnknownException


#### run
Runs this lambda function, loads container configuration,
instantiates components and manages their lifecycle.
Makes this function ready to access action calls.

> `public` void run() throws ApplicationExceptio 


#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException, ConfigException

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



### Examples

```java
class MyLambdaFunction extends LambdaFunction {
    public MyLambdaFunction() {
        super("mygroup", "MyGroup lambda function");
    }
}

var lambda = new MyLambdaFunction();
 
lambda.run();

```


### See also
- #### [LambdaClient](../../clients/lambda_client)
