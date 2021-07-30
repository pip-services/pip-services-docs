---
type: docs
title: "CommandableLambdaService"
linkTitle: "CommandableLambdaService"
gitUrl: "https://github.com/pip-services3-python/pip-services3-aws-python"
description: >
    Abstract service that receives commands via the AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable). Each command is exposed as an invoke method that receives a command's name and parameters.
---

**Implements:** [LambdaService](../lambda_service)

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

> CommandableLambdaService(name: str)

- **name**: str - service name.


### Instance methods

#### _register
Registers all actions in AWS Lambda function.

> _register()


### Examples

```python
class MyCommandableLambdaService(CommandableLambdaService):
    def __init__(self):
        super().__init__()
        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup","controller","*","*","1.0")
      )


service = MyCommandableLambdaService()
service.set_references(References.from_tuples(
    Descriptor("mygroup","controller","default","default","1.0"), controller
))

service.open("123")
print("The AWS Lambda service is running")
```

### See also
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
- #### [LambdaService](../lambda_service)
