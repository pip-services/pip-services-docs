---
type: docs
title: "CloudFunctionClient"
linkTitle: "CloudFunctionClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-gcp-dotnet"
description: >
    Abstract client that calls Google Functions.
---

**Implements:** [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description
When making calls "cmd" parameter determines which what action shall be called, while
other parameters are passed to the action itself.


#### Configuration parameters

- **connections**:
    - **uri**:           full connection uri with specific app and function name
    - **protocol**:      connection protocol
    - **project_id**:    is your Google Cloud Platform project ID
    - **region**:        is the region where your function is deployed
    - **function_name**: is the name of the HTTP function you deployed
- **options**:
	- **retries**: number of retries (default: 3)
	- **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
	- **timeout**: invocation timeout in milliseconds (default: 10 sec)
- **credentials**:
    - **auth_token**:    Google-generated ID token, if use custom authorization provide empty string

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
> **_connectTimeout**: number = 10000

### _connection
The Google Function connection parameters
> **_connection**: [GcpConnectionParams](../../connect/gcp_connection_params)

### _connectionResolver
The connection resolver.
> **_connectionResolver**: [GcpConnectionResolver](../../connect/gcp_connection_resolver)

### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)

### _dependencyResolver
Dependencies resolver.
> **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

### _headers
The default headers to be added to every request.
> **_headers**: any = {}

### _logger
Logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

### _timeout
The invocation timeout in milliseconds.
> **_timeout**: number = 10000

### _tracer
The tracer.
> **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

### _uri
The remote service uri which is calculated on open.
> **_uri**: string


</span>


### Instance methods

#### CallAsync
Calls a Google Function action.

> `protected` async Task\<T\> CallAsync\<T\>(string cmd, string correlationId, object args)

- **cmd**: string - an action name to be called.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **params**: object - (optional) action parameters.
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
Adds instrumentation to log calls and measure call time.
It returns a CounterTiming object that is used to end the time measurement.

> `protected` [CounterTiming](../../../components/count/counter_timing) Instrument(string correlationId, string methodName)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **name**: string - a method name.
- **return**: [CounterTiming](../../../components/count/counter_timing) - object to end the time measurement.


#### InvokeAsync
Performs Google Function invocation.

> `protected` async Task\<T\> InvokeAsync\<T\>(string cmd, string correlationId, object args)

- **cmd**: string - an action name to be called.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: object - action arguments
- **returns**: Task\<T\> - action result.


#### IsOpen
Checks if the component is opened.

> `public` bool IsOpen()

- **returns**: bool - true if the component has been opened and false otherwise.


#### OpenAsync
Opens the component.

> `public` async Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies. 



### Examples

```cs
class MyCloudFunctionClient: CloudFunctionClient, IMyClient
{
    /// ...
    public async Task<MyData> GetDataAsync(string correlationId, string id
        var timing = this.Instrument(correlationId, "myclient.get_data");
        var result = await this.CallAsync<MyData>("get_data", correlationI
        timing.EndTiming();
        return result;
    }
    /// ...
    public async Task Main()
    {
        var client = new MyCloudFunctionClient();
        client.Configure(ConfigParams.FromTuples(
            "connection.uri", "http://region-id.cloudfunctions.net/myfunct
            "connection.protocol", "http",
            "connection.region", "region",
            "connection.function", "myfunction",
            "connection.project_id", "id",
            "credential.auth_token", "XXX"
        ));
        /// ...
        var  result = await client.GetDataAsync("123", "1");
    }
}
```


### See also
- #### [CloudFunction](../../cloud_function/)
- #### [CommandableGoogleClient](../commandable_google_client)