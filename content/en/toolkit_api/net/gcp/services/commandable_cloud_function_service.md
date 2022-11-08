---
type: docs
title: "CommandableCloudFunctionService"
linkTitle: "CommandableCloudFunctionService"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-gcp-dotnet"
description: >
    Abstract service that receives commands via the Google Function protocol to operations automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable).
---

**Extends**: [CloudFunctionService](../cloud_function_service)

### Description
The CommandableCloudFunctionService class allows you to create abstract services that receive commands via the Google Function protocols to operations automatically generated for commnads defined in [ICommandable components](../../../commons/commands/icommandable).

**Important points** 

- Each command is exposed as an invoke method that receives a command's name and parameters.

- Commandable services require only 3 lines of code to implement a robust external Google Function-based remote interface.

- This service is intended to work inside an Google Function container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.

### Constructors

Creates a new instance of the service.

> `public` CommandableCloudFunctionService(string name) 

- **name**: string - service's name.

Creates a new instance of the service.

> `public` CommandableCloudFunctionService()

### Instance methods

#### getParametrs
Returns body from Google Function request.
This method can be overloaded in child classes

> `protected` Task<[Parameters](../../../commons/run/parameters)> GetParametrs(HttpContext context)

- **context**: HttpContext - Google Function request.
- **returns**: [Parameters](../../../commons/run/parameters) - Returns Parameters from request

#### Register
Registers all actions in Google Function.
> `protected` void Register()


### Examples

```cs
class MyCommandableCloudFunctionService : CommandableCloudFunctionService
{
    private IMyController _controller;
    // ...
    public MyCommandableCloudFunctionService() : base()
    {
        this._dependencyResolver.Put(
            "controller",
            new Descriptor("mygroup", "controller", "*", "*", "1.0")
        );
    }
}

/// ...

var service = new MyCommandableCloudFunctionService();
service.SetReferences(References.FromTuples(
   new Descriptor("mygroup", "controller", "default", "default", "1.0"), controller
));
await service.OpenAsync("123");

Console.WriteLine("The Google Function service is running");
```
