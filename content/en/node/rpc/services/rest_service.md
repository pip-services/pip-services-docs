---
type: docs
title: "RestService"
linkTitle: "RestService"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
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

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### _debug
Boolean that set debugging to True or False.
> `protected` **_debug**: boolean = false

#### _baseRoute
Base route.
> `protected` **_baseRoute**: string

#### _endpoint
HTTP endpoint that exposes this service.
> `protected` **_endpoint**: [HttpEndpoint](../http_endpoint)

#### _tracer
Tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer) = CompositeTracer()

#### _config
Service's configuration paramters.
> `protected` **_config**: [ConfigParams](../../../commons/config/config_params)

#### _swaggerService
Swagger service.
> `protected` **_swaggerService**: [ISwaggerService](../iswagger_service)

#### _swaggerEnable
Boolean that defines if the Swagger sevice is enabled or not.
> `protected` **_swaggerEnable**: boolean = false

#### _swaggerRoute
Swagger's route.
> `protected` **_swaggerRoute**: string = 'swagger'

</span>


### Instance methods

#### close
Closes a component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### getCorrelationId
Returns correlationId from a request

> `protected` getCorrelationId(req: any): string

- **req**: any - an HTTP request
- **returns**: string - the correlation id from request.


#### instrument
Adds instrumentation to log calls and measure call time.
It returns a Timing object that is used to end the time measurement.

> `protected` instrument(correlationId: string, name: string): [InstrumentTiming](../instrument_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method name.
- **returns**: [InstrumentTiming](../instrument_timing) - InstrumentTiming object to end the time measurement.


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### registerInterceptor
Registers a middleware for a given route in HTTP endpoint.

> `protected` registerInterceptor(route: string, action: (req: any, res: any, next: () => void) => void): void

- **route**: string - command route. Base route will be added to this route
- **action**: (req: any, res: any, next: () => void) => void - action function that is called when middleware is invoked.


#### registerOpenApiSpec
Registers the open api spec.

> `protected` registerOpenApiSpec(content: string)

- **content**: string - response header content


#### registerOpenApiSpecFromFile
Registers the open api spec from a file.

> `protected` registerOpenApiSpecFromFile(path: string)

- **path**: string - path to the file



#### registerRoute
Registers a route in HTTP endpoint.

> `protected` registerRoute(method: string, route: string, schema: [Schema](../../../commons/validate/schema), action: (req: any, res: any) => void): void

- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. The base route will be added to this route
- **schema**: [Schema](../../../commons/validate/schema) - validation schema to validate received parameters.
- **action**: (req: any, res: any) => void - action function that is called when an operation is invoked.


#### registerRouteWithAuth
Registers a route with authorization in HTTP endpoint.

> `protected` registerRouteWithAuth(method: string, route: string, schema: Schema, authorize: (req: any, res: any, next: () => void) => void, action: (req: any, res: any) => void): void

- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. The base route will be added to this route
- **schema**: [Schema](../../../commons/validate/schema) - validation schema to validate received parameters.
- **authorize**: (req: any, res: any, next: () => void) => void - authorization interceptor
- **action**: (req: any, res: any) => void - action function that is called when an operation is invoked.



#### sendCreatedResult
Creates a callback function that sends a newly created object as JSON. The callack function call be called directly or passed as a parameter to business logic components.

If the object is not null, it returns 200 status code. For null results it returns
204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.

> `protected` sendCreatedResult(req: any, res: any, result: any): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **result**: any - an execution result


#### sendDeletedResult
Creates a callback function that sends deleted object as JSON.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not null it returns 200 status code.
For null results it returns 204 status code.
If error occur it sends ErrorDescription with approproate status code.


> `protected` sendDeletedResult(req: any, res: any, result: any): void

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **result**: any - body object to result.


#### sendError
Sends an error serialized as ErrorDescription object and the appropriate HTTP status code. If status code is not defined, it uses 500 status code.


> `protected` sendError(req: any, res: any, error: any): void 

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **error**: any - error object to be sent.


#### sendResult
Creates a callback function that sends a result as a JSON object. The callack function call be called directly or passed as a parameter to business logic components.

If the object is not null it returns 200 status code. For null results, it returns
204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.


> `protected` sendResult(req: any, res: any, result: any): void 

- **req**: any - an HTTP request
- **res**: any - an HTTP response
- **result**: any - body object to result.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void

### Abstract methods

#### register
Registers all service routes in a HTTP endpoint.

This method is called by the service and must be overriden
in child classes.

> `public abstract` register(): void

### Examples

```typescript
class MyRestService extends RestService {
   private _controller: IMyController;
   ...
   public constructor() {
      base();
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
       registerRoute("get", "get_mydata", null, (req, res) => {
           let correlationId = req.param("correlation_id");
           let id = req.param("id");
           let promise = this._controller.getMyData(correlationId, id);
           this.sendResult(req, res, promise);
       });
       ...
   }
}

let service = new MyRestService();
service.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

service.setReferences(References.fromTuples(
   new Descriptor("mygroup","controller","default","default","1.0"), controller
));

await service.open("123");
console.log("The REST service is running on port 8080");
```


### See also
- #### [RestClient](../../clients/rest_client)
