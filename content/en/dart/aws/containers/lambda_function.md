---
type: docs
title: "LambdaFunction"
linkTitle: "LambdaFunction"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-aws-dart"
description: >
    Abstract AWS Lambda function that acts as a container to instantiate and run components, 
    and expose them via an external entry point. 
---

**Extends:** [Container](../../../container/containers/container)

### Description
The LambdaFunction class allows you to create an abstract AWS Lambda function that acts as a container to instantiate and run components, and expose them via an external entry point.

**Important points**

- When handling calls the "cmd" parameter determines what action shall be called, while the other parameters are passed to the action itself.

- Container configuration for this Lambda function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:service:lambda:\*:1.0**: (optional) [ILambdaService](../../services/ilambda_service) services to handle action requests
- **\*:service:commandable-lambda:\*:1.0**: (optional) [ILambdaService](../../services/ilambda_service) services to handle action requests

### Constructors
Creates a new instance of this lambda function.

> LambdaFunction([String name, String description])

- **name**: String - (optional) a container name (accessible via [ContextInfo](../../../components/info/context_info)).
- **description**: String - (optional) container description (accessible via [ContextInfo](../../../components/info/context_info)).

### Fields

<span class="hide-title-link">

#### actions
Map containing registered actions.
>  **actions**: Map\<String, Future Function(dynamic)\>

#### configPath
Default path to config file.
>  **configPath**: String = './config/config.yml'

#### counters
Performance counters.
>  **counters**: [CompositeCounters](../../../components/count/composite_counters)

#### dependencyResolver
Dependency resolver.
>  **dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### schemas
Map of registred validation schemas.
>  **schemas**: Map\<String, Schema\>


</span>


### Instance methods

#### act
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
what action shall be called.

- This method shall only be used in testing.

> Future act(params)

- **params**: dynamic - action parameters.
- **returns**: Future - result


#### getHandler
Gets an entry point into this lambda function.

> aws.Handler\<aws.AwsApiGatewayEvent\> getHandler() 

- **returns**: aws.Handler\<aws.AwsApiGatewayEvent\> - incoming event object with invocation parameters.

#### instrument
Gets entry point into this lambda function.

>  [Timing](../../../components/count/timing) instrument(String correlationId, String name)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **name**: String - method name.
- **returns**: [Timing](../../../components/count/timing) - object to end the time measurement.


#### register
Registers all actions in this lambda function.

- Note: Overloading of this method has been deprecated. Use [LambdaService](../../services/lambda_service) instead.

>  void register()


#### registerAction
Registers an action in this lambda function.
 
- Note: This method has been deprecated. Use [LambdaService](../../services/lambda_service) instead.

> void registerAction(String cmd, [Schema](../../../commons/validate/schema) schema, Future Function(dynamic) action)

- **cmd**: String - action/command name.
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: Future Function(dynamic) - action function that is called when the action is invoked.


#### run
Runs this lambda function, loads container configuration,
instantiates components and manages their lifecycle.
Makes this function ready to access action calls.

> Future run()


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```dart
class MyLambdaFunction extends LambdaFunction {
    IMyController _controller ;
    ...
    MyLambdaFunction()
        base('mygroup', 'MyGroup lambda function'){
        dependencyResolver.put(
            'controller',
            Descriptor('mygroup','controller','*','*','1.0')
        );
    }
    void setReferences(IReferences references) {
        base.setReferences(references);
        _controller = dependencyResolver.getRequired<IMyController>('controller');
    }
    void register() {
        registerAction('get_mydata', null, (params, callback) => {
            var correlationId = params.correlation_id;
            var id = params.id;
            _controller.getMyData(correlationId, id, callback);
        });
        ...
    }
}

var lambda = MyLambdaFunction();
await service.run();
print('MyLambdaFunction is started');
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
