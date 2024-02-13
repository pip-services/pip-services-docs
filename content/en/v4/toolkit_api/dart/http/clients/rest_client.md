---
type: docs
title: "RestClient"
linkTitle: "RestClient"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-http-dart"
description: >
    Abstract client that calls remote endpoints using the HTTP/REST protocol.
---

**Implements:** [IConfigurable](../../../components/config/iconfigurabl), [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable)

### Description

The RestClient class allows you to create clients that call remote endpoints using the HTTP/REST protocol.

#### Configuration parameters

- **base_route**: base route for a remote URI
- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **protocol**: connection protocol (http or https)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **options**:
    - **retries**: number of retries (default: 3)
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)
    - **traceId**: place for adding correalationId, query - in query string, headers - in headers, both - in query and headers (default: query)


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../observability/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve a connection





### Fields

<span class="hide-title-link">

#### counters
List of counters.
> **counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### client
HTTP client.
> **client**: http.Client?

#### uri
Remote service uri which is defined on openning.
> **uri**: String?

#### timeout
Invocation timeout in milliseconds.
> **timeout**: int = 1000

#### connectionResolver
Connection resolver.
> **connectionResolver**: [HttpConnectionResolver](../../../config/connect/http_connection_resolver) = HttpConnectionResolver()

#### logger
Logger.
> **logger**: [CompositeLogger](../../../observability/log/composite_logger) = CompositeLogger()

#### tracer
The tracer.
> **tracer**: [CompositeTracer](../../../observability/trace/composite_tracer) = CompositeTracer()

#### counters
Performance counters.
> **counters**: [CompositeCounters](../../../observability/count/composite_counters) = CompositeCounters()

#### options
Configuration options.
> **options**: [ConfigParams](../../../components/config/config_params) = ConfigParams()

#### baseRoute
Base route.
> **baseRoute**: String?

#### retries
Number of retries.
> **retries**: int = 1

#### headers
Default headers to be added to every request.
> **headers**: Map\<String, String\>

#### connectTimeout
Connection timeout in milliseconds.
> **connectTimeout**: int = 1000

</span>



### Instance methods

#### addTraceId
Adds a trace id (traceId) to the invocation parameter map.

> Map\<String, String\> addTraceId(Map\<String, String\>? params, IContext? context)

- **params**: Map\<String, String\>? - invocation parameters.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Map\<String, String\> - invocation parameters with added trace id.


#### addFilterParams
Adds filter parameters (with the same name as they defined)
to the invocation parameter map.

> Map\<String, String\> addFilterParams(Map\<String, String\>? params, [FilterParams?](../../../data/query/filter_params) filter)

- **params**: Map\<String, String\>? -  invocation parameters.
- **filter**: [FilterParams?](../../../data/query/filter_params) -  (optional) filter parameters
- **returns**: Map\<String, String\> - invocation parameters with added filter parameters.


#### addPagingParams
Adds paging parameters (skip, take, total) to invocation parameter map.

> Map<String, String> addPagingParams(Map\<String, String\>? params, [PagingParams?](../../../data/query/paging_params) paging)

- **params**: Map\<String, String\>? - invocation parameters.
- **paging**: [PagingParams?](../../../data/query/paging_params) - (optional) paging parameters
- **returns**: Map\<String, String\> - invocation parameters with added paging parameters.



#### call
Calls a remote method via HTTP/REST protocol.

> Future call(String method, String route, IContext? context, Map\<String, String\> params, [data])
- **method**: String - HTTP method: "get", "head", "post", "put", "delete"
- **route**: String - command route. Base route will be added to this route
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: Map\<String, String\> - (optional) query parameters.
- **data**: dynamic - (optional) body object.
- **returns**: Future - that receives result object


#### close
Closes a component and frees used resources.

`@override`
> Future close(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a CounterTiming object that is used to end the time measurement.

> [InstrumentTiming](../../rpc/trace/instrument_timing) instrument(IContext? context, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: String - method name.
- **returns**: [InstrumentTiming](../../rpc/trace/instrument_timing) - InstrumentTiming object used to end the time measurement.


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

`@override`
> Future open(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references used to locate the component dependencies.

### Examples

```dart
class MyRestClient extends RestClient implements IMyClient {
   ...
    Future<MyData> getData(IContext? contextd, String id) async {
       var counter_timing = instrument(context, 'myclient.get_data');
      try{
        var result = await call('get', '/get_data' context, { id: id }, null);
        counter_timing.endTiming();
        return result;
      } catch (err) {
           counter_timing.endTiming();
           rethrow;
       });
   }
   ...
}

var client = MyRestClient();
client.configure(ConfigParams.fromTuples([
    'connection.protocol', 'http',
    'connection.host', 'localhost',
    'connection.port', 8080
]));

var result = await client.getData('123', '1');
  ...
```

### See also
- #### [RestController](../../controllers/rest_controllers)
- #### [CommandableHttpController](../../controllers/commandable_http_controller)
