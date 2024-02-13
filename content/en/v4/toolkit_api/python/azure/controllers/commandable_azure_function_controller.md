---
type: docs
title: "CommandableAzureFunctionController"
linkTitle: "CommandableAzureFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-azure-python"
description: >
    Abstract controller that receives commands via the Azure Function protocol to operations automatically generated for commands defined in [ICommandable components](../../../rpc/commands/icommandable).
---

**Implements**: [AzureFunctionController](../azure_function_controller)

### Description
The CommandableAzureFunctionController class allows you to create abstract controllers that receive commands via the Azure Function protocols to operations automatically generated for commnads defined in [ICommandable components](../../../rpc/commands/icommandable).

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

> CommandableAzureFunctionController(name: str) 

- **name**: str - controller name.


### Instance methods

#### _get_parameters
Returns body from Azure Function context.
This method can be overloaded in child classes

> _get_parameters(context: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)): [Parameters](../../../components/exec/parameters)

- **context**: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python) - Azure Function context.
- **returns**: [Parameters](../../../components/exec/parameters) - Returns Parameters from context

#### register
Registers all actions in Azure Function.
> register()


### Examples

```python
class MyCommandableAzureFunctionController(CommandableAzureFunctionController):
    def __init__(self):
        super(MyCommandableAzureFunctionController, self).__init__()
        self._dependency_resolver.put(
            "controller", Descriptor("mygroup", "controller", "*", "*", "1.0")
        )

controller = MyCommandableAzureFunctionController()
controller.set_references(References.fromTuples(
    Descriptor("mygroup", "controller", "default", "default", "1.0"), controller
))

controller.open("123")
print("The Azure Function controller is running")
```
