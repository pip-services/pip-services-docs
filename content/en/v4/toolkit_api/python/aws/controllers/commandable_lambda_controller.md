---
type: docs
title: "CommandableLambdaController"
linkTitle: "CommandableLambdaController"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-aws-python"
description: >
    Abstract controller that receives commands via the AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable components](../../../rpc/commands/icommandable). Each command is exposed as an invoke method that receives a command's name and parameters.
---

**Implements:** [LambdaController](../lambda_controller)

### Description
The CommandableLambdaController allows you to create abstract controllers that receive commands via the AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable components](../../../rpc/commands/icommandable). Each command is exposed as an invoke method that receives a command's name and parameters.

**Important points**

- This controller is intended to work inside a LambdaFunction container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.

### Constructors
Creates a new instance of the controller.

> CommandableLambdaController(name: str)

- **name**: str - controller name.


### Instance methods

#### register
Registers all actions in AWS Lambda function.

> register()


### Examples

```python
class MyCommandableLambdaController(CommandableLambdaController):
    def __init__(self):
        super().__init__()
        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup","controller","*","*","1.0")
      )


controller = MyCommandableLambdaController()
controller.set_references(References.from_tuples(
    Descriptor("mygroup","controller","default","default","1.0"), controller
))

controller.open("123")
print("The AWS Lambda controller is running")
```

### See also
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
- #### [LambdaController](../lambda_controller)
