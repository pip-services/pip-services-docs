---
type: docs
title: "CloudFunctionController"
linkTitle: "CloudFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-gcp-go"
description: >
    Abstract service that receives remove calls via the Google Function protocol.
---

**Implements**: [ICloudFunctionController](../icloud_function_controller), [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description
The CloudFunctionController class allows you to create a service that receives remove calls via the Google Function protocol.

**Important points**

- This service is intended to work inside an CloudFunction container that exposes registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.

### Constructors
Creates an instance of this service.

> `public` constructor(name?: string)

- **name**: string - name of the service used to generate an action cmd.

### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _tracer
Tracer.
> `protected` **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

</span>

### Instance methods

#### applyInterceptors
Applies interceptors to the action.

> `protected` applyInterceptors(action: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>): (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>

- **action**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\> - action
- **returns**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\> - returned result

#### applyValidation
Performs a validation.

> `protected` applyValidation(schema: [Schema](../../../data/validate/schema), action: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>): (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>

- **schema**: [Schema](../../../data/validate/schema) - schema used in the validation
- **action**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\> - action
- **returns**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\> - returned result


#### close
Closes a component and frees used resources.

> `public` close(correlationId: string): Promise\<void\> 

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### generateActionCmd
Adds '.cmd' to a command name
> `protected` generateActionCmd(name: string): string

- **name**: string - command name
- **returns**: string - command name with '.cmd' added at its end.

#### getActions
Get all actions supported by the service.

> `public` getActions(): [CloudFunctionAction[]](../cloud_function_action)

- **returns**: [CloudFunctionAction[]](../cloud_function_action) - array with supported actions.


#### getCommand
Returns command from Google Function request.

This method can be overloaded in child classes

> `protected` getCommand(req: any): string

- **req**: any - the function request
- **returns**: string - returned command from request.

#### getCorrelationId
Returns correlationId from Google Function request.

This method can be overloaded in child classes

> `protected` getCorrelationId(req: any): string

- **req**: any - the function request
- **returns**: string - returned correlationId from request.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` instrument(correlationId: string, name: string): [InstrumentTiming](../../../rpc/trace/instrument_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method's name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - Timing object to end the time measurement.

#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### registerAction
Registers an action in Google Function function.

> `protected` registerAction(name: string, schema: [Schema](../../../data/validate/schema), action: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>): void

- **name**: string - action name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **action**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\> - action function that is called when the operation is invoked.

#### registerActionWithAuth
Registers an action with authorization.

> `protected` registerActionWithAuth(name: string, schema: Schema, authorize: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res), next: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>) => Promise\<any\>, action: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>): void

- **name**: string - action's name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **authorize**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res), next: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>) => Promise\<any\> - authorization interceptor
- **action**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\> - action function that is called when the operation is invoked.


#### registerInterceptor
Registers a middleware for actions in Google Function service.

> `protected` registerInterceptor(action: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res), next: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>) => Promise\<any\>): void

- **action**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res), next: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>) => Promise\<any\> - action function that is called when middleware is invoked.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



### Abstract methods

#### register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overridden
in child classes.

> `protected abstract` register(): void

### Examples

```typescript
class MyCloudFunctionController extends CloudFunctionController {
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
       registerAction("get_mydata", null, async (req, res) => {
           let params = req.body;
           let traceId = params.trace_id;
           let id = params.id;
           const result = await this._controller.getMyData(traceId, id);
           
           res.send(result);
       });
       ...
   }
}

let service = new MyCloudFunctionController();

service.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

service.setReferences(References.fromTuples(
   new Descriptor("mygroup","controller","default","default","1.0"), controller
));

service.open("123_service");
```
