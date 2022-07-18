---
type: docs
title: "AzureFunction"
linkTitle: "AzureFunction"
gitUrl: "https://github.com/pip-services3-python/pip-services3-azure-python"
description: >
    Abstract Azure Function that acts as a container to instantiate and run components and expose them via an external entry point. 
---

**Implements:** [Container](../../../container/containers/container)

### Description
The AzureFunction class allows you to create an Abstract Azure Function that acts as a container to instantiate and run components and expose them via an external entry point. 

Importan points

- When handling calls, the "cmd" parameter determines the action that shall be called, while the other parameters are passed to the action itself.  

- The container configuration for this Azure Function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.

#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:service:azure-function:\*:1.0**: (optional) [IAzureFunctionService](../../services/iazure_function_service) services to handle action requests.
- **\*:service:commandable-azure-function:\*:1.0**: (optional) [IAzureFunctionService](../../services/iazure_function_service) services to handle action requests.

### Constructors
Creates a new instance of this Azure Function.

> AzureFunction(name: Optional[str], description: Optional[str])

- **name**: Optional[str] - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: Optional[str] - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))


### Fields

<span class="hide-title-link">

### _actions
The map of registered actions.
> **_actions**: Dict[str, Any]

### _config_path
The default path to config file.
> **_config_path**: str = './config/config.yml'

### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)

### _dependencyResolver
Dependencies resolver.
> **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

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

#### act
Calls registered action in this Azure Function.
"cmd" parameter in the action parameters determin
what action shall be called.

This method shall only be used in testing.

> act(self, context: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)): Any
- **context**: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python) - action parameters.
- **returns**: Any - action result.

#### _execute
Executes this Azure Function and returns the result.
This method can be overloaded in child classes
if they need to change the default behavior

> _execute(context: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)) -> Any

- **context**: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python) - context the context parameters (or function arguments)
- **returns**: str - the result of the function execution.

#### _get_command
Returns command from Azure Function context.
This method can be overloaded in child classes

> _get_command(context: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)): str

- **context**: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python) - Azure Function context
- **returns**: str - Returns command from context

#### _get_correlation_id
Returns correlationId from Azure Function context.
This method can be overloaded in child classes

> _get_correlation_id(context: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)): str

- **context**: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python) - Azure Function context
- **returns**: str - Returns correlationId from context

#### get_handler
Return plugin function

> get_handler(): Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any]

- **returns**: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any] - plugin function


#### _instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> _instrument(correlation_id: Optional[str], name: str): [InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlation_id**: str - (optional) transaction id used to trace execution through the call chain.
- **name**: str - method's name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing) - Timing object to end the time measurement.

#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### _register_action
Registers an action in this Azure Function.

Note: This method has been deprecated. Use AzureFunctionService instead.

> _register_action(cmd: str, schema: [Schema](../../../commons/validate/schema), action: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any])

- **cmd**: str - a action/command name.
- **schema**: [Schema](../../../commons/validate/schema) - a validation schema to validate received parameters.
- **action**: Callable[[[HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)], Any] - an action function that is called when action is invoked.

#### register
Registers all actions in this Azure Function.

Note: Overloading of this method has been deprecated. Use AzureFunctionService instead.

> register()

#### _register_services
Registers all Azure Function services in the container.

> _register_services(context: any): string

#### run
Runs this Azure Function, loads container configuration,
instantiate components and manage their lifecycle,
makes this function ready to access action calls.

> run()


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```python
class MyAzureFunctionFunction(AzureFunction):
    def __init__(self):
        super().__init__("mygroup", "MyGroup Azure Function")

azure_function = MyAzureFunctionFunction()
service.run()

print("MyAzureFunctionFunction is started")
```
