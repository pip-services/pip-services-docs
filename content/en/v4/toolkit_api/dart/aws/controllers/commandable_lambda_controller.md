---
type: docs
title: "CommandableLambdaController"
linkTitle: "CommandableLambdaController"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-aws-dart"
description: >
    Abstract service that receives commands via the AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable](../../../rpc/commands/icommandable) components. Each command is exposed as an invoke method that receives a command's name and parameters.
---

**Extends:** [LambdaController](../lambda_controller)

### Description
The CommandableLambdaController allows you to create abstract services that receive commands via the AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable](../../../rpc/commands/icommandable) components. Each command is exposed as an invoke method that receives a command's name and parameters.

**Important points**

- This service is intended to work inside a LambdaFunction container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.

### Constructors
Creates a new instance of the service.

> CommandableLambdaController(String? name) : super(name)

- **name**: string - service name.


### Instance methods

#### register
Registers all actions in AWS Lambda function.

> void register()


### Examples

```dart
 class MyCommandableLambdaController extends CommandableLambdaController {
        MyCommandableLambdaController(): super() {
           _dependencyResolver.put(
               "service",
               new Descriptor("mygroup","service","*","*","1.0")
           );
        }
     }

     let controller = new MyCommandableLambdaController();
     controller.setReferences(References.fromTuples(
        Descriptor("mygroup","service","default","default","1.0"), controller
     ));

     await controller.open(Context.fromTraceId("123"));
     console.log("The AWS Lambda controller is running");
```

### See also
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
- #### [LambdaController](../lambda_controller)
