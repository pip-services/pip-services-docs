---
type: docs
title: "CloudFunction"
linkTitle: "CloudFunction"
gitUrl: "https://github.com/pip-services3-python/pip-services3-gcp-nodex"
description: >
    Abstract Google Function that acts as a container to instantiate and run components and expose them via an external entry point. 
---

**Implements:** [Container](../../../container/containers/container)

### Description
The CloudFunction class allows you to create an Abstract Google Function that acts as a container to instantiate and run components and expose them via an external entry point. 

Importan points

- When handling calls, the "cmd" parameter determines the action that shall be called, while the other parameters are passed to the action itself.  

- The container configuration for this Google Function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.

#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:service:google-function:\*:1.0**: (optional) [ICloudFunctionService](../../services/icloud_function_service) services to handle action requests.
- **\*:service:commandable-google-function:\*:1.0**: (optional) [ICloudFunctionService](../../services/icloud_function_service) services to handle action requests.

### Constructors
Creates a new instance of this Google Function.

> CloudFunction(name: str = None, description: str = None)

- **name**: str - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: str - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))


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
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)

### _dependency_resolver
Dependencies resolver.
> **_dependency_resolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

### _logger
Logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

### _tracer
The tracer.
> **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

### _schemas
The map of registred validation schemas.
> **_schemas**: Dict[str, [Schema](../../../commons/validate/schema)]

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

#### _get_correlation_id
Returns correlationId from Googel Function request.
This method can be overloaded in child classes

> getCorrelationId(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): str

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - Google Function request
- **returns**: str - Returns correlationId from req

#### get_handler
Return plugin function

> get_handler(): Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]

- **returns**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - plugin function
    - **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - an incoming request object with invocation parameters.
    - **res**: Any - an returnning response object with result parameters.

#### _instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> _instrument(correlation_id: Optional[str], name: str): [InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **name**: str - method's name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing) - Timing object to end the time measurement.

#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### _register_action
Registers an action in this Google Function.

Note: This method has been deprecated. Use CloudFunctionService instead.

> _register_action(cmd: str, schema: [Schema](../../../commons/validate/schema), action: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]) 

- **cmd**: str - a action/command name.
- **schema**: [Schema](../../../commons/validate/schema) - a validation schema to validate received parameters.
- **action**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - an action function that is called when action is invoked.

#### register
Registers all actions in this Googel Function.

Note: Overloading of this method has been deprecated. Use GoogelFunctionService instead.

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

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```python
class MyCloudFunction(CloudFunction):

    def __init__(self):
        super().__init__("mygroup", "MyGroup Google Function")

cloud_function = MyCloudFunction()

cloud_function.run()
print("MyCloudFunction is started")

```
