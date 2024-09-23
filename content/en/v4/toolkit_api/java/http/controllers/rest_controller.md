---
type: docs
title: "RestController"
linkTitle: "RestController"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
description: >
    Abstract service that receives remove calls via HTTP/REST protocol.
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IRegisterable](../iregisterable)


### Description

The RestController class allows you to create REST services that receive remote calls via the HTTP/REST protocol.


#### Configuration parameters

- **base_route**: base route for remote URI
- **dependencies**:
    - **endpoint**: override for HTTP Endpoint dependency
    - **controller**: override for Controller dependency
- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **protocol**: connection protocol (http or https)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential**: the HTTPS credentials:
    - **ssl_key_file**: SSL private key in PEM
    - **ssl_crt_file**: SSL certificate in PEM
    - **ssl_ca_file**: certificate authorities (root cerfiticates) in PEM


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../observability/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connection
- **\*:endpoint:http:\*:1.0** - (optional) [HttpEndpoint](../http_endpoint) reference



### Fields

<span class="hide-title-link">

#### _dependencyResolver
Dependency resolver.
> `protected` [DependencyResolver](../../../components/refer/dependency_resolver) **_dependencyResolver** = new DependencyResolver(_defaultConfig)

#### _logger
Logger.
> `protected` [CompositeLogger](../../../observability/log/composite_logger) **_logger** = new CompositeLogger()

#### _counters
Performance counters.
> `protected` [CompositeCounters](../../../observability/count/composite_counters) **_countersv = new CompositeCounters()

#### _baseRoute
Base route.
> `protected` String **_baseRoute**

#### _endpoint
HTTP endpoint that exposes this service.
> `protected` [HttpEndpoint](../http_endpoint) _endpoint

#### _tracer
Tracer.
> `protected` [CompositeTracer](../../../observability/trace/composite_tracer) **_tracer** = new CompositeTracer()

#### _config
Service's configuration paramters.
> `protected` [ConfigParams](../../../components/config/config_params) **_config**

#### _SwaggerController
Swagger service.
> `protected` [ISwaggerController](../iswagger_controller) **_swaggerController**

#### _swaggerEnable
Boolean that defines if the Swagger sevice is enabled or not.
> `protected` boolean **_swaggerEnable** = false

#### _swaggerRoute
Swagger's route.
> `protected` String **_swaggerRoute** = "swagger"

</span>


### Instance methods

#### close
Closes a component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### configure
Configures a component by passing its configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### getTraceId
Returns trace(correlation) ID from a request

> `protected` gString getTraceId(ContainerRequestContext req)

- **req**: ContainerRequestContext - an HTTP request
- **returns**: String - the trace(correlation) ID from request.


#### instrument
Adds instrumentation to log calls and measure call time.
It returns a Timing object that is used to end the time measurement.

> `protected` [InstrumentTiming](../../../rpc/trace/instrument_timing) instrument([IContext](../../../components/context/icontext) context, String name)
 
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: String - method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - InstrumentTiming object to end the time measurement.


#### isOpen
Checks if the component is open.

> `public` boolean isOpen()

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### registerInterceptor
Registers a middleware for a given route in HTTP endpoint.

> `protected` void registerInterceptor(String route, Function<ContainerRequestContext, ?> action)

- **route**: String - command route. Base route will be added to this route
- **action**: Function<ContainerRequestContext, ?> - action function that is called when middleware is invoked.


#### registerOpenApiSpec
Registers the open api spec.

> `protected` void registerOpenApiSpec(String content)

- **content**: String - response header content


#### registerOpenApiSpecFromFile
Registers the open api spec from a file.

> `protected` void registerOpenApiSpecFromFile(String path)

- **path**: String - path to the file


#### registerRoute
Registers a route in HTTP endpoint.

> `protected` void registerRoute(String method, String route, [Schema](../../../data/validate/schema) schema,
            Inflector<ContainerRequestContext, Response> action)

- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. The base route will be added to this route
- **schema**: [Schema](../../../data/validate/schema) - validation schema to validate received parameters.
- **action**: Inflector<ContainerRequestContext, Response> - action function that is called when an operation is invoked.


#### registerRouteWithAuth
Registers a route with authorization in HTTP endpoint.

> `protected` void registerRouteWithAuth(String method, String route, [Schema](../../../data/validate/schema) schema,
                                         AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> authorize,
                                         Inflector<ContainerRequestContext, Response> action)

- **method**: String - HTTP method: "get", "head", "post", "put", "delete"
- **route**: String - command route. The base route will be added to this route
- **schema**: [Schema](../../../data/validate/schema) - validation schema to validate received parameters.
- **authorize**: AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> - authorization interceptor
- **action**: Inflector<ContainerRequestContext, Response> - action function that is called when an operation is invoked.


#### sendCreatedResult
Creates a callback function that sends a newly created object as JSON. The callack function call be called directly or passed as a parameter to business logic components.

If the object is not null, it returns 200 status code. For null results it returns
204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.

> `protected` Response sendCreatedResult(Object result)

- **result**: Object - an execution result
- **returns**: Response - response.


#### sendDeletedResult
Creates a callback function that sends deleted object as JSON.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not null it returns 200 status code.
For null results it returns 204 status code.
If error occur it sends ErrorDescription with approproate status code.


> `protected` Response sendDeletedResult(Object result)

- **result**: Object - an execution result
- **returns**: Response - response.


#### sendError
Sends an error serialized as ErrorDescription object and the appropriate HTTP status code. If status code is not defined, it uses 500 status code.


> `protected` Response sendError(Exception ex) 

- **ex**: Exception - exception
- **returns**: Response - response


#### sendResult
Creates a callback function that sends a result as a JSON object. The callack function call be called directly or passed as a parameter to business logic components.

If the object is not null it returns 200 status code. For null results, it returns
204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.


> `protected` Response sendResult(Object result) 

- **result**: Object - an execution result
- **returns**: Response - response.


#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException, ConfigException

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public`void unsetReferences()

### Abstract methods

#### register
Registers all service routes in a HTTP endpoint.

This method is called by the service and must be overriden
in child classes.

> `public abstract` void register() throws ReferenceException

### Examples

```java
{@code
  class MyRestController extends RestController {
     private IMyService _service;
     ...
     public MyRestController() {
        super();
        this._dependencyResolver.put(
            "service",
            new Descriptor("mygroup","service","*","*","1.0")
        );
     }
 
     public void setReferences(IReferences references) {
        super.setReferences(references);
        this._service = (IMyService)this._dependencyResolver.getRequired("service");
     }
 
     public void register() {
     this.registerRoute(
                  HttpMethod.GET, "/get_mydata",
                  null,
                  this::getData
          );
         ...
     }
 
     private Response getData(ContainerRequestContext req) {
          ...
         }
  }
 
  MyRestController controller = new MyRestController();
  controller.configure(ConfigParams.fromTuples(
      "connection.protocol", "http",
      "connection.host", "localhost",
      "connection.port", 8080
  ));
  controller.setReferences(References.fromTuples(
     new Descriptor("mygroup","service","default","default","1.0"), service
  ));
 
  controller.open("123");
  System.out.println("The REST controller is running on port 8080");
  }
```


### See also
- #### [RestClient](../../clients/rest_client)
