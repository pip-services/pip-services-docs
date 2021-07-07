---
type: docs
title: "AzureFunction"
linkTitle: "AzureFunction"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
description: >
    Abstract Azure Function that acts as a container to instantiate and run components and expose them via an external entry point. 
---

**Extends:** [Container](../../../container/containers/container)

### Description
The AzureFunction class allows you to create an Abstract Azure Function that acts as a container to instantiate and run components and expose them via an external entry point. 

Importan points

- When handling calls, the "cmd" parameter determines which what action shall be called, while other parameters are passed to the action itself.  

- The container configuration for this Azure Function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.

#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:service:azure-function:\*:1.0**: (optional) [IAzureFunctionService](../../services/iazure_function_service) services to handle action requests.
- **\*:service:commandable-azure-function:\*:1.0**: (optional) [IAzureFunctionService](../../services/iazure_function_service) services to handle action requests.

### Constructors
Creates a new instance of this Azure Function.

> `public` constructor(name?: string, description?: string)

- **name**: string - (optional) a container name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) a container description (accessible via [ContextInfo](../../../components/info/context_info))


### Instance methods

#### getBody
Returns a body from Azure Function context.
This method can be overloaded in child classes.

> `protected` getBody(context: any): string

- **context**: any - Azure Function context.
- **returns**: string - Returned body from context.

#### register
Registers all actions in this Azure Function.

> `public` register(): void



### Examples

```typescript
class MyAzureFunctionFunction extends AzureFunction {
    public constructor() {
        base("mygroup", "MyGroup Azure Function");
    }
}
let azureFunction = new MyAzureFunctionFunction();
  
await service.run();
console.log("MyAzureFunctionFunction is started");
```
