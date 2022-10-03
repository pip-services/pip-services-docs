---
type: docs
title: "CommandableAzureFunction"
linkTitle: "CommandableAzureFunction"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-azure-gox"
description: >
    Abstract Azure Function function that acts as a container to instantiate and run components
    and expose them via an external entry point.
---

### Description
The CommandableAzureFunction allows you to create an abstract Azure Function function that acts as a container to instantiate and run components and expose them via an external entry point.

**Important points**

- All actions are automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable). Each command is exposed as an action defined by the "cmd" parameter.
  
- Container configuration for this Azure Function is stored in *"./config/config.yml"* file. But this path can be overridden by the *CONFIG_PATH* environment variable.
 
- **Note**: This component has been deprecated. Use Azure [FunctionService](../../services/azure_function_service) instead.


#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:service:azure-function:\*:1.0**: (optional) [IAzureFunctionService](../../services/iazure_function_service) services to handle action requests.
- **\*:service:commandable-azure-function:\*:1.0**: (optional) [IAzureFunctionService](../../services/iazure_function_service) services to handle action requests.

### Constructors

#### NewCommandableAzureFunction
Creates a new instance of this Azure Function.

> NewCommandableAzureFunction() [*CommandableAzureFunction]()


#### NewCommandableAzureFunctionWithParams
Creates a new instance of this Azure Function.

> NewCommandableAzureFunctionWithParams(name string, description string) [*CommandableAzureFunction]()

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))


### Instance methods

#### getParametrs
Returns body from Azure Function context.
This method can be overloaded in child classes

> (c [*CommandableAzureFunction]()) GetParameters(req *http.Request) [*Parameters](../../../commons/run/parameters)

- **req**: *http.Request - Azure Function context.
- **returns**: [*Parameters](../../../commons/run/parameters) - Returns Parameters from context

#### Register
Registers all actions in this Azure Function.

> Register()


### Examples

```go
type MyAzureFunction struct {
	*containers.CommandableAzureFunction
	controller IMyController
}

func NewMyAzureFunction() *MyAzureFunction {
	c := MyAzureFunction{}
	c.AzureFunction = containers.NewCommandableAzureFunctionWithParams("mygroup", "MyGroup AzureFunction")

	return &c
}

...

AzureFunction := NewMyAzureFunction()
AzureFunction.Run(ctx)
fmt.Println("MyAzureFunction is started")
```
