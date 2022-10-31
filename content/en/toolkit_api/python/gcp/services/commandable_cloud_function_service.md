---
type: docs
title: "CommandableCloudFunctionService"
linkTitle: "CommandableCloudFunctionService"
gitUrl: "https://github.com/pip-services3-python/pip-services3-gcp-python"
description: >
    Abstract service that receives commands via the Google Function protocol to operations automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable).
---

**Implements**: [CloudFunctionService](../cloud_function_service)

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

> CommandableCloudFunctionService(name: str) 

- **name**: str - service's name.


### Instance methods

#### _get_parameters
Returns body from Google Function request.
This method can be overloaded in child classes

> _get_parameters(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): [Parameters](../../../commons/run/parameters)

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - Google Function request.
- **returns**: [Parameters](../../../commons/run/parameters) - Returns Parameters from request

#### register
Registers all actions in Google Function.
> register()


### Examples

```python
class MyCommandableCloudFunctionService(CommandableCloudFunctionService):
    def __init__(self):
        super().__init__("mydata")
        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup","controller","*","*","1.0")
        )
      
service = MyCommandableCloudFunctionService()

service.set_references(References.from_tuples(
    Descriptor("mygroup","controller","default","default","1.0"), controller
))

service.open("123")

print("The Google Function service is running")
```
