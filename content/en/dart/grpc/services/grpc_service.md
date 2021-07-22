---
type: docs
title: "GrpcService"
linkTitle: "GrpcService"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-grpc-dart"
description: > 
    Abstract service that receives remote calls via the gRPC protocol.

---

**Implements:** [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IRegisterable](../iregisterable), [IUnreferenceable](../../../commons/refer/iunreferenceable)


### Description

The GrpcService class allows you to create services that receive remote calls via the gRPC protocol.

#### Configuration parameters
- **dependencies**:   
    - **endpoint**: override for gRPC Endpoint dependency    
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
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements as specified by the counter's source.


### Fields

<span class="hide-title-link">

#### endpoint
gRPC endpoint that exposes this service.
> **endpoint**: [GrpcEndpoint](../grpc_endpoint)

#### dependencyResolver
Dependency resolver.
> **dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### logger
Logger.
> **logger**: [CompositeLogger](../../../components/log/composite_logger)

#### counters
Performance counters.
> **counters**: [CompositeCounters](../../../components/count/composite_counters)

</span>


### Instance methods

#### close
Closes the component and frees used resources.

`@override`
> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool -true if the endpoint is open with an actively listening gRPC server.


#### instrument
Adds instrumentation to log calls and measures call time. 
It returns a CounterTiming object that is used to end the time measurement.

> [Timing](../../../components/count/timing) instrument(String correlationId, String name)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **name**: String - method name.
- **returns**: [Timing](../../../components/count/timing) - Timing object to end the time measurement.


#### open
Opens the component.

`@override`
> Future open(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### register
Registers all service routes in the HTTP endpoint.

This method is called by the service and must be overriden in child classes.

`@override`
> void register()


#### registerInterceptor
Registers a middleware for methods in gRPC endpoint.

> void registerInterceptor(grpc.Interceptor action)

- **action**: grpc.Interceptor - an action function that is called when middleware is invoked.

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references) 

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

`@override`
> void unsetReferences()


### Examples

```dart
class MyGrpcService extends MyDataGrpcServiceBase with GrpcService {
    IMyController _controller;
   ...
   MyGrpcService() {
      serviceName = '.. service name ...';
      dependencyResolver.put(
          'controller',
          Descriptor('mygroup','controller','*','*','1.0')
      );
   }
   void setReferences(IReferences references) {
      base.setReferences(references);
      _controller = dependencyResolver.getRequired<IMyController>('controller');
   }
   public register() {
       registerInterceptor(_incrementNumberOfCalls);
       registerService(this);
    }
      Future<grpcService.MyData> getMyData(ServiceCall call, grpcService.MyDataIdRequest request) async{
           var correlationId = request.correlationId;
           var id = request.id;
           var result = await_controller.getMyData(correlationId, id);
           var item = grpcService.MyData();
           // ... convert MyData -> grpcService.MyData
           return item;
       });
       ...
   }
}

var service = MyGrpcService();
service.configure(ConfigParams.fromTuples([
    'connection.protocol', 'http',
    'connection.host', 'localhost',
    'connection.port', 8080
]));

service.setReferences(References.fromTuples([
    Descriptor('mygroup','controller','default','default','1.0'), controller
]));

await service.open('123')
print ('The GRPC service is running on port 8080');
```


