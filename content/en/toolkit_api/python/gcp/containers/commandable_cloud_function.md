---
type: docs
title: "CommandableCloudFunction"
linkTitle: "CommandableCloudFunction"
gitUrl: "https://github.com/pip-services3-python/pip-services3-gcp-python"
description: >
    Abstract Google Function function that acts as a container to instantiate and run components
    and expose them via an external entry point.
---

**Implements**: [CloudFunction](../cloud_function)

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

> CommandableCloudFunction(name: str = None, description: str = None)

- **name**: str - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: str - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))


### Instance methods

#### _get_parameters
Returns body from Google Function request.
This method can be overloaded in child classes

> _get_parameters(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): [Parameters](../../../commons/run/parameters)

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - Google Function request.
- **returns**: [Parameters](../../../commons/run/parameters) - Returns Parameters from request

#### register
Registers all actions in this Google Function.

> register()


### Examples

```python
class MyCloudFunction(CommandableCloudFunction):
    def __init__(self):
        super().__init__("mygroup", "MyGroup CloudFunction")
        self.__dependency_resolver.put("controller", Descriptor("mygroup","controller","*","*","1.0"))

cloud_function = MyCloudFunction()

service.run()
print("MyCloudFunction is started")
```
