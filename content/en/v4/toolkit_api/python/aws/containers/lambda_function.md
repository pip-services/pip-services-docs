---
type: docs
title: "Function"
linkTitle: "Function"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-aws-python"
description: >
    Abstract AWS  function that acts as a container to instantiate and run components, 
    and expose them via an external entry point. 
---

**Implements:** [Container](../../../container/container/container)

### Description
The Function class allows you to create an abstract AWS  function that acts as a container to instantiate and run components, and expose them via an external entry point.

**Important points**

- When handling calls the "cmd" parameter determines what action shall be called, while the other parameters are passed to the action itself.

- Container configuration for this  function is stored in *"./config/config.yml"* file. But this path can be overriden by the *CONFIG_PATH* environment variable.


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:controller::\*:1.0**: (optional) [IController](../../controllers/i_controller) controllers to handle action requests
- **\*:controller:commandable-:\*:1.0**: (optional) [CommandableController](../../controllers/commandable__controller) controllers to handle action requests

### Constructors
Creates a new instance of this  function.

> Function(name: str, description: str = None)

- **name**: str - (optional) container name (accessible via [ContextInfo](../../../components/context/context_info)).
- **description**: str - (optional) container description (accessible via [ContextInfo](../../../components/context/context_info)).

### Fields

<span class="hide-title-link">

#### _actions
Map containing registered actions.
> **_actions**: Dict[str, Any]

#### _config_path
Default path to the config file.
> **_config_path**: str = './config/config.yml'

#### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### _dependency_resolver
Dependency resolver.
> **_dependency_resolver**:[DependencyResolver](../../../components/refer/dependency_resolver)

#### _schemas
Map of registred validation schemas.
> **_schemas**: Dict[str, [Schema](../../../data/validate/schema)]

#### _tracer
Tracer.
> **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)


</span>


### Instance methods

#### act
Calls registered action in this  function.
The "cmd" parameter in the action parameters determines
what action shall be called.

- This method shall only be used in testing.

> act(params: dict): Any

- **params**: dict - action parameters.
- **returns**: Any - result

#### _execute
Executes this AWS  function and returns the result.
This method can be overloaded in child classes
if it is necessary to change the default behavior

> _execute(event: dict): Any

- **event**: dict - event parameters (or function arguments)
- **returns**: Any - result of the function execution.

#### get_handler
Gets an entry point into this  function.

> get_handler(): Callable[[dict], Any]

- **returns**: Callable[[dict], Any] - incoming event object with invocation parameters.

#### _instrument
Gets entry point into this lambda function.

> _instrument(context: Optional[IContext], name: str): [InstrumentTiming](../../../rpc/trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: str - method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - object to end the time measurement.

#### open
Opens the component.

> open(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### register
Registers all actions in this lambda function.

- Note: Overloading of this method has been deprecated. Use [LambdaController](../../controllers/lambda_controller) instead.

> register() 


#### _register_action
Registers an action in this lambda function.
 
- Note: This method has been deprecated. Use [LambdaController](../../controllers/lambda_controller) instead.

> _register_action(cmd: str, schema: Optional[[Schema](../../../data/validate/schema)], action: Callable[[dict], Any])

- **cmd**: str - action/command name.
- **schema**: Optional[[Schema](../../../data/validate/schema)] - validation schema used to validate received parameters.
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

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



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
- #### [Client](../../clients/_client)
