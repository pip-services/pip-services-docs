---
type: docs
title: "GrpcController"
linkTitle: "GrpcController"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-grpc-dart"
description: > 
    Abstract controller that receives remote calls via the gRPC protocol.

---

**Implements:** [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IRegisterable](../iregisterable), [IUnreferenceable](../../../components/refer/iunreferenceable)


### Description

The GrpcController class allows you to create controllers that receive remote calls via the gRPC protocol.

#### Configuration parameters
- **dependencies**:   
    - **endpoint**: override for gRPC Endpoint dependency    
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
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements as specified by the counter's source.


### Fields

<span class="hide-title-link">

#### endpoint
gRPC endpoint that exposes this controller.
> **endpoint**: [GrpcEndpoint](../grpc_endpoint)?

#### dependencyResolver
Dependency resolver.
> **dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### logger
Logger.
> **logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### tracer
The tracer.
> **tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

#### counters
Performance counters.
> **counters**: [CompositeCounters](../../../components/count/composite_counters)

</span>


### Instance methods

#### close
Closes the component and frees used resources.

`@override`
> Future close(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool -true if the endpoint is open with an actively listening gRPC server.


#### instrument
Adds instrumentation to log calls and measure call time.
It returns a Timing object that is used to end the time measurement.

> [InstrumentTiming](../../../rpc/trace/instrument_timing) instrument(IContext? context, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: String - method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - CounterTiming object used to end the time measurement.


#### open
Opens the component.

`@override`
> Future open(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### register
Registers all controller's routes in the HTTP endpoint.

This method is called by the controller and must be overriden in child classes.

`@override`
> void register()

#### registerCommadableMethod
Registers a commandable method in this objects GRPC server (controller) by the given name.

> void registerCommadableMethod(String method, [Schema?](../../../data/validate/schema) schema, Future\<dynamic\> Function(IContext? context, [Parameters](../../../components/exec/parameters) args) action)

- **method**: String - the GRPC method name.
- **schema**: [Schema?](../../../data/validate/schema) - the schema to use for parameter validation.
- **action**: Future\<dynamic\> Function(IContext? context, [Parameters](../../../components/exec/parameters) args) - the action to perform at the given route.

#### registerInterceptor
Registers a middleware for methods in gRPC endpoint.

> void registerInterceptor(grpc.Interceptor action)

- **action**: grpc.Interceptor - an action function that is called when middleware is invoked.

#### registerController
Registers a controller with related implementation

> void registerController(grpc.Controller implementation)

- **implementation**: grpc.Controller - controller implementation methods.

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references) 

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

`@override`
> void unsetReferences()


### Examples

```dart
class MyGrpcController extends MyDataGrpcControllerBase with GrpcController {
    IMyController _controller;
   ...
   MyGrpcController() {
      controllerName = '.. controller name ...';
      dependencyResolver.put(
          'controller',
          Descriptor('mygroup','controller','*','*','1.0')
      );
   }
   
   void setReferences(IReferences references) {
      base.setReferences(references);
      _controller = dependencyResolver.getRequired<IMyController>('controller');
   }

   void register() {
       registerInterceptor(_incrementNumberOfCalls);
       registerController(this);
    }
      Future<grpcController.MyData> getMyData(ControllerCall call, grpcController.MyDataIdRequest request) async{
           var context = request.context;
           var id = request.id;
           var result = await_controller.getMyData(context, id);
           var item = grpcController.MyData();
           // ... convert MyData -> grpcController.MyData
           return item;
       });
       ...
   }
}

var controller = MyGrpcController();
controller.configure(ConfigParams.fromTuples([
    'connection.protocol', 'http',
    'connection.host', 'localhost',
    'connection.port', 8080
]));

controller.setReferences(References.fromTuples([
    Descriptor('mygroup','controller','default','default','1.0'), controller
]));

await controller.open('123')
print ('The GRPC controller is running on port 8080');
```


