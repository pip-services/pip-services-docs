---
type: docs
title: "CommandableAzureFunctionController"
linkTitle: "CommandableAzureFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-azure-dotnet"
description: >
    Abstract controller that receives commands via the Azure Function protocol to operations automatically generated for commands defined in [ICommandable components](../../../rpc/commands/icommandable).
---

**Extends**: [AzureFunctionController](../azure_function_controller)

### Description
The CommandableAzureFunctionController class allows you to create abstract controller that receive commands via the Azure Function protocols to operations automatically generated for commnads defined in [ICommandable components](../../../rpc/commands/icommandable).

**Important points** 

- Each command is exposed as an invoke method that receives a command's name and parameters.

- Commandable controllers require only 3 lines of code to implement a robust external Azure Function-based remote interface.

- This controller is intended to work inside an Azure Function container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.

### Constructors

> `public` constructor(name: string) 

- **name**: string - controller's name.


### Instance methods

#### getParametrs
Returns body from Azure Function context.
This method can be overloaded in child classes

> `protected` getParametrs(context: any): [Parameters](../../../components/exec/parameters)

- **context**: any - Azure Function context.
- **returns**: [Parameters](../../../components/exec/parameters) - Returns Parameters from context

#### register
Registers all actions in Azure Function.
> `public` register(): void


### Examples

```typescript
class MyCommandableAzureFunctionController extends CommandableAzureFunctionController {
   public constructor() {
      base();
      this._dependencyResolver.put(
          "controller",
          new Descriptor("mygroup","controller","*","*","1.0")
      );
   }
}

let controller = new MyCommandableAzureFunctionController();
controller.setReferences(References.fromTuples(
   new Descriptor("mygroup","controller","default","default","1.0"), controller
));

await controller.open("123");
console.log("The Azure Function Controller is running");
```
