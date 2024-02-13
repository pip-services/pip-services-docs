---
type: docs
title: "RestController"
linkTitle: "RestController"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-http-go"
description: >
    Abstract controller that receives remove calls via HTTP/REST protocol.
---

**Implements:** [IRegisterable](../iregisterable)


### Description

The RestController class allows you to create REST controllers that receive remote calls via the HTTP/REST protocol.


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

### Constructors

#### InheritRestController
InheritRestController is used to create new instance of RestController

> InheritRestController(overrides IRestControllerOverrides) *RestController

- **overrides**: IRestControllerOverrides - ingerited rest controller


### Fields

<span class="hide-title-link">

#### DependencyResolver
Dependency resolver.
> **DependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### Logger
Logger.
> **Logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### Counters
Performance counters.
> **Counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### BaseRoute
Base route.
> **BaseRoute**: string

#### Tracer
Tracer.
> **Tracer**: [*CompositeTracer](../../../observability/trace/composite_tracer)

#### Endpoint
HTTP endpoint that exposes this controller.
> **Endpoint**: [HttpEndpoint](../http_endpoint)

#### config
Controller's configuration paramters.
> **config**: [ConfigParams](../../../components/config/config_params)


#### SwaggerController
Swagger controller.
> **SwaggerController**: [ISwaggerController](../iswagger_controller)

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

> (c [*RestController]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - returns error if not closed.


#### Configure
Configures a component by passing its configuration parameters.

> (c [*RestController]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### Instrument
Adds instrumentation to log calls and measure call time.
It returns a Timing object that is used to end the time measurement.

> (c [*RestController]()) Instrument(ctx context.Context, contextId [IContext](../../../components/context/icontext), name string) [*InstrumentTiming](../../../rpc/trace/instrument_timing)

- **contextId**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [*InstrumentTiming](../../../rpc/trace/instrument_timing) - instrument Timing object to end the time measurement.

#### GetTraceId
GetTraceId method returns TraceId from request

> (c [*RestController]()) GetTraceId(req *http.Request) string

- **req**: *http.Request - an HTTP request
- **returns**: string - correlation_id or empty string

#### IsOpen
Checks if the component is open.

> (c [*Restcontroller]()) IsOpen() bool

- **returns**: bool - True if the component has been opened and False otherwise.


#### Open
Opens the component.

> (c [*RestController]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error -  error or nil no errors occured.


#### RegisterInterceptor
Registers a middleware for a given route in HTTP endpoint.

> (c [*RestController]()) RegisterInterceptor(route string, action func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc))

- **route**: string - command route. Base route will be added to this route
- **action**: func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) - action function that is called when middleware is invoked.


#### RegisterOpenApiSpec
Registers the open api spec.

> (c [*RestController]()) RegisterOpenApiSpec(content string)

- **content**: string - response header content


#### RegisterOpenApiSpecFromFile
Registers the open api spec from a file.

> (c [*RestController]()) RegisterOpenApiSpecFromFile(path string)

- **path**: string - path to the file



#### RegisterRoute
Registers a route in HTTP endpoint.

> (c [*RestController]()) RegisterRoute(method string, route string, schema [*cvalid.Schema](../../../data/validate/schema), action func(res http.ResponseWriter, req *http.Request))

- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. The base route will be added to this route
- **schema**: [*cvalid.Schema](../../../data/validate/schema) - validation schema to validate received parameters.
- **action**: func(res http.ResponseWriter, req *http.Request) - action function that is called when an operation is invoked.


#### RegisterRouteWithAuth
Registers a route with authorization in HTTP endpoint.

> (c [*RestController]()) RegisterRouteWithAuth(method string, route string, schema [*cvalid.Schema](../../../data/validate/schema), authorize func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc), action func(res http.ResponseWriter, req *http.Request))

- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. The base route will be added to this route
- **schema**: [*cvalid.Schema](../../../data/validate/schema) - validation schema to validate received parameters.
- **authorize**: func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) - authorization interceptor
- **action**: func(res http.ResponseWriter, req *http.Request) - action function that is called when an operation is invoked.

#### Register
Register method are registers all controller routes in HTTP endpoint.

> (c [*RestController]()) Register()


#### SendCreatedResult
Creates a callback function that sends a newly created object as JSON. The callack function call be called directly or passed as a parameter to business logic components.

If the object is not nil, it returns 200 status code. For nil results it returns
204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.

> (c [*RestController]()) SendCreatedResult(res http.ResponseWriter, req *http.Request, result interface{}, err error)

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


> (c [*RestController]()) SendDeletedResult(res http.ResponseWriter, req *http.Request, result interface{}, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **result**: interface{} - body object to result
- **error**: error - (optional) error objrct to send.


#### SendError
Sends an error serialized as ErrorDescription object and the appropriate HTTP status code. If status code is not defined, it uses 500 status code.


> (c [*RestController]()) SendError(res http.ResponseWriter, req *http.Request, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **error**: error - error object to be sent.


#### SendResult
Creates a callback function that sends a result as a JSON object. The callack function call be called directly or passed as a parameter to business logic components.

If the object is not nil it returns 200 status code. For nil results, it returns
204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.


> (c [*RestController]()) SendResult(res http.ResponseWriter, req *http.Request, result interface{}, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **result**: interface{} - body object to result
- **error**: error - error object to be sent.


#### SetReferences
Sets references to dependent components.

> (c [*RestController]()) SetReferences(ctx context.Context, references [crefer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [crefer.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> (c [*RestController]()) UnsetReferences()


### Examples

```go
type MyRestController struct {
	*RestController
	controller IMyController
}
...
func NewMyRestController() *MyRestController {
	c := MyRestController{}
	c.RestController = controller.NewRestController()
	c.RestController.IRegisterable = &c
	c.numberOfCalls = 0
	c.DependencyResolver.Put(context.Background(), "controller", crefer.NewDescriptor("mygroup", "controller", "*", "*", "1.0"))
	return &c
}

func (c * MyRestController) SetReferences(ctx context.Context, references IReferences) {
	c.RestController.SetReferences(ctx, references);
	resolv := c.DependencyResolver.GetRequired("controller");
	if resolv != nil {
		c.controller, _ = resolv.(IMyController)
	}
}

func (c *MyRestController) getOneById(res http.ResponseWriter, req *http.Request) {
	params := req.URL.Query()
	vars := mux.Vars(req)

	mydataId := params.Get("mydata_id")
	if mydataId == "" {
		mydataId = vars["mydatay_id"]
	}
	result, err := c.controller.GetOneById(params.Get("correlation_id"), mydataId),
	c.SendResult(res, req, result, err)
}

func (c * MyRestController) Register() {
	c.RegisterRoute(
		"get", "get_mydata/{mydata_id}",
		&cvalid.NewObjectSchema().
			WithRequiredProperty("mydata_id", cconv.String).Schema,
		c.getOneById,
	)
	...
}


controller := NewMyRestController();
controller.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8080,
));
controller.SetReferences(context.Background(), cref.NewReferencesFromTuples(
	cref.NewDescriptor("mygroup","controller","default","default","1.0"), controller
));

opnRes := controller.Open(context.Background(), "123")
if opnErr == nil {
	fmt.Println("The REST controller is running on port 8080");
}
```


### See also
- #### [RestClient](../../clients/rest_client)

