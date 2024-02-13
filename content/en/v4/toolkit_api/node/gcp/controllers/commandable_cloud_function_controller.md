---
type: docs
title: "CommandableCloudFunctionController"
linkTitle: "CommandableCloudFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-gcp-node"
description: >
    Abstract service that receives commands via the Google Function protocol to operations automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable).
---

**Extends**: [CloudFunctionController](../cloud_function_controller)

### Description
The CommandableCloudFunctionController class allows you to create abstract services that receive commands via the Google Function protocols to operations automatically generated for commnads defined in [ICommandable](../../../rpc/commands/icommandable) components.

**Important points** 

- Each command is exposed as an invoke method that receives a command's name and parameters.

- Commandable services require only 3 lines of code to implement a robust external Google Function-based remote interface.

- This service is intended to work inside an Google Function container that exploses registered actions externally.

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
Returns body from Google Function request.
This method can be overloaded in child classes

> `protected` getParametrs(req: any): [Parameters](../../../components/exec/parameters)

- **req**: any - Google Function request.
- **returns**: [Parameters](../../../components/exec/parameters) - Returns Parameters from request

#### register
Registers all actions in Google Function.
> `public` register(): void


### Examples

```typescript
class MyCommandableCloudFunctionController extends CommandableCloudFunctionController {
   public constructor() {
      base();
      this._dependencyResolver.put(
          "controller",
          new Descriptor("mygroup","controller","*","*","1.0")
      );
   }
}

let service = new MyCommandableCloudFunctionController();

service.setReferences(References.fromTuples(
   new Descriptor("mygroup","controller","default","default","1.0"), controller
));

await service.open("123_service");
console.log("The Google Function service is running");
```
