---
type: docs
title: "CommandableAzureFunction"
linkTitle: "CommandableAzureFunction"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
description: >
    Abstract Azure Function function, that acts as a container to instantiate and run components
    and expose them via external entry point.
---

**Extends**: [AzureFunction](../azure_function)

### Description

All actions are automatically generated for commands
defined in [ICommandable components](../../../commons/commands/icommandable). Each command is exposed as an action defined by "cmd" parameter.
  
Container configuration for this Azure Function is stored in *"./config/config.yml"* file.
But this path can be overridden by *CONFIG_PATH* environment variable.
 
- Note: This component has been deprecated. Use Azure [FunctionService](../../services/function_service) instead.


#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:service:azure-function:\*:1.0**: (optional) [IAzureFunctionService](../../services/iazure_function_service) services to handle action requests.
- **\*:service:commandable-azure-function:\*:1.0**: (optional) [IAzureFunctionService](../../services/iazure_function_service) services to handle action requests.

### Constructors

> `public` constructor(name: string, description?: string)

- **name**: string - (optional) a container name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) a container description (accessible via [ContextInfo](../../../components/info/context_info))


### Instance methods

#### getCorrelationId
Returns correlationId from Azure Function context.

> `public static` getCorrelationId(context: any): string

- **context**: any - the Azure Function context.
- **returns**: string - returns correlationId from context.

#### getCommand
Returns command from Azure Function context.

> `public static` getCommand(context: any): string

- **context**: any - the Azure Function context.
- **returns**: string - returns command from context.

#### getHttpRequestBody
Returns body from Azure Function context http request.

> `public static` getHttpRequestBody(context: any): string

- **context**: any - the Azure Function context.
- **returns**: string - returns body from context.

### Examples

```typescript
class MyAzureFunctionFunction extends CommandableAzureFunction {
    private _controller: IMyController;
    ...
    public constructor() {
        base("mygroup", "MyGroup AzureFunction");
        this._dependencyResolver.put(
            "controller",
            new Descriptor("mygroup","controller","*","*","1.0")
        );
    }
}
let azureFunction = new MyAzureFunctionFunction();
   
await service.run();
console.log("MyAzureFunction is started");
```