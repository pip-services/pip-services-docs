---
type: docs
title: "CommandableAzureFunctionController"
linkTitle: "CommandableAzureFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-azure-node"
description: >
    Abstract service that receives commands via the Azure Function protocol to operations automatically generated for commands defined in [ICommandable](../../../rpc/commands/icommandable) components.
---

**Extends**: [AzureFunctionController](../azure_function_controller)

### Description
The CommandableAzureFunctionController class allows you to create abstract services that receive commands via the Azure Function protocols to operations automatically generated for commnads defined in [ICommandable](../../../rpc/commands/icommandable) components.

**Important points** 

- Each command is exposed as an invoke method that receives a command's name and parameters.

- Commandable services require only 3 lines of code to implement a robust external Azure Function-based remote interface.

- This service is intended to work inside an Azure Function container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.

### Constructors

> `public` constructor(name: string) 

- **name**: string - service's name.


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

let service = new MyCommandableAzureFunctionController();
service.setReferences(References.fromTuples(
   new Descriptor("mygroup","controller","default","default","1.0"), controller
));

await service.open("123");
console.log("The Azure Function service is running");
```
