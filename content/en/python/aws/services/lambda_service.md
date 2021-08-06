---
type: docs
title: "LambdaService"
linkTitle: "LambdaService"
gitUrl: "https://github.com/pip-services3-python/pip-services3-aws-python"
description: >
    Abstract service that receives remote calls via the AWS Lambda protocol.
---

**Implements**: [ILambdaService](../ilambda_service), [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description
The LambdaService class allows you to create abstract services that receive remote calls via the AWS Lambda protocol.

**Important points**

This service is intended to work inside a LambdaFunction container that exploses registered actions externally.


#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.


### Constructors
Creates an instance of this service.

> LambdaService(name: str = None)

- **name**: str - service name to generate action cmd.

### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _dependency_resolver
Dependency resolver.
> **_dependency_resolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
Dependency resolver.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _tracer
Tracer.
> **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

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

> _apply_validation(schema: [Schema](../../../commons/validate/schema), action: Callable[[dict], Any]): Callable[[dict], Any]

- **schema**: [Schema](../../../commons/validate/schema) - validation schema
- **action**: Callable[[dict], Any] - action
- **returns**: Callable[[dict], Any] - results

#### close
Closes a component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### _generate_action_cmd
Adds .cmd to the name of the command.
> generateActionCmd(name: str): str

- **name**: str - name of the command
- **returns**: str - T - generated command


#### get_actions
Gets all the actions supported by the service.
> get_actions(): List[[LambdaAction](../lambda_action)]

- **returns**: List[[LambdaAction](../lambda_action)] - array with supported actions.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> _instrument(correlation_id: Optional[str], name: str): [InstrumentTiming](../../../rpc/services/instrument_timing) 

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **name**: str -  method name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing)  - InstrumentTiming object to end the time measurement.

#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### _register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overriden
in child classes.

> _register()

#### _register_action
Registers an action in AWS Lambda function.

> _register_action(name: str, schema: Optional[[Schema](../../../commons/validate/schema)], action: Callable[[dict], Any])

- **name**: str - action name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: Callable[[dict], Any] - action function that is called when an operation is invoked.

#### _register_action_with_auth
Registers an action with authorization.

> _register_action_with_auth(name: str, schema: [Schema](../../../commons/validate/schema), authorize: Callable[[Any, Callable[[Any], Any]], Any], action:  Callable[[Any], Any])

- **name**: str - action's name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **authorize**: Callable[[Any, Callable[[Any], Any]], Any] - authorization interceptor
- **action**:  Callable[[Any], Any] - action function that is called when an operation is invoked.


#### _register_interceptor
Registers a middleware for actions in AWS Lambda service.

> _register_interceptor(action: Callable[[Any, Callable[[Any], Any]], Any])    
     
- **action**: Callable[[Any, Callable[[Any], Any]], Any] - action function that is called when middleware is invoked.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references used to locate the component's dependencies.



### Examples

```python
class MyLambdaService(LambdaService):

    _controller: IMyController
   
   ...

   def __init__(self):
        super().__init__('v1.myservice')
        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup","controller","*","*","1.0")
        )

   def set_references(self, references: IReferences):
      super().set_references(references)
      self._controller = self._dependency_resolver.get_required("controller")
   
   def __action(self, params):
        correlation_id = params.correlation_id
        id = params.id
        return self._controller.get_my_data(correlationId, id)

   def _register(self):
       self.register_action("get_my_data", None, __action)

       ...
   

service = MyLambdaService()
service.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

service.set_references(References.from_tuples(
    Descriptor("mygroup","controller","default","default","1.0"), controller
))

service.open("123")
print("The GRPC service is running on port 8080")
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
