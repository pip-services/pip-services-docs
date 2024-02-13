---
type: docs
title: "CommandableCloudFunctionService"
linkTitle: "CommandableCloudFunctionService"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-gcp-gox"
description: >
    Abstract service that receives commands via the Google Function protocol to operations automatically generated for commands defined in [ICommandable components](../../../commons/commands/icommandable).
---

### Description
The CommandableCloudFunctionService class allows you to create abstract services that receive commands via the Google Function protocols to operations automatically generated for commnads defined in [ICommandable components](../../../commons/commands/icommandable).

**Important points** 

- Each command is exposed as an invoke method that receives a command's name and parameters.

- Commandable services require only 3 lines of code to implement a robust external Google Function-based remote interface.

- This service is intended to work inside an Google Function container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.

### Constructors

#### NewCommandableCloudFunctionService
Creates a new instance of the service.

> NewCommandableCloudFunctionService(name string) [*CommandableCloudFunctionService]()

- **name**: string - service's name.


### Instance methods

#### GetParameters
Returns body from Google Function request.
This method can be overloaded in child classes

> (c [*CommandableCloudFunctionService]()) GetParameters(req *http.Request) [*Parameters](../../../commons/run/parameters)

- **req**: *http.Request - Google Function request.
- **returns**: [*Parameters](../../../commons/run/parameters) - Returns Parameters from request

#### Register
Registers all actions in Google Function.
> (c [*CommandableCloudFunctionService]()) Register()


### Examples

```go
type MyCommandableCloudFunctionService struct {
	*gcpsrv.CommandableCloudFunctionService
}

func NewMyCommandableCloudFunctionService() *MyCommandableCloudFunctionService {
	c := MyCommandableCloudFunctionService{}
	c.CommandableCloudFunctionService = gcpsrv.NewCommandableCloudFunctionService("mydata")
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
