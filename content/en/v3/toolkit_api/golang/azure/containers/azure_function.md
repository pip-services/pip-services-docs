---
type: docs
title: "AzureFunction"
linkTitle: "AzureFunction"
gitUrl: "https://github.com/pip-services3-python/pip-services3-azure-python"
description: >
    Abstract Azure Function that acts as a container to instantiate and run components and expose them via an external entry point. 
---

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

#### NewAzureFunctionWithParams
Creates a new instance of this Azure Function.

> NewAzureFunctionWithParams(name string, description string) [*AzureFunction]()

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))

#### NewAzureFunction
Creates a new instance of this Azure Function function.

> NewAzureFunction() [*AzureFunction]()

#### InheritAzureFunction
InheritAzureFunction creates new instance of AzureFunction

> InheritAzureFunction(overrides [IAzureFunctionOverrides](../iazure_function_overrides)) [*AzureFunction]()

- **overrides**: [IAzureFunctionOverrides](../iazure_function_overrides) - instance thath overrides methods.

#### InheritAzureFunction
InheritAzureFunction creates new instance of AzureFunction

> InheritAzureFunctionWithParams(overrides [IAzureFunctionOverrides](../iazure_function_overrides), name string, description string) [*AzureFunction]()

- **overrides**: [IAzureFunctionOverrides](../iazure_function_overrides) - instance thath overrides methods.
- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))

### Fields

<span class="hide-title-link">

### Actions
The map of registered actions.
> `protected` **Actions**: map[string]http.HandlerFunc

### configPath
The default path to config file.
> **configPath**: string = './config/config.yml'

### Counters
Performance counters.
> **Counters**: [*CompositeCounters](../../../components/count/composite_counters)

### DependencyResolver
Dependencies resolver.
> **DependencyResolver**: [*DependencyResolver](../../../commons/refer/dependency_resolver)

### Tracer
The tracer.
> **Tracer**: [*CompositeTracer](../../../components/trace/composite_tracer)

### Schemas
The map of registred validation schemas.
> **Schemas**: map[string][*Schema](../../../commons/validate/schema)

</span>


### Instance methods

#### Execute
Executes this Azure Function and returns the result.
This method can be overloaded in child classes
if they need to change the default behavior

> (c [*AzureFunction]()) Execute(res http.ResponseWriter, req *http.Request)

- **res**: http.ResponseWriter - context the context parameters (or function arguments)
- **req**: *http.Request - the result of the function execution.

#### GetCommand
Returns command from Azure Function context.
This method can be overloaded in child classes

> (c [*AzureFunction]()) GetCommand(r *http.Request) (string, error)

- **r**: *http.Request - Azure Function context
- **returns**: (string, error) - Returns command from context

#### GetCorrelationId
Returns correlationId from Azure Function context.
This method can be overloaded in child classes

> (c [*AzureFunction]()) GetCorrelationId(r *http.Request) string

- **r**: *http.Request - Azure Function context
- **returns**: string - Returns correlationId from context

#### GetHandler
Return plugin function

> (c [*AzureFunction]()) GetHandler() http.HandlerFunc

- **returns**: http.HandlerFunc - plugin function


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> (c [*AzureFunction]()) Instrument(ctx context.Context, correlationId string, name string) [*InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method's name.
- **returns**: [*InstrumentTiming](../../../rpc/services/instrument_timing) - Timing object to end the time measurement.

#### Open
Opens the component.

> (c [*AzureFunction]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### RegisterAction
Registers an action in this Azure Function.

Note: This method has been deprecated. Use AzureFunctionService instead.

> (c [*AzureFunction]()) RegisterAction(cmd string, schema [*Schema](../../../commons/validate/schema), action http.HandlerFunc)

- **cmd**: string - a action/command name.
- **schema**: [*Schema](../../../commons/validate/schema) - a validation schema to validate received parameters.
- **action**: http.HandlerFunc - an action function that is called when action is invoked.

#### Register
Registers all actions in this Azure Function.

Note: Overloading of this method has been deprecated. Use AzureFunctionService instead.

> (c [*AzureFunction]()) Register()

#### RegisterServices
Registers all Azure Function services in the container.

> (c [*AzureFunction]()) RegisterServices()

#### Run
Runs this Azure Function, loads container configuration,
instantiate components and manage their lifecycle,
makes this function ready to access action calls.

> (c [*AzureFunction]()) Run(ctx context.Context)

- **ctx**: context.Context - operation context.


#### SetReferences
Sets references to dependent components.

> SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```go
type MyAzureFunction struct {
	*containers.AzureFunction
}

func NewMyAzureFunction() *MyAzureFunction {
	c := MyAzureFunction{}
	c.AzureFunction = containers.NewAzureFunctionWithParams("mygroup", "MyGroup Azure Function")

	return &c
}

...

AzureFunction := NewMyAzureFunction()
AzureFunction.Run(ctx)
fmt.Println("MyAzureFunction is started")
```
