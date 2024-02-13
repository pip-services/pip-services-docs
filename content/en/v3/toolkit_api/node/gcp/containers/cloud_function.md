---
type: docs
title: "CloudFunction"
linkTitle: "CloudFunction"
gitUrl: "https://github.com/pip-services3-python/pip-services3-gcp-nodex"
description: >
    Abstract Google Function that acts as a container to instantiate and run components and expose them via an external entry point. 
---

**Implements:** [Container](../../../container/containers/container)

### Description
The CloudFunction class allows you to create an Abstract Google Function that acts as a container to instantiate and run components and expose them via an external entry point. 

Importan points

- When handling calls, the "cmd" parameter determines the action that shall be called, while the other parameters are passed to the action itself.  

- The container configuration for this Google Function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.

#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:service:gcp-function:\*:1.0**: (optional) [ICloudFunctionService](../../services/icloud_function_service) services to handle action requests.
- **\*:service:commandable-gcp-function:\*:1.0**: (optional) [ICloudFunctionService](../../services/icloud_function_service) services to handle action requests.

### Constructors
Creates a new instance of this Google Function.

> public constructor(name?: string, description?: string)

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))


### Fields

<span class="hide-title-link">

### _actions
The map of registered actions.
> `protected` **_actions**: { [id: string]: any }

### _config_path
The default path to config file.
> `protected` **_config_path**: str = './config/config.yml'

### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters)

### _dependencyResolver
Dependencies resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

### _tracer
The tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

### _schemas
The map of registred validation schemas.
> `protected` **_schemas**: { [id: string]: [Schema](../../../commons/validate/schema) }

</span>


### Instance methods

#### execute
Executes this Google Function and returns the result.
This method can be overloaded in child classes
if they need to change the default behavior

> `protected` execute(req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)): Promise\<any\>

- **req**: [Request](https://expressjs.com/ru/api.html#req) - the request object (with function arguments)
- **res**: [Response](https://expressjs.com/ru/api.html#res) - the result of the function execution.
- **returns**: Promise\<any\> - the promise.

#### getCommand
Returns command from Google Function request.
This method can be overloaded in child classes

> `protected` getCommand(req: [Request](https://expressjs.com/ru/api.html#req)): string

- **req**: [Request](https://expressjs.com/ru/api.html#req) - Google Function request
- **returns**: string - Returns command from req

#### getCorrelationId
Returns correlationId from Googel Function request.
This method can be overloaded in child classes

> `protected` getCorrelationId(req: [Request](https://expressjs.com/ru/api.html#req)): string

- **req**: [Request](https://expressjs.com/ru/api.html#req) - Google Function request
- **returns**: string - Returns correlationId from req

#### getHandler
Return plugin function

> `public` getHandler(): (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>

- **returns**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\> - plugin function
    - **req**: [Request](https://expressjs.com/ru/api.html#req) - an incoming request object with invocation parameters.
    - **res**: [Response](https://expressjs.com/ru/api.html#res) - an returnning response object with result parameters.

#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` instrument(correlationId: string, name: string): [InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method's name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing) - Timing object to end the time measurement.

#### open
Opens the component.

> `public` open(correlationId: string) :Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### registerAction
Registers an action in this Google Function.

Note: This method has been deprecated. Use CloudFunctionService instead.

> `protected` registerAction(cmd: string, schema: [Schema](../../../commons/validate/schema), action: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise<any>): void 

- **cmd**: str - a action/command name.
- **schema**: [Schema](../../../commons/validate/schema) - a validation schema to validate received parameters.
- **action**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\> - an action function that is called when action is invoked.

#### register
Registers all actions in this Googel Function.

Note: Overloading of this method has been deprecated. Use GoogelFunctionService instead.

> register()

#### registerServices
Registers all Google Function services in the container.

> `protected` registerServices(): void

#### run
Runs this Google Function, loads container configuration,
instantiate components and manage their lifecycle,
makes this function ready to access action calls.

> `public` run(): Promise\<void\>


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```typescript
class MyCloudFunction extends CloudFunction {
    public constructor() {
        base("mygroup", "MyGroup Google Function");
    }
}

let googleFunction = new MyCloudFunction();
   
await service.run();
console.log("MyCloudFunction is started");
```
