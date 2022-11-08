---
type: docs
title: "CommandableLambdaFunction"
linkTitle: "CommandableLambdaFunction"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
description: >
    Abstract AWS Lambda function that acts as a container to instantiate and run components
    and expose them via an external entry point.
---

**Extends:** [LambdaFunction](../lambda_function)

### Description

The CommandableLambdaFunction class allows you to create AWS Lambda function that acts as a container to instantiate and run components and expose them via an external entry point.

**Important points**

- All actions are automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable). Each command is exposed as an action defined by the "cmd" parameter.
  
- Container configuration for this Lambda function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.
 
- **Note**: This component has been deprecated. Use [LambdaService](../../services/lambda_service) instead.


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:service:lambda:\*:1.0**: (optional) [ILambdaService](../../services/ilambda_service) services to handle action requests
- **\*:service:commandable-lambda:\*:1.0**: (optional) [ILambdaService](../../services/ilambda_service) services to handle action requests

### Constructors
Creates a new instance of this lambda function.

> `public` CommandableLambdaFunction(string name, string description)

- **name**: string - (optional) container name (accessible via [ContextInfo](../../../components/info/context_info)).
- **description**: string - (optional) container description (accessible via [ContextInfo](../../../components/info/context_info)).

### Instance methods

#### Register
Registers all actions in this lambda function.

> `public` void Register()



### Examples

```cs
class MyLambdaFunction: CommandableLambdaFunction {
    private IMyController _controller;
    ...
    public MyLambdaFunction() : base("mygroup", "MyGroup lambda function")
    {
        this._dependencyResolver.Put(
            "controller",
            new Descriptor("mygroup", "controller", "*", "*", "1.0")
        );
    }
}
var lambda = new MyLambdaFunction();

await service.RunAsync();
Console.WriteLine("MyLambdaFunction is started");
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
