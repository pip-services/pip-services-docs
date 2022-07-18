---
type: docs
title: "AzureFunctionService"
linkTitle: "AzureFunctionService"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
description: >
    Abstract service that receives remove calls via the Azure Function protocol.
---

**Implements**: [IAzureFunctionService](../iazure_function_service), [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description
The AzureFunctionService class allows you to create a service that receives remove calls via the Azure Function protocol.

**Important points**

- This service is intended to work inside an AzureFunction container that exposes registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.

### Constructors
Creates an instance of this service.

> `public` constructor(name?: string)

- **name**: string - name of the service used to generate an action cmd.

### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _tracer
Tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

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

#### applyInterceptors
Applies interceptors to the action.

> `protected` applyInterceptors(action: (context: any) => Promise\<any\>): (context: any) => Promise\<any\>

- **action**: (context: any) => Promise\<any\> - action
- **returns**: (context: any) => Promise\<any\> - returned result

#### applyValidation
Performs a validation.

> `protected` applyValidation(schema: [Schema](../../../commons/validate/schema), action: (context: any) => Promise\<any\>): (context: any) => Promise\<any\>

- **schema**: [Schema](../../../commons/validate/schema) - schema used in the validation
- **action**: (context: any) => Promise\<any\> - action
- **returns**: (context: any) => Promise\<any\> - returned result


#### close
Closes a component and frees used resources.

> `public` close(correlationId: string): Promise\<void\> 

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### applyInterceptors
Configures a component by passing its configuration parameters.

> public configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


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

#### getCorrelationId
Returns a correlationId from the Azure Function context.

This method can be overloaded in child classes.

> `protected` getCorrelationId(context: any): string

- **context**: any - context.
- **returns**: string - returned correlationId from context.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` instrument(correlationId: string, name: string): [InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method's name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing) - Timing object to end the time measurement.

#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### registerAction
Registers an action in Azure Function function.

> `protected` registerAction(name: string, schema: [Schema](../../../commons/validate/schema), action: (context: any) => Promise\<any\>): void

- **name**: string - action name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: (context: any) => Promise\<any\> - action function that is called when the operation is invoked.

#### registerActionWithAuth
Registers an action with authorization.

> `protected` registerActionWithAuth(name: string, schema: [Schema](../../../commons/validate/schema), authorize: (context: any, next: (context: any) => Promise\<any\>) => Promise\<any\>, action: (context: any) => Promise\<any\>): void

- **name**: string - action's name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **authorize**: (context: any, next: (context: any) => Promise\<any\>) => Promise\<any\> - authorization interceptor
- **action**: (context: any) => Promise\<any\> - action function that is called when the operation is invoked.


#### registerInterceptor
Registers a middleware for actions in Azure Function service.

> `protected` registerInterceptor(action: (context: any, next: (context: any) => Promise\<any\>) => Promise\<any\>): void

- **action**: (context: any, next: (context: any) => Promise\<any\>) => Promise\<any\> - action function that is called when middleware is invoked.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Abstract methods

#### register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overridden
in child classes.

> `protected abstract` register(): void

### Examples

```typescript
class MyAzureFunctionService extends AzureFunctionService {
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
           let correlationId = context.correlation_id;
           let id = context.id;
           return await this._controller.getMyData(correlationId, id);
       });
       ...
   }
}

let service = new MyAzureFunctionService();
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
