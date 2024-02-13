---
type: docs
title: "CommandableAzureFunctionService"
linkTitle: "CommandableAzureFunctionService"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-azure-gox"
description: >
    Abstract service that receives commands via the Azure Function protocol to operations automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable).
---

### Description
The CommandableAzureFunctionService class allows you to create abstract services that receive commands via the Azure Function protocols to operations automatically generated for commnads defined in [ICommandable components](../../../commons/commands/icommandable).

**Important points** 

- Each command is exposed as an invoke method that receives a command's name and parameters.

- Commandable services require only 3 lines of code to implement a robust external Azure Function-based remote interface.

- This service is intended to work inside an Azure Function container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.

### Constructors

> `public` constructor(name: string) 

- **name**: string - service's name.

### Constructors

#### NewCommandableAzureFunctionService
Creates a new instance of the service.

> NewCommandableAzureFunctionService(name string) [*CommandableAzureFunctionService]()

- **name**: string - a service name.

### Instance methods

#### GetParameters
Returns body from Azure Function context.
This method can be overloaded in child classes

> (c [*CommandableAzureFunctionService]()) GetParameters(req *http.Request) [*Parameters](../../../commons/run/parameters)

- **req**: *http.Request - Azure Function context.
- **returns**: [*Parameters](../../../commons/run/parameters) - Returns Parameters from context

#### Register
Registers all actions in Azure Function.
> (c [*CommandableAzureFunctionService]()) Register()


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
