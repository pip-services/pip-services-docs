---
type: docs
title: "CommandableLambdaController"
linkTitle: "CommandableLambdaController"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-aws-java"
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

> `public` CommandableLambdaController(String name)

- **name**: string - controller name.


### Instance methods

#### register
Registers all actions in AWS Lambda function.

> `public` void register() throws ReferenceException


### Examples
```java
class MyCommandableLambdaController extends CommandableLambdaController {
   private IMyService _service;

   public MyCommandableLambdaController() {
      super();
      this._dependencyResolver.put(
          "service",
          new Descriptor("mygroup","service","*","*","1.0")
      );
   }
}

var controller = new MyCommandableLambdaController();
controller.configure(ConfigParams.fromTuples(
      "connection.protocol", "http",
      "connection.host", "localhost",
      "connection.port", 8080
 ));

controller.open("123");
```


### See also
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
- #### [LambdaController](../lambda_controller)
