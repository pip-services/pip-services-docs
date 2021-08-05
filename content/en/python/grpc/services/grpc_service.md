---
type: docs
title: "GrpcService"
linkTitle: "GrpcService"
gitUrl: "https://github.com/pip-services3-python/pip-services3-grpc-python"
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

> GrpcService(service_name: str)

- **service_name**: str - service name.


### Fields

<span class="hide-title-link">

#### _endpoint
The GRPC endpoint that exposes this service.
> **_endpoint**: [GrpcEndpoint](../grpc_endpoint)

#### _dependency_resolver
The dependency resolver.
> **_dependency_resolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
The logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

> **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

#### _counters
The performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)

</span>

### Abstract methods

#### register
Registers all service routes in the HTTP endpoint.

This method is called by the service and must be overriden in child classes.

> `abstractmethod` register()


### Instance methods

#### _apply_validation
TODO: add description
> _apply_validation(schema: Schema, action: Callable[[InvokeRequest, ServicerContext], Any]): Callable[[InvokeRequest, ServicerContext], Any]

- **schema**: [Schema](../../../commons/validate/schema) - TODO: add description
- **action**: Callable[[InvokeRequest, ServicerContext], Any] - TODO: add description
- **returns**: Callable[[InvokeRequest, ServicerContext], Any] - TODO: add description

#### _apply_interceptors
TODO: add description

> _apply_interceptors(action: Callable[[InvokeRequest, ServicerContext], Any]): Callable[[InvokeRequest, ServicerContext], Any]

- **action**: Callable[[InvokeRequest, ServicerContext], Any] - TODO: add description
- **returns**: Callable[[InvokeRequest, ServicerContext], Any] - TODO: add description

#### close
Closes the component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool -True if the endpoint is open with an actively listening GRPC server.


#### _instrument
Adds instrumentation to log calls and measures call time. 
It returns a CounterTiming object that is used to end the time measurement.

> _instrument(correlation_id: Optional[str], name: str): [InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **name**: str - method name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing) - CounterTiming object used to end the time measurement.


#### _instrument_error
Adds instrumentation to error handling.

> _instrument_error(correlation_id: Optional[str], name: str, err: Exception, reerror=False)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **name**: str - method name.
- **err**: Exception - occured error
- **reerror**: bool - if True - throw error


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### _register_interceptor
Registers a middleware for methods in GRPC endpoint.

> _register_interceptor(interceptor: Callable[[InvokeRequest, ServicerContext, Callable], Any])

- **interceptor**: Callable[[InvokeRequest, ServicerContext, Callable], Any] - middleware action to perform at the given route.


#### _register_method

Registers a middleware for methods in GRPC endpoint.

> _register_method(name: str, schema: [Schema](../../../commons/validate/schema), action: Callable[[InvokeRequest, ServicerContext], Any])

- **name**: str - method name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema to validate received parameters.
- **action**: Callable[[InvokeRequest, ServicerContext], Any] - action function that is called when operation is invoked.

#### _register_method_with_auth
Registers a method with authorization.

> _register_method_with_auth(name: str, schema: [Schema](../../../commons/validate/schema), authorize: Callable[[InvokeRequest, ServicerContext, Callable], Any], action: Callable[[InvokeRequest, ServicerContext, Callable], Any])

- **name**: str - a method name
- **schema**: [Schema](../../../commons/validate/schema) - a validation schema to validate received parameters.
- **authorize**: Callable[[InvokeRequest, ServicerContext, Callable], Any] - an authorization interceptor
- **action**: Callable[[InvokeRequest, ServicerContext, Callable], Any] - an action function that is called when operation is invoked.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unset_references
Unsets (clears) previously set references to dependent components.

> unset_references()


### Examples

```python
class MyGrpcService(GrpcService, my_data_pb2_grpc.MyDataServicer):

    __controller: IMyController

    ...

    def __init__(self):
        suoer().__init__('.. service name ...')
        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup","controller","*","*","1.0")
        )

    def add_servicer_to_server(self, server):
        my_data_pb2_grpc.add_MyDataServicer_to_server(self, server)

    def set_references(self, references):
        super().set_references(references)
        self._controller = this._dependency_resolver.get_required("controller")

    def __number_of_calls_interceptor(self, request: InvokeRequest, context: ServicerContext,
                            next: Callable[[InvokeRequest, ServicerContext], Any]): Any:
        self.__number_of_calls += 1
        return next(request, context)

    def __method(request: InvokeRequest, context: ServicerContext):
        correlationId = request.correlationId
        id = request.id
        return self._controller.get_my_data(correlationId, id)

    def register(self):
        self._register_interceptor(self.__number_of_calls_interceptor)
        self._register_method("get_mydata", None, method)
        
        self._register_service(self)
        ...

service = MyGrpcService()
service.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

service.set_references(References.from_tuples(
   Descriptor("mygroup","controller","default","default","1.0"), controller
))

service.open("123")
```


