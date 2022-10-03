---
type: docs
title: "CloudFunction"
linkTitle: "CloudFunction"
gitUrl: "https://github.com/pip-services3-python/pip-services3-gcp-nodex"
description: >
    Abstract Google Function that acts as a container to instantiate and run components and expose them via an external entry point. 
---

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

#### NewCloudFunctionWithParams
Creates a new instance of this Google Function.

> NewCloudFunctionWithParams(name string, description string) [*CloudFunction]()

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))

#### NewCloudFunction
Creates a new instance of this Google Function function.
> NewCloudFunction() [*CloudFunction]()

#### InheritCloudFunction
InheritCloudFunction creates new instance of CloudFunction
> InheritCloudFunction(overrides [ICloudFunctionOverrides](../icloud_function_overrides)) [*CloudFunction]()

- **overrides**: [ICloudFunctionOverrides](../icloud_function_overrides) - instance with override methods.

#### InheritCloudFunctionWithParams
InheritCloudFunction creates new instance of CloudFunction

> InheritCloudFunctionWithParams(overrides [ICloudFunctionOverrides](../icloud_function_overrides), name string, description string) [*CloudFunction]()

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))

### Fields

<span class="hide-title-link">

### Actions
The map of registered actions.
> **Actions**: map[string]http.HandlerFunc

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
Executes this Google Function and returns the result.
This method can be overloaded in child classes
if they need to change the default behavior

> (c [*CloudFunction]()) Execute(res http.ResponseWriter, req *http.Request)

- **req**: http.ResponseWriter - the request object (with function arguments)
- **res**: *http.Request - the result of the function execution.

#### GetCommand
Returns command from Google Function request.
This method can be overloaded in child classes

> (c [*CloudFunction]()) GetCommand(r *http.Request) (string, error) 

- **r**: *http.Request - Google Function request
- **returns**: (string, error)  - Returns command from req

#### GetCorrelationId
Returns correlationId from Googel Function request.
This method can be overloaded in child classes

> (c [*CloudFunction]()) GetCorrelationId(r *http.Request) string

- **r**: *http.Request - Google Function request
- **returns**: string - Returns correlationId from req

#### GetHandler
Return plugin function

> (c [*CloudFunction]()) GetHandler() http.HandlerFunc

- **returns**: http.HandlerFunc - request handler function.

#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> (c [*CloudFunction]()) Instrument(ctx context.Context, correlationId string, name string) [*InstrumentTiming](../../../rpc/services/instrument_timing)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method's name.
- **returns**: [*InstrumentTiming](../../../rpc/services/instrument_timing) - Timing object to end the time measurement.

#### Open
Opens the component.

> (c [*CloudFunction]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - open error. 

#### RegisterAction
Registers an action in this Google Function.

Note: This method has been deprecated. Use CloudFunctionService instead.

> (c [*CloudFunction]()) RegisterAction(cmd string, schema [*Schema](../../../commons/validate/schema), action http.HandlerFunc)

- **cmd**: str - a action/command name.
- **schema**: [*Schema](../../../commons/validate/schema) - a validation schema to validate received parameters.
- **action**: http.HandlerFunc - an action function that is called when action is invoked.

#### Register
Registers all actions in this Googel Function.

Note: Overloading of this method has been deprecated. Use GoogelFunctionService instead.

> Register()

#### RegisterServices
Registers all Google Function services in the container.

> (c [*CloudFunction]()) RegisterServices()

#### Run
Runs this Google Function, loads container configuration,
instantiate components and manage their lifecycle,
makes this function ready to access action calls.

> (c [*CloudFunction]()) Run(ctx context.Context)

- **ctx**: context.Context - operation context.

#### SetReferences
Sets references to dependent components.

> (c [*CloudFunction]()) SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```go
type MyCloudFunction struct {
	*containers.CloudFunction
}

func NewMyCloudFunction() *MyCloudFunction {
	c := MyCloudFunction{}
	c.CloudFunction = containers.NewCloudFunctionWithParams("mygroup", "MyGroup Google Function")

	return &c
}

...

cloudFunction := NewMyCloudFunction()
cloudFunction.Run(ctx)
fmt.Println("MyCloudFunction is started")
```
