---
type: docs
title: "LambdaFunction"
linkTitle: "LambdaFunction"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-aws-nodex"
description: >
    Abstract AWS Lambda function that acts as a container to instantiate and run components, 
    and expose them via an external entry point. 
---

**Extends:** [Container](../../../container/containers/container)

### Description
The LambdaFunction class allows you to create an abstract AWS Lambda function that acts as a container to instantiate and run components, and expose them via an external entry point.

**Important points**

- When handling calls the "cmd" parameter determines what action shall be called, while the other parameters are passed to the action itself.

- Container configuration for this Lambda function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:service:lambda:\*:1.0**: (optional) [ILambdaService](../../services/ilambda_service) services to handle action requests
- **\*:service:commandable-lambda:\*:1.0**: (optional) [ILambdaService](../../services/ilambda_service) services to handle action requests

### Constructors
Creates a new instance of this lambda function.

> `public` constructor(name: string, description?: string)

- **name**: string - (optional) a container name (accessible via [ContextInfo](../../../components/info/context_info)).
- **description**: string - (optional) container description (accessible via [ContextInfo](../../../components/info/context_info)).

### Fields

<span class="hide-title-link">

#### _actions
Map containing registered actions.
> `protected` **_actions**: { [id: string]: any }

#### _configPath
Default path to config file.
> `protected` **_configPath**: string = './config/config.yml'

#### _counters
Performance counters.
> `protected` **_counters** = new [CompositeCounters()](../../../components/count/composite_counters)

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver** = new [DependencyResolver()](../../../commons/refer/dependency_resolver)

#### _schemas
Map of registred validation schemas.
> `protected` **_schemas**: { [id: string]: [Schema](../../../commons/validate/schema) }

#### _tracer
Tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer) = new [CompositeTracer()](../../../components/trace/composite_tracer)


</span>


### Instance methods

#### act
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
what action shall be called.

- This method shall only be used in testing.

> `public` act(params: any): Promise\<any\>

- **params**: any - action parameters.
- **returns**: Promise\<any\> - result

#### execute
Executes this AWS Lambda function and returns the result.
This method can be overloaded in child classes
if it is necessary to change the default behavior

> `protected` execute(event: any): Promise\<any\>

- **event**: any - event parameters (or function arguments)
- **returns**: Promise\<any\> - result of the function execution.

#### getHandler
Gets an entry point into this lambda function.

> `public` getHandler(): (event: any) => Promise<\any\>

- **returns**: (event: any) => Promise<\any\> - incoming event object with invocation parameters.

#### instrument
Gets entry point into this lambda function.

> `protected` instrument(correlationId: string, name: string): [InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing) - object to end the time measurement.

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### register
Registers all actions in this lambda function.

- Note: Overloading of this method has been deprecated. Use [LambdaService](../../services/lambda_service) instead.

> `protected` register(): void 


#### registerAction
Registers an action in this lambda function.
 
- Note: This method has been deprecated. Use [LambdaService](../../services/lambda_service) instead.

> `protected` registerAction(cmd: string, schema: [Schema](../../../commons/validate/schema), action: (params: any) => Promise\<any\>): void

- **cmd**: string - action/command name.
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: (params: any) => Promise\<any\> - action function that is called when the action is invoked.


#### registerServices
Registers all lambda services in the container.

> `protected` registerServices(): void


#### run
Runs this lambda function, loads container configuration,
instantiates components and manages their lifecycle.
Makes this function ready to access action calls.

> `public` run(): Promise\<void\> 


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```typescript
class MyLambdaFunction extends LambdaFunction {
    public constructor() {
        base("mygroup", "MyGroup lambda function");
    }
}
let lambda = new MyLambdaFunction();
 
await service.run();
console.log("MyLambdaFunction is started");
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
