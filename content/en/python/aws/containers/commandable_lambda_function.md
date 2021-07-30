---
type: docs
title: "CommandableLambdaFunction"
linkTitle: "CommandableLambdaFunction"
gitUrl: "https://github.com/pip-services3-python/pip-services3-aws-python"
description: >
    Abstract AWS Lambda function that acts as a container to instantiate and run components
    and expose them via an external entry point.
---

**Implements:** [LambdaFunction](../lambda_function)

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

> CommandableLambdaFunction(name: str, description: str = None)

- **name**: str - (optional) container name (accessible via [ContextInfo](../../../components/info/context_info)).
- **description**: str - (optional) container description (accessible via [ContextInfo](../../../components/info/context_info)).

### Instance methods

#### _register
Registers all actions in this lambda function.

> _register()



### Examples

```python
class MyLambdaFunction(CommandableLambdaFunction):
    ...
    def __init__()
        super().__init__("mygroup", "MyGroup lambda function");
        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup","controller","*","*","1.0")
        )
        self.__controller: IMyController = None
        
lambda = MyLambdaFunction()

service.run()
print("MyLambdaFunction is started")
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
