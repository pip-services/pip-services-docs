---
type: docs
title: "CommandableCloudFunction"
linkTitle: "CommandableCloudFunction"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-gcp-dotnet"
description: >
    Abstract Google Function function that acts as a container to instantiate and run components
    and expose them via an external entry point.
---

**Extends**: [CloudFunction](../cloud_function)

### Description
The CommandableCloudFunction allows you to create an abstract Google Function function that acts as a container to instantiate and run components and expose them via an external entry point.

**Important points**

- All actions are automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable). Each command is exposed as an action defined by the "cmd" parameter.
  
- Container configuration for this Google Function is stored in *"./config/config.yml"* file. But this path can be overridden by the *CONFIG_PATH* environment variable.
 
- **Note**: This component has been deprecated. Use Google [FunctionService](../../services/cloud_function_service) instead.


#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:service:gcp-function:\*:1.0**: (optional) [ICloudFunctionService](../../services/icloud_function_service) services to handle action requests.
- **\*:service:commandable-gcp-function:\*:1.0**: (optional) [ICloudFunctionService](../../services/icloud_function_service) services to handle action requests.

### Constructors
Creates a new instance of this Google Function.

> `public` CommandableCloudFunction(string name, string description = null)

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))

Creates a new instance of this Google Function.

> `public` CommandableCloudFunction()


### Instance methods

#### GetParameters
Returns body from Google Function request.
This method can be overloaded in child classes

> `protected` Task\<[Parameters](../../../commons/run/parameters)\> GetParameters(HttpContext context)

- **context**: HttpContext - Google Function request.
- **returns**: [Parameters](../../../commons/run/parameters) - Returns Parameters from request

#### Register
Registers all actions in this Google Function.

> `protected` void Register()


### Examples

```cs
class MyCloudFunction : CommandableCloudFunction
{
    private IMyController _controller;
    ...
    public MyCloudFunction() : base("mygroup", "MyGroup CloudFunction")
    {

        this._dependencyResolver.Put(
            "controller",
            new Descriptor("mygroup", "controller", "*", "*", "1.0")
        );
    }
}

...

var cloudFunction = new MyCloudFunction();

await cloudFunction.RunAsync();
Console.WriteLine("MyCloudFunction is started");
```
