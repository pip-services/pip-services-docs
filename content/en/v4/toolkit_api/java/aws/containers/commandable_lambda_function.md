---
type: docs
title: "CommandableLambdaFunction"
linkTitle: "CommandableLambdaFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-aws-java"
description: >
    Abstract AWS Lambda function that acts as a container to instantiate and run components
    and expose them via an external entry point.
---

**Extends:** [LambdaFunction](../lambda_function)

### Description

The CommandableLambdaFunction class allows you to create AWS Lambda function that acts as a container to instantiate and run components and expose them via an external entry point.

**Important points**

- All actions are automatically generated for commands defined in [ICommandable](../../../rpc/commands/icommandable) components. Each command is exposed as an action defined by the "cmd" parameter.
  
- Container configuration for this Lambda function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.
 
- **Note**: This component has been deprecated. Use [LambdaController](../../controllers/lambda_controller) instead.


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:service:lambda:\*:1.0**: (optional) [ILambdaController](../../controllers/ilambda_controller) services to handle action requests
- **\*:service:commandable-lambda:\*:1.0**: (optional) [ILambdaController](../../controllers/ilambda_controller) services to handle action requests

### Constructors
Creates a new instance of this lambda function.

> `public` CommandableLambdaFunction(String name, String description)

- **name**: string - (optional) container name (accessible via [ContextInfo](../../../components/context/context_info)).
- **description**: string - (optional) container description (accessible via [ContextInfo](../../../components/context/context_info)).

### Instance methods

#### register
Registers all actions in this lambda function.

> `public` void register() throws ReferenceExceptio



### Examples

```java
class MyLambdaFunction extends CommandableLambdaFunction {
    private IMyController _controller;
    ...
    public MyLambdaFunction() {
        super("mygroup", "MyGroup lambda function");
        this._dependencyResolver.put(
            "controller",
            new Descriptor("mygroup","controller","*","*","1.0")
        );
    }
}
    var lambda = new MyLambdaFunction();
    *     
    lambda.run();
```


### See also
- #### [LambdaClient](../../clients/lambda_client)
