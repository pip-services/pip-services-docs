---
type: docs
title: "AzureFunctionController"
linkTitle: "AzureFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-azure-node"
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

> `public` constructor(name?: string)

- **name**: string - name of the service used to generate an action cmd.

### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../observability/refer/dependency_resolver)

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _tracer
Tracer.
> `protected` **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

</span>

### Instance methods

#### act

Calls registered actions in this Azure Function.
The "cmd" parameter in the action parameters determines
what action shall be called.

This method shall only be used in testing.

> `public` act(context: any): Promise\<any\>

- **context**: any - context context.
- **returns**: Promise\<any\> - returned result

#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### applyValidation
Performs a validation.

> `protected` applyValidation(schema: [Schema](../../../data/validate/schema), action: (context: any) => Promise\<any\>): (context: any) => Promise\<any\>

- **schema**: [Schema](../../../data/validate/schema) - schema used in the validation
- **action**: (context: any) => Promise\<any\> - action
- **returns**: (context: any) => Promise\<any\> - returned result


#### close
Closes a component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\> 

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### generateActionCmd
Adds '.cmd' to a command name
> `protected` generateActionCmd(name: string): string

- **name**: string - command name
- **returns**: string - command name with '.cmd' added at its end.

#### getActions
Get all actions supported by the service.

> `public` getActions(): [AzureFunctionAction[]](../azure_function_action)

- **returns**: [AzureFunctionAction[]](../azure_function_action) - array with supported actions.


#### getCommand
Returns a command from the Azure Function context.

This method can be overloaded in child classes.

> `protected` getCommand(context: any): string

- **context**: any - context.
- **returns**: string - returned command from context.

#### getTraceId
Returns a traceId from the Azure Function context.

This method can be overloaded in child classes.

> `protected` getTraceId(context: any): string

- **context**: any - context.
- **returns**: string - returned traceId from context.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` instrument(context: [IContext](../../../components/context/icontext), name: string): [InstrumentTiming](../../../rpc/trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method's name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - Timing object to end the time measurement.

#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### registerAction
Registers an action in Azure Function function.

> `protected` registerAction(name: string, schema: [Schema](../../../data/validate/schema), action: (context: any) => Promise\<any\>): void

- **name**: string - action name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **action**: (context: any) => Promise\<any\> - action function that is called when the operation is invoked.

#### registerActionWithAuth
Registers an action with authorization.

> `protected` registerActionWithAuth(name: string, schema: [Schema](../../../data/validate/schema), authorize: (context: any, next: (context: any) => Promise\<any\>) => Promise\<any\>, action: (context: any) => Promise\<any\>): void

- **name**: string - action's name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **authorize**: (context: any, next: (context: any) => Promise\<any\>) => Promise\<any\> - authorization interceptor
- **action**: (context: any) => Promise\<any\> - action function that is called when the operation is invoked.


#### registerInterceptor
Registers a middleware for actions in Azure Function service.

> `protected` registerInterceptor(action: (context: any, next: (context: any) => Promise\<any\>) => Promise\<any\>): void

- **action**: (context: any, next: (context: any) => Promise\<any\>) => Promise\<any\> - action function that is called when middleware is invoked.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



### Abstract methods

#### register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overridden
in child classes.

> `protected abstract` register(): void

### Examples

```typescript
class MyAzureFunctionController extends AzureFunctionController {
   private _controller: IMyController;
   ...
   public constructor() {
      base('v1.myservice');
      this._dependencyResolver.put(
          "controller",
          new Descriptor("mygroup","controller","*","*","1.0")
      );
   }
   public setReferences(references: IReferences): void {
      base.setReferences(references);
      this._controller = this._dependencyResolver.getRequired<IMyController>("controller");
   }
   public register(): void {
       registerAction("get_mydata", null, async (context) => {
           let context = context.correlation_id;
           let id = context.id;
           return await this._controller.getMyData(context, id);
       });
       ...
   }
}

let service = new MyAzureFunctionController();
service.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

service.setReferences(References.fromTuples(
   new Descriptor("mygroup","controller","default","default","1.0"), controller
));

service.open("123");
```
