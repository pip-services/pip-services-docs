---
type: docs
title: "AzureFunctionClient"
linkTitle: "AzureFunctionClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-azure-dotnet"
description: >
    Abstract client that calls Azure Functions.
---

**Inherits:** [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description
When making calls "cmd" parameter determines which what action shall be called, while
other parameters are passed to the action itself.


#### Configuration parameters

- **connections**:                   
    - **uri**: (optional) full connection string or use protocol, app_name and function_name to build
    - **protocol**: (optional) connection protocol
    - **app_name**: (optional) Azure Function application name
    - **function_name**: (optional) Azure Function name
- **options**:
     - **retries**: number of retries (default: 3)
     - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
     - **timeout**: invocation timeout in milliseconds (default: 10 sec)
- **credentials**:
    - **auth_code**: Azure Function auth code if use custom authorization provide empty string

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Fields

<span class="hide-title-link">

#### _client
The HTTP client.
> **_client**: HttpClient

### _connectTimeout
The connection timeout in milliseconds.
> **_connectTimeout**: int = 10000

### _connection
The Azure Function connection parameters
> **_connection**: [AzureFunctionConnectionParams](../../connect/azure_function_connection_params)

### _connectionResolver
The connection resolver.
> **_connectionResolver**: [AzureFunctionConnectionResolver](../../connect/azure_function_connection_resolver)

### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)

### _dependencyResolver
Dependencies resolver.
> **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

### _headers
The default headers to be added to every request.
> **_headers**: Dictionary\<string, string\> = new()

### _logger
Logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

### _timeout
The invocation timeout in milliseconds.
> **_timeout**: int = 10000

### _tracer
The tracer.
> **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

### _uri
The remote service uri which is calculated on open.
> **_uri**: string


</span>


### Instance methods

#### CallAsync
Calls a Azure Function action.

> `protected` Task\<T\> CallAsync\<T\>(string cmd, string correlationId, object args)

- **cmd**: string - an action name to be called.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: object - (optional) action parameters.
- **returns**: Task\<T\> - action result.

#### CloseAsync
Closes component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### Configure
Configures component by passing configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


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


#### InvokeAsync
Performs Azure Function invocation.

> `protected` Task\<T\> InvokeAsync\<T\>(string cmd, string correlationId, object args)

- **cmd**: string - action result.
- **correlationId**: string - action result.
- **args**: object - action result.
- **returns**: Task\<T\> - action result.


#### IsOpen
Checks if the component is opened.

> `public` bool IsOpen()

- **returns**: bool - true if the component has been opened and false otherwise.


#### OpenAsync
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies. 



### Examples

```cs
class MyAzureFunctionClient: AzureFunctionClient, IMyClient
{
...
    /// 
    public async Task<MyData> GetDataAsync(string correlationId, string id) {
        var timing = this.Instrument(correlationId, "myclient.get_data");
        var result = await this.CallAsync<MyData>("get_data", correlationId, new { id=id });
        timing.EndTiming();
        return result;
    }
    ...
    /// 
    public async Task Main()
    {
        var client = new MyAzureFunctionClient();
        client.Configure(ConfigParams.FromTuples(
            "connection.uri", "http://<APP_NAME>.azurewebsites.net/api/<FUNCTION_NAME>",
            "connection.protocol", protocol,
            "connection.app_name", appName,
            "connection.function_name", functionName,
            "credential.auth_code", authCode
        ));
    /// 
        var  result = await client.GetDataAsync("123", "1");
    }
}
```


### See also
- #### [AzureFunction](../../containers/azure_function/)
- #### [CommandableAzureFunctionClient](../commandable_azure_function_client)