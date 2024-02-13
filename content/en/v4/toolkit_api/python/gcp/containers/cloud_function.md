---
type: docs
title: "CloudFunction"
linkTitle: "CloudFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-gcp-python"
description: >
    Abstract Google Function that acts as a container to instantiate and run components and expose them via an external entry point. 
---

**Implements:** [Container](../../../container/container/container)

### Description
The CloudFunction class allows you to create an Abstract Google Function that acts as a container to instantiate and run components and expose them via an external entry point. 

Important points

- When handling calls, the "cmd" parameter determines the action that shall be called, while the other parameters are passed to the action itself.  

- The container configuration for this Google Function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.

#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:controller:gcp-function:\*:1.0**: (optional) [ICloudFunctionController](../../controller/icloud_function_controller) controllers used to handle action requests.
- **\*:controller:commandable-gcp-function:\*:1.0**: (optional) [ICloudFunctionController](../../controller/icloud_function_controller) services to handle action requests.

### Constructors
Creates a new instance of this Google Function.

> CloudFunction(name: str = None, description: str = None)

- **name**: str - (optional) container's name (accessible via [ContextInfo](../../../components/context/context_info))
- **description**: str - (optional) container's description (accessible via [ContextInfo](../../../components/context/context_info))


### Fields

<span class="hide-title-link">

### _actions
The map of registered actions.
> **_actions**: Dict[str, Callable] = {}

### _config_path
The default path to config file.
> **_config_path**: str = './config/config.yml'

### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

### _dependency_resolver
Dependencies resolver.
> **_dependency_resolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

### _logger
Logger.
> **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

### _tracer
The tracer.
> **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

### _schemas
The map of registred validation schemas.
> **_schemas**: Dict[str, [Schema](../../../data/validate/schema)]

</span>


### Instance methods

#### _execute
Executes this Google Function and returns the result.
This method can be overloaded in child classes
if they need to change the default behavior

> _execute(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): Any

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - the request object (with function arguments)
- **returns**: Any - function result.

#### _get_command
Returns command from Google Function request.
This method can be overloaded in child classes

> _get_command(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): str

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - Google Function request
- **returns**: str - Returns command from req

#### _get_trace_id
Returns traceId from Google Function request.
This method can be overloaded in child classes

> getTraceId(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): str

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - Google Function request
- **returns**: str - Returns traceId from req

#### get_handler
Return plugin function

> get_handler(): Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]

- **returns**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - plugin function
    - **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - an incoming request object with invocation parameters.
    - **res**: Any - an returnning response object with result parameters.

#### _instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> _instrument(context: Optional[IContext], name: str): [InstrumentTiming](../../../rpc/trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: str - method's name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - Timing object to end the time measurement.

#### open
Opens the component.

> open(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### _register_action
Registers an action in this Google Function.

Note: This method has been deprecated. Use CloudFunctionController instead.

> _register_action(cmd: str, schema: [Schema](../../../data/validate/schema), action: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]) 

- **cmd**: str - a action/command name.
- **schema**: [Schema](../../../data/validate/schema) - a validation schema to validate received parameters.
- **action**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - an action function that is called when action is invoked.

#### register
Registers all actions in this Googel Function.

Note: Overloading of this method has been deprecated. Use GoogelFunctionController instead.

> register()

#### _register_services
Registers all Google Function services in the container.

> _register_services()

#### run
Runs this Google Function, loads container configuration,
instantiate components and manage their lifecycle,
makes this function ready to access action calls.

> run()


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


### Examples

```python
class MyCloudFunction(CloudFunction):

    def __init__(self):
        super().__init__("mygroup", "MyGroup Google Function")

cloud_function = MyCloudFunction()

cloud_function.run()
print("MyCloudFunction is started")

```
