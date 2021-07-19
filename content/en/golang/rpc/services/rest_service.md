---
type: docs
title: "RestService"
linkTitle: "RestService"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rpc-go"
description: >
    Abstract service that receives remove calls via HTTP/REST protocol.
---

**Implements:** [IRegisterable](../iregisterable)


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

### Constructors

#### InheritRestService
InheritRestService is create new instance of RestService

> InheritRestService(overrides IRestServiceOverrides) *RestService

- **overrides**: IRestServiceOverrides - ingerited rest service


### Fields

<span class="hide-title-link">

#### DependencyResolver
Dependency resolver.
> **DependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### Logger
Logger.
> **Logger**: [CompositeLogger](../../../components/log/composite_logger)

#### Counters
Performance counters.
> **Counters**: [CompositeCounters](../../../components/count/composite_counters)

#### BaseRoute
Base route.
> **BaseRoute**: string

#### Tracer
Tracer.
> **Tracer**: [*CompositeTracer](../../../components/trace/composite_tracer)

#### Endpoint
HTTP endpoint that exposes this service.
> **Endpoint**: [HttpEndpoint](../http_endpoint)

#### config
Service's configuration paramters.
> **config**: [ConfigParams](../../../commons/config/config_params)


#### SwaggerService
Swagger service.
> **SwaggerService**: [ISwaggerService](../iswagger_service)

#### SwaggerEnable
Boolean that defines if the Swagger sevice is enabled or not.
> **SwaggerEnable**: bool = false

#### SwaggerRoute
Swagger's route.
> **SwaggerRoute**: string = 'swagger'

</span>


### Methods

#### Close
Closes a component and frees used resources.

> (c [*RestService]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not closed.


#### Configure
Configures a component by passing its configuration parameters.

> (c [*RestService]()) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### Instrument
Adds instrumentation to log calls and measure call time.
It returns a Timing object that is used to end the time measurement.

> (c [*RestService]()) Instrument(correlationId string, name string) [*InstrumentTiming](../instrument_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method name.
- **returns**: [*InstrumentTiming](../instrument_timing) - instrument Timing object to end the time measurement.

#### GetCorrelationId
GetCorrelationId method returns CorrelationId from request

> (c [*RestService]()) GetCorrelationId(req *http.Request) string

- **req**: *http.Request - an HTTP request
- **returns**: string - correlation_id or empty string

#### IsOpen
Checks if the component is open.

> (c [*RestService]()) IsOpen() bool

- **returns**: bool - True if the component has been opened and False otherwise.


#### Open
Opens the component.

> (c [*RestService]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error -  error or nil no errors occured.


#### RegisterInterceptor
Registers a middleware for a given route in HTTP endpoint.

> (c [*RestService]()) RegisterInterceptor(route string, action func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc))

- **route**: string - command route. Base route will be added to this route
- **action**: func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) - action function that is called when middleware is invoked.


#### RegisterOpenApiSpec
Registers the open api spec.

> (c [*RestService]()) RegisterOpenApiSpec(content string)

- **content**: string - response header content


#### RegisterOpenApiSpecFromFile
Registers the open api spec from a file.

> (c [*RestService]()) RegisterOpenApiSpecFromFile(path string)

- **path**: string - path to the file



#### RegisterRoute
Registers a route in HTTP endpoint.

> (c [*RestService]()) RegisterRoute(method string, route string, schema [*cvalid.Schema](../../../commons/validate/schema), action func(res http.ResponseWriter, req *http.Request))

- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. The base route will be added to this route
- **schema**: [*cvalid.Schema](../../../commons/validate/schema) - validation schema to validate received parameters.
- **action**: func(res http.ResponseWriter, req *http.Request) - action function that is called when an operation is invoked.


#### RegisterRouteWithAuth
Registers a route with authorization in HTTP endpoint.

> (c [*RestService]()) RegisterRouteWithAuth(method string, route string, schema [*cvalid.Schema](../../../commons/validate/schema), authorize func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc), action func(res http.ResponseWriter, req *http.Request))

- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. The base route will be added to this route
- **schema**: [*cvalid.Schema](../../../commons/validate/schema) - validation schema to validate received parameters.
- **authorize**: func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) - authorization interceptor
- **action**: func(res http.ResponseWriter, req *http.Request) - action function that is called when an operation is invoked.

#### Register
Register method are registers all service routes in HTTP endpoint.

> (c [*RestService]()) Register()


#### SendCreatedResult
Creates a callback function that sends a newly created object as JSON. The callack function call be called directly or passed as a parameter to business logic components.

If the object is not nil, it returns 200 status code. For nil results it returns
204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.

> (c [*RestService]()) SendCreatedResult(res http.ResponseWriter, req *http.Request, result interface{}, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **result**: interface{} - an execution result
- **error**: error - (optional) error objrct to send


#### SendDeletedResult
Creates a callback function that sends deleted object as JSON.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not nil it returns 200 status code.
For nil results it returns 204 status code.
If error occur it sends ErrorDescription with approproate status code.


> (c [*RestService]()) SendDeletedResult(res http.ResponseWriter, req *http.Request, result interface{}, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **result**: interface{} - body object to result
- **error**: error - (optional) error objrct to send.


#### SendError
Sends an error serialized as ErrorDescription object and the appropriate HTTP status code. If status code is not defined, it uses 500 status code.


> (c [*RestService]()) SendError(res http.ResponseWriter, req *http.Request, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **error**: error - error object to be sent.


#### SendResult
Creates a callback function that sends a result as a JSON object. The callack function call be called directly or passed as a parameter to business logic components.

If the object is not nil it returns 200 status code. For nil results, it returns
204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.


> (c [*RestService]()) SendResult(res http.ResponseWriter, req *http.Request, result interface{}, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **result**: interface{} - body object to result
- **error**: error - error object to be sent.


#### SetReferences
Sets references to dependent components.

> (c [*RestService]()) SetReferences(references [crefer.IReferences](../../../commons/refer/ireferences))

- **references**: [crefer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> (c [*RestService]()) UnsetReferences()


### Examples

```go
type MyRestService struct {
	*RestService
	controller IMyController
}
   ...
func NewMyRestService() *MyRestService {
	c := MyRestService{}
	c.RestService = services.NewRestService()
	c.RestService.IRegisterable = &c
	c.numberOfCalls = 0
	c.DependencyResolver.Put("controller", crefer.NewDescriptor("mygroup", "controller", "*", "*", "1.0"))
	return &c
}
func (c * MyRestService) SetReferences(references IReferences) {
    c.RestService.SetReferences(references);
	resolv := c.DependencyResolver.GetRequired("controller");
	if resolv != nil {
		c.controller, _ = resolv.(IMyController)
	}
}
func (c *MyRestService) getOneById(res http.ResponseWriter, req *http.Request) {
	params := req.URL.Query()
	vars := mux.Vars(req)
	mydataId := params.Get("mydata_id")
	if mydataId == "" {
		mydataId = vars["mydatay_id"]
	}
	result, err := c.controller.GetOneById(
		params.Get("correlation_id"),
		mydataId)
	c.SendResult(res, req, result, err)
}
func (c * MyRestService) Register() {
	c.RegisterRoute(
	"get", "get_mydata/{mydata_id}",
	 &cvalid.NewObjectSchema().
		WithRequiredProperty("mydata_id", cconv.String).Schema,
	c.getOneById)
       ...
}
service := NewMyRestService();
service.Configure(cconf.NewConfigParamsFromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080,
));
service.SetReferences(cref.NewReferencesFromTuples(
   cref.NewDescriptor("mygroup","controller","default","default","1.0"), controller
));
opnRes := service.Open("123")
if opnErr == nil {
   fmt.Println("The REST service is running on port 8080");
}
```


### See also
- #### [RestClient](../../clients/rest_client)
