---
type: docs
title: "CommandableGoogleFunction"
linkTitle: "CommandableGoogleFunction"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-gcp-nodex"
description: >
    Abstract Google Function function that acts as a container to instantiate and run components
    and expose them via an external entry point.
---

**Extends**: [GoogleFunction](../google_function)

### Description
The CommandableGoogleFunction allows you to create an abstract Google Function function that acts as a container to instantiate and run components and expose them via an external entry point.

**Important points**

- All actions are automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable). Each command is exposed as an action defined by the "cmd" parameter.
  
- Container configuration for this Google Function is stored in *"./config/config.yml"* file. But this path can be overridden by the *CONFIG_PATH* environment variable.
 
- **Note**: This component has been deprecated. Use Google [FunctionService](../../services/google_function_service) instead.


#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:service:google-function:\*:1.0**: (optional) [IGoogleFunctionService](../../services/igoogle_function_service) services to handle action requests.
- **\*:service:commandable-google-function:\*:1.0**: (optional) [IGoogleFunctionService](../../services/igoogle_function_service) services to handle action requests.

### Constructors
Creates a new instance of this Google Function.

> `public` constructor(name: string, description?: string)

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))


### Instance methods

#### getParametrs
Returns body from Google Function request.
This method can be overloaded in child classes

> `protected` getParametrs(req: any): [Parameters](../../../commons/run/parameters)

- **req**: any - Google Function request.
- **returns**: [Parameters](../../../commons/run/parameters) - Returns Parameters from request

#### register
Registers all actions in this Google Function.

> `public` register(): void


### Examples

```typescript
class MyGoogleFunction extends CommandableGoogleFunction {
    private _controller: IMyController;
    ...
    public constructor() {
        base("mygroup", "MyGroup GoogleFunction");
        this._dependencyResolver.put(
            "controller",
            new Descriptor("mygroup","controller","*","*","1.0")
        );
    }
}

let googleFunction = new MyGoogleFunction();
  
await service.run();
console.log("MyGoogleFunction is started");
```
