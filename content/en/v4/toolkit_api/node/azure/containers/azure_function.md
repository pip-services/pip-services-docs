---
type: docs
title: "AzureFunction"
linkTitle: "AzureFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-azure-node"
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

> public constructor(name?: string, description?: string)

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/context/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/context/context_info))


### Fields

<span class="hide-title-link">

### _actions
The map of registered actions.
> `protected` **_actions**: { [id: string]: any }

### _config_path
The default path to config file.
> `protected` **_config_path**: str = './config/config.yml'

### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

### _dependencyResolver
Dependencies resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

### _tracer
The tracer.
> `protected` **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

### _schemas
The map of registred validation schemas.
> `protected` **_schemas**: { [id: string]: [Schema](../../../data/validate/schema) }

</span>


### Instance methods

#### act
Calls registered action in this Azure Function.
"cmd" parameter in the action parameters determin
what action shall be called.

This method shall only be used in testing.

> `public` act(context: any): Promise\<any\>
- **context**: any - action parameters.
- **returns**: Promise\<any\> - action result.

#### execute
Executes this Azure Function and returns the result.
This method can be overloaded in child classes
if they need to change the default behavior

> `protected` execute(context: any): Promise\<any\>

- **context**: any - context the context parameters (or function arguments)
- **returns**: Promise\<any\> - the result of the function execution.

#### getCommand
Returns command from Azure Function context.
This method can be overloaded in child classes

> `protected` getCommand(context: any): string

- **context**: any - Azure Function context
- **returns**: string - Returns command from context

#### getTraceId
Returns traceId from Azure Function context.
This method can be overloaded in child classes

> `protected` getTraceId(context: any): string

- **context**: any - Azure Function context
- **returns**: string - Returns traceId from context

#### getHandler
Return plugin function

> `public` getHandler(): (context: any) => Promise\<any\>

- **returns**: (context: any) => Promise\<any\> - plugin function


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` instrument(context: [IContext](../../../components/context/icontext), name: string): [InstrumentTiming](../../../rpc/trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method's name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - Timing object to end the time measurement.

#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)) :Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### registerAction
Registers an action in this Azure Function.

Note: This method has been deprecated. Use AzureFunctionController instead.

> `protected` registerAction(cmd: string, schema: [Schema](../../../data/validate/schema),  action: (context: any) => Promise\<any\>): void

- **cmd**: str - a action/command name.
- **schema**: [Schema](../../../data/validate/schema) - a validation schema to validate received parameters.
- **action**: (context: any) => Promise\<any\> - an action function that is called when action is invoked.

#### register
Registers all actions in this Azure Function.

Note: Overloading of this method has been deprecated. Use AzureFunctionController instead.

> register()

#### registerServices
Registers all Azure Function services in the container.

> `protected` registerServices(): void

#### run
Runs this Azure Function, loads container configuration,
instantiate components and manage their lifecycle,
makes this function ready to access action calls.

> `public` run(): Promise\<void\>


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


### Examples

```typescript
class MyAzureFunctionFunction extends AzureFunction {
    public constructor() {
        base("mygroup", "MyGroup Azure Function");
    }
}

let azureFunction = new MyAzureFunctionFunction();
 
await service.run();
console.log("MyAzureFunctionFunction is started");
```
