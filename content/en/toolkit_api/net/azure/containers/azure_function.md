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

> `public` AzureFunction(string name, string description)

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))


### Fields

<span class="hide-title-link">

### _actions
The map of registered actions.
> `protected` **_actions**: Dictionary\<string, Func\<HttpRequest, Task\<IActionResult\>\>\>

### _configPath
The default path to config file.
> `protected` **_configPath**: string = "../config/config.yml"

### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters)

### _dependencyResolver
Dependencies resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

### _tracer
The tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

### _schemas
The map of registred validation schemas.
> `protected` **_schemas**: Dictionary\<string, [Schema](../../../commons/validate/schema)\>

</span>


### Instance methods

#### ExecuteAsync
Executes this Azure Function and returns the result.
This method can be overloaded in child classes
if they need to change the default behavior

> `protected` Task\<IActionResult\> ExecuteAsync(HttpRequest context)

- **context**: HttpRequest - context the context parameters (or function arguments)
- **returns**: Task\<IActionResult\> - the result of the function execution.

#### GetCommand
Returns command from Azure Function context.
This method can be overloaded in child classes

> `protected` string GetCommand(HttpRequest context)

- **context**: HttpRequest - Azure Function context.
- **returns**: string - Returns command from context.

#### GetCorrelationId
Returns correlationId from Azure Function context.
This method can be overloaded in child classes

> `protected` string GetCorrelationId(HttpRequest context)

- **context**: HttpRequest - Azure Function context
- **returns**: string - Returns correlationId from context

#### GetHandler
Gets entry point into this Azure Function.

> `public` Func\<HttpRequest, Task\<IActionResult\>\> GetHandler()

- **returns**: Func\<HttpRequest, Task\<IActionResult\>\> - plugin function


#### Instrument
Adds instrumentation to log calls and measure call time. It returns a CounterTiming 
object that is used to end the time measurement.

> `protected` [CounterTiming](../../../components/count/counter_timing) Instrument(string correlationId, string name)
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method name.
- **returns**: [CounterTiming](../../../components/count/counter_timing) - CounterTiming object to end the time measurement.

#### InstrumentError
Adds instrumentation to error handling.

> `protected` void InstrumentError(string correlationId, string methodName, Exception ex, bool rethrow = false)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **methodName**: string - a method name.
- **ex**: Exception - Error that occured during the method call.
- **rethrow**: bool - True to throw the exception.

#### IsOpen
Checks if the component is opened.

> `public` bool IsOpen()

- **returns**: bool - true if the component has been opened and false otherwise.

#### OpenAsync
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### RegisterAction
Registers an action in this Azure Function.

Note: This method has been deprecated. Use AzureFunctionService instead.

> `protected` RegisterAction(string cmd, [Schema](../../../commons/validate/schema) schema, Func\<HttpRequest, Task\<IActionResult\>\> action)

- **cmd**: string - a action/command name.
- **schema**: [Schema](../../../commons/validate/schema) - a validation schema to validate received parameters.
- **action**: Func\<HttpRequest, Task\<IActionResult\>\> - an action function that is called when action is invoked.

#### Register
Registers all actions in this Azure Function.

Note: Overloading of this method has been deprecated. Use AzureFunctionService instead.

> `protected virtual` Register()

#### RegisterServices
Registers all Azure Function services in the container.

> `protected` void RegisterServices()

#### RunAsync
Runs this Azure Function, loads container configuration,
instantiate components and manage their lifecycle,
makes this function ready to access action calls.

> `public` Task RunAsync()


#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```cs
class MyAzureFunction : AzureFunction
{
    public MyAzureFunction() : base("mygroup", "MyGroup Azure Function")
    {

    }
}

/// ...

var AzureFunction = new MyAzureFunction();

await AzureFunction.RunAsync();
Console.WriteLine("MyAzureFunction is started");

```
