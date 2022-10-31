---
type: docs
title: "CloudFunctionService"
linkTitle: "CloudFunctionService"
gitUrl: "https://github.com/pip-services3-python/pip-services3-gcp-python"
description: >
    Abstract service that receives remove calls via the Google Function protocol.
---

**Implements**: [ICloudFunctionService](../icloud_function_service), [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description
The CloudFunctionService class allows you to create a service that receives remove calls via the Google Function protocol.

**Important points**

- This service is intended to work inside an CloudFunction container that exposes registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.

### Constructors
Creates an instance of this service.

> CloudFunctionService(name: str)

- **name**: string - name of the service used to generate an action cmd.

### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _dependency_resolver
Dependency resolver.
> **_dependency_resolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
Logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _tracer
Tracer.
> **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

</span>

### Instance methods

#### _apply_interceptors
Applies interceptors to the action.

> _apply_interceptors(action: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]): Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]

- **action**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - action
- **returns**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]

#### _apply_validation
Performs a validation.

> _apply_validation(schema: [Schema](../../../commons/validate/schema), action: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]): Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]

- **schema**: [Schema](../../../commons/validate/schema) - schema used in the validation
- **action**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - action
- **returns**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - returned result


#### close
Closes a component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


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
Get all actions supported by the service.

> get_actions(): List[[CloudFunctionAction](../cloud_function_action)]

- **returns**: List[[CloudFunctionAction](../cloud_function_action)] - array with supported actions.


#### _get_command
Returns command from Google Function request.

This method can be overloaded in child classes

> _get_command(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): str

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - the function request
- **returns**: str - returned command from request.

#### _get_correlation_id
Returns correlationId from Google Function request.

This method can be overloaded in child classes

> _get_correlation_id(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): str

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - the function request
- **returns**: str - returned correlationId from request.


#### _instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> _instrument(correlation_id: Optional[str], name: str): [InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **name**: str - method's name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing) - Timing object to end the time measurement.

#### isOpen
Checks if the component is open.

> isOpen(): bool

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### _register_action
Registers an action in Google Function function.

> _register_action(name: str, schema: [Schema](../../../commons/validate/schema), action: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any])

- **name**: str - action name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - action function that is called when the operation is invoked.

#### _register_action_with_auth
Registers an action with authorization.

> _register_action_with_auth(self, name: str, schema: [Schema](../../../commons/validate/schema), authorize: Callable[[Any, Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]], Any], action: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any])

- **name**: string - action's name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **authorize**: Callable[[Any, Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any]] - authorization interceptor
- **action**: Callable[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data), Any] - action function that is called when the operation is invoked.


#### _register_interceptor
Registers a middleware for actions in Google Function service.

> _register_interceptor(cmd: str, action: Callable[[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)], Any])

- **cmd**: str - the command name for intercept or regex.
- **action**: Callable[[[flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)], Any] - action function that is called when middleware is invoked.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Abstract methods

#### register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overridden
in child classes.

> `abstractmethod` register()

### Examples

```python
class MyCloudFunctionService(CloudFunctionService):
    _controller: IMyController
   ...

   def __init__(self):
        super().__init__('v1.myservice')
        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup","controller","*","*","1.0")
        )

   def set_references(self, references: IReferences):
      super().set_references(references)
      self._controller = self._dependency_resolver.get_required("controller")

   def __action(self, req):
        correlation_id = self._get_correlation_id(req)
        id = req.args.get('id')
        return self._controller.get_my_data(correlationId, id)

   def register(self):
       self._register_action("get_my_data", None, self.__action)
       ...

service = MyCloudFunctionService()
service.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

service.set_references(References.from_tuples(
    Descriptor("mygroup","controller","default","default","1.0"), controller
))

service.open("123")
```
