---
type: docs
title: "LambdaFunction"
linkTitle: "LambdaFunction"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
description: >
    Abstract AWS Lambda function that acts as a container to instantiate and run components, 
    and expose them via an external entry point. 
---

**Extends:** [Container](../../../container/containers/container)

### Description
The LambdaFunction class allows you to create an abstract AWS Lambda function that acts as a container to instantiate and run components, and expose them via an external entry point.

**Important points**

- When handling calls the "cmd" parameter determines what action shall be called, while the other parameters are passed to the action itself.

- Container configuration for this Lambda function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:service:lambda:\*:1.0**: (optional) [ILambdaService](../../services/ilambda_service) services to handle action requests
- **\*:service:commandable-lambda:\*:1.0**: (optional) [ILambdaService](../../services/ilambda_service) services to handle action requests

### Constructors
Creates a new instance of this lambda function.

> `public` LambdaFunction(string name, string description)

- **name**: string - (optional) a container name (accessible via [ContextInfo](../../../components/info/context_info)).
- **description**: string - (optional) container description (accessible via [ContextInfo](../../../components/info/context_info)).

### Fields

<span class="hide-title-link">

#### _actions
Map containing registered actions.
> `protected` **_actions**: Dictionary\<string, Func\<string, Task\<string\>\>\>

#### _configPath
Default path to config file.
> `protected` **_configPath**: string = "../config/config.yml"

#### _counters
Performance counters.
> `protected` **_counters** = new [CompositeCounters()](../../../components/count/composite_counters)

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver** = new [DependencyResolver()](../../../commons/refer/dependency_resolver)

#### _schemas
Map of registred validation schemas.
> `protected` **_schemas**: Dictionary\<string, [Schema](../../../commons/validate/schema)\>

#### _tracer
Tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer) = new [CompositeTracer()](../../../components/trace/composite_tracer)


</span>


### Instance methods

#### ActAsync
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
what action shall be called.

- This method shall only be used in testing.

> `public` Task\<string\> ActAsync(string input)

- **input**: string - action parameters.
- **returns**: Task\<string\> - result

#### ExecuteAsync
Executes this AWS Lambda function and returns the result.
This method can be overloaded in child classes
if it is necessary to change the default behavior

> `protected` Task\<string\> ExecuteAsync(string input)

- **input**: string - event parameters (or function arguments)
- **returns**: Task\<string\> - result of the function execution.

#### GetHandlerAsync
Gets an entry point into this lambda function.

> `public` Func\<string, Task\<string\>\> GetHandlerAsync()

- **returns**: Func\<string, Task\<string\>\> - incoming event object with invocation parameters.

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

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### OpenAsync
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### Register
Registers all actions in this lambda function.

- Note: Overloading of this method has been deprecated. Use [LambdaService](../../services/lambda_service) instead.

> `protected` void Register() 


#### RegisterAction
Registers an action in this lambda function.
 
- Note: This method has been deprecated. Use [LambdaService](../../services/lambda_service) instead.

> `protected` void RegisterAction(string cmd, [Schema](../../../commons/validate/schema) schema, Func\<string, Task\<string\>\> action)

- **cmd**: string - action/command name.
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: Func\<string, Task\<string\>\> - action function that is called when the action is invoked.


#### RegisterServices
Registers all lambda services in the container.

> `protected` void RegisterServices()


#### RunAsync
Runs this lambda function, loads container configuration,
instantiates components and manages their lifecycle.
Makes this function ready to access action calls.

> `public` async Task RunAsync()


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```cs
class MyLambdaFunction extends LambdaFunction {
    public MyLambdaFunction(): base("mygroup", "MyGroup lambda function") { }
}
var lambda = new MyLambdaFunction();
await service.RunAsync();
Console.WriteLine("MyLambdaFunction is started");
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
