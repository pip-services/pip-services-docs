---
type: docs
title: "LambdaController"
linkTitle: "LambdaController"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-aws-go"
description: >
    Abstract controller that receives remote calls via the AWS Lambda protocol.
---

### Description
The LambdaController class allows you to create abstract controllers that receive remote calls via the AWS Lambda protocol.

**Important points**

This service is intended to work inside a LambdaFunction container that exposes registered actions externally.


#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.


### Constructors

#### InheritLambdaController
Creates an instance of this controller.

> InheritLambdaController(overrides ILambdaControllerOverrides, name string) [*LambdaController]()

- **overrides**: ILambdaControllerOverrides - Lambda controller overrides
- **name**: string - controller name to generate action cmd.

### Fields

<span class="hide-title-link">

#### Counters
Performance counters.
> **Counters**: [*CompositeCounters](../../../observability/count/composite_counters)

#### DependencyResolver
Dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../components/refer/dependency_resolver)

#### Logger
Logger.
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

#### Tracer
Tracer.
> **Tracer**: [*CompositeTracer](../../../observability/trace/composite_tracer)

</span>


### Methods

#### Act
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
the action shall be called.

- This method shall only be used in testing.

> (c [*LambdaController]()) Act(params map[string]any) (any, error)

- **params**: map[string]any - action parameters.
- **returns**: (any, error) - results

#### ApplyInterceptors
Applies given action to the interceptors

> (c [*LambdaController]()) ApplyInterceptors(action func(context.Context, map[string]any) (any, error)) func(map[string]any) (any, error)

- **action**: func(map[string]any) (any, error) - applied action.
- **returns**: (any, error) - wrapped interceptors action.

#### ApplyValidation
Applies a validation according to a given schema.

> (c [*LambdaController]()) ApplyValidation(schema [*Schema](../../../data/validate/schema), action func(params map[string]any) (any, error)) func(map[string]any) (any, error)

- **schema**: [*Schema](../../../data/validate/schema) - validation schema.
- **action**: func(params map[string]any) (any, error) - action.
- **returns**: func(map[string]any) (any, error) - results.

#### Close
Closes a component and frees used resources.

> (c [*LambdaController]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occured.


#### Configure
Configures a component by passing configuration parameters.

> (c [*LambdaController]()) Configure(ctx context.Context,  config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### GenerateActionCmd
Adds .cmd to the name of the command.
> (c [*LambdaController]()) GenerateActionCmd(name string) string 

- **name**: string - name of the command
- **returns**: string - generated command


#### GetActions
Gets all the actions supported by the controller.
> (c [*LambdaController]()) GetActions() [[]*LambdaAction](../lambda_action)

- **returns**: [[]*LambdaAction](../lambda_action) - array with supported actions.


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> (c [*LambdaController]()) Instrument(ctx context.Context, context [IContext](../../../components/context/icontext), name string) [*InstrumentTiming](../../../rpc/services/instrument_timing)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [*InstrumentTiming](../../../rpc/services/instrument_timing) - InstrumentTiming object to end the time measurement.

#### IsOpen
Checks if the component is open.

> (c [*LambdaController]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> (c [*LambdaController]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil no errors occured.

#### Register
Registers all controller routes in an HTTP endpoint.

This method is called by the controller and must be overriden
in child classes.

> (c [*LambdaController]()) Register()

#### RegisterAction
Registers an action in AWS Lambda function.

> (c [*LambdaController]()) RegisterAction(name string, schema [*Schema](../../../commons/validate/schema), action func(ctx context.Context, params map[string]any) (any, error))

- **ctx**: context.Context - operation context.
- **name**: string - action name
- **schema**: [*Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: func(params map[string]any) (any, error) - action function that is called when an operation is invoked.

#### RegisterActionWithAuth
Registers an action with authorization.

> (c [*LambdaController]()) RegisterActionWithAuth(name string, schema *cvalid.Schema, authorize func(ctx context.Context, params map[string]any, next func(context.Context, map[string]any) (interface{}, error)) (interface{}, error), action func(ctx context.Context, params map[string]any) (interface{}, error))

- **name**: string - action's name
- **schema**: [*Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **authorize**: func(params map[string]any, next func(map[string]any) (any, error)) (any, error) - authorization interceptor
- **action**: func(ctx context.Context, params map[string]any) (any, error) - action function that is called when an operation is invoked.


#### RegisterInterceptor
Registers a middleware for actions in AWS Lambda controller.

> (c [*LambdaController]()) RegisterInterceptor(action func(ctx context.Context, params map[string]any, next func(ctx context.Context, params map[string]any) (any, error)) (any, error))   
     
- **action**: func(ctx context.Context, params map[string]any, next func(ctx context.Context, params map[string]any) (any, error)) (any, error) - action function that is called when middleware is invoked.


#### SetReferences
Sets references to dependent components.

> (c [*LambdaController]()) SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references used to locate the component dependencies.


### Examples

```go
  struct MyLambdaController struct  {
     *LambdaController
     controller IMyController
  }
     ...
func NewMyLambdaController()* MyLambdaController {
   c:= &MyLambdaController{}
   c.LambdaController = NewLambdaController("v1.mycontroller")
   c.DependencyResolver.Put(
	   context.Background(),
       "controller",
       cref.NewDescriptor("mygroup","controller","*","*","1.0")
   )
   return c
}

func (c * LambdaController)  SetReferences(ctx context.Context, references IReferences) {
   c.LambdaController.SetReferences(references)
   ref := c.DependencyResolver.GetRequired("controller")
   c.controller = ref.(IMyController)
}

func (c * LambdaController)  Register() {
	c.RegisterAction("get_mydata", nil,  func(ctx context.Context, params map[string]any)(any, error) {
        context := params.GetAsString("correlation_id")
        id := params.GetAsString("id")
		return  c.controller.GetMyData(ctx, context, id)
    })
    ...
}

controller := NewMyLambdaController();
controller.Configure(ctx context.Context, NewConfigParamsFromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))
controller.SetReferences(context.Background(), cref.NewReferencesFromTuples(
   cref.NewDescriptor("mygroup","controller","default","default","1.0"), controller
))

controller.Open(context.Background(), "123")
fmt.Println("The Lambda 'v1.mycontroller' controller is running on port 8080")
```

### See also
- #### [LambdaClient](../../clients/lambda_client)

