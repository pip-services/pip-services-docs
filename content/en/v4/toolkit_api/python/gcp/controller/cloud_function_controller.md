---
type: docs
title: "CloudFunctionController"
linkTitle: "CloudFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-gcp-python"
description: >
    Abstract controller that receives remove calls via the Google Function protocol.
---

**Implements**: [ICloudFunctionController](../icloud_function_controller), [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description
The CloudFunctionController class allows you to create a controller that receives remove calls via the Google Function protocol.

**Important points**

- This controller is intended to work inside an CloudFunction container that exposes registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.

### Constructors
Creates an instance of this controller.

> CloudFunctionController(name: str)

- **name**: string - name of the controller used to generate an action cmd.

### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### _dependency_resolver
Dependency resolver.
> **_dependency_resolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### _logger
Logger.
> **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _tracer
Tracer.
> **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

</span>

### Instance methods

#### _apply_interceptors
Applies interceptors to the action.

> _apply_interceptors(action: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]): Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]

- **action**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - action
- **returns**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]

#### _apply_validation
Performs a validation.

> _apply_validation(schema: [Schema](../../../data/validate/schema), action: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]): Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]

- **schema**: [Schema](../../../data/validate/schema) - schema used in the validation
- **action**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - action
- **returns**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - returned result


#### close
Closes a component and frees used resources.

> close(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### _apply_interceptors
Apply interceptors to the actions

> _apply_interceptors(action: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]) -> Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]:

- **action**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - configuration parameters to be set.
- **returns**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - wrapped function into interceptor


#### _generate_action_cmd
Adds '.cmd' to a command name
> _generate_action_cmd(name: str): str

- **name**: str - command name
- **returns**: str - command name with '.cmd' added at its end.

#### get_actions
Get all actions supported by the controller.

> get_actions(): List[[CloudFunctionAction](../cloud_function_action)]

- **returns**: List[[CloudFunctionAction](../cloud_function_action)] - array with supported actions.


#### _get_command
Returns command from Google Function request.

This method can be overloaded in child classes

> _get_command(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): str

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - the function request
- **returns**: str - returned command from request.

#### _get_trace_id
Returns traceId from Google Function request.

This method can be overloaded in child classes

> _get_trace_id(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): str

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - the function request
- **returns**: str - returned traceId from request.


#### _instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> _instrument(context: Optional[IContext], name: str): [InstrumentTiming](../../../rpc/trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: str - method's name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - Timing object to end the time measurement.

#### isOpen
Checks if the component is open.

> isOpen(): bool

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

> open(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### _register_action
Registers an action in Google Function function.

> _register_action(name: str, schema: [Schema](../../../data/validate/schema), action: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any])

- **name**: str - action name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **action**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - action function that is called when the operation is invoked.

#### _register_action_with_auth
Registers an action with authorization.

> _register_action_with_auth(self, name: str, schema: [Schema](../../../data/validate/schema), authorize: Callable[[Any, Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]], Any], action: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any])

- **name**: string - action's name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **authorize**: Callable[[Any, Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]] - authorization interceptor
- **action**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - action function that is called when the operation is invoked.


#### _register_interceptor
Registers a middleware for actions in Google Function service.

> _register_interceptor(cmd: str, action: Callable[[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)], Any])

- **cmd**: str - the command name for intercept or regex.
- **action**: Callable[[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)], Any] - action function that is called when middleware is invoked.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



### Abstract methods

#### register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overridden
in child classes.

> `abstractmethod` register()

### Examples

```python
class MyCloudFunctionController(CloudFunctionController):
    _controller: IMyController
   ...

   def __init__(self):
        super().__init__('v1.mycontroller')
        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup","controller","*","*","1.0")
        )

   def set_references(self, references: IReferences):
      super().set_references(references)
      self._controller = self._dependency_resolver.get_required("controller")

   def __action(self, req):
        trace_id = self._get_trace_id(req)
        id = req.args.get('id')
        return self._controller.get_my_data(traceId, id)

   def register(self):
       self._register_action("get_my_data", None, self.__action)
       ...

controller = MyCloudFunctionController()
controller.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

controller.set_references(References.from_tuples(
    Descriptor("mygroup","controller","default","default","1.0"), controller
))

controller.open("123")
```
