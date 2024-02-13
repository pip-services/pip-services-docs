---
type: docs
title: "CommandableCloudFunctionController"
linkTitle: "CommandableCloudFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-gcp-go"
description: >
    Abstract service that receives commands via the Google Function protocol to operations automatically generated for commands defined in [ICommandable](../../../rpc/commands/icommandable) components.
---

### Description
The CommandableCloudFunctionController class allows you to create abstract controllers that receive commands via the Google Function protocols to operations automatically generated for commnads defined in [ICommandable](../../../rpc/commands/icommandable) components.

**Important points** 

- Each command is exposed as an invoke method that receives a command's name and parameters.

- Commandable controllers require only 3 lines of code to implement a robust external Google Function-based remote interface.

- This controller is intended to work inside an Google Function container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.

### Constructors

#### NewCommandableCloudFunctionController
Creates a new instance of the controller.

> NewCommandableCloudFunctionService(name string) [*CommandableCloudFunctionController]()

- **name**: string - service's name.


### Instance methods

#### GetParameters
Returns body from Google Function request.
This method can be overloaded in child classes

> (c [*CommandableCloudFunctionService]()) GetParameters(req *http.Request) [*Parameters](../../../components/exec/parameters)

- **req**: *http.Request - Google Function request.
- **returns**: [*Parameters](../../../components/exec/parameters) - Returns Parameters from request

#### Register
Registers all actions in Google Function.
> (c [*CommandableCloudFunctionService]()) Register()


### Examples

```go
type MyCommandableCloudFunctionController struct {
	*gcpsrv.CommandableCloudFunctionController
}

func NewMyCommandableCloudFunctionController() *MyCommandableCloudFunctionController {
	c := MyCommandableCloudFunctionController{}
	c.CommandableCloudFunctionController = gcpsrv.NewCommandableCloudFunctionController("mydata")
	c.DependencyResolver.Put(context.Background(), "controller", crefer.NewDescriptor("mygroup", "controller", "default", "*", "*"))
	return &c
}

...

service := NewMyCommandableCloudFunctionService()
service.SetReferences(crefer.NewReferencesFromTuples(
	crefer.NewDescriptor("mygroup","controller","default","default","1.0"), controller,
))
service.Open(ctx, "123")
fmt.Println("The Google Function service is running")
```

