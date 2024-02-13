---
type: docs
title: "AzureFunctionController"
linkTitle: "AzureFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-azure-dart"
description: >
    Abstract service that receives remove calls via the Azure Function protocol.
---

**Implements**: [IAzureFunctionController](../iazure_function_controller), [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description
The AzureFunctionController class allows you to create a service that receives remove calls via the Azure Function protocol.

**Important points**

- This service is intended to work inside an AzureFunction container that exposes registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.

### Constructors
Creates an instance of this service.

> AzureFunctionController(String? name)

- **name**: string - name of the service used to generate an action cmd.

### Fields

<span class="hide-title-link">

#### counters
Performance counters.
> `final` **counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### dependencyResolver
Dependency resolver.
> `final` **dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### logger
Logger.
> `final` **logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _tracer
Tracer.
> `final` **tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

</span>

### Instance methods

#### act

Calls registered actions in this Azure Function.
The "cmd" parameter in the action parameters determines
what action shall be called.

This method shall only be used in testing.

> Future act(params) async

- **returns**: Future - returned result

#### configure
Configures a component by passing its configuration parameters.

> void configure(ConfigParams config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### applyValidation
Performs a validation.

> Future applyValidation(Schema? schema, Future Function(Map<String, dynamic>) action) async

- **schema**: [Schema](../../../data/validate/schema) - schema used in the validation
- **action**: Future Function(Map<String, dynamic>) - action
- **returns**: Future - returned result


#### close
Closes a component and frees used resources.

> Future close(IContext? context) async 

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing its configuration parameters.

> void configure(ConfigParams config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### generateActionCmd
Adds '.cmd' to a command name
> String? generateActionCmd(String? name)

- **name**: string - command name
- **returns**: string - command name with '.cmd' added at its end.

#### getActions
Get all actions supported by the service.

> List<AzureFunctionAction> getActions()

- **returns**: List<[AzureFunctionAction[]](../azure_function_action)> - list with supported actions.


#### getCommand
Returns a command from the Azure Function context.

This method can be overloaded in child classes.

> String getCommand(context)

- **context**: any - context.
- **returns**: string - returned command from context.

#### getTraceId
Returns a traceId from the Azure Function context.

This method can be overloaded in child classes.

> String getTraceId(context)

- **context**: any - context.
- **returns**: string - returned traceId from context.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> InstrumentTiming instrument(IContext? context, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method's name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - Timing object to end the time measurement.

#### isOpen
Checks if the component is open.

>  bool isOpen()

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> Future open(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### registerAction
Registers an action in Azure Function function.

> Future<void> registerAction(String name, Schema? schema, Future Function(Map<String, dynamic>) action) async

- **name**: string - action name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **action**: String name, Schema? schema, Future Function(Map<String, dynamic>) - action function that is called when the operation is invoked.

#### registerActionWithAuth
Registers an action with authorization.

> Future<void> registerActionWithAuth(String name, Schema schema, Future Function(dynamic call, Future Function(Map<String, dynamic>) next) authorize, Future Function(Map<String, dynamic>) action) async

- **name**: string - action's name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **authorize**: Future Function(dynamic call, Future Function(Map<String, dynamic>) next) - authorization interceptor
- **action**: Future Function(Map<String, dynamic>) - action function that is called when the operation is invoked.


#### registerInterceptor
Registers a middleware for actions in Azure Function service.

> void registerInterceptor(String? cmd, Future Function(dynamic context, Future Function(Map<String, dynamic>) next) action)

- **action**: String? cmd, Future Function(dynamic context, Future Function(Map<String, dynamic>) next) - action function that is called when middleware is invoked.


#### setReferences
Sets references to dependent components.

> void setReferences(IReferences references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



### Abstract methods

#### register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overridden
in child classes.

> void register()

### Examples

```dart
 class MyAzureFunctionController extends AzureFunctionController {
        IMyService _service;
        ...

        MyAzureFunctionController(): super('v1.mycontroller') {
           dependencyResolver.put(
               'service',
               Descriptor('mygroup','service','*','*','1.0')
           );
        }

        void setReferences(IReferences references) {
           super.setReferences(references);
           _service = this._dependencyResolver.getRequired<IMyController>("service");
        }

         void register() {
         registerAction(
           'get_mydata',
           ObjectSchema(true).withOptionalProperty('id', TypeCode.String),
           getMyData);
         }

         Future getMyData(params) async {
           return await _service.getMyData(params['trace_id'],
             params['id']),
         }
     }
```
