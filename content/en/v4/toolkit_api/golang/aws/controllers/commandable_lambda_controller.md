---
type: docs
title: "CommandableLambdaController"
linkTitle: "CommandableLambdaController"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-aws-go"
description: >
    Abstract controller that receives commands via the AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable](../../../rpc/commands/icommandable) components. Each command is exposed as an invoke method that receives a command's name and parameters.
---

**Implements:** [LambdaController](../lambda_controller)

### Description
The CommandableLambdaController allows you to create abstract controllers that receive commands via the AWS Lambda protocol to operations automatically generated for commands defined in [ICommandable](../../../rpc/commands/icommandable) components. Each command is exposed as an invoke method that receives a command's name and parameters.

**Important points**

- This controller is intended to work inside a LambdaFunction container that exploses registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.

### Constructors

#### InheritCommandableLambdaController
Creates a new instance of the controller.

> InheritCommandableLambdaController(overrides ILambdaControllerOverrides, name string) [*CommandableLambdaController]()

- **overrides**: ILambdaControllerOverrides - Lambda controller overrides.
- **name**: string - controller's name.


### Methods

#### Register
Registers all actions in AWS Lambda function.

> (c [*CommandableLambdaController]()) Register()


### Examples

```go
type MyCommandableLambdaController struct  {
	*CommandableLambdaController
}

func NewMyCommandableLambdaController() *MyCommandableLambdaController {
	c:= &MyCommandableLambdaController{
		CommandableLambdaController: NewCommandableLambdaController("v1.controller")
	}
	c.DependencyResolver.Put(context.Background(),
		"controller",
		cref.NewDescriptor("mygroup","controller","*","*","1.0")
	)
	return c
}

controller := NewMyCommandableLambdaController();
controller.SetReferences(context.Background(), NewReferencesFromTuples(
   NewDescriptor("mygroup","controller","default","default","1.0"), controller
))

controller.Open(context.Background(),"123")
fmt.Println("The AWS Lambda 'v1.controller' controller is running")
```

### See also
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
- #### [LambdaController](../lambda_controller)

