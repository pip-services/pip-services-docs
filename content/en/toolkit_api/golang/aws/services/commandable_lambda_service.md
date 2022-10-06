---
type: docs
title: "CommandableLambdaService"
linkTitle: "CommandableLambdaService"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-aws-gox"
description: >
    Abstract service that receives commands via the AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable](../../../commons/commands/icommandable) components. Each command is exposed as an invoke method that receives a command's name and parameters.
---

**Implements:** [LambdaService](../lambda_service)

### Description
The CommandableLambdaService allows you to create abstract services that receive commands via the AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable](../../../commons/commands/icommandable) components. Each command is exposed as an invoke method that receives a command's name and parameters.

**Important points**

- This service is intended to work inside a LambdaFunction container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.

### Constructors

#### InheritCommandableLambdaService
Creates a new instance of the service.

> InheritCommandableLambdaService(overrides ILambdaServiceOverrides, name string) [*CommandableLambdaService]()

- **overrides**: ILambdaServiceOverrides - Lambda service overrides.
- **name**: string - service name.


### Methods

#### Register
Registers all actions in AWS Lambda function.

> (c [*CommandableLambdaService]()) Register()


### Examples

```go
type MyCommandableLambdaService struct  {
	*CommandableLambdaService
}

func NewMyCommandableLambdaService() *MyCommandableLambdaService {
	c:= &MyCommandableLambdaService{
		CommandableLambdaService: NewCommandableLambdaService("v1.service")
	}
	c.DependencyResolver.Put(context.Background(),
		"controller",
		cref.NewDescriptor("mygroup","controller","*","*","1.0")
	)
	return c
}

service := NewMyCommandableLambdaService();
service.SetReferences(context.Background(), NewReferencesFromTuples(
   NewDescriptor("mygroup","controller","default","default","1.0"), controller
))

service.Open(context.Background(),"123")
fmt.Println("The AWS Lambda 'v1.service' service is running")
```

### See also
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
- #### [LambdaService](../lambda_service)
