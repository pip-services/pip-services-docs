---
type: docs
title: "CloudFunctionService"
linkTitle: "CloudFunctionService"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-gcp-gox"
description: >
    Abstract service that receives remove calls via the Google Function protocol.
---

### Description
The CloudFunctionService class allows you to create a service that receives remove calls via the Google Function protocol.

**Important points**

- This service is intended to work inside an CloudFunction container that exposes registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.

### Constructors

#### NewCloudFunctionService
Creates an instance of this service.

> NewCloudFunctionService(name string) [*CloudFunctionService]()

- **name**: string - name of the service used to generate an action cmd.

#### InheritCloudFunctionService

> InheritCloudFunctionService(overrides [ICloudFunctionServiceOverrides](../../containers/icloud_function_overrides), name string) 
[*CloudFunctionService]()

- **overrides**: [ICloudFunctionServiceOverrides](../../containers/icloud_function_overrides) - instance thath overrides methods. 
- **name**: string - name of the service used to generate an action cmd.

### Fields

<span class="hide-title-link">

#### Counters
Performance counters.
> **Counters**: [*CompositeCounters](../../../components/count/composite_counters)

#### DependencyResolver
Dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../commons/refer/dependency_resolver)

#### Logger
Logger.
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

#### Tracer
Tracer.
> **Tracer**: [*CompositeTracer](../../../components/trace/composite_tracer)

</span>

### Instance methods

#### ApplyInterceptors
Applies interceptors to the action.

> (c [*CloudFunctionService]()) ApplyInterceptors(action http.HandlerFunc) http.HandlerFunc

- **action**: http.HandlerFunc - action
- **returns**: http.HandlerFunc - returned result

#### ApplyValidation
Performs a validation.

> (c [*CloudFunctionService]()) ApplyValidation(schema *cvalid.Schema, action http.HandlerFunc) http.HandlerFunc

- **schema**: [*Schema](../../../commons/validate/schema) - schema used in the validation
- **action**: http.HandlerFunc - action
- **returns**: http.HandlerFunc - returned result


#### Close
Closes a component and frees used resources.

> (c [*CloudFunctionService]()) Close(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - close error.


#### Configure
Configures a component by passing its configuration parameters.

> (c [*CloudFunctionService]()) Configure(ctx context.Context, config [*ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### GenerateActionCmd
Adds '.cmd' to a command name
> (c [*CloudFunctionService]()) GenerateActionCmd(name string) string

- **name**: string - command name
- **returns**: string - command name with '.cmd' added at its end.

#### GetActions
Get all actions supported by the service.

> (c [*CloudFunctionService]()) GetActions() [[]*CloudFunctionAction](../cloud_function_action)

- **returns**: [[]*CloudFunctionAction](../cloud_function_action) - array with supported actions.


#### GetCommand
Returns command from Google Function request.

This method can be overloaded in child classes

> (c [*CloudFunctionService]()) GetCommand(r *http.Request) (string, error)

- **r**: *http.Request - the function request
- **returns**: (string, error) - returned command from request.

#### GetCorrelationId
Returns correlationId from Google Function request.

This method can be overloaded in child classes

> (c [*CloudFunctionService]()) GetCorrelationId(r *http.Request) string

- **r**: *http.Request - the function request
- **returns**: string - returned correlationId from request.


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> (c [*CloudFunctionService]()) Instrument(ctx context.Context, correlationId string, name string) [*InstrumentTiming](../../../rpc/services/instrument_timing)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method's name.
- **returns**: [*InstrumentTiming](../../../rpc/services/instrument_timing) - Timing object to end the time measurement.

#### IsOpen
Checks if the component is open.

> IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> (c [*CloudFunctionService]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **retiurns**: error - open error.

#### Register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overridden
in child classes.

> Register()

#### RegisterAction
Registers an action in Google Function function.

> (c [*CloudFunctionService]()) RegisterAction(name string, schema [*Schema](../../../commons/validate/schema), action http.HandlerFunc)

- **name**: string - action name
- **schema**: [*Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: http.HandlerFunc - action function that is called when the operation is invoked.

#### RegisterActionWithAuth
Registers an action with authorization.

> (c [*CloudFunctionService]()) RegisterActionWithAuth(name string, schema [*Schema](../../../commons/validate/schema), authorize func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc), action http.HandlerFunc)

- **name**: string - action's name
- **schema**: [*Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **authorize**: func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) - authorization interceptor
- **action**: http.HandlerFunc - action function that is called when the operation is invoked.


#### RegisterInterceptor
Registers a middleware for actions in Google Function service.

> (c [*CloudFunctionService]()) RegisterInterceptor(cmd string, action func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc))

- **cmd**: command or regex for intercept.
- **action**: func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) - action function that is called when middleware is invoked.


#### SetReferences
Sets references to dependent components.

> (c [*CloudFunctionService]()) SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```go
type MyCloudFunctionService struct {
	*services.CloudFunctionService
	controller IMyController
}

func NewMyCloudFunctionService() *MyCloudFunctionService {
	c := MyCloudFunctionService{}

	c.CloudFunctionService = services.InheritCloudFunctionService(&c, "v1.myservice")
	c.DependencyResolver.Put(context.Background(), "controller", refer.NewDescriptor("mygroup", "controller", "default", "*", "1.0"))

	return &c
}

func (c *MyCloudFunctionService) SetReferences(ctx context.Context, references refer.IReferences) {
	c.CloudFunctionService.SetReferences(ctx, references)
	depRes, depErr := c.DependencyResolver.GetOneRequired("controller")

	if depErr == nil && depRes != nil {
		c.controller = depRes.(IMyController)
	}
}

func (c *MyCloudFunctionService) Register() {
	c.RegisterAction(
		"get_mydata",
		nil,
		func(w http.ResponseWriter, r *http.Request) {
			var body map[string]any

			err := CloudFunctionRequestHelper.DecodeBody(r, &body)
			defer r.Body.Close()

			result, err := c.controller.DeleteById(
				r.Context(),
				c.GetCorrelationId(r),
				body,
			)
			HttpResponseSender.SendDeletedResult(w, r, result, err)
		},
	)
}

...

service := NewMyCloudFunctionService()
service.Configure(ctx, config.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8080,
))

service.SetReferences(ctx, refer.NewReferencesFromTuples(
	refer.NewDescriptor("mygroup", "controller", "default", "default", "1.0"), controller,
))
service.Open(ctx, "123")
fmt.Println("The Google Function service is running")
```
