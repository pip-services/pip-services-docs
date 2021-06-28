---
type: docs
title: "GrpcService"
linkTitle: "GrpcService"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-grpc-nodex"
description: > 
    Abstract service that receives remote calls via the GRPC protocol.

---

**Implements:** [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IRegisterable](../iregisterable), [IUnreferenceable](../../../commons/refer/iunreferenceable)


### Description

The GrpcService class allows you to create services that receive remote calls via the GRPC protocol.

#### Configuration parameters
- **dependencies**:   
    - **endpoint**: override for GRPC Endpoint dependency    
    - **controller**: override for Controller dependency    
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)    
    - **protocol**: connection protocol: http or https    
    - **host**: host name or IP address    
    - **port**: port number   
    - **uri**: resource URI or connection string with all parameters in it    
- **credentials**:   
    - **ssl_key_file**: SSL private key in PEM    
    - **ssl_crt_file**: SSL certificate in PEM    
    - **ssl_ca_file**: certificate authorities (root cerfiticates) in PEM    
 
#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurementsand as specified by the counter's source.
 


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
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _counters
The performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _tracer
The tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

</span>

### Abstract methods

#### register
Registers all service routes in the HTTP endpoint.

This method is called by the service and must be overriden in child classes.

> `public abstract` register()


### Instance methods

#### applyValidation
TODO: add description

> `protected` applyValidation(schema: [Schema](../../../commons/validate/schema), action: (call: any) => Promise\<any\>): (call: any) => Promise\<any\>

- **schema**: [Schema](../../../commons/validate/schema) - TODO: add description
- **action**: (call: any) => Promise\<any\> - TODO: add description
- **returns**: (call: any) => Promise\<any\> - TODO: add description


#### applyInterceptors
TODO: add description

> `protected` applyInterceptors(action: (call: any) => Promise\<any\>): (call: any) => Promise\<any\>

- **action**: (call: any) => Promise\<any\>) - TODO: add description
- **returns**: (call: any) => Promise\<any\> - TODO: add description

#### close
Closes the component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean -True if the endpoint is open with an actively listening GRPC server.


#### instrument
Adds instrumentation to log calls and measures call time. 
It returns a CounterTiming object that is used to end the time measurement.

> `protected` instrument(correlationId: string, name: string): [InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing) -Timing object to end the time measurement.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### registerInterceptor
Registers a middleware for methods in GRPC endpoint.

> `protected` registerInterceptor(action: (call: any, next: (call: any) => Promise\<any\>) => Promise\<any\>): void

- **action**: (call: any, next: (call: any) => Promise\<any\>) => Promise\<any\> - an action function that is called when middleware is invoked.


#### registerMethod

Registers a middleware for methods in GRPC endpoint.

> `protected` registerMethod(name: string, schema: [Schema](../../../commons/validate/schema), action: (call: any) => Promise\<any\>): void

- **name**: string - method name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema to validate received parameters.
- **action**: (call: any) => Promise\<any\> - action function that is called when operation is invoked.

#### registerMethodWithAuth

> `protected` registerMethodWithAuth(name: string, schema: [Schema](../../../commons/validate/schema), authorize: (call: any, next: (call: any) => Promise\<any\>) => Promise\<any\>, action: (call: any) => Promise\<any\>): void

- **name**: string - a method name
- **schema**: [Schema](../../../commons/validate/schema) - a validation schema to validate received parameters.
- **authorize**: (call: any, next: (call: any) => Promise\<any\>) => Promise\<any\> - an authorization interceptor
- **action**: (call: any) => Promise\<any\> - an action function that is called when operation is invoked.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void


### Examples

```typescript
class MyGrpcService extends GrpcService {
   private _controller: IMyController;
   ...
   public constructor() {
      base('... path to proto ...', '.. service name ...');
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
       registerMethod("get_mydata", null, async (call) => {
           let correlationId = call.request.correlationId;
           let id = call.request.id;
           return await this._controller.getMyData(correlationId, id);
       });
       ...
   }
}

let service = new MyGrpcService();
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


