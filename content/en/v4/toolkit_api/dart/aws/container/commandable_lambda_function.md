---
type: docs
title: "CommandableLambdaFunction"
linkTitle: "CommandableLambdaFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-aws-dart"
description: >
    Abstract AWS Lambda function that acts as a container to instantiate and run components
    and expose them via an external entry point.
---

**Extends:** [LambdaFunction](../lambda_function)

### Description

The CommandableLambdaFunction class allows you to create AWS Lambda function that acts as a container to instantiate and run components and expose them via an external entry point.

**Important points**

- All actions are automatically generated for commands defined in [ICommandable components](../../../rpc/commands/icommandable). Each command is exposed as an action defined by the "cmd" parameter.
  
- Container configuration for this Lambda function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.
 
- **Note**: This component has been deprecated. Use [LambdaController](../../controllers/lambda_controller) instead.


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:controller:lambda:\*:1.0**: (optional) [ILambdaController](../../controllers/ilambda_controller) controllers to handle action requests
- **\*:controleler:commandable-lambda:\*:1.0**: (optional) [ILambdaController](../../controllers/ilambda_controller) services to handle action requests

### Constructors
Creates a new instance of this lambda function.

> CommandableLambdaFunction(String name, [String description])

- **name**: String - (optional) container name (accessible via [ContextInfo](../../../components/context/context_info)).
- **description**: String - (optional) container description (accessible via [ContextInfo](../../../components/context/context_info)).

### Instance methods

#### register
Registers all actions in this lambda function.

`@override`
> void register()



### Examples

```dart
class MyLambdaFunction extends CommandableLambdaFunction {
    private _controller: IMyController;
    ...
    public constructor() {
        base("mygroup", "MyGroup lambda function");
        this._dependencyResolver.put(
            "controller",
            new Descriptor("mygroup","controller","*","*","1.0")
        );
    }
}

var lambda = new MyLambdaFunction();
service.run((err) => {
    console.log("MyLambdaFunction is started");
});
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
