---
type: docs
title: "GrpcController"
linkTitle: "GrpcController"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-grpc-python"
description: > 
    Abstract controller that receives remote calls via the GRPC protocol.

---

**Implements:** [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IRegisterable](../iregisterable), [IUnreferenceable](../../../components/refer/iunreferenceable)


### Description

The GrpcController class allows you to create controllers that receive remote calls via the GRPC protocol.

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

Creates a new instance of the controller.

> GrpcController(controller_name: str)

- **controller_name**: str - controller's name.


### Fields

<span class="hide-title-link">

#### _endpoint
The GRPC endpoint that exposes this controller.
> **_endpoint**: [GrpcEndpoint](../grpc_endpoint)

#### _dependency_resolver
The dependency resolver.
> **_dependency_resolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### _logger
The logger.
> **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

> **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

#### _counters
The performance counters.
> **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

</span>

### Abstract methods

#### register
Registers all controller routes in the HTTP endpoint.

This method is called by the controller and must be overriden in child classes.

> `abstractmethod` register()


### Instance methods

#### _apply_validation
TODO: add description
> _apply_validation(schema: Schema, action: Callable[[InvokeRequest, ServicerContext], Any]): Callable[[InvokeRequest, ServicerContext], Any]

- **schema**: [Schema](../../../components/config/iconfigurable) - TODO: add description
- **action**: Callable[[InvokeRequest, ServicerContext], Any] - TODO: add description
- **returns**: Callable[[InvokeRequest, ServicerContext], Any] - TODO: add description

#### _apply_interceptors
TODO: add description

> _apply_interceptors(action: Callable[[InvokeRequest, ServicerContext], Any]): Callable[[InvokeRequest, ServicerContext], Any]

- **action**: Callable[[InvokeRequest, ServicerContext], Any] - TODO: add description
- **returns**: Callable[[InvokeRequest, ServicerContext], Any] - TODO: add description

#### close
Closes the component and frees used resources.

> close(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chainn.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool -True if the endpoint is open with an actively listening GRPC server.


#### _instrument
Adds instrumentation to log calls and measures call time. 
It returns a CounterTiming object that is used to end the time measurement.

> _instrument(context: Optional[IContext], name: str): [InstrumentTiming](../../../rpc/trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: str - method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - CounterTiming object used to end the time measurement.


#### _instrument_error
Adds instrumentation to error handling.

> _instrument_error(context: Optional[IContext], name: str, err: Exception, reerror=False)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: str - method name.
- **err**: Exception - occured error
- **reerror**: bool - if True - throw error


#### open
Opens the component.

> open(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### _register_interceptor
Registers a middleware for methods in GRPC endpoint.

> _register_interceptor(interceptor: Callable[[InvokeRequest, ServicerContext, Callable], Any])

- **interceptor**: Callable[[InvokeRequest, ServicerContext, Callable], Any] - middleware action to perform at the given route.


#### _register_method

Registers a middleware for methods in GRPC endpoint.

> _register_method(name: str, schema: [Schema](../../../components/config/iconfigurable), action: Callable[[InvokeRequest, ServicerContext], Any])

- **name**: str - method name
- **schema**: [Schema](../../../components/config/iconfigurable) - validation schema to validate received parameters.
- **action**: Callable[[InvokeRequest, ServicerContext], Any] - action function that is called when operation is invoked.

#### _register_method_with_auth
Registers a method with authorization.

> _register_method_with_auth(name: str, schema: [Schema](../../../components/config/iconfigurable), authorize: Callable[[InvokeRequest, ServicerContext, Callable], Any], action: Callable[[InvokeRequest, ServicerContext, Callable], Any])

- **name**: str - a method name
- **schema**: [Schema](../../../components/config/iconfigurable) - a validation schema to validate received parameters.
- **authorize**: Callable[[InvokeRequest, ServicerContext, Callable], Any] - an authorization interceptor
- **action**: Callable[[InvokeRequest, ServicerContext, Callable], Any] - an action function that is called when operation is invoked.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### unset_references
Unsets (clears) previously set references to dependent components.

> unset_references()


### Examples

```python
class MyGrpcController(GrpcController, my_data_pb2_grpc.MyDataController):

    __controller: IMyController

    ...

    def __init__(self):
        suoer().__init__('.. controller name ...')
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
        context = request.context
        id = request.id
        return self._controller.get_my_data(context, id)

    def register(self):
        self._register_interceptor(self.__number_of_calls_interceptor)
        self._register_method("get_mydata", None, method)
        
        ...

controller = MyGrpcController()
controller.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))

controller.set_references(References.from_tuples(
   Descriptor("mygroup","controller","default","default","1.0"), controller
))

controller.open("123")
```


