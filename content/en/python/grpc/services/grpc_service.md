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
**dependencies**:   
    - **endpoint**: override for GRPC Endpoint dependency    
    - **controller**: override for Controller dependency    
**connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)    
    - **protocol**: connection protocol: http or https    
    - **host**: host name or IP address    
    - **port**: port number   
    - **uri**: resource URI or connection string with all parameters in it    
**credentials**:   
    - **ssl_key_file**: SSL private key in PEM    
    - **ssl_crt_file**: SSL certificate in PEM    
    - **ssl_ca_file**: certificate authorities (root cerfiticates) in PEM    
 


### Constructors

Creates a new instance of the service.

> GrpcService(service_name: str)

- **service_name**: str - service name.


### Fields

<span class="hide-title-link">

#### _endpoint
The GRPC endpoint that exposes this service.
> **_endpoint**: GrpcEndpoint

#### _dependency_resolver
The dependency resolver.
> **_dependency_resolver** = [DependencyResolver](../../../commons/refer/dependency_resolver)(GrpcService.__default_config)

#### _logger
The logger.
> **_logger** = [CompositeLogger](../../../components/log/composite_logger)()

#### _counters
The performance counters.
> **_counters** = [CompositeCounters](../../../components/count/composite_counters)()

</span>

### Abstract methods

#### register
Registers all service routes in the HTTP endpoint.

This method is called by the service and must be overriden in child classes.

> `abstract` register()


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unset_references
Unsets (clears) previously set references to dependent components.

> unset_references()


### Instance methods


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

- **reerror**: bool -True if the endpoint is open with an actively listening GRPC server.


#### _instrument
Adds instrumentation to log calls and measures call time. 
It returns a CounterTiming object that is used to end the time measurement.

> _instrument(correlation_id: Optional[str], name: str): [CounterTiming](../../../components/cout/counter_timing)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **name**: str - method name.
- **returns**: [CounterTiming](../../../components/cout/counter_timing) - CounterTiming object used to end the time measurement.


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


#### _register_commandable_method
Registers a commandable method in the object's GRPC server (service) by the given name.

> _register_commandable_method(method: str, schema: [Schema](../../../commons/validate/schema), action: Callable[[Optional[str], Optional[str], [Parameters](../../../commons/run/parameters)], None])

- **method**: str - GRPC method name.
- **schema**: [Schema](../../../commons/validate/schema) - schema used for parameter validation.
- **action**: Callable[[Optional[str], Optional[str], [Parameters](../../../commons/run/parameters)], None] - action to perform at the given route.


#### _register_interceptor
Registers a middleware for methods in GRPC endpoint.

> _register_interceptor(interceptor: Callable)

- **interceptor**: Callable - middleware action to perform at the given route.


#### _register_method!
**TODO: this method is not implemented for Python**

Registers a middleware for methods in GRPC endpoint.

> _register_method(name: str, schema: [Schema](../../../commons/validate/schema), action: action: Callable[[Optional[str], Optional[str], [Parameters](../../../commons/run/parameters)], None])

- **name**: str - method name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema to validate received parameters.
- **action**: action: Callable[[Optional[str], Optional[str], [Parameters](../../../commons/run/parameters)], None] - action function that is called when operation is invoked.


### Examples

```python
class MyGrpcService(GrpcService):
    __controller: IMyController
    ...
    def __init__(self):
        suoer().__init__('... path to proto ...', '.. service name ...')
        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup","controller","*","*","1.0")
        )


    def set_references(self, references):
        super().set_references(references)
        self._controller = this._dependency_resolver.get_required("controller")


    def register(self):
        def method(correlation_id, args, getted_method):
            correlationId = call.request.correlationId;
            id = call.request.id;
            self._controller.getMyData(correlationId, id, callback);

        self.register_commadable_method("get_mydata", None, method)
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


