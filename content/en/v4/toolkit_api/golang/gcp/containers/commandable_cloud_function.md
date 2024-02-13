---
type: docs
title: "CommandableCloudFunction"
linkTitle: "CommandableCloudFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-gcp-go"
description: >
    Abstract Google Function function that acts as a container to instantiate and run components
    and expose them via an external entry point.
---

### Description
The CommandableCloudFunction allows you to create an abstract Google Function function that acts as a container to instantiate and run components and expose them via an external entry point.

**Important points**

- All actions are automatically generated for commands defined in [ICommandable components](../../../rpc/commands/icommandable). Each command is exposed as an action defined by the "cmd" parameter.
  
- Container configuration for this Google Function is stored in *"./config/config.yml"* file. But this path can be overridden by the *CONFIG_PATH* environment variable.
 
- **Note**: This component has been deprecated. Use Google [CloudFunctionController](../../controllers/cloud_function_controller) instead.


#### References

- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:service:gcp-function:\*:1.0**: (optional) [ICloudFunctionController](../../controllers/icloud_function_controller) services to handle action requests.
- **\*:service:commandable-gcp-function:\*:1.0**: (optional) [ICloudFunctionController](../../controllers/icloud_function_controller) services to handle action requests.

### Constructors

#### NewCommandableCloudFunctionService
Creates a new instance of this Google Function.

> NewCommandableCloudFunctionService(name string) [*CommandableCloudFunctionService]()

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/context/context_info))


### Instance methods

#### GetParameters
Returns body from Google Function request.
This method can be overloaded in child classes

> (c [*CommandableCloudFunctionService]()) GetParameters(req *http.Request) [*Parameters](../../../components/exec/parameters)

- **req**: *http.Request - Google Function request.
- **returns**: [*Parameters](../../../components/exec/parameters) - Returns Parameters from request

#### Register
Registers all actions in this Google Function.

> Register()


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

