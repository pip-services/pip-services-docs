---
type: docs
title: "AzureFunction"
linkTitle: "AzureFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-azure-dotnet"
description: >
    Abstract Azure Function that acts as a container to instantiate and run components and expose them via an external entry point. 
---

**Inherits:** [Container](../../../container/containers/container)

### Description
The AzureFunction class allows you to create an Abstract Azure Function that acts as a container to instantiate and run components and expose them via an external entry point. 

Importan points

- When handling calls, the "cmd" parameter determines the action that shall be called, while the other parameters are passed to the action itself.  

- The container configuration for this Azure Function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.

#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:controller:azure-function:\*:1.0**: (optional) [IAzureFunctionController](../../controllers/iazure_function_controller) controllers to handle action requests.
- **\*:controller:commandable-azure-function:\*:1.0**: (optional) [IAzureFunctionController](../../controllers/iazure_function_controller) controllers to handle action requests.

### Constructors
Creates a new instance of this Azure Function.

> `public` AzureFunction(string name, string description)

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/context/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/context/context_info))


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
> `protected` **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

### _dependencyResolver
Dependencies resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

### _tracer
The tracer.
> `protected` **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

### _schemas
The map of registred validation schemas.
> `protected` **_schemas**: Dictionary\<string, [Schema](../../../data/validate/schema)\>

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

#### GetTraceId
Returns traceId from Azure Function context.
This method can be overloaded in child classes

> `protected` string GetTraceId(HttpRequest context)

- **context**: HttpRequest - Azure Function context
- **returns**: string - Returns traceId from context

#### GetHandler
Gets entry point into this Azure Function.

> `public` Func\<HttpRequest, Task\<IActionResult\>\> GetHandler()

- **returns**: Func\<HttpRequest, Task\<IActionResult\>\> - plugin function


#### Instrument
Adds instrumentation to log calls and measure call time. It returns a CounterTiming 
object that is used to end the time measurement.

> `protected` [CounterTiming](../../../observability/count/counter_timing) Instrument(IContext context, string name)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [CounterTiming](../../../observability/count/counter_timing) - CounterTiming object to end the time measurement.

#### InstrumentError
Adds instrumentation to error handling.

> `protected` void InstrumentError(IContext contextId, string methodName, Exception ex, bool rethrow = false)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **methodName**: string - a method name.
- **ex**: Exception - Error that occured during the method call.
- **rethrow**: bool - True to throw the exception.

#### IsOpen
Checks if the component is opened.

> `public` bool IsOpen()

- **returns**: bool - true if the component has been opened and false otherwise.

#### OpenAsync
Opens the component.

> `public` Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### RegisterAction
Registers an action in this Azure Function.

Note: This method has been deprecated. Use AzureFunctionController instead.

> `protected` RegisterAction(string cmd, [Schema](../../../data/validate/schema) schema, Func\<HttpRequest, Task\<IActionResult\>\> action)

- **cmd**: string - a action/command name.
- **schema**: [Schema](../../../data/validate/schema) - a validation schema to validate received parameters.
- **action**: Func\<HttpRequest, Task\<IActionResult\>\> - an action function that is called when action is invoked.

#### Register
Registers all actions in this Azure Function.

Note: Overloading of this method has been deprecated. Use AzureFunctionController instead.

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

> `public override` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


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
