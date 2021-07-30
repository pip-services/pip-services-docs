---
type: docs
title: "LambdaFunction"
linkTitle: "LambdaFunction"
gitUrl: "https://github.com/pip-services3-python/pip-services3-aws-python"
description: >
    Abstract AWS Lambda function that acts as a container to instantiate and run components, 
    and expose them via an external entry point. 
---

**Implements:** [Container](../../../container/containers/container)

### Description
The LambdaFunction class allows you to create an abstract AWS Lambda function that acts as a container to instantiate and run components, and expose them via an external entry point.

**Important points**

- When handling calls the "cmd" parameter determines what action shall be called, while the other parameters are passed to the action itself.

- Container configuration for this Lambda function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:service:lambda:\*:1.0**: (optional) [ILambdaService](../../services/ilambda_service) services to handle action requests
- **\*:service:commandable-lambda:\*:1.0**: (optional) [ILambdaService](../../services/ilambda_service) services to handle action requests

### Constructors
Creates a new instance of this lambda function.

> LambdaFunction(name: str, description: str = None)

- **name**: str - (optional) a container name (accessible via [ContextInfo](../../../components/info/context_info)).
- **description**: str - (optional) container description (accessible via [ContextInfo](../../../components/info/context_info)).

### Fields

<span class="hide-title-link">

#### _actions
Map containing registered actions.
> **_actions**: Dict[str, Any]

#### _config_path
Default path to config file.
> **_config_path**: str = './config/config.yml'

#### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _dependency_resolver
Dependency resolver.
> **_dependency_resolver**:[DependencyResolver](../../../commons/refer/dependency_resolver)

#### _schemas
Map of registred validation schemas.
> **_schemas**: Dict[str, [Schema](../../../commons/validate/schema)]

#### _tracer
Tracer.
> **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)


</span>


### Instance methods

#### act
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
what action shall be called.

- This method shall only be used in testing.

> act(params: dict): Any

- **params**: dict - action parameters.
- **returns**: Any - result

#### _execute
Executes this AWS Lambda function and returns the result.
This method can be overloaded in child classes
if it is necessary to change the default behavior

> _execute(event: dict): Any

- **event**: dict - event parameters (or function arguments)
- **returns**: Any - result of the function execution.

#### get_handler
Gets an entry point into this lambda function.

> get_handler(): Callable[[dict], Any]

- **returns**: Callable[[dict], Any] - incoming event object with invocation parameters.

#### _instrument
Gets entry point into this lambda function.

> _instrument(correlation_id: Optional[str], name: str): [InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **name**: str - method name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing) - object to end the time measurement.

#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlationId**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### _register
Registers all actions in this lambda function.

- Note: Overloading of this method has been deprecated. Use [LambdaService](../../services/lambda_service) instead.

> _register() 


#### _register_action
Registers an action in this lambda function.
 
- Note: This method has been deprecated. Use [LambdaService](../../services/lambda_service) instead.

> _register_action(cmd: str, schema: Optional[[Schema](../../../commons/validate/schema)], action: Callable[[dict], Any])

- **cmd**: str - action/command name.
- **schema**: Optional[[Schema](../../../commons/validate/schema)] - validation schema used to validate received parameters.
- **action**: Callable[[dict], Any] - action function that is called when the action is invoked.


#### _register_services
Registers all lambda services in the container.

> _register_services()


#### run
Runs this lambda function, loads container configuration,
instantiates components and manages their lifecycle.
Makes this function ready to access action calls.

> run() 


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```python
class MyLambdaFunction(LambdaFunction):
    def __init__(self):
        super().__init__("mygroup", "MyGroup lambda function")
lambda = MyLambdaFunction()

service.run();
print("MyLambdaFunction is started")
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
