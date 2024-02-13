---
type: docs
title: "LambdaFunction"
linkTitle: "LambdaFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-aws-dart"
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
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:service:lambda:\*:1.0**: (optional) [ILambdaService](../../controllers/ilambda_service) services to handle action requests
- **\*:service:commandable-lambda:\*:1.0**: (optional) [ILambdaService](../../controllers/ilambda_service) services to handle action requests

### Constructors
Creates a new instance of this lambda function.

> LambdaFunction([String name, String description])

- **name**: String - (optional) a container name (accessible via [ContextInfo](../../../components/context/context_info)).
- **description**: String - (optional) container description (accessible via [ContextInfo](../../../components/context/context_info)).

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
>  **counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### dependencyResolver
Dependency resolver.
>  **dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

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

>  [CounterTiming](../../../observability/count/counter_timing) instrument(IContext context, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: String - method name.
- **returns**: [CounterTiming](../../../observability/count/counter_timing) - object to end the time measurement.


#### register
Registers all actions in this lambda function.

- Note: Overloading of this method has been deprecated. Use [LambdaService](../../controllers/lambda_controller) instead.

>  void register()


#### registerAction
Registers an action in this lambda function.
 
- Note: This method has been deprecated. Use [LambdaService](../../services/lambda_service) instead.

> void registerAction(String cmd, [Schema](../../../data/validate/schema) schema, Future Function(dynamic) action)

- **cmd**: String - action/command name.
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **action**: Future Function(dynamic) - action function that is called when the action is invoked.


#### run
Runs this lambda function, loads container configuration,
instantiates components and manages their lifecycle.
Makes this function ready to access action calls.

> Future run()


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



### Examples

```dart
     class MyLambdaFunction extends LambdaFunction {
         IMyController _service;
         ...
         MyLambdaFunction()
             super('mygroup', 'MyGroup lambda function'){
             dependencyResolver.put(
                 'service',
                 Descriptor('mygroup','service','*','*','1.0')
             );
         }

         void setReferences(IReferences references) {
             super.setReferences(references);
             _service = dependencyResolver.getRequired<IMyController>('service');
         }

         Future getMyData(params) async {
           return await _service.getMyData(params['trace_id'],
             params['id']),
         }

         void register() {
         registerAction(
           'get_mydata',
           ObjectSchema(true).withOptionalProperty('id', TypeCode.String),
           getMyData);
         }
             ...
     }

     var lambda = MyLambdaFunction();

     await lambda.run();
     print('MyLambdaFunction is started');

     var result = await lambda.act({'cmd': 'get_dummies'});
     print(result);
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
