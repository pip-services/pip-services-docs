---
type: docs
title: "CloudFunctionService"
linkTitle: "CloudFunctionService"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-gcp-dotnet"
description: >
    Abstract service that receives remove calls via the Google Function protocol.
---

**Implements**: [ICloudFunctionService](../icloud_function_service), [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description
The CloudFunctionService class allows you to create a service that receives remove calls via the Google Function protocol.

**Important points**

- This service is intended to work inside an CloudFunction container that exposes registered actions externally.

#### Configuration parameters
 
- **dependencies**:
    - **controller**: override for Controller dependency


#### References
- **\*:logger:\*:\*:1.0**: (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0**: (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.

### Constructors
Creates an instance of this service.

> `public` CloudFunctionService(string name)

- **name**: string - name of the service used to generate an action cmd.

Creates an instance of this service.

> `public` CloudFunctionService()


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

#### applyInterceptors
Applies interceptors to the action.

> `protected` applyInterceptors(action: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>): (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>

- **action**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\> - action
- **returns**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\> - returned result

#### applyValidation
Performs a validation.

> `protected` applyValidation(schema: [Schema](../../../commons/validate/schema), action: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>): (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\>

- **schema**: [Schema](../../../commons/validate/schema) - schema used in the validation
- **action**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\> - action
- **returns**: (req: [Request](https://expressjs.com/ru/api.html#req), res: [Response](https://expressjs.com/ru/api.html#res)) => Promise\<any\> - returned result


#### close
Closes a component and frees used resources.

> `public` close(correlationId: string): Promise\<void\> 

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures a component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### generateActionCmd
Adds '.cmd' to a command name
> `protected` generateActionCmd(name: string): string

- **name**: string - command name
- **returns**: string - command name with '.cmd' added at its end.

#### GetActions
Get all actions supported by the service.

> `public` List<[CloudFunctionAction](../cloud_function_action)> GetActions()

- **returns**: List<[CloudFunctionAction](../cloud_function_action)> - array with supported actions.


#### getCommand
Returns command from Google Function request.

This method can be overloaded in child classes

> `protected` getCommand(req: any): string

- **req**: any - the function request
- **returns**: string - returned command from request.

#### getCorrelationId
Returns correlationId from Google Function request.

This method can be overloaded in child classes

> `protected` getCorrelationId(req: any): string

- **req**: any - the function request
- **returns**: string - returned correlationId from request.


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
Registers an action in Google Function function.

> `protected` void RegisterAction(string name, [Schema](../../../commons/validate/schema) schema, Func\<HttpContext, Task\> action)

- **name**: string - action name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **action**: Func\<HttpContext, Task\> - action function that is called when the operation is invoked.

#### registerActionWithAuth
Registers an action with authorization.

> `protected` void RegisterActionWithAuth(string name, [Schema](../../../commons/validate/schema) schema, Func\<HttpContext, Func\<HttpContext, Task\>, Task\> authorize, Func\<HttpContext, Task\> action)

- **name**: string - action's name
- **schema**: [Schema](../../../commons/validate/schema) - validation schema used to validate received parameters.
- **authorize**: Func\<HttpContext, Func\<HttpContext, Task\>, Task\> - authorization interceptor
- **action**: Func\<HttpContext, Task\> - action function that is called when the operation is invoked.


#### RegisterInterceptor
Registers a middleware for actions in Google Function service.

> `protected` void RegisterInterceptor(Func\<Func\<HttpContext, Task\>, Task\> action)

- **action**: Func\<Func\<HttpContext, Task\>, Task\> - action function that is called when middleware is invoked.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Abstract methods

#### Register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overridden
in child classes.

> `protected abstract` void Register()

### Examples

```cs
public class MyCloudFunctionService : CloudFunctionService
{
    private IMyController _controller;

    public MyCloudFunctionService(IMyController controller) : base("v1.myservice")
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
        var service = new MyCloudFunctionService(controller);
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
                var body = await CloudFunctionRequestHelper.GetBodyAsync(req);
                var id = body.GetAsString("id");
                return await this._controller.getMyData(correlationId, id);
            }
        );
    }
}
```
