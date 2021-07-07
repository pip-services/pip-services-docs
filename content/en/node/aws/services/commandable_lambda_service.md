---
type: docs
title: "CommandableLambdaService"
linkTitle: "CommandableLambdaService"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-aws-nodex"
description: >
    Abstract service that receives commands via AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable). Each command is exposed as an invoke method that receives command name and parameters.
---

**Extends:** [LambdaService](../lambda_service)

### Description

Commandable services require only 3 lines of code to implement a robust external
Lambda-based remote interface.

This service is intended to work inside a LambdaFunction container that
exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.

### Constructors
Creates a new instance of the service.

> `public` constructor(name: string)

- **name**: string - service name.


### Instance methods

#### register
Registers all actions in AWS Lambda function.

> `public` register(): void


### Examples

```typescript
class MyCommandableLambdaService extends CommandableLambdaService {
   public constructor() {
      base();
      this._dependencyResolver.put(
          "controller",
          new Descriptor("mygroup","controller","*","*","1.0")
      );
   }
}

let service = new MyCommandableLambdaService();
service.setReferences(References.fromTuples(
   new Descriptor("mygroup","controller","default","default","1.0"), controller
));

await service.open("123");
console.log("The AWS Lambda service is running");
```

### See also
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
- #### [LambdaService](../lambda_service)
