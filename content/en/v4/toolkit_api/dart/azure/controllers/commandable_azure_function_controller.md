---
type: docs
title: "CommandableAzureFunctionController"
linkTitle: "CommandableAzureFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-azure-dart"
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

> CommandableAzureFunctionController(String? name) : super(name) 

- **name**: string - service's name.


### Instance methods

#### register
Registers all actions in Azure Function.
> void register()


### Examples

```dart
 class MyCommandableAzureFunctionController extends CommandableAzureFunctionController {
        MyCommandableAzureFunctionController(): super() {
           _dependencyResolver.put(
               "service",
               Descriptor("mygroup","service","*","*","1.0")
           );
        }
     }

     var controller = MyCommandableAzureFunctionController();
     controller.setReferences(References.fromTuples(
        Descriptor("mygroup","service","default","default","1.0"), controller
     ));

     await controller.open(Context.fromTraceId("123"));
     console.log("The Azure Function controller is running");
```
