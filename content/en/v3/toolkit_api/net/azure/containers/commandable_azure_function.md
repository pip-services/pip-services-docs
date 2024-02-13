---
type: docs
title: "CommandableAzureFunction"
linkTitle: "CommandableAzureFunction"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-azure-dotnet"
description: >
    Abstract Azure Function function that acts as a container to instantiate and run components
    and expose them via an external entry point.
---

**Extends**: [AzureFunction](../azure_function)

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
Creates a new instance of this Azure Function.

> `public` CommandableAzureFunction(string name, string description)

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))


### Instance methods

#### GetParameters
Returns body from Azure Function context.
This method can be overloaded in child classes

> `protected` [Parameters](../../../commons/run/parameters) GetParameters(HttpRequest context)

- **context**: HttpRequest - Azure Function context.
- **returns**: [Parameters](../../../commons/run/parameters) - Returns Parameters from context

#### Register
Registers all actions in this Azure Function.

> `protected override` void Register()


### Examples

```cs
class MyAzureFunction : CommandableAzureFunction
{
    private IMyController _controller;
    ...
    public MyAzureFunction() : base("mygroup", "MyGroup AzureFunction")
    {

        this._dependencyResolver.Put(
            "controller",
            new Descriptor("mygroup", "controller", "*", "*", "1.0")
        );
    }
}

...

var AzureFunction = new MyAzureFunction();

await AzureFunction.RunAsync();
Console.WriteLine("MyAzureFunction is started");

```
