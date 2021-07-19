---
type: docs
title: "RestService"
linkTitle: "RestService"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
description: >
    Abstract service that receives remove calls via HTTP/REST protocol.
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IRegisterable](../iregisterable)


### Description

The RestService class allows you to create REST services that receive remote calls via the HTTP/REST protocol.


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

#### dependencyResolver
Dependency resolver.
> **dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### logger
Logger.
> **logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### counters
Performance counters.
> **counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### baseRoute
Base route.
> **baseRoute**: String

#### endpoint
HTTP endpoint that exposes this service.
> **endpoint**: [HttpEndpoint](../http_endpoint)

#### _config
Service's configuration paramters.
> **_config**: [ConfigParams](../../../commons/config/config_params)

</span>


### Instance methods

#### close
Closes a component and frees used resources.

`@override`
> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### instrument
Adds instrumentation to log calls and measure call time.
It returns a Timing object that is used to end the time measurement.

> [Timing](../../../components/counnt/timing) instrument(String correlationId, String name)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **name**: String - method name.
- **returns**: [Timing](../../../components/counnt/timing) - InstrumentTiming object to end the time measurement.


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

`@override`
> Future open(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### register
Registers all service routes in a HTTP endpoint.

This method is called by the service and must be overriden
in child classes.

`@override`
> void register()


#### registerInterceptor
Registers a middleware for a given route in HTTP endpoint.

> void registerInterceptor(String route, action(angel.RequestContext req, angel.ResponseContext res))

- **route**: String - command route. Base route will be added to this route
- **action**: action(angel.RequestContext req, angel.ResponseContext res) - action function that is called when middleware is invoked.


#### registerRoute
Registers a route in HTTP endpoint.

> void registerRoute(String method, String route, Schema schema, action(angel.RequestContext req, angel.ResponseContext res))

- **method**: String - HTTP method: "get", "head", "post", "put", "delete"
- **route**: String - command route. The base route will be added to this route
- **schema**: [Schema](../../../commons/validate/schema) - validation schema to validate received parameters.
- **action**: action(angel.RequestContext req, angel.ResponseContext res)- action function that is called when an operation is invoked.


#### registerRouteWithAuth
Registers a route with authorization in HTTP endpoint.

> void registerRouteWithAuth(String method, String route, [Schema](../../../commons/validate/schema) schema, authorize(angel.RequestContext req, angel.ResponseContext res, next()), action(angel.RequestContext req, angel.ResponseContext res))

- **method**: String - HTTP method: "get", "head", "post", "put", "delete"
- **route**: String - command route. The base route will be added to this route
- **schema**: [Schema](../../../commons/validate/schema) - validation schema to validate received parameters.
- **authorize**: authorize(angel.RequestContext req, angel.ResponseContext res, next()) - authorization interceptor
- **action**: action(angel.RequestContext req, angel.ResponseContext res) - action function that is called when an operation is invoked.


#### sendCreatedResult
Creates a callback function that sends a newly created object as JSON. The callack function call be called directly or passed as a parameter to business logic components.

If the object is not null, it returns 200 status code. For null results it returns
204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.

> void sendCreatedResult(angel.RequestContext req, angel.ResponseContext res, err, result)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **err**: dynamic - an execution error
- **result**: dynamic - an execution result


#### sendDeletedResult
Creates a callback function that sends deleted object as JSON.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not null it returns 200 status code.
For null results it returns 204 status code.
If error occur it sends ErrorDescription with approproate status code.


> void sendDeletedResult(angel.RequestContext req, angel.ResponseContext res, err, result)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **result**: dynamic - body object to result.


#### sendError
Sends an error serialized as ErrorDescription object and the appropriate HTTP status code. If status code is not defined, it uses 500 status code.


> void sendError(angel.RequestContext req, angel.ResponseContext res, error)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **error**: dynamic - error object to be sent.


#### sendResult
Creates a callback function that sends a result as a JSON object. The callack function call be called directly or passed as a parameter to business logic components.

If the object is not null it returns 200 status code. For null results, it returns
204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.


> void sendResult(angel.RequestContext req, angel.ResponseContext res, err, result)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **error**: dynamic - error object to be sent.
- **result**: dynamic - body object to result.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references) 

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

`@override`
> void unsetReferences()


### Examples

```dart
class MyRestService extends RestService {
    IMyController _controller;
   ...
   MyRestService(): base() {
      dependencyResolver.put(
          'controller',
          Descriptor('mygroup','controller','*','*','1.0')
      );
   }
   void setReferences(references: IReferences) {
      base.setReferences(references);
      _controller = dependencyResolver.getRequired<IMyController>('controller');
   }
   void register() {
       registerRoute('get', 'get_mydata', null, (req, res)  {
           var correlationId = req.param('correlation_id');
           var id = req.param('id');
           var result = await _controller.getMyData(correlationId, id);
           sendResult(req, res, null, result);
       });
       ...
   }
}

var service = MyRestService();
service.configure(ConfigParams.fromTuples([
    'connection.protocol', 'http',
    'connection.host', 'localhost',
    'connection.port', 8080
]));

service.setReferences(References.fromTuples([
   Descriptor('mygroup','controller','default','default','1.0'), controller
]));

await service.open('123');
print('The REST service is running on port 8080');
```


### See also
- #### [RestClient](../../clients/rest_client)
