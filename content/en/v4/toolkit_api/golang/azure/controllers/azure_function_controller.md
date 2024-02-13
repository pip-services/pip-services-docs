---
type: docs
title: "AzureFunctionController"
linkTitle: "AzureFunctionController"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-azure-gox"
description: >
    Abstract controller that receives remove calls via the Azure Function protocol.
---

**Implements**: [IAzureFunctionController](../iazure_function_controller), [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description
The AzureFunctionController class allows you to create a controller that receives remove calls via the Azure Function protocol.

**Important points**

- This controller is intended to work inside an AzureFunction container that exposes registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.

### Constructors

#### NewAzureFunctionController
Creates an instance of this controller.
> NewAzureFunctionController(name string) [*AzureFunctionController]()

- **name**: string - a controller name to generate action cmd.

#### InheritAzureFunctionController
InheritAzureFunctionController creates new instance of AzureFunctionController

> InheritAzureFunctionController(overrides [IAzureFunctionControllerOverrides](../iazure_function_controller_overrides), name string) [*AzureFunctionController]()

- **overrides**: [IAzureFunctionControllerOverrides](../iazure_function_controller_overrides) - instance that overrides register method.
- **name**: string - a controller name to generate action cmd.

### Fields

<span class="hide-title-link">

#### Counters
Performance counters.
> **Counters**: [*CompositeCounters](../../../observability/count/composite_counters)

#### DependencyResolver
Dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../components/refer/dependency_resolver)

#### Logger
Logger.
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

#### Overrides
Overrides instance
> **Overrides**: [IAzureFunctionControllerOverrides](../iazure_function_controller_overrides)

#### Tracer
Tracer.
> **Tracer**: [*CompositeTracer](../../../observability/trace/composite_tracer)

</span>

### Instance methods

#### ApplyInterceptors
Applies given action to the interceptors

> (c [*AzureFunctionController]()) ApplyInterceptors(action http.HandlerFunc) http.HandlerFunc

- **action** http.HandlerFunc - interceptor function.
- **returns**: http.HandlerFunc -  wrapped interceptors action.

#### ApplyValidation
Performs a validation.

> (c [*AzureFunctionController]()) ApplyValidation(schema [*Schema](../../../data/validate/schema), action http.HandlerFunc) http.HandlerFunc

- **schema**: [*Schema](../../../data/validate/schema) - schema used in the validation
- **action**: http.HandlerFunc - action
- **returns**: http.HandlerFunc - returned result


#### Close
Closes a component and frees used resources.

> (c [*AzureFunctionController]()) Close(ctx context.Context, traceId string) error

- **ctx**: context.Context - operation context.
- **traceId**: string - (optional) a context to trace execution through a call chain.
- **returns**: error - close error.


#### Configure
Configures a component by passing its configuration parameters.

> public configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### GenerateActionCmd
Adds '.cmd' to a command name
> (c [*AzureFunctionController]()) GenerateActionCmd(name string) string 

- **name**: string - command name
- **returns**: string - command name with '.cmd' added at its end.

#### GetActions
Get all actions supported by the controller.

> (c [*AzureFunctionController]()) GetActions() [[]*AzureFunctionAction](../azure_function_action)

- **returns**: [[]*AzureFunctionAction](../azure_function_action) - array with supported actions.


#### GetCommand
Returns a command from the Azure Function context.

This method can be overloaded in child classes.

> (c [*AzureFunctionController]()) GetCommand(r *http.Request) (string, error)

- **r**: *http.Request - context.
- **returns**: (string, error) - returned command from context.

#### GetTraceId
Returns a traceId from the Azure Function context.

This method can be overloaded in child classes.

> (c [*AzureFunctionController]()) GetTraceId(r *http.Request) string

- **r**: *http.Request - request.
- **returns**: string - returned traceId from context.


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> (c [*AzureFunctionController]()) Instrument(ctx context.Context, context [IContext](../../../components/context/icontext), name string) [*InstrumentTiming](../../../rpc/trace/instrument_timing)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method's name.
- **returns**: [*InstrumentTiming](../../../rpc/trace/instrument_timing) - Timing object to end the time measurement.

#### IsOpen
Checks if the component is open.

> (c [*AzureFunctionController]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.

#### Open
Opens the component.

> (c [*AzureFunctionController]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - open error.

#### Register
Registers all controller routes in an HTTP endpoint.

This method is called by the controller and must be overridden
in child classes.

> (c [*AzureFunctionController]()) Register()

#### RegisterAction
Registers an action in Azure Function function.

> (c [*AzureFunctionController]()) RegisterAction(name string, schema *cvalid.Schema, action http.HandlerFunc)

- **name**: string - action name
- **schema**: [*Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **action**: http.HandlerFunc - action function that is called when the operation is invoked.

#### RegisterActionWithAuth
Registers an action with authorization.

> (c [*AzureFunctionController]()) RegisterActionWithAuth(name string, schema [*Schema](../../../data/validate/schema), authorize func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc), action http.HandlerFunc)

- **name**: string - action's name
- **schema**: [*Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **authorize**: func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) - authorization interceptor
- **action**: http.HandlerFunc - action function that is called when the operation is invoked.


#### RegisterInterceptor
Registers a middleware for actions in Azure Function controller.

> (c [*AzureFunctionController]()) RegisterInterceptor(cmd string, action func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc))

- **cmd**: string - command name.
- **action**: func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) - action function that is called when middleware is invoked.


#### SetReferences
Sets references to dependent components.

> (c [*AzureFunctionController]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


### Examples

```go
type MyAzureFunctionController struct {
	*controllers.AzureFunctionController
	controller IMyController
}

func NewMyAzureFunctionController() *MyAzureFunctionController {
	c := MyAzureFunctionController{}

	c.AzureFunctionController = controllers.InheritAzureFunctionController(&c, "v1.mycontroller")
	c.DependencyResolver.Put(context.Background(), "controller", refer.NewDescriptor("mygroup", "controller", "default", "*", "1.0"))

	return &c
}

func (c *MyAzureFunctionController) SetReferences(ctx context.Context, references refer.IReferences) {
	c.AzureFunctionController.SetReferences(ctx, references)
	depRes, depErr := c.DependencyResolver.GetOneRequired("controller")

	if depErr == nil && depRes != nil {
		c.controller = depRes.(IMyController)
	}
}

func (c *MyAzureFunctionController) Register() {
	c.RegisterAction(
		"get_mydata",
		nil,
		func(w http.ResponseWriter, r *http.Request) {
			var body map[string]any

			err := AzureFunctionRequestHelper.DecodeBody(r, &body)
			defer r.Body.Close()

			result, err := c.controller.DeleteById(
				r.Context(),
				c.GetTraceId(r),
				body,
			)
			HttpResponseSender.SendDeletedResult(w, r, result, err)
		},
	)
}

...

controller := NewMyAzureFunctionController()
controller.Configure(ctx, config.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8080,
))

controller.SetReferences(ctx, refer.NewReferencesFromTuples(
	refer.NewDescriptor("mygroup", "controller", "default", "default", "1.0"), controller,
))
controller.Open(ctx, "123")
fmt.Println("The Azure Function controller is running")
```

