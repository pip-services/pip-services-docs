---
type: docs
title: "CommandableGoogleFunctionService"
linkTitle: "CommandableGoogleFunctionService"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-gcp-nodex"
description: >
    Abstract service that receives commands via the Google Function protocol to operations automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable).
---

**Extends**: [GoogleFunctionService](../google_function_service)

### Description
The CommandableGoogleFunctionService class allows you to create abstract services that receive commands via the Google Function protocols to operations automatically generated for commnads defined in [ICommandable components](../../../commons/commands/icommandable).

**Important points** 

- Each command is exposed as an invoke method that receives a command's name and parameters.

- Commandable services require only 3 lines of code to implement a robust external Google Function-based remote interface.

- This service is intended to work inside an Google Function container that exploses registered actions externally.

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

#### getParametrs
Returns body from Google Function request.
This method can be overloaded in child classes

> `protected` getParametrs(req: any): [Parameters](../../../commons/run/parameters)

- **req**: any - Google Function request.
- **returns**: [Parameters](../../../commons/run/parameters) - Returns Parameters from request

#### register
Registers all actions in Google Function.
> `public` register(): void


### Examples

```typescript
class MyCommandableGoogleFunctionService extends CommandableGoogleFunctionService {
   public constructor() {
      base();
      this._dependencyResolver.put(
          "controller",
          new Descriptor("mygroup","controller","*","*","1.0")
      );
   }
}

let service = new MyCommandableGoogleFunctionService();

service.setReferences(References.fromTuples(
   new Descriptor("mygroup","controller","default","default","1.0"), controller
));

await service.open("123");
console.log("The Google Function service is running");
```
