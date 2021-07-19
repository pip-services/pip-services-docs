---
type: docs
title: "RestClient"
linkTitle: "RestClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Abstract client that calls remote endpoints using the HTTP/REST protocol.
---

**Inherits:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

The RestClient class allows you to create clients that call remote endpoints using the HTTP/REST protocol.

#### Configuration parameters

- **base_route**: base route for a remote URI
- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **protocol**: connection protocol (http or https)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **options**:
    - **retries**: number of retries (default: 3)
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)
    - **correlationId**: place for adding correalationId, query - in query string, headers - in headers, both - in query and headers (default: query)


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../components/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve a connection




### Fields

<span class="hide-title-link">

#### _counters
A list of counters.
> `protected` **_counters**: [ICounters](../components/count/icounters)[] = []

#### _client
The HTTP client.
> `protected` **_client**: HttpClient

#### _address
The remote service uri which is defined on openning.
> `protected` **_address**: string

#### _timeout
The invocation timeout in milliseconds.
> `protected` **_timeout**: int = 1000

#### _connectionResolver
The connection resolver.
> `protected` **_connectionResolver**: [HttpConnectionResolver](../../connect/http_connection_resolver) = HttpConnectionResolver()

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### _counters
The performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()


#### _options
The configuration options.
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params) = ConfigParams()

#### _baseRoute
The base route.
> `protected` **_baseRoute**: string

#### _retries
The number of retries.
> `protected` **_retries**: int = 1

#### _headers
The default headers to be added to every request.
> `protected` **_headers**: [StringValueMap](../../../commons/data/string_value_map)


#### _correlationIdPlace
Defines where to add the correlation id.
> `protected` **_correlationIdPlace**: string = "query"

</span>



### Instance methods

#### AddCorrelationId
Adds a correlation id (correlationId) to the invocation parameter map.

> `protected` string AddCorrelationId(string route, string correlationId)

- **route**: string - invocation parameters.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: string - invocation parameters with added correlation id.


#### AddFilterParams
Adds filter parameters (with the same name as they defined)
to the invocation parameter map.

> `protected` string AddFilterParams(string route, [FilterParams](../../../commons/data/filter_params) filter)

- **route**: string -  invocation parameters.
- **filters**: [FilterParams](../../../commons/data/filter_params) -  (optional) filter parameters.
- **returns**: string - invocation parameters with added filter parameters.


#### AddPagingParams
Adds paging parameters (skip, take, total) to invocation parameter map.

> `protected` string AddPagingParams(string route, [PagingParams](../../../commons/data/paging_params) paging)

- **params**: string - invocation parameters.
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **returns**: string - invocation parameters with added paging parameters.



#### CallAsync
Calls a remote method via HTTP/REST protocol.

> `protected` Task CallAsync(string correlationId, HttpMethod method, string route)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - a command route. Base route will be added to this route


> `protected` Task CallAsync(string correlationId, HttpMethod method, string route, object requestEntity)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - a command route. Base route will be added to this route
- **requestEntity**: object - request body object.


> `protected` Task\<T\> CallAsync\<T\>(string correlationId, HttpMethod method, string route)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - a command route. Base route will be added to this route
- **returns**: Task\<T\> - result object


> `protected` Task\<T\> CallAsync\<T\>(string correlationId, HttpMethod method, string route, object requestEntity)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - a command route. Base route will be added to this route
- **requestEntity**: object - request body object.
- **returns**: Task\<T\> - result object


#### CloseAsync
Closes a component and frees used resources.

> `public virtual` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.


#### Configure
Configures a component by passing configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### ExecuteAsync
Executes a remote method via HTTP/REST protocol.

> `protected` Task ExecuteAsync(string correlationId, HttpMethod method, string route, object requestEntity)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - a command route. Base route will be added to this route
- **requestEntity**: object - request body object.

> `protected` async Task\<T\> ExecuteAsync\<T\>(string correlationId, HttpMethod method, string route)
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - a command route. Base route will be added to this route
- **requestEntity**: object - request body object.
- **returns**: Task\<T\> - result object.

> `protected` Task\<T\> ExecuteAsync\<T\>(string correlationId, HttpMethod method, string route, object requestEntity)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - a command route. Base route will be added to this route
- **requestEntity**: object - request body object.
- **returns**: Task\<T\> - result object.

#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` [CounterTiming](../../../components/count/counter_timing) Instrument(string correlationId, [CallerMemberName]string methodName = null)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **methodName**: [CallerMemberName]string - method name.
- **returns**: [CounterTiming](../../../components/count/counter_timing) - CounterTiming object used to end the time measurement.

#### InstrumentError
Adds instrumentation to error handling.

> `protected` void InstrumentError(string correlationId, [CallerMemberName]string methodName = null, Exception ex = null, bool rethrow = false)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **methodName**: [CallerMemberName]string - method name.
- **ex**: Exception - Error that occured during the method call.
- **rethrow**: bool - True to throw the exception.

#### IsOpen
Checks if the component is open.

> `public virtual` bool IsOpen()

- **returns**: bool - True if the component is open and False otherwise.


#### OpenAsync
Opens the component.

> `public virtual` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references used to locate the component dependencies.

#### SafeExecuteAsync
Safely executes a remote method via HTTP/REST protocol and logs execution time.

> `protected` Task\<T\> SafeExecuteAsync\<T\>(string correlationId, HttpMethod method, string route, object requestEntity)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - a command route. Base route will be added to this route
- **requestEntity**: object - request body object.
- **returns**: Task\<T\> - result object.

> `protected` async Task\<T\> SafeExecuteAsync\<T\>(string correlationId, HttpMethod method, string route)
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - a command route. Base route will be added to this route
- **returns**: Task\<T\> - result object.


#### SafeCallAsync
Safely calls a remote method via HTTP/REST protocol and logs execution time.

> `protected` Task\<T\> SafeCallAsync\<T\>(string correlationId, HttpMethod method, string route, object requestEntity)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **method**: HttpMethod - HTTP method: "post", "put", "patch".
- **route**: string - a command route. Base route will be added to this route
- **requestEntity**: object - request body object.
- **returns**: Task\<T\> - result object.


> `protected` Task\<T\> SafeCallAsync\<T\>(string correlationId, HttpMethod method, string route)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **method**: HttpMethod - HTTP method: "post", "put", "patch".
- **route**: string - a command route. Base route will be added to this route
- **returns**: Task\<T\> - result object.

### Examples

```cs
class MyRestClient: RestClient, IMyClient 
{
    ...

    public MyData GetData(string correlationId, string id)
    {
        var timing = this.Instrument(correlationId, 'myclient.get_data');
        try
        {
            var result = this.ExecuteAsync<MyData>(correlationId, HttpMethod.Post, "/get_data", new MyData(id));
        }
        catch (Exception ex)
        {
            this.InstrumentError(correlationId, "myclient.get_data", ex, true);
        }
        finally
        {
            timing.EndTiming();
        }
        return result;        
    }
    ...
}

var client = new MyRestClient();
client.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080 ));

var data = client.GetData("123", "1");
...
```

### See also
- #### [RestService](../../services/rest_service)
- #### [CommandableHttpService](../../services/commandable_http_service)
