---
type: docs
title: "CommandableAzureFunctionService"
linkTitle: "CommandableAzureFunctionService"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
description: >
    Abstract service that receives commands via the Azure Function protocol to operations automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable).
---

**Extends**: [AzureFunctionService](../azure_function_service)

### Description
The CommandableAzureFunctionService class allows you to create abstract services that receive commands via the Azure Function protocols to operations automatically generated for commnads defined in [ICommandable components](../../../commons/commands/icommandable).

**Important points** 

- Each command is exposed as an invoke method that receives a command's name and parameters.

- Commandable services require only 3 lines of code to implement a robust external Azure Function-based remote interface.

- This service is intended to work inside an Azure Function container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.

### Constructors

> `public` constructor(name: string) 

- **name**: string - service's name.


### Instance methods

#### getBody
Returns a body from Azure Function context.

This method can be overloaded in child classes.

> `protected` getBody(context: any): string

- **context**: any - Azure Function context
- **returns**: string - returned body from context

#### register
Registers all actions in Azure Function.
> `public` register(): void


### Examples

```typescript
class MyCommandableAzureFunctionService extends CommandableAzureFunctionService {
   public constructor() {
      base();
      this._dependencyResolver.put(
          "controller",
          new Descriptor("mygroup","controller","*","*","1.0")
      );
   }
}

let service = new MyCommandableAzureFunctionService();
service.setReferences(References.fromTuples(
   new Descriptor("mygroup","controller","default","default","1.0"), controller
));

await service.open("123");
console.log("The Azure Function service is running");
```
