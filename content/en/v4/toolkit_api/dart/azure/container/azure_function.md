---
type: docs
title: "AzureFunction"
linkTitle: "AzureFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-azure-dart"
description: >
    Abstract Azure Function that acts as a container to instantiate and run components and expose them via an external entry point. 
---

**Implements:** [Container](../../../container/containers/container)

### Description
The AzureFunction class allows you to create an Abstract Azure Function that acts as a container to instantiate and run components and expose them via an external entry point. 

Importan points

- When handling calls, the "cmd" parameter determines the action that shall be called, while the other parameters are passed to the action itself.  

- The container configuration for this Azure Function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.

#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:service:azure-function:\*:1.0**: (optional) [IAzureFunctionController](../../controllers/iazure_function_controller) services to handle action requests.
- **\*:service:commandable-azure-function:\*:1.0**: (optional) [IAzureFunctionController](../../controllers/iazure_function_controller) services to handle action requests.

### Constructors
Creates a new instance of this Azure Function.

> AzureFunction([String? name, String? description]) : super(name, description)

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/context/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/context/context_info))


### Fields

<span class="hide-title-link">

### actions
The map of registered actions.
> **actions**: Map<String, Future Function(Map<String, dynamic>)> 

### counters
Performance counters.
> `final` **counters**: [CompositeCounters](../../../observability/count/composite_counters)

### dependencyResolver
Dependencies resolver.
> `final` **dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

### logger
Logger.
> **logger**: [CompositeLogger](../../../observability/log/composite_logger)

### tracer
The tracer.
> `final` **tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

### schemas
The map of registred validation schemas.
> **schemas**: Map<String, [Schema](../../../data/validate/schema> 

</span>


### Instance methods

#### act
Calls registered action in this Azure Function.
"cmd" parameter in the action parameters determin
what action shall be called.

This method shall only be used in testing.

> Future act(Map<String, dynamic> context) async

- **context**: Map<String, dynamic> context) - action parameters.
- **returns**: Promise\<any\> - action result.

#### execute
Executes this Azure Function and returns the result.
This method can be overloaded in child classes
if they need to change the default behavior

> Future _execute(Map<String, dynamic> context) async

- **context**: Map<String, dynamic> - context the context parameters (or function arguments)
- **returns**: Promise\<any\> - the result of the function execution.

#### getCommand
Returns command from Azure Function context.
This method can be overloaded in child classes

> String getCommand(Map<String, dynamic> context)

- **context**: Map<String, dynamic> - Azure Function context
- **returns**: string - Returns command from context

#### getTraceId
Returns traceId from Azure Function context.
This method can be overloaded in child classes

> String getTraceId(Map<String, dynamic> context)

- **context**: Map<String, dynamic> - Azure Function context
- **returns**: string - Returns traceId from context

#### getHandler
Return plugin function

> Future Function(Map<String, dynamic> context) getHandler()

- **returns**: (context: any) => Promise\<any\> - plugin function


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> InstrumentTiming instrument(IContext? context, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method's name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - Timing object to end the time measurement.

#### open
Opens the component.

> Future open(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### registerAction
Registers an action in this Azure Function.

Note: This method has been deprecated. Use AzureFunctionController instead.

> void registerAction(String? cmd, Schema? schema, Future Function(Map<String, dynamic>) action)

- **cmd**: str - a action/command name.
- **schema**: [Schema](../../../data/validate/schema) - a validation schema to validate received parameters.
- **action**: (context: any) => Promise\<any\> - an action function that is called when action is invoked.

#### register
Registers all actions in this Azure Function.

Note: Overloading of this method has been deprecated. Use AzureFunctionController instead.

> void register()

#### run
Runs this Azure Function, loads container configuration,
instantiate components and manage their lifecycle,
makes this function ready to access action calls.

> Future run() async


#### setReferences
Sets references to dependent components.

> void setReferences(IReferences references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


### Examples

```dart
 class MyAzureFunction extends AzureFunction {
         IMyService _service;
         ...
         MyAzureFunction()
             super('mygroup', 'MyGroup Azure function'){
             dependencyResolver.put(
                 'service',
                 Descriptor('mygroup','service','*','*','1.0')
             );
         }

         void setReferences(IReferences references) {
             super.setReferences(references);
             _service = dependencyResolver.getRequired<IMyService>('service');
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

     var azureFunction = MyAzureFunction();

     await azureFunction.run();
     print('MyAzureFunction is started');

     var result = await azureFunction.act({'cmd': 'get_dummies'});
     print(result);
```
