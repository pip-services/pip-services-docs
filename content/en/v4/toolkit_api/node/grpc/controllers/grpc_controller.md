---
type: docs
title: "GrpcController"
linkTitle: "GrpcController"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-grpc-node"
description: > 
    Abstract service that receives remote calls via the GRPC protocol.

---

**Implements:** [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IRegisterable](../iregisterable), [IUnreferenceable](../../../components/refer/iunreferenceable)


### Description

The GrpcController class allows you to create services that receive remote calls via the GRPC protocol.

#### Configuration parameters
- **dependencies**:   
    - **endpoint**: override for GRPC Endpoint dependency    
    - **controller**: override for Controller dependency    
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)    
    - **protocol**: connection protocol: http or https    
    - **host**: host name or IP address    
    - **port**: port number   
    - **uri**: resource URI or connection string with all parameters in it    
- **credentials**:   
    - **ssl_key_file**: SSL private key in PEM    
    - **ssl_crt_file**: SSL certificate in PEM    
    - **ssl_ca_file**: certificate authorities (root cerfiticates) in PEM    
 
#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurementsand as specified by the counter's source.
 


### Constructors

Creates a new instance of the service.

> `public` constructor(serviceOrPath: any, serviceName?: string, packageOptions?: any)

- **serviceOrPath**: any - TODO: add description
- **serviceName**: string - service name.
- **packageOptions**: any - TODO: add description


### Fields

<span class="hide-title-link">

#### _endpoint
The GRPC endpoint that exposes this service.
> `protected` **_endpoint**: [GrpcEndpoint](../grpc_endpoint)

#### _dependencyResolver
The dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _counters
The performance counters.
> `protected` **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### _tracer
The tracer.
> `protected` **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

</span>

### Abstract methods

#### register
Registers all service routes in the HTTP endpoint.

This method is called by the service and must be overriden in child classes.

> `public abstract` register()


### Instance methods

#### applyValidation
Performs a validation.

> `protected` applyValidation(schema: [Schema](../../../data/validate/schema), action: (call: any) => Promise\<any\>): (call: any) => Promise\<any\>

- **schema**: [Schema](../../../data/validate/schema) - TODO: add description
- **action**: (call: any) => Promise\<any\> - TODO: add description
- **returns**: (call: any) => Promise\<any\> - TODO: add description


#### applyInterceptors
Applies given action to the interseptors

> `protected` applyInterceptors(action: (call: any) => Promise\<any\>): (call: any) => Promise\<any\>

- **action**: (call: any) => Promise\<any\>) - TODO: add description
- **returns**: (call: any) => Promise\<any\> - TODO: add description

#### close
Closes the component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean -True if the endpoint is open with an actively listening GRPC server.


#### instrument
Adds instrumentation to log calls and measures call time. 
It returns a CounterTiming object that is used to end the time measurement.

> `protected` instrument(context: [IContext](../../../components/context/icontext), name: string): [InstrumentTiming](../../../rpc/trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) -Timing object to end the time measurement.


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### registerInterceptor
Registers a middleware for methods in GRPC endpoint.

> `protected` registerInterceptor(action: (call: any, next: (call: any) => Promise\<any\>) => Promise\<any\>): void

- **action**: (call: any, next: (call: any) => Promise\<any\>) => Promise\<any\> - an action function that is called when middleware is invoked.


#### registerMethod

Registers a middleware for methods in GRPC endpoint.

> `protected` registerMethod(name: string, schema: [Schema](../../../data/validate/schema), action: (call: any) => Promise\<any\>): void

- **name**: string - method name
- **schema**: [Schema](../../../data/validate/schema) - validation schema to validate received parameters.
- **action**: (call: any) => Promise\<any\> - action function that is called when operation is invoked.

#### registerMethodWithAuth
Registers a method with authorization.

> `protected` registerMethodWithAuth(name: string, schema: [Schema](../../../data/validate/schema), authorize: (call: any, next: (call: any) => Promise\<any\>) => Promise\<any\>, action: (call: any) => Promise\<any\>): void

- **name**: string - a method name
- **schema**: [Schema](../../../data/validate/schema) - a validation schema to validate received parameters.
- **authorize**: (call: any, next: (call: any) => Promise\<any\>) => Promise\<any\> - an authorization interceptor
- **action**: (call: any) => Promise\<any\> - an action function that is called when operation is invoked.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void


### Examples

```typescript
class MyGrpcController extends GrpcController {
   private _controller: IMyController;
   ...
   public constructor() {
      super('... path to proto ...', '.. service name ...');
      this._dependencyResolver.put(
          "controller",
          new Descriptor("mygroup","controller","*","*","1.0")
      );
   }
   public setReferences(references: IReferences): void {
      super.setReferences(references);
      this._controller = this._dependencyResolver.getRequired<IMyController>("controller");
   }
   public register(): void {
       registerMethod("get_mydata", null, async (call) => {
           let context = call.request.context;
           let id = call.request.id;
           return await this._controller.getMyData(context, id);
       });
       ...
   }
}

let service = new MyGrpcController();
service.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

service.setReferences(References.fromTuples(
   new Descriptor("mygroup","controller","default","default","1.0"), controller
));

await service.open("123");
console.log("The GRPC service is running on port 8080");
```


