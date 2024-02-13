---
type: docs
title: "AzureFunction"
linkTitle: "AzureFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-azure-go"
description: >
    Abstract Azure Function that acts as a container to instantiate and run components and expose them via an external entry point. 
---

### Description
The AzureFunction class allows you to create an Abstract Azure Function that acts as a container to instantiate and run components and expose them via an external entry point. 

Importan points

- When handling calls, the "cmd" parameter determines the action that shall be called, while the other parameters are passed to the action itself.  

- The container configuration for this Azure Function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.

#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:service:azure-function:\*:1.0**: (optional) [IAzureFunctionController](../../controllers/iazure_function_controller) services to handle action requests.
- **\*:service:commandable-azure-function:\*:1.0**: (optional) [IAzureFunctionController](../../services/iazure_function_controller) services to handle action requests.

### Constructors

#### NewAzureFunctionWithParams
Creates a new instance of this Azure Function.

> NewAzureFunctionWithParams(name string, description string) [*AzureFunction]()

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/context/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/context/context_info))

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
- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/context/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/context/context_info))

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
> **Counters**: [*CompositeCounters](../../../observability/count/composite_counters)

### DependencyResolver
Dependencies resolver.
> **DependencyResolver**: [*DependencyResolver](../../../components/refer/dependency_resolver)

### Tracer
The tracer.
> **Tracer**: [*CompositeTracer](../../../observability/trace/composite_tracer)

### Schemas
The map of registred validation schemas.
> **Schemas**: map[string][*Schema](../../../data/validate/schema)

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

#### GetTraceId
Returns traceId from Azure Function context.
This method can be overloaded in child classes

> (c [*AzureFunction]()) GetTraceId(r *http.Request) string

- **r**: *http.Request - Azure Function context
- **returns**: string - Returns traceId from context

#### GetHandler
Return plugin function

> (c [*AzureFunction]()) GetHandler() http.HandlerFunc

- **returns**: http.HandlerFunc - plugin function


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> (c [*AzureFunction]()) Instrument(ctx context.Context, context [IContext](../../../components/context/icontext), name string) [*InstrumentTiming](../../../rpc/trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method's name.
- **returns**: [*InstrumentTiming](../../../rpc/trace/instrument_timing) - Timing object to end the time measurement.

#### Open
Opens the component.

> (c [*AzureFunction]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### RegisterAction
Registers an action in this Azure Function.

Note: This method has been deprecated. Use AzureFunctionService instead.

> (c [*AzureFunction]()) RegisterAction(cmd string, schema [*Schema](../../../components/refer/ireferenceable), action http.HandlerFunc)

- **cmd**: string - a action/command name.
- **schema**: [*Schema](../../../components/refer/ireferenceable) - a validation schema to validate received parameters.
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

> SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferenceable))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferenceable) - references to locate the component's dependencies.


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


