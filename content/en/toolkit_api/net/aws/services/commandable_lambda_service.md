---
type: docs
title: "CommandableLambdaService"
linkTitle: "CommandableLambdaService"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
description: >
    Abstract service that receives commands via the AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable). Each command is exposed as an invoke method that receives a command's name and parameters.
---

**Extends:** [LambdaService](../lambda_service)

### Description
The CommandableLambdaService allows you to create abstract services that receive commands via the AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable). Each command is exposed as an invoke method that receives a command's name and parameters.

**Important points**

- This service is intended to work inside a LambdaFunction container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.

### Constructors
Creates a new instance of the service.

> `public` CommandableLambdaService(string name)

- **name**: string - service name.

Creates a new instance of the service.

> `public` CommandableLambdaService()


### Instance methods

#### Register
Registers all actions in AWS Lambda function.

> `public override` Register(): void


### Examples

```cs
class MyCommandableLambdaService: CommandableLambdaService {
    public MyCommandableLambdaService()
    {
        this._dependencyResolver.Put(
            "controller",
            new Descriptor("mygroup", "controller", "*", "*", "1.0")
        );
    }
}
/// ...

var service = new MyCommandableLambdaService();

service.SetReferences(References.fromTuples(
   new Descriptor("mygroup", "controller", "default", "default", "1.0"), controller
));

await service.OpenAsync("123");

Console.WriteLine("The AWS Lambda service is running");
```

### See also
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
- #### [LambdaService](../lambda_service)
