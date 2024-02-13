---
type: docs
title: "RestController"
linkTitle: "RestController"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-http-python"
description: >
    Abstract controller that receives remove calls via HTTP/REST protocol.
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IRegisterable](../iregisterable)


### Description

The RestController class allows you to create REST controllers that receive remote calls via the HTTP/REST protocol.


#### Configuration parameters

- **base_route**: base route for remote URI
- **dependencies**:
    - **endpoint**: override for HTTP Endpoint dependency
    - **controller**: override for Controller dependency
- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **protocol**: connection protocol (http or https)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential**: the HTTPS credentials:
    - **ssl_key_file**: SSL private key in PEM
    - **ssl_crt_file**: SSL certificate in PEM
    - **ssl_ca_file**: certificate authorities (root cerfiticates) in PEM


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../components/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection
- **\*:endpoint:http:\*:1.0** - (optional) [HttpEndpoint](../http_endpoint) reference



### Fields

<span class="hide-title-link">

#### _dependency_resolver
Dependency resolver.
> **_dependency_resolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
Logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### _debug
Boolean that set debugging to True or False.
> **_debug** = False

#### _base_route
Base route.
> **_base_route**: str

#### _endpoint
HTTP endpoint that exposes this controller.
> **_endpoint**: [HttpEndpoint](../http_endpoint)

#### _tracer
Tracer.
> **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer) = CompositeTracer()

#### _config
Controller's configuration paramters.
> **_config**: [ConfigParams](../../../commons/config/config_params)

#### _swagger_controller
Swagger controller.
> **_swagger_controller**: [ISwaggerController](../iswagger_controller)

#### _swagger_enabled
Boolean that defines if the Swagger sevice is enabled or not.
> **_swagger_enabled** = False

#### _swagger_route
Swagger's route.
> **_swagger_route** = 'swagger'

</span>


### Instance methods

#### close
Closes a component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### _get_correlation_id
Returns correlationId from a request

> _get_correlation_id(self): Optional[str]

- **returns**: Optional[str] - the correlation id from request.


#### _instrument
Adds instrumentation to log calls and measure call time.
It returns a Timing object that is used to end the time measurement.

> _instrument(correlation_id: Optional[str], name: str): [InstrumentTiming](../instrument_timing)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **name**: str - method name.
- **returns**: [InstrumentTiming](../instrument_timing) - InstrumentTiming object to end the time measurement.


#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - True if the component has been opened and False otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### register_interceptor
Registers a middleware for a given route in HTTP endpoint.

> register_interceptor(route: str, action: Callable)

- **route**: str - command route. Base route will be added to this route
- **action**: Callable - action function that is called when middleware is invoked.


#### _register_open_api_spec
Registers the open api spec.

> _register_open_api_spec(content: str)

- **content**: str - response header content


#### _register_open_api_spec_from_file
Registers the open api spec from a file.

> _register_open_api_spec_from_file(path: str)

- **path**: str - path to the file



#### register_route
Registers a route in HTTP endpoint.

> register_route(method: str, route: str, schema: [Schema](../../../commons/validate/schema), handler: Callable)

- **method**: str - HTTP method: "get", "head", "post", "put", "delete"
- **route**: str - command route. The base route will be added to this route
- **schema**: [Schema](../../../commons/validate/schema) - validation schema to validate received parameters.
- **handler**: Callable - action function that is called when an operation is invoked.


#### register_route_with_auth
Registers a route with authorization in HTTP endpoint.

> register_route_with_auth(method: str, route: str, schema: [Schema](../../../commons/validate/schema), authorize: Callable, action: Callable)

- **method**: str - HTTP method: "get", "head", "post", "put", "delete"
- **route**: str - command route. The base route will be added to this route
- **schema**: [Schema](../../../commons/validate/schema) - validation schema to validate received parameters.
- **authorize**: Callable - authorization interceptor
- **action**: Callable - action function that is called when an operation is invoked.



#### send_created_result
Creates a callback function that sends newly created object as JSON. That callack function can be called directly or passed as a parameter to business logic components. If object is not None it returns 201 status code. For None results it returns 204 status code. If error occur it sends ErrorDescription with approproate status code.

> send_created_result(result: Any): Optional[str]

- **result**: Any - an execution result
- **returns**: Optional[str] - JSON response text


#### send_deleted_result
Creates a callback function that sends a newly deleted object as JSON. The callack function can be called directly or passed as a parameter to business logic components. If the object is not None, it returns 200 status code. For None results it returns 204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.


> send_deleted_result(result: Any = None): Optional[str]

- **result**: Any - body object to result.
- **returns**: Optional[str] - JSON response text


#### send_error
Sends an error serialized as ErrorDescription object and the appropriate HTTP status code. If status code is not defined, it uses 500 status code.


> send_error(error: Any): str

- **error**: Any - error object to be sent.
- **returns**: str - JSON response text


#### send_result
Creates a callback function that sends a result as a JSON object. The callack function can be called directly or passed as a parameter to business logic components.

If the object is not None it returns 200 status code. For None results, it returns
204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.


> send_result(result: Any): Optional[str]

- **result**: Any - body object to result.
- **returns**: Optional[str] - JSON response text


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unset_references
Unsets (clears) previously set references to dependent components.

> unset_references()


### Abstract methods

#### register
Registers all controller routes in a gRPC endpoint.

This method is called by the controller and must be overriden
in child classes.

> `abstractmethod` register()


### Examples

```python
class MyRestController(RestController):
    _controller = None
    # ...
    def __init__(self):
        super(MyRestController, self).__init__()
        self._dependencyResolver.put("controller", Descriptor("mygroup","controller","*","*","1.0"))

    def set_references(self, references):
        super(MyRestController, self).set_references(references)
        self._controller = self._dependencyResolver.get_required("controller")

    def register():
        # ...

controller = MyRestController()
controller.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                               "connection.host", "localhost",
                                               "connection.port", 8080))
controller.set_references(References.from_tuples(Descriptor("mygroup","controller","default","default","1.0"), controller))
controller.open("123")
```


### See also
- #### [RestClient](../../clients/rest_client)
