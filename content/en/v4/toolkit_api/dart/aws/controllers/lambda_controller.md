---
type: docs
title: "LambdaController"
linkTitle: "LambdaController"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-aws-dart"
description: >
    Abstract controller that receives remove calls via the AWS Lambda protocol.
---

**Implements**: [ILambdaController](../ilambda_controller), [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description
The LambdaController class allows you to create abstract controllers that receive remove calls via the AWS Lambda protocol.

**Important points**

This controller is intended to work inside LambdaFunction container that exploses registered actions externally.


#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.


### Constructors
Creates an instance of this controller.

> LambdaController(String? name)

- **name**: string - controller name to generate action cmd.

### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> `final` **counters** = [CompositeCounters](../../../observability/count/composite_counters)

#### _dependencyResolver
Dependency resolver.
> `final` **_dependencyResolver** = [DependencyResolver](../../../components/refer/dependency_resolver)

#### _logger
Dependency resolver.
> `final` **logger** = [CompositeLogger](../../../observability/log/composite_logger)

#### _tracer
Tracer.
> `final` **_tracer** = [CompositeTracer](../../../observability/trace/composite_tracer)

</span>


### Instance methods

#### act
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
the action shall be called.

- This method shall only be used in testing.

> Future act(params) async

- **params**: any - action parameters.
- **returns**: Future - results

#### applyInterceptors
Applies given action to the interseptors

> dynamic applyInterceptors(dynamic action)

- **action**: dynamic - applied action.
- **returns**: dynamic - wrapped interceptors action.

#### applyValidation
Applies a validation according to a given schema.

> Future applyValidation(Schema? schema, Future Function(Map<String, dynamic>) action) async

- **schema**: [Schema](../../../data/validate/schema) - validation schema
- **action**: Future Function(Map<String, dynamic>) - action
- **returns**: Future - results

#### close
Closes a component and frees used resources.

> Future close(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing configuration parameters.

> void configure(ConfigParams config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### generateActionCmd
Adds .cmd to the name of the command.
> String? generateActionCmd(String? name)

- **name**: string - name of the command
- **returns**: string - generated command


#### getActions
Gets all the actions supported by the controller.
> List<LambdaAction> getActions() 

- **returns**: [List<LambdaAction>](../lambda_action) - array with supported actions.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> [InstrumentTiming](../../../rpc/trace/instrument_timing) instrument(IContext? context, String name)  

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string -  method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing)  - InstrumentTiming object to end the time measurement.

#### isOpen
Checks if the component is open.

> bool isOpen()

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> Future open(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### registerAction
Registers an action in AWS Lambda function.

> Future<void> registerActionWithAuth(String name, Schema schema, Future Function(dynamic call, Future Function(Map<String, dynamic>) next) authorize, Future Function(Map<String, dynamic>) action) async

- **name**: string - action name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **authorize**: Future Function(Map<String, dynamic>) - authorization interceptor
- **action**: Future Function(Map<String, dynamic>) - action function that is called when an operation is invoked.

#### registerActionWithAuth
Registers an action with authorization.

> Future<void> registerActionWithAuth(String name, Schema schema, Future Function(dynamic call, Future Function(Map<String, dynamic>) next) authorize, Future Function(Map<String, dynamic>) action) async

- **name**: string - action's name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **authorize**: Future Function(dynamic call, Future Function(Map<String, dynamic>) - authorization interceptor
- **action**: Future Function(Map<String, dynamic>) - action function that is called when an operation is invoked.


#### registerInterceptor
Registers a middleware for actions in AWS Lambda service.

> void registerInterceptor(Future Function(dynamic params, Future Function(dynamic) next) action)   
     
- **action**: Future Function(dynamic params, Future Function(dynamic) next) - action function that is called when middleware is invoked.


#### setReferences
Sets references to dependent components.

> void setReferences(IReferences references)

- **references**: [IReferences](../../../components/refer/ireferences) - references used to locate the component dependencies.

### Abstract methods

#### register
Registers all controller routes in an HTTP endpoint.

This method is called by the controller and must be overriden
in child classes.

> `protected abstract` register(): void



### Examples

```dart
 class MyLambdaController extends LambdaController {
        IMyController _controller;
        ...

        MyLambdaController(): super('v1.mycontroller') {
           dependencyResolver.put(
               'controller',
               Descriptor('mygroup','controller','*','*','1.0')
           );
        }

        void setReferences(IReferences references) {
           super.setReferences(references);
           _controller = this._dependencyResolver.getRequired<IMyController>("controller");
        }

         void register() {
         registerAction(
           'get_mydata',
           ObjectSchema(true).withOptionalProperty('id', TypeCode.String),
           getMyData);
         }

         Future getMyData(params) async {
           return await _controller.getMyData(params['trace_id'],
             params['id']),
         }
     }

     ...

     let controller = new MyLambdaController();
     controller.configure(ConfigParams.fromTuples([
         "connection.protocol", "http",
         "connection.host", "localhost",
         "connection.port", 8080
     ]));
     controller.setReferences(References.fromTuples(
        new Descriptor("mygroup","controller","default","default","1.0"), controller
     ));

     controller.open(Context.fromTraceId("123"));
     console.log("The AWS controller is running on port 8080");
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
