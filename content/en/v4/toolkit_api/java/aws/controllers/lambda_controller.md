---
type: docs
title: "LambdaController"
linkTitle: "LambdaController"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-aws-java"
description: >
    Abstract service that receives remove calls via the AWS Lambda protocol.
---

**Implements**: [ILambdaController](../ilambda_controller), [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description
The LambdaController class allows you to create abstract services that receive remove calls via the AWS Lambda protocol.

**Important points**

This service is intended to work inside LambdaFunction container that exploses registered actions externally.


#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.


### Constructors
Creates an instance of this service.

> `public` LambdaController(String name)

- **name**: string - service name to generate action cmd.

### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> `protected` [CompositeCounters](../../../observability/count/composite_counters)  **_counters** = new CompositeCounters();
CompositeCounters _counters = new CompositeCounters();

#### _dependencyResolver
Dependency resolver.
> `protected` DependencyResolver **_dependencyResolver** = new DependencyResolver();

#### _logger
Dependency resolver.
> `protected` [CompositeLogger](../../../observability/log/composite_logger) **_logger** = new CompositeLogger();
CompositeLogger _logger = new CompositeLogger();

#### _tracer
Tracer.
> `protected` [CompositeTracer](../../../observability/trace/composite_tracer) **_tracer** = new CompositeTracer();

</span>


### Instance methods

#### act
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
the action shall be called.

- This method shall only be used in testing.

> `public` Object act(Map<String, Object> params) throws ApplicationException

- **params**: Object - action parameters.
- **returns**: Object - results

#### applyInterceptors
Applies given action to the interseptors

> `protected` Function<Map<String, Object>, ?> applyInterceptors(Function<Map<String, Object>, ?> action)

- **action**: Function<Map<String, Object>, ?> - applied action.
- **returns**: Function<Map<String, Object>, ?> - wrapped interceptors action.

#### applyValidation
Applies a validation according to a given schema.

> `protected` Function<Map<String, Object>, ?> applyValidation([Schema](../../../data/validate/schema) schema, Function<Map<String, Object>, ?> action)
- **schema**: [Schema](../../../data/validate/schema) - validation schema
- **action**: Function<Map<String, Object>, ?> - action
- **returns**: Function<Map<String, Object>, ?> - results

#### close
Closes a component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### generateActionCmd
Adds .cmd to the name of the command.
> `protected` String generateActionCmd(String name)

- **name**: string - name of the command
- **returns**: string - generated command


#### getActions
Gets all the actions supported by the service.
> `public` List<[LambdaAction[]](../lambda_action)> getActions()

- **returns**: [LambdaAction[]](../lambda_action) - array with supported actions.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` [InstrumentTiming](../../../rpc/trace/instrument_timing) instrument([IContext](../../../components/context/icontext) context, String name) 

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string -  method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing)  - InstrumentTiming object to end the time measurement.

#### isOpen
Checks if the component is open.

> `public` boolean isOpen()

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### registerAction
Registers an action in AWS Lambda function.

> `protected` void registerAction(String name, [Schema](../../../data/validate/schema) schema, Function<Map<String, Object>, ?> action)

- **name**: string - action name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **action**: Function<Map<String, Object>, ?> - action function that is called when an operation is invoked.

#### registerActionWithAuth
Registers an action with authorization.

> `protected` void registerActionWithAuth(String name, [Schema](../../../data/validate/schema) schema, AuthorizeFunction<Map<String, Object>, Function<Map<String, Object>, ?>, ?> authorize, Function<Map<String, Object>, ?> action)
                                                                              
- **name**: string - action's name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **authorize**: Function<Map<String, Object>, ?>, ?> - authorization interceptor
- **action**: Function<Map<String, Object>, ?> - action function that is called when an operation is invoked.


#### registerInterceptor
Registers a middleware for actions in AWS Lambda service.

> `protected` void registerInterceptor(AuthorizeFunction<Map<String, Object>, Function<Map<String, Object>, ?>, ?> action)    
     
- **action**: AuthorizeFunction<Map<String, Object>, Function<Map<String, Object>, ?>, ?> - action function that is called when middleware is invoked.


#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException, ConfigException

- **references**: [IReferences](../../../components/refer/ireferences) - references used to locate the component dependencies.

### Abstract methods

#### register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overriden
in child classes.

> `protected` void register()



### Examples
```java
class MyLambdaController extends LambdaController {
   private IMyService _service;
   ...
   public MyLambdaController() {
      super('v1.myservice');
      this._dependencyResolver.put(
          "service",
          new Descriptor("mygroup","controller","*","*","1.0")
      );
   }
   public void setReferences(references: ) {
      super.setReferences(references);
      this._service = this._dependencyResolver.getRequired(IDummyService.class, "service");
   }

   private MyData getData(IContext context, String id) {
        return this._service.getMyData(context, id);
   }

   public void register() {
       this.registerAction("/get_mydata",
                  null,
                  this::getData
         );
       ...
   }
}

var controller = new MyLambdaController();
controller.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

controller.open("123");
```


### See also
- #### [LambdaClient](../../clients/lambda_client)
