---
type: docs
title: "AzureFunctionService"
linkTitle: "AzureFunctionService"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-azure-dotnet"
description: >
    Abstract service that receives remove calls via the Azure Function protocol.
---

**Implements**: [IAzureFunctionService](../iazure_function_service), [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description
The AzureFunctionService class allows you to create a service that receives remove calls via the Azure Function protocol.

**Important points**

- This service is intended to work inside an AzureFunction container that exposes registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.

### Constructors
Creates an instance of this service.

> `public` AzureFunctionService(string name)

- **name**: string - name of the service used to generate an action cmd.

Creates an instance of this service.

> `public` AzureFunctionService()

### Fields

<span class="hide-title-link">

#### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _tracer
Tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

</span>

### Instance methods

#### Configure
Configures a component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### ApplyValidation
Performs a validation.

> `protected` Func\<HttpRequest, Task\<IActionResult\>\> ApplyValidation(Schema schema, Func\<HttpRequest, Task\<IActionResult\>\> action)

- **schema**: [Schema](../../../commons/validate/schema) - schema used in the validation
- **action**: Func\<HttpRequest, Task\<IActionResult\>\> - action
- **returns**: Func\<HttpRequest, Task\<IActionResult\>\> - returned result


#### CloseAsync
Closes a component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures a component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GenerateActionCmd
Adds '.cmd' to a command name
> `public` string GenerateActionCmd(string name)

- **name**: string - command name
- **returns**: string - command name with '.cmd' added at its end.

#### GetActions
Get all actions supported by the service.

> `public` IList<[AzureFunctionAction](../azure_function_action)> GetActions()

- **returns**: IList<[AzureFunctionAction](../azure_function_action)> - array with supported actions.


#### GetCommand
Returns a command from the Azure Function context.

This method can be overloaded in child classes.

> `protected` string GetCommand(HttpRequest context)

- **context**: HttpRequest - context.
- **returns**: string - returned command from context.

#### GetCorrelationId
Returns a correlationId from the Azure Function context.

This method can be overloaded in child classes.

> `protected` string GetCorrelationId(HttpRequest context)

- **context**: HttpRequest - context.
- **returns**: string - returned correlationId from context.


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
Registers an action in Azure Function function.

> `protected` void RegisterAction(string name, [Schema](../../../commons/validate/schema) schema, Func\<HttpRequest, Task\<IActionResult\>\> action)

- **name**: string - action name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: Func\<HttpRequest, Task\<IActionResult\>\> - action function that is called when the operation is invoked.

#### registerActionWithAuth
Registers an action with authorization.

> `protected` void RegisterActionWithAuth(string name, [Schema](../../../commons/validate/schema) schema, Func\<HttpRequest, Func\<HttpRequest, Task\<IActionResult\>\>, Task\<IActionResult\>\> authorize, Func\<HttpRequest, Task\<IActionResult\>\> action)

- **name**: string - action's name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **authorize**: Func\<HttpRequest, Func\<HttpRequest, Task\<IActionResult\>\>, Task\<IActionResult\>\> - authorization interceptor
- **action**: Func\<HttpRequest, Task\<IActionResult\>\> - action function that is called when the operation is invoked.


#### RegisterInterceptor
Registers a middleware for actions in Azure Function service.

> `protected` void RegisterInterceptor(string cmd, Func\<HttpRequest, Func\<HttpRequest, Task\<IActionResult\>\>, Task\<IActionResult\>\> action)

- **cmd**: string - command name or pattern.
- **action**: Func\<HttpRequest, Func\<HttpRequest, Task\<IActionResult\>\>, Task\<IActionResult\>\> - action function that is called when middleware is invoked.


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Abstract methods

#### Register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overridden
in child classes.

> `protected abstract` void Register()

### Examples

```cs
public class MyAzureFunctionService : AzureFunctionService
{
    private IMyController _controller;

    public MyAzureFunctionService(IMyController controller) : base("v1.myservice")
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
        var service = new MyAzureFunctionService(controller);
        service.Configure(ConfigParams.FromTuples(
            "connection.protocol", "http",
            "connection.host", "localhost",
            "connection.port", 8080
        ));
        service.SetReferences(References.FromTuples(
           new Descriptor("mygroup", "controller", "default", "default", "1.0"), controller
        ));

        await service.OpenAsync("123");
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
                var correlationId = GetCorrelationId(req);
                var body = AzureFunctionContextHelper.GetBodyAsParameters(req);
                var id = body.GetAsString("id");
                return await this._controller.getMyData(correlationId, id);
            }
        );
    }
}
```
