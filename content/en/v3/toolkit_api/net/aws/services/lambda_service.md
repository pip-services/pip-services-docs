---
type: docs
title: "LambdaService"
linkTitle: "LambdaService"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
description: >
    Abstract service that receives remove calls via the AWS Lambda protocol.
---

**Implements**: [ILambdaService](../ilambda_service), [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description
The LambdaService class allows you to create abstract services that receive remove calls via the AWS Lambda protocol.

**Important points**

This service is intended to work inside LambdaFunction container that exploses registered actions externally.


#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.


### Constructors
Creates an instance of this service.

> `public` LambdaService(string name)

- **name**: string - service name to generate action cmd.

Creates an instance of this service.

> `public` LambdaService()


### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
Dependency resolver.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _tracer
Tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

</span>


### Instance methods

#### ActAsync
Calls registered action in this lambda function.
The "cmd" parameter in the action parameters determines
the action shall be called.

- This method shall only be used in testing.

> `public` Task\<string\> ActAsync(string input)

- **input**: string - action parameters.
- **returns**: Task\<string\> - results

#### ApplyInterceptors
Applies given action to the interseptors

> `protected` Func\<string, Task\<string\>\> ApplyInterceptors(Func\<string, Task\<string\>\> action)

- **action**: Func\<string, Task\<string\>\> - applied action.
- **returns**: Func\<string, Task\<string\>\> - wrapped interceptors action.

#### ApplyValidation
Applies a validation according to a given schema.

> `protected` Func\<string, Task\<string\>\> ApplyValidation([Schema](../../../commons/validate/schema) schema, Func\<string, Task\<string\>\> action)

- **schema**: [Schema](../../../commons/validate/schema) - validation schema
- **action**: Func\<string, Task\<string\>\> - action
- **returns**: Func\<string, Task\<string\>\> - results

#### CloseAsync
Closes a component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures a component by passing configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GenerateActionCmd
Adds .cmd to the name of the command.
> `public` string GenerateActionCmd(string name)

- **name**: string - name of the command
- **returns**: string - T - generated command


#### GetActions
Gets all the actions supported by the service.
> `public` IList<[LambdaAction](../lambda_action)> GetActions()

- **returns**: IList<[LambdaAction](../lambda_action)> - array with supported actions.


#### Instrument
Adds instrumentation to log calls and measure call time. It returns a CounterTiming 
object that is used to end the time measurement.

> `protected` [CounterTiming](../../../components/count/counter_timing) Instrument(string correlationId, string name)
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method name.
- **returns**: [CounterTiming](../../../components/count/counter_timing) - CounterTiming object to end the time measurement.

#### InstrumentError
Adds instrumentation to error handling.

> `protected` void InstrumentError(string correlationId, string methodName, Exception ex, bool rethrow = false)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **methodName**: string - a method name.
- **ex**: Exception - Error that occured during the method call.
- **rethrow**: bool - True to throw the exception.

#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### OpenAsync
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### RegisterAction
Registers an action in AWS Lambda function.

> `protected` void RegisterAction(string name, [Schema](../../../commons/validate/schema) schema, Func\<string, Task\<string\>\> action)

- **name**: string - action name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: Func\<string, Task\<string\>\> - action function that is called when an operation is invoked.

#### RegisterActionWithAuth
Registers an action with authorization.

> `protected` void RegisterActionWithAuth(string name, [Schema](../../../commons/validate/schema) schema, Func\<string, Func\<string, Task\<string\>\>, Task\<string\>\> authorize, Func\<string, Task\<string\>\> action)

- **name**: string - action's name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **authorize**: Func\<string, Func\<string, Task\<string\>\>, Task\<string\>\> - authorization interceptor
- **action**: Func\<string, Task\<string\>\> - action function that is called when an operation is invoked.


#### RegisterInterceptor
Registers a middleware for actions in AWS Lambda service.

> `protected` void RegisterInterceptor(string cmd, Func\<string, Func\<string, Task\<string\>\>, Task\<string\>\> action) 

- **cmd**: string - command name.
- **action**: Func\<string, Func\<string, Task\<string\>\>, Task\<string\>\> - action function that is called when middleware is invoked.


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references used to locate the component dependencies.

### Abstract methods

#### Register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overriden
in child classes.

> `protected abstract` void Register()



### Examples

```cs
public class MyLambdaService : LambdaService
{
    private IMyController _controller;
    public MyLambdaService() : base("v1.myservice")
    {
        _dependencyResolver.Put(
            "controller",
            new Descriptor("mygroup", "controller", "*", "*", "1.0")
        );
    }
    public override void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        this._controller = _dependencyResolver.GetRequired<IMyController>("controller");
    }
    protected override void Register()
    {
        RegisterAction("get_mydata", null, async (input) =>
        {
            var body = AwsLambdaHelper.GetParameters(input);
            var data = await this._controller.GetMyDataAsync(
            GetCorrelationId(input),
                body.GetAsNullableString("id")
            );
            return JsonConverter.ToJson(data);
        });
    }
}

/// ...

var service = new MyLambdaService();
service.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));
service.SetReferences(References.FromTuples(
   new Descriptor("mygroup", "controller", "default", "default", "1.0"), controller
));
await service.OpenAsync("123");
Console.WriteLine("The GRPC service is running on port 8080");
```

### See also
- #### [LambdaClient](../../clients/lambda_client)
