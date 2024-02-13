---
type: docs
title: "CommandableCloudFunctionController"
linkTitle: "CommandableCloudFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-gcp-python"
description: >
    Abstract controller that receives commands via the Google Function protocol to operations automatically generated for commands defined in [ICommandable components](../../../rpc/commands/icommandable).
---

**Implements**: [CloudFunctionController](../cloud_function_controller)

### Description
The CommandableCloudFunctionController class allows you to create abstract controllers that receive commands via the Google Function protocols to operations automatically generated for commnads defined in [ICommandable components](../../../rpc/commands/icommandable).

**Important points** 

- Each command is exposed as an invoke method that receives a command's name and parameters.

- Commandable controllers require only 3 lines of code to implement a robust external Google Function-based remote interface.

- This controller is intended to work inside an Google Function container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.

### Constructors

> CommandableCloudFunctionController(name: str) 

- **name**: str - controller's name.


### Instance methods

#### _get_parameters
Returns body from Google Function request.
This method can be overloaded in child classes

> _get_parameters(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): [Parameters](../../../components/exec/parameters)

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - Google Function request.
- **returns**: [Parameters](../../../components/exec/parameters) - Returns Parameters from request

#### register
Registers all actions in Google Function.
> register()


### Examples

```python
class MyCommandableCloudFunctionController(CommandableCloudFunctionController):
    def __init__(self):
        super().__init__("mydata")
        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup","controller","*","*","1.0")
        )
      
controller = MyCommandableCloudFunctionController()

controller.set_references(References.from_tuples(
    Descriptor("mygroup","controller","default","default","1.0"), controller
))

controller.open("123")

print("The Google Function controller is running")
```
