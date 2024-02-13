---
type: docs
title: "LambdaFunction"
linkTitle: "LambdaFunction"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-aws-go"
description: >
    Abstract AWS Lambda function that acts as a container to instantiate and run components, 
    and expose them via an external entry point. 
---

**Implements:** [Container](../../../container/containers), [ILambdaFunctionOverrides](../ilambda_function_overrides)

### Description
The LambdaFunction class allows you to create an abstract AWS Lambda function that acts as a container to instantiate and run components, and expose them via an external entry point.

**Important points**

- When handling calls the "cmd" parameter determines what action shall be called, while the other parameters are passed to the action itself.

- Container configuration for this Lambda function is stored in *"./config/config.yml"* file. But this path can be overriden by *CONFIG_PATH* environment variable.

#### Configuration parameters

- **dependencies**:
    - **controller**: override for Controller dependency
- **connections**:
    - **discovery_key**: (optional) key to retrieve the connection from IDiscovery
    - **region**: (optional) AWS region
- **credentials**:
    - **store_key**: (optional) key to retrieve the credentials from ICredentialStore
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client key

#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:service:lambda:\*:1.0**: (optional) [ILambdaController](../../controllers/ilambda_controller) services to handle action requests
- **\*:service:commandable-lambda:\*:1.0**: (optional) [ILambdaController](../../controllers/ilambda_controller) services to handle action requests

### Constructors

#### InheriteLambdaFunction
Creates a new instance of this lambda function.

> InheriteLambdaFunction(overrides [ILambdaFunctionOverrides](../ilambda_function_overrides), name string, description string) [*LambdaFunction]()

- **overrides**: [ILambdaFunctionOverrides](../ilambda_function_overrides) - overrides.
- **name**: string - (optional) container name (accessible via [ContextInfo](../../../components/context/context_info)).
- **description**: string - (optional) container description (accessible via [ContextInfo](../../../components/context/context_info)).

### Fields

<span class="hide-title-link">

#### actions
Map containing registered actions.
> **actions**: map[string]func(context.Context, map[string]any) (any, error)

#### configPath
Default path to config file.
> **configPath**: string

#### counters
Performance counters.
> **counters**: [*CompositeCounters](../../../observability/count/composite_counters)

#### DependencyResolver
Dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../components/refer/dependency_resolver)

#### schemas
Map of registred validation schemas.
> **schemas**: map[string]*[Schema](../../../data/validate/schema)

#### tracer
Tracer.
> **tracer**: [*CompositeTracer](../../../observability/trace/composite_tracer)

</span>


### Methods

#### Act
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
what action shall be called.

- This method shall only be used in testing.

> (c [*LambdaFunction]()) Act(params map[string]any) (string, error) 

- **params**: map[string]any - action parameters.
- **returns**: (string, error) - result

#### Handler
Executes this AWS Lambda function and returns the result.
This method can be overloaded in child classes
if it is necessary to change the default behavior

> (c [*LambdaFunction]()) Handler(ctx context.Context, event map[string]any) (string, error)

- **ctx**: context.Context - operation context.
- **event**: map[string]any - event parameters (or function arguments)
- **returns**: (string, error) - result of the function execution.

#### GetHandler
Gets an entry point into this lambda function.

> (c [*LambdaFunction]()) GetHandler() func(ctx context.Context, event map[string]any) (string, error)

- **returns**: func(ctx context.Context, event map[string]any) (string, error) - incoming event object with invocation parameters.
    - **context**: context.Context - context object with local references.
    - **event**: map[string]any - incoming event object with invocation parameters.


#### Instrument
Gets entry point into this lambda function.

> (c [*LambdaFunction]()) Instrument(ctx context.Context, context [IContext](../../../components/context/icontext), name string) [*InstrumentTiming](../../../rpc/trace/instrument_timing)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [*InstrumentTiming](../../../rpc/trace/instrument_timing) - object to end the time measurement.

#### Open
Opens the component.

> (c [*LambdaFunction]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.


#### RegisterAction
Registers an action in this lambda function.
 
- Note: This method has been deprecated. Use [LambdaController](../../controllers/lambda_controller) instead.

> (c [*LambdaFunction]()) RegisterAction(cmd string, schema [*Schema](../../../data/validate/schema), action func(ctx context.Context, params map[string]any) (result any, err error)) error

- **cmd**: string - action/command name.
- **schema**: [*Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **action**: func(ctx context.Context, params map[string]any) - action function that is called when the action is invoked.
- **returns**: error - error or nil if no errors occured.


#### RegisterServices
Registers all actions in this lambda function.

- Note: Overloading of this method has been deprecated. Use [LambdaController](../../controllers/lambda_controller) instead.

> (c [*LambdaFunction]()) RegisterServices()


#### Run
Runs this lambda function, loads container configuration,
instantiates components and manages their lifecycle.
Makes this function ready to access action calls.

> (c [*LambdaFunction]()) Run(ctx context.Context) error

- **ctx**: context.Context - operation context.
- **returns**: error - error or nil no errors occured.


#### SetReferences
Sets references to dependent components.

> (c [*LambdaFunction]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **сеч**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



### Examples

```go
type MyLambdaFunction struct {
	*awscont.LambdaFunction
	controller awstest.IMyController
}

func NewMyLambdaFunction() *MyLambdaFunction {
	c := &MyLambdaFunction{}
	c.LambdaFunction = awscont.InheriteLambdaFunction(c, "mygroup", "MyGroup lambda function")

	c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("mygroup", "controller", "*", "*", "1.0"))
	return c
}

func (c *MyLambdaFunction) SetReferences(ctx context.Context, references cref.IReferences) {
	c.LambdaFunction.SetReferences(ctx, references)
	depRes, depErr := c.DependencyResolver.GetOneRequired("controller")
	if depErr == nil && depRes != nil {
		c.controller = depRes.(awstest.IMyController)
	}
}

func (c *MyLambdaFunction) getOneById(ctx context.Context, params map[string]any) (any, error) {
	context, _ := params["correlation_id"].(string)
	return c.controller.GetOneById(
		ctx,
		context,
		params["mydata_id"].(string),
	)
}

func (c *MyLambdaFunction) Register() {

	c.RegisterAction(
		"get_mydata_by_id",
		cvalid.NewObjectSchema().
			WithOptionalProperty("mydata_id", cconv.String).Schema,
		c.getOneById)
}


lambda := NewMyLambdaFunction()

lambda.Run(context.Context())
```

### See also
- #### [LambdaClient](../../clients/lambda_client)

