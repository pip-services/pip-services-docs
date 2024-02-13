---
type: docs
title: "CommandableAzureFunctionController"
linkTitle: "CommandableAzureFunctionController"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-azure-gox"
description: >
    Abstract controller that receives commands via the Azure Function protocol to operations automatically generated for commands defined in [ICommandable components](../../../rpc/commands/icommandable).
---

### Description
The CommandableAzureFunctionController class allows you to create abstract controllers that receive commands via the Azure Function protocols to operations automatically generated for commnads defined in [ICommandable components](../../../rpc/commands/icommandable).

**Important points** 

- Each command is exposed as an invoke method that receives a command's name and parameters.

- Commandable controllers require only 3 lines of code to implement a robust external Azure Function-based remote interface.

- This controller is intended to work inside an Azure Function container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.

### Constructors

> `public` constructor(name: string) 

- **name**: string - controller's name.

### Constructors

#### NewCommandableAzureFunctionController
Creates a new instance of the controller.

> NewCommandableAzureFunctionController(name string) [*CommandableAzureFunctionController]()

- **name**: string - a controller name.

### Instance methods

#### GetParameters
Returns body from Azure Function context.
This method can be overloaded in child classes

> (c [*CommandableAzureFunctionController]()) GetParameters(req *http.Request) [*Parameters](../../../components/exec/parameters)

- **req**: *http.Request - Azure Function context.
- **returns**: [*Parameters](../../../components/exec/parameters) - Returns Parameters from context

#### Register
Registers all actions in Azure Function.
> (c [*CommandableAzureFunctionController]()) Register()


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

