---
type: docs
title: "CommandableCloudFunction"
linkTitle: "CommandableCloudFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-gcp-node"
description: >
    Abstract Google Function function that acts as a container to instantiate and run components
    and expose them via an external entry point.
---

**Extends**: [CloudFunction](../cloud_function)

### Description
The CommandableCloudFunction allows you to create an abstract Google Function function that acts as a container to instantiate and run components and expose them via an external entry point.

**Important points**

- All actions are automatically generated for commands defined in [ICommandable](../../../rpc/commands/icommandable) components. Each command is exposed as an action defined by the "cmd" parameter.
  
- Container configuration for this Google Function is stored in *"./config/config.yml"* file. But this path can be overridden by the *CONFIG_PATH* environment variable.
 
- **Note**: This component has been deprecated. Use Google [CloudFunctionController](../../controllers/cloud_function_controller) instead.


#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:service:gcp-function:\*:1.0**: (optional) [ICloudFunctionController](../../controllers/icloud_function_controller) services to handle action requests.
- **\*:service:commandable-gcp-function:\*:1.0**: (optional) [ICloudFunctionController](../../controllers/icloud_function_controller) services to handle action requests.

### Constructors
Creates a new instance of this Google Function.

> `public` constructor(name: string, description?: string)

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/context/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/context/context_info))


### Instance methods

#### getParametrs
Returns body from Google Function request.
This method can be overloaded in child classes

> `protected` getParametrs(req: any): [Parameters](../../../components/exec/parameters)

- **req**: any - Google Function request.
- **returns**: [Parameters](../../../components/exec/parameters) - Returns Parameters from request

#### register
Registers all actions in this Google Function.

> `public` register(): void


### Examples

```typescript
class MyCloudFunction extends CommandableCloudFunction {
    private _controller: IMyController;
    ...
    public constructor() {
        base("mygroup", "MyGroup CloudFunction");
        this._dependencyResolver.put(
            "controller",
            new Descriptor("mygroup","controller","*","*","1.0")
        );
    }
}

let googleFunction = new MyCloudFunction();
  
await service.run();
console.log("MyCloudFunction is started");
```
