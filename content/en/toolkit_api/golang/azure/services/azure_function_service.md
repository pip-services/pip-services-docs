---
type: docs
title: "AzureFunctionService"
linkTitle: "AzureFunctionService"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-azure-gox"
description: >
    Abstract service that receives remove calls via the Azure Function protocol.
---

**Implements**: [IAzureFunctionService](../iazure_function_service), [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description
The AzureFunctionService class allows you to create a service that receives remove calls via the Azure Function protocol.

**Important points**

- This service is intended to work inside an AzureFunction container that exposes registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.

### Constructors

#### NewAzureFunctionService
Creates an instance of this service.
> NewAzureFunctionService(name string) [*AzureFunctionService]()

- **name**: string - a service name to generate action cmd.

#### InheritAzureFunctionService
InheritAzureFunctionService creates new instance of AzureFunctionService

> InheritAzureFunctionService(overrides [IAzureFunctionServiceOverrides](../iazure_function_service_overrides), name string) [*AzureFunctionService]()

- **overrides**: [IAzureFunctionServiceOverrides](../iazure_function_service_overrides) - instance that overrides register method.
- **name**: string - a service name to generate action cmd.

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

#### Overrides
Overrides instance
> **Overrides**: [IAzureFunctionServiceOverrides](../iazure_function_service_overrides)

#### Tracer
Tracer.
> **Tracer**: [*CompositeTracer](../../../components/trace/composite_tracer)

</span>

### Instance methods

#### ApplyInterceptors
Applies given action to the interceptors

> (c [*AzureFunctionService]()) ApplyInterceptors(action http.HandlerFunc) http.HandlerFunc

- **action** http.HandlerFunc - interceptor function.
- **returns**: http.HandlerFunc -  wrapped interceptors action.

#### ApplyValidation
Performs a validation.

> (c [*AzureFunctionService]()) ApplyValidation(schema [*Schema](../../../commons/validate/schema), action http.HandlerFunc) http.HandlerFunc

- **schema**: [*Schema](../../../commons/validate/schema) - schema used in the validation
- **action**: http.HandlerFunc - action
- **returns**: http.HandlerFunc - returned result


#### Close
Closes a component and frees used resources.

> (c [*AzureFunctionService]()) Close(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - close error.


#### Configure
Configures a component by passing its configuration parameters.

> public configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GenerateActionCmd
Adds '.cmd' to a command name
> (c [*AzureFunctionService]()) GenerateActionCmd(name string) string 

- **name**: string - command name
- **returns**: string - command name with '.cmd' added at its end.

#### GetActions
Get all actions supported by the service.

> (c [*AzureFunctionService]()) GetActions() [[]*AzureFunctionAction](../azure_function_action)

- **returns**: [[]*AzureFunctionAction](../azure_function_action) - array with supported actions.


#### GetCommand
Returns a command from the Azure Function context.

This method can be overloaded in child classes.

> (c [*AzureFunctionService]()) GetCommand(r *http.Request) (string, error)

- **r**: *http.Request - context.
- **returns**: (string, error) - returned command from context.

#### GetCorrelationId
Returns a correlationId from the Azure Function context.

This method can be overloaded in child classes.

> (c [*AzureFunctionService]()) GetCorrelationId(r *http.Request) string

- **r**: *http.Request - request.
- **returns**: string - returned correlationId from context.


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> (c [*AzureFunctionService]()) Instrument(ctx context.Context, correlationId string, name string) [*InstrumentTiming](../../../rpc/services/instrument_timing)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method's name.
- **returns**: [*InstrumentTiming](../../../rpc/services/instrument_timing) - Timing object to end the time measurement.

#### IsOpen
Checks if the component is open.

> (c [*AzureFunctionService]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.

#### Open
Opens the component.

> (c [*AzureFunctionService]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - open error.

#### Register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overridden
in child classes.

> (c [*AzureFunctionService]()) Register()

#### RegisterAction
Registers an action in Azure Function function.

> (c [*AzureFunctionService]()) RegisterAction(name string, schema *cvalid.Schema, action http.HandlerFunc)

- **name**: string - action name
- **schema**: [*Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: http.HandlerFunc - action function that is called when the operation is invoked.

#### RegisterActionWithAuth
Registers an action with authorization.

> (c [*AzureFunctionService]()) RegisterActionWithAuth(name string, schema [*Schema](../../../commons/validate/schema), authorize func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc), action http.HandlerFunc)

- **name**: string - action's name
- **schema**: [*Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **authorize**: func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) - authorization interceptor
- **action**: http.HandlerFunc - action function that is called when the operation is invoked.


#### RegisterInterceptor
Registers a middleware for actions in Azure Function service.

> (c [*AzureFunctionService]()) RegisterInterceptor(cmd string, action func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc))

- **cmd**: string - command name.
- **action**: func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) - action function that is called when middleware is invoked.


#### SetReferences
Sets references to dependent components.

> (c [*AzureFunctionService]()) SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


### Examples

```go
type MyAzureFunctionService struct {
	*services.AzureFunctionService
	controller IMyController
}

func NewMyAzureFunctionService() *MyAzureFunctionService {
	c := MyAzureFunctionService{}

	c.AzureFunctionService = services.InheritAzureFunctionService(&c, "v1.myservice")
	c.DependencyResolver.Put(context.Background(), "controller", refer.NewDescriptor("mygroup", "controller", "default", "*", "1.0"))

	return &c
}

func (c *MyAzureFunctionService) SetReferences(ctx context.Context, references refer.IReferences) {
	c.AzureFunctionService.SetReferences(ctx, references)
	depRes, depErr := c.DependencyResolver.GetOneRequired("controller")

	if depErr == nil && depRes != nil {
		c.controller = depRes.(IMyController)
	}
}

func (c *MyAzureFunctionService) Register() {
	c.RegisterAction(
		"get_mydata",
		nil,
		func(w http.ResponseWriter, r *http.Request) {
			var body map[string]any

			err := AzureFunctionRequestHelper.DecodeBody(r, &body)
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

service := NewMyAzureFunctionService()
service.Configure(ctx, config.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8080,
))

service.SetReferences(ctx, refer.NewReferencesFromTuples(
	refer.NewDescriptor("mygroup", "controller", "default", "default", "1.0"), controller,
))
service.Open(ctx, "123")
fmt.Println("The Azure Function service is running")
```
