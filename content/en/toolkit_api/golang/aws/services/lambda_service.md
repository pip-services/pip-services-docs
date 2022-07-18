---
type: docs
title: "LambdaService"
linkTitle: "LambdaService"
gitUrl: "https://github.com/pip-services3-go/pip-services3-aws-go"
description: >
    Abstract service that receives remote calls via the AWS Lambda protocol.
---

### Description
The LambdaService class allows you to create abstract services that receive remote calls via the AWS Lambda protocol.

**Important points**

This service is intended to work inside a LambdaFunction container that exposes registered actions externally.


#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.


### Constructors

#### InheritLambdaService
Creates an instance of this service.

> InheritLambdaService(overrides ILambdaServiceOverrides, name string) [*LambdaService]()

- **overrides**: ILambdaServiceOverrides - Lambda service overrides
- **name**: string - service name to generate action cmd.

### Fields

<span class="hide-title-link">

#### Counters
Performance counters.
> **Counters**: [*CompositeCounters](../../../components/count/composite_counters)

#### DependencyResolver
Dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../commons/refer/dependency_resolver)

#### Logger
Logger.
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

#### Tracer
Tracer.
> **Tracer**: [*CompositeTracer](../../../components/trace/composite_tracer)

</span>


### Methods

#### Act
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
the action shall be called.

- This method shall only be used in testing.

> (c [*LambdaService]()) Act(params map[string]interface{}) (interface{}, error)

- **params**: map[string]interface{} - action parameters.
- **returns**: (interface{}, error) - results

#### ApplyInterceptors
Applies given action to the interceptors

> (c [*LambdaService]()) ApplyInterceptors(action func(map[string]interface{}) (interface{}, error)) func(map[string]interface{}) (interface{}, error)

- **action**: func(map[string]interface{}) (interface{}, error) - applied action.
- **returns**: (interface{}, error) - wrapped interceptors action.

#### ApplyValidation
Applies a validation according to a given schema.

> (c [*LambdaService]()) ApplyValidation(schema [*Schema](../../../commons/validate/schema), action func(params map[string]interface{}) (interface{}, error)) func(map[string]interface{}) (interface{}, error)

- **schema**: [*Schema](../../../commons/validate/schema) - validation schema.
- **action**: func(params map[string]interface{}) (interface{}, error) - action.
- **returns**: func(map[string]interface{}) (interface{}, error) - results.

#### Close
Closes a component and frees used resources.

> (c [*LambdaService]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occured.


#### Configure
Configures a component by passing configuration parameters.

> (c [*LambdaService]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GenerateActionCmd
Adds .cmd to the name of the command.
> (c [*LambdaService]()) GenerateActionCmd(name string) string 

- **name**: string - name of the command
- **returns**: string - generated command


#### GetActions
Gets all the actions supported by the service.
> (c [*LambdaService]()) GetActions() [[]*LambdaAction](../lambda_action)

- **returns**: [[]*LambdaAction](../lambda_action) - array with supported actions.


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> (c [*LambdaService]()) Instrument(correlationId string, name string) [*InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method name.
- **returns**: [*InstrumentTiming](../../../rpc/services/instrument_timing) - InstrumentTiming object to end the time measurement.

#### IsOpen
Checks if the component is open.

> (c [*LambdaService]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> (c [*LambdaService]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil no errors occured.

#### Register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overriden
in child classes.

> (c [*LambdaService]()) Register()

#### RegisterAction
Registers an action in AWS Lambda function.

> (c [*LambdaService]()) RegisterAction(name string, schema [*Schema](../../../commons/validate/schema), action func(params map[string]interface{}) (interface{}, error))

- **name**: string - action name
- **schema**: [*Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: func(params map[string]interface{}) (interface{}, error) - action function that is called when an operation is invoked.

#### RegisterActionWithAuth
Registers an action with authorization.

> (c [*LambdaService]()) RegisterActionWithAuth(name string, schema [*Schema](../../../commons/validate/schema), authorize func(params map[string]interface{}, next func(map[string]interface{}) (interface{}, error)) (interface{}, error), action func(params map[string]interface{}) (interface{}, error))

- **name**: string - action's name
- **schema**: [*Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **authorize**: func(params map[string]interface{}, next func(map[string]interface{}) (interface{}, error)) (interface{}, error) - authorization interceptor

- **action**: func(params map[string]interface{}) (interface{}, error) - action function that is called when an operation is invoked.


#### RegisterInterceptor
Registers a middleware for actions in AWS Lambda service.

> (c [*LambdaService]()) RegisterInterceptor(action func(params map[string]interface{}, next func(params map[string]interface{}) (interface{}, error)) (interface{}, error))   
     
- **action**: func(params map[string]interface{}, next func(params map[string]interface{}) (interface{}, error)) (interface{}, error) - action function that is called when middleware is invoked.


#### SetReferences
Sets references to dependent components.

> (c [*LambdaService]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references used to locate the component dependencies.


### Examples

```go
struct MyLambdaService struct  {
   LambdaService
   controller IMyController
}
    ...

func NewMyLambdaService()* MyLambdaService {
   c:= &MyLambdaService{}
   c.LambdaService = NewLambdaService("v1.myservice")
   c.DependencyResolver.Put(
       "controller",
       cref.NewDescriptor("mygroup","controller","*","*","1.0")
   )
   return c
}

func (c * LambdaService)  SetReferences(references: IReferences){
   c.LambdaService.setReferences(references);
   ref := c.DependencyResolver.GetRequired("controller")
   c.controller = ref.(IMyController)
}

func (c * LambdaService)  Register(){
    c.RegisterAction("get_mydata", nil,  func(params map[string]interface{})(interface{}, error) {
         correlationId := params.GetAsString("correlation_id")
         id := params.GetAsString("id")
        return  c.controller.GetMyData(correlationId, id);
    });
    ...
}

service := NewMyLambdaService();

service.Configure(NewConfigParamsFromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

service.SetReferences(cref.NewReferencesFromTuples(
   cref.NewDescriptor("mygroup","controller","default","default","1.0"), controller
));

service.Open("123");
fmt.Println("The Lambda 'v1.myservice' service is running on port 8080");
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
