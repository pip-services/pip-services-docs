---
type: docs
title: "AzureFunctionController"
linkTitle: "AzureFunctionController"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-azure-dotnet"
description: >
    Abstract controller that receives remove calls via the Azure Function protocol.
---

**Implements**: [IAzureFunctionController](../iazure_function_controller), [IOpenable](../../../data/validate/schema), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

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
Creates an instance of this controller.

> `public` AzureFunctionController(string name)

- **name**: string - name of the controller used to generate an action cmd.

Creates an instance of this controller.

> `public` AzureFunctionController()

### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _tracer
Tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

</span>

### Instance methods

#### Configure
Configures a component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### ApplyValidation
Performs a validation.

> `protected` Func\<HttpRequest, Task\<IActionResult\>\> ApplyValidation(Schema schema, Func\<HttpRequest, Task\<IActionResult\>\> action)

- **schema**: [Schema](../../../data/validate/schema) - schema used in the validation
- **action**: Func\<HttpRequest, Task\<IActionResult\>\> - action
- **returns**: Func\<HttpRequest, Task\<IActionResult\>\> - returned result


#### CloseAsync
Closes a component and frees used resources.

> `public` Task CloseAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Configure
Configures a component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### GenerateActionCmd
Adds '.cmd' to a command name
> `public` string GenerateActionCmd(string name)

- **name**: string - command name
- **returns**: string - command name with '.cmd' added at its end.

#### GetActions
Get all actions supported by the controller.

> `public` IList<[AzureFunctionAction](../azure_function_action)> GetActions()

- **returns**: IList<[AzureFunctionAction](../azure_function_action)> - array with supported actions.


#### GetCommand
Returns a command from the Azure Function context.

This method can be overloaded in child classes.

> `protected` string GetCommand(HttpRequest context)

- **context**: HttpRequest - context.
- **returns**: string - returned command from context.

#### GetTraceId
Returns a traceId from the Azure Function context.

This method can be overloaded in child classes.

> `protected` string GetTraceId(HttpRequest context)

- **context**: HttpRequest - context.
- **returns**: string - returned traceId from context.


#### Instrument
Adds instrumentation to log calls and measure call time. It returns a CounterTiming 
object that is used to end the time measurement.

> `protected` [CounterTiming](../../../observability/count/counter_timing) Instrument(IContext context, string name)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [CounterTiming](../../../observability/count/counter_timing) - CounterTiming object to end the time measurement.

#### InstrumentError
Adds instrumentation to error handling.

> `protected` void InstrumentError(IContext context, string methodName, Exception ex, bool rethrow = false)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **methodName**: string - a method name.
- **ex**: Exception - Error that occured during the method call.
- **rethrow**: bool - True to throw the exception.

#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### OpenAsync
Opens the component.

> `public` Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### RegisterAction
Registers an action in Azure Function function.

> `protected` void RegisterAction(string name, [Schema](../../../data/validate/schema) schema, Func\<HttpRequest, Task\<IActionResult\>\> action)

- **name**: string - action name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **action**: Func\<HttpRequest, Task\<IActionResult\>\> - action function that is called when the operation is invoked.

#### registerActionWithAuth
Registers an action with authorization.

> `protected` void RegisterActionWithAuth(string name, [Schema](../../../data/validate/schema) schema, Func\<HttpRequest, Func\<HttpRequest, Task\<IActionResult\>\>, Task\<IActionResult\>\> authorize, Func\<HttpRequest, Task\<IActionResult\>\> action)

- **name**: string - action's name
- **schema**: [Schema](../../../data/validate/schema) - validation schema used to validate received parameters.
- **authorize**: Func\<HttpRequest, Func\<HttpRequest, Task\<IActionResult\>\>, Task\<IActionResult\>\> - authorization interceptor
- **action**: Func\<HttpRequest, Task\<IActionResult\>\> - action function that is called when the operation is invoked.


#### RegisterInterceptor
Registers a middleware for actions in Azure Function controller.

> `protected` void RegisterInterceptor(string cmd, Func\<HttpRequest, Func\<HttpRequest, Task\<IActionResult\>\>, Task\<IActionResult\>\> action)

- **cmd**: string - command name or pattern.
- **action**: Func\<HttpRequest, Func\<HttpRequest, Task\<IActionResult\>\>, Task\<IActionResult\>\> - action function that is called when middleware is invoked.


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



### Abstract methods

#### Register
Registers all controller routes in an HTTP endpoint.

This method is called by the controller and must be overridden
in child classes.

> `protected abstract` void Register()

### Examples

```cs
public class MyAzureFunctionController : AzureFunctionController
{
    private IMyController _controller;

    public MyAzureFunctionController(IMyController controller) : base("v1.mycontroller")
    {
        _controller = controller;

        this._dependencyResolver.Put("controller", new Descriptor("mygroup", "controller", "*", "*", "1.0"));
    }

    public override void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        _controller = _dependencyResolver.GetRequired<IMyController>("controller");
    }

    public static void m()
    {
        var controller = new MyAzureFunctionController(controller);
        controller.Configure(ConfigParams.FromTuples(
            "connection.protocol", "http",
            "connection.host", "localhost",
            "connection.port", 8080
        ));
        controller.SetReferences(References.FromTuples(
           new Descriptor("mygroup", "controller", "default", "default", "1.0"), controller
        ));

        await controller.OpenAsync("123");
    }

    protected override void Register()
    {
        RegisterAction("get_dummies", new ObjectSchema()
            .WithOptionalProperty("body",
                new ObjectSchema()
                    .WithOptionalProperty("filter", new FilterParamsSchema())
                    .WithOptionalProperty("paging", new PagingParamsSchema())
                    .WithRequiredProperty("cmd", TypeCode.String)
            ),
            async (req) =>
            {
                var traceId = GetTraceId(req);
                var body = AzureFunctionContextHelper.GetBodyAsParameters(req);
                var id = body.GetAsString("id");
                return await this._controller.getMyData(traceId, id);
            }
        );
    }
}
```
