---
type: docs
title: "LambdaController"
linkTitle: "LambdaController"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-aws-python"
description: >
    Abstract controller that receives remote calls via the AWS Lambda protocol.
---

**Implements**: [ILambdaController](../ilambda_controller), [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description
The LambdaController class allows you to create abstract controllers that receive remote calls via the AWS Lambda protocol.

**Important points**

This controller is intended to work inside a LambdaFunction container that exploses registered actions externally.


#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.


### Constructors
Creates an instance of this controller.

> LambdaController(name: str = None)

- **name**: str - controller name to generate action cmd.

### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### _dependency_resolver
Dependency resolver.
> **_dependency_resolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### _logger
Dependency resolver.
> **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _tracer
Tracer.
> **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

</span>


### Instance methods

#### act
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
the action that shall be called.

- This method shall only be used in testing.

> act(params: dict): Any

- **params**: dict - action parameters.
- **returns**: Any - results

#### _apply_interceptors
Applies given action to the interceptors

> _apply_interceptors(action: Callable[[dict], Any]): Callable[[dict], Any]

- **action**: Callable[[dict], Any] - applied action.
- **returns**: Callable[[dict], Any] - wrapped interceptors action.

#### _apply_validation
Applies a validation according to a given schema.

> _apply_validation(schema: [Schema](../../../data/validate/schema), action: Callable[[dict], Any]): Callable[[dict], Any]

- **schema**: [Schema](../../../data/validate/schema) - validation schema
- **action**: Callable[[dict], Any] - action
- **returns**: Callable[[dict], Any] - results

#### close
Closes a component and frees used resources.

> close(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### _generate_action_cmd
Adds .cmd to the name of the command.
> generateActionCmd(name: str): str

- **name**: str - name of the command
- **returns**: str - T - generated command


#### get_actions
Gets all the actions supported by the controller.
> get_actions(): List[[LambdaAction](../lambda_action)]

- **returns**: List[[LambdaAction](../lambda_action)] - array with supported actions.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> _instrument(context: Optional[IContext], name: str): [InstrumentTiming](../../../rpc/trace/instrument_timing) 

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: str -  method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing)  - InstrumentTiming object to end the time measurement.

#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

> open(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### register
Registers all controller routes in an HTTP endpoint.

This method is called by the controller and must be overriden
in child classes.

> register()

#### _register_action
Registers an action in AWS Lambda function.

> _register_action(name: str, schema: Optional[[Schema](../../../data/validate/schema)], action: Callable[[dict], Any])

- **name**: str - action name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **action**: Callable[[dict], Any] - action function that is called when an operation is invoked.

#### _register_action_with_auth
Registers an action with authorization.

> _register_action_with_auth(name: str, schema: [Schema](../../../data/validate/schema), authorize: Callable[[Any, Callable[[Any], Any]], Any], action:  Callable[[Any], Any])

- **name**: str - action's name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **authorize**: Callable[[Any, Callable[[Any], Any]], Any] - authorization interceptor
- **action**:  Callable[[Any], Any] - action function that is called when an operation is invoked.


#### _register_interceptor
Registers a middleware for actions in AWS Lambda controller.

> _register_interceptor(action: Callable[[Any, Callable[[Any], Any]], Any])    
     
- **action**: Callable[[Any, Callable[[Any], Any]], Any] - action function that is called when middleware is invoked.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references used to locate the component's dependencies.



### Examples

```python
class MyLambdaController(LambdaController):

    _controller: IMyController
   
   ...

   def __init__(self):
        super().__init__('v1.mycontroller')
        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup","controller","*","*","1.0")
        )

   def set_references(self, references: IReferences):
      super().set_references(references)
      self._controller = self._dependency_resolver.get_required("controller")
   
   def __action(self, params):
        context = params.context
        id = params.id
        return self._controller.get_my_data(context, id)

   def register(self):
       self._register_action("get_my_data", None, self.__action)

       ...
   

controller = MyLambdaController()
controller.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

controller.set_references(References.from_tuples(
    Descriptor("mygroup","controller","default","default","1.0"), controller
))

controller.open("123")
print("The GRPC controller is running on port 8080")
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
