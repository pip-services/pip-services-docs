---
type: docs
title: "LambdaService"
linkTitle: "LambdaService"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-aws-nodex"
description: >
    Abstract service that receives remove calls via the AWS Lambda protocol.
---

**Implements**: [ILambdaService](../ilambda_service), [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description
The LambdaService class allows you to create abstract services that receive remove calls via the AWS Lambda protocol.

**Important points**

This service is intended to work inside LambdaFunction container that exploses registered actions externally.


#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.


### Constructors
Creates an instance of this service.

> `public` constructor(name?: string)

- **name**: string - service name to generate action cmd.

### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
Dependency resolver.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _tracer
Tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

</span>

### Constructors
Creates an instance of this service.

> `public` constructor(name?: string)

- **name**: string - service name to generate action cmd.


### Instance methods

#### act
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
the action shall be called.

- This method shall only be used in testing.

> `public` act(params: any): Promise\<any\>

- **params**: any - action parameters.
- **returns**: Promise\<any\> - results

#### applyInterceptors


> `protected` applyInterceptors(action: (params: any) => Promise\<any\>): (params: any) => Promise\<any\>

- **action**: (params: any) => Promise\<any\> - parameters
- **returns**: (params: any) => Promise\<any\> - results

#### applyValidation
Applies a validation according to a given schema.

> `protected` applyValidation(schema: [Schema](../../../commons/validate/schema), action: (params: any) => Promise\<any\>): (params: any) => Promise\<any\>

- **schema**: [Schema](../../../commons/validate/schema) - validation schema
- **action**: (params: any) => Promise\<any\> - action
- **returns**: (params: any) => Promise\<any\> - results

#### close
Closes a component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### generateActionCmd
Adds .cmd to the name of the command.
> `protected` generateActionCmd(name: string): string

- **name**: string - name of the command
- **returns**: string - T - generated command


#### getActions
Gets all the actions supported by the service.
> `public` getActions(): [LambdaAction[]](../lambda_action)

- **returns**: [LambdaAction[]](../lambda_action) - array with supported actions.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` instrument(correlationId: string, name: string): [InstrumentTiming](../../../rpc/services/instrument_timing) 

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string -  method name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing)  - InstrumentTiming object to end the time measurement.

#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### registerAction
Registers an action in AWS Lambda function.

> `protected` registerAction(name: string, schema: [Schema](../../../commons/validate/schema), action: (params: any) => Promise\<any\>): void

- **name**: string - action name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: (params: any) => Promise\<any\> - action function that is called when an operation is invoked.

#### registerActionWithAuth
Registers an action with authorization.

> `protected` registerActionWithAuth(name: string, schema: Schema, authorize: (call: any, next: (call: any) => Promise\<any\>) => Promise\<any\>, action: (call: any) => Promise\<any\>): void

- **name**: string - action's name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **authorize**: (call: any, next: (call: any) => Promise\<any\> - authorization interceptor
- **action**: (call: any) => Promise\<any\> - action function that is called when an operation is invoked.


#### registerInterceptor
Registers a middleware for actions in AWS Lambda service.

> `protected` registerInterceptor(action: (params: any, next: (params: any) => Promise\<any\>) => Promise\<any\>): void    
     
- **action**: (params: any, next: (params: any) => Promise\<any\>) => Promise\<any\> - action function that is called when middleware is invoked.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references used to locate the component dependencies.

### Abstract methods

#### register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overriden
in child classes.

> `protected abstract` register(): void



### Examples

```typescript
class MyLambdaService extends LambdaService {
   private _controller: IMyController;
   ...
   public constructor() {
      base('v1.myservice');
      this._dependencyResolver.put(
          "controller",
          new Descriptor("mygroup","controller","*","*","1.0")
      );
   }
   public setReferences(references: IReferences): void {
      base.setReferences(references);
      this._controller = this._dependencyResolver.getRequired<IMyController>("controller");
   }
   public register(): void {
       registerAction("get_mydata", null, async (params) => {
           let correlationId = params.correlation_id;
           let id = params.id;
           return await this._controller.getMyData(correlationId, id);
       });
       ...
   }
}

let service = new MyLambdaService();
service.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

service.setReferences(References.fromTuples(
   new Descriptor("mygroup","controller","default","default","1.0"), controller
));

service.open("123");
console.log("The GRPC service is running on port 8080");
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
