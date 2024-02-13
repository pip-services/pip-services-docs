---
type: docs
title: "GrpcController"
linkTitle: "GrpcController"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-grpc-java"
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

> `public`  GrpcController(io.grpc.ServiceDescriptor serviceDescriptor)


### Fields

<span class="hide-title-link">

#### _endpoint
The GRPC endpoint that exposes this service.
> `protected` [GrpcEndpoint](../grpc_endpoint) **_endpoint**

#### _dependencyResolver
The dependency resolver.
> `protected` [DependencyResolver](../../../components/refer/dependency_resolver) **_dependencyResolver** = new DependencyResolver(GrpcController._defaultConfig)

#### _logger
The logger.
> `protected` [CompositeLogger](../../../observability/log/composite_logger) **_logger** = new CompositeLogger()

#### _counters
The performance counters.
> `protected` [CompositeCounters](../../../observability/count/composite_counters) **_counters** = new CompositeCounters()

#### _tracer
The tracer.
> `protected` [CompositeTracer](../../../observability/trace/composite_tracer) **_tracer** = new CompositeTracer()

</span>


### Instance methods
#### register
Registers all service routes in the HTTP endpoint.

This method is called by the service and must be overriden in child classes.

> `public` void register()


#### close
Closes the component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context) throws InvalidStateException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

> `public` boolean isOpen()

- **returns**: boolean -True if the endpoint is open with an actively listening GRPC server.


#### instrument
Adds instrumentation to log calls and measures call time. 
It returns a CounterTiming object that is used to end the time measurement.

> `protected` [InstrumentTiming](../../../rpc/trace/instrument_timing) instrument([IContext](../../../components/context/icontext) context, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: String - method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) -Timing object to end the time measurement.


#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### registerInterceptor
Registers a middleware for methods in GRPC endpoint.

> `protected` void registerInterceptor(InterceptorFunc action)

- **action**: InterceptorFunc - an action function that is called when middleware is invoked.


#### registerMethod

Registers a middleware for methods in GRPC endpoint.

> `protected` <TRequest extends GeneratedMessageV3, TResponse extends GeneratedMessageV3> void registerMethod(String name, [Schema](../../../data/validate/schema)a schema, GrpcFunc<TRequest,  StreamObserver<TResponse>> action)

- **name**: string - method name
- **schema**: [Schema](../../../data/validate/schema) - validation schema to validate received parameters.
- **action**: GrpcFunc<TRequest, StreamObserver<TResponse>> - action function that is called when operation is invoked.


#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException, ConfigException

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` void unsetReferences()


### Examples

```java
{@code
  class MyGrpcController extends GrpcController {
      private IMyService _service;
 
      public MyGrpcService() {
          super(myGrpcController.getServiceDescriptor());
          this._dependencyResolver.put("service",new Descriptor("mygroup","service","*","*","1.0"));
      }
 
      public void setReferences(IReferences references) throws ReferenceException, ConfigException {
          super.setReferences(references);
          this._service = this._dependencyResolver.getRequired(IMyController.class, "service");
      }
 
      private void getMydata(MyDataRequest request, StreamObserver<MyDataPage> responseObserver) {
          var context = Context.fromTraceId(request.getTraceId());
          var id = request.getId();
          return this._service.getMyData(context, id);
      }
 
      public void register() {
          this.registerMethod(
                  "get_mydata",
                  null,
                  // new ObjectSchema(true)
                  //     .withOptionalProperty("paging", new PagingParamsSchema())
                  //     .withOptionalProperty("filter", new FilterParamsSchema()),
                  this::getMydata
          );
          // ...
      }
 
      public static void main(String[] args) throws ApplicationException {
          var controller = new MyGrpcController();
          controller.configure(ConfigParams.fromTuples(
                  "connection.protocol", "http",
                  "connection.host", "localhost",
                  "connection.port", 8080
          ));
          controller.setReferences(References.fromTuples(
                  new Descriptor("mygroup","service","default","default","1.0"), _service
          ));
          controller.open("123");
          System.out.println("The GRPC service is running on port 8080");
      }
  }
  }
```


