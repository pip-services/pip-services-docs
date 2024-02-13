---
type: docs
title: "AzureFunctionController"
linkTitle: "AzureFunctionController"
gitUrl: "https://github.com/pip-services3-python/pip-services3-azure-python"
description: >
    Abstract controller that receives remote calls via the Azure Function protocol.
---

**Implements**: [IAzureFunctionController](../iazure_function_controller), [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description
The AzureFunctionController class allows you to create a controller that receives remote calls via the Azure Function protocol.

**Important points**

- This controller is intended to work inside an AzureFunction container that exposes registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.

### Constructors
Creates an instance of this controller.

> AzureFunctionController(name: Optional[str])

- **name**: Optional[str]s - name of the controller used to generate an action cmd.

### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### _dependencyResolver
Dependency resolver.
> **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### _logger
Logger.
> **_logger**: [CompositeLogger](../../../components/refer/dependency_resolver)

#### _tracer
Tracer.
> **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

</span>

### Instance methods

#### act

Calls registered actions in this Azure Function.
The "cmd" parameter in the action parameters determines
what action shall be called.

This method shall only be used in testing.

> act(context: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)): Any

- **context**: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python) - context context.
- **returns**: Any- returned result

#### _apply_interceptors
Applies interceptors to the action.

> _apply_interceptors(action: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any]): Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any]

- **action**: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)] - action
- **returns**: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)] - returned result

#### _apply_validation
Performs a validation.

> _apply_validation(self, schema: Schema, action: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any]): Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any]

- **schema**: [Schema](../../../data/validate/schema) - schema used in the validation
- **action**: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any] - action
- **returns**:  Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any] - returned result


#### close
Closes a component and frees used resources.

> close(context: Optional[IContext]) 

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### _apply_interceptors
Configures a component by passing its configuration parameters.

> _apply_interceptors(action: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any]): Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any]

- **action**: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any] - configuration parameters to be set.
- **action**: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any] - configuration parameters to be set.


#### _generate_action_cmd
Adds '.cmd' to a command name
> _generate_action_cmd(name: str): str

- **name**: str - command name
- **returns**: str - command name with '.cmd' added at its end.

#### getActions
Get all actions supported by the controller.

> get_actions(): List[[AzureFunctionAction[]](../azure_function_action)]

- **returns**: List[[AzureFunctionAction[]](../azure_function_action)] - array with supported actions.


#### _get_command
Returns a command from the Azure Function context.

This method can be overloaded in child classes.

> _get_command(context: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)): str

- **context**: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python) - context.
- **returns**: str - returned command from context.

#### _get_trace_id
Returns a traceId from the Azure Function context.

This method can be overloaded in child classes.

> _get_trace_id(context: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)): str

- **context**: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python) - context.
- **returns**: str - returned traceId from context.


#### _instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> _instrument(context: Optional[IContext], name: str): [InstrumentTiming](../../../rpc/trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: str - method's name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - Timing object to end the time measurement.

#### is_open
Checks if the component is open.

> isOpen(): bool

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

> open(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### _register_action
Registers an action in Azure Function function.

> _register_action(name: str, schema: [Schema](../../../data/validate/schema), action: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any])

- **name**: str - action name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **action**: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)] - action function that is called when the operation is invoked.

#### _register_action_with_auth
Registers an action with authorization.

> _register_action_with_auth(name: str, schema: [Schema](../../../data/validate/schema), authorize: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python), Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any]], Any], action: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any]):

- **name**: str - action's name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **authorize**: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python), Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any]], Any] - authorization interceptor
- **action**: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any] - action function that is called when the operation is invoked.


#### _register_interceptor
Registers a middleware for actions in Azure Function controller.

> _register_interceptor(action: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python), Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any]], Any])

- **action**: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python), Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any]], Any] - action function that is called when middleware is invoked.


#### setReferences
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



### Abstract methods

#### register
Registers all controller routes in an HTTP endpoint.

This method is called by the controller and must be overridden
in child classes.

> `abstractmethod` register()

### Examples

```python
class MyAzureFunctionController(AzureFunctionController):
    def __init__(self):
        super().__init__('v1.mycontroller')
        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup", "controller", "*", "*", "1.0")
        )
        self.__controller: IMyController = None
    def set_references(self, references: IReferences):
        super().set_references(references)
        self.__controller = self._dependency_resolver.get_required("controller")
    def __get_mydata(self, context: HttpRequest):
        data = context.get_json()
        context = data.get('trace_id')
        id = data.get('id')
        return self.__controller.get_my_data(trace_id, id)
    def register(self):
        self._register_action(
            'get_mydata',
            None,
            self.__get_mydata
        )
        ...

controller = MyAzureFunctionController()
controller.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

controller.set_references(References.from_tuples(
    Descriptor("mygroup", "controller", "default", "default", "1.0"), controller
))

controller.open("123")
```
