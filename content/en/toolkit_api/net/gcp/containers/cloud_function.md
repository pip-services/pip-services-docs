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
- **\*:service:gcp-function:\*:1.0**: (optional) [ICloudFunctionService](../../services/icloud_function_service) services to handle action requests.
- **\*:service:commandable-gcp-function:\*:1.0**: (optional) [ICloudFunctionService](../../services/icloud_function_service) services to handle action requests.

### Constructors
Creates a new instance of this Google Function.

> `public` CloudFunction(string name = null, string description = null)

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))


### Fields

<span class="hide-title-link">

### _actions
The map of registered actions.
> `protected` **_actions**: Dictionary\<string, Func\<HttpContext, Task\>\>

### _config_path
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
Executes this Google Function and returns the result.
This method can be overloaded in child classes
if they need to change the default behavior

> `protected` Task ExecuteAsync(HttpContext context)

- **req**: HttpContext - the function context.
- **returns**: Task - the promise.

#### GetCommandAsync
Returns command from Google Function request.
This method can be overloaded in child classes

> `protected` Task\<string\> GetCommandAsync(HttpContext context)

- **context**: HttpContext - Google Function request
- **returns**: Task\<string\> - Returns command from req

#### GetCorrelationId
Returns correlationId from Googel Function request.
This method can be overloaded in child classes

> `protected` string GetCorrelationId(HttpContext context)

- **req**: HttpContext - Google Function request
- **returns**: string - Returns correlationId from req

#### GetHandler
Return plugin function

> `public` Func\<HttpContext, Task\> GetHandler()

- **returns**: Func\<HttpContext, Task\> - returns plugin function.

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
Checks if the component is open.

> `public virtual` bool IsOpen()

- **returns**: bool - true if this endpoint is open with an actively listening REST server and false otherwise.

#### OpenAsync
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### RegisterAction
Registers an action in this Google Function.

Note: This method has been deprecated. Use CloudFunctionService instead.

> `protected` void RegisterAction(string cmd, [Schema](../../../commons/validate/schema) schema, Func\<HttpContext, Task\> action)

- **cmd**: str - a action/command name.
- **schema**: [Schema](../../../commons/validate/schema) - a validation schema to validate received parameters.
- **action**: Func\<HttpContext, Task\> - an action function that is called when action is invoked.

#### Register
Registers all actions in this Googel Function.

Note: Overloading of this method has been deprecated. Use GoogelFunctionService instead.

> Register()

#### RegisterServices
Registers all Google Function services in the container.

> `protected` RegisterServices(): void

#### RunAsync
Runs this Google Function, loads container configuration,
instantiate components and manage their lifecycle,
makes this function ready to access action calls.

> `public` Task RunAsync()


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```cs
class MyCloudFunction : CloudFunction
{
    public MyCloudFunction() : base("mygroup", "MyGroup Google Function")
    {
    }
}
 
...

var cloudFunction = new MyCloudFunction();

await cloudFunction.RunAsync();
Console.WriteLine("MyCloudFunction is started");
```
