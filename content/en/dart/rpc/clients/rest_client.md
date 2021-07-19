---
type: docs
title: "RestClient"
linkTitle: "RestClient"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
description: >
    Abstract client that calls remote endpoints using the HTTP/REST protocol.
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

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

#### counters
A list of counters.
> **counters**: [CompositeCounters](../components/count/composite_counters)

#### client
The HTTP client.
> **client**: http.Client

#### uri
The remote service uri which is defined on openning.
> **uri**: String

#### timeout
The invocation timeout in milliseconds.
> **timeout**: int = 1000

#### connectionResolver
The connection resolver.
> **connectionResolver**: [HttpConnectionResolver](../../connect/http_connection_resolver) = HttpConnectionResolver()

#### logger
The logger.
> **logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### counters
The performance counters.
> **counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### options
The configuration options.
> **options**: [ConfigParams](../../../commons/config/config_params) = ConfigParams()

#### baseRoute
The base route.
> **baseRoute**: String

#### retries
The number of retries.
> **retries**: int = 1

#### headers
The default headers to be added to every request.
> **headers**: Map\<String, String\>

#### connectTimeout
The connection timeout in milliseconds.
> **connectTimeout**: int = 1000

</span>



### Instance methods

#### addCorrelationId
Adds a correlation id (correlationId) to the invocation parameter map.

> Map\<String, String\> addCorrelationId(Map\<String, String\> params, String correlationId)

- **params**: Map\<String, String\> - invocation parameters.
- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **returns**: Map\<String, String\> - invocation parameters with added correlation id.


#### addFilterParams
Adds filter parameters (with the same name as they defined)
to the invocation parameter map.

> Map\<String, String\> addFilterParams(Map\<String, String\> params, [FilterParams](../../../commons/data/filter_params) filter)

- **params**: dynamic -  invocation parameters.
- **filter**: [FilterParams](../../../commons/data/filter_params) -  (optional) filter parameters
- **returns**: Map\<String, String\> - invocation parameters with added filter parameters.


#### addPagingParams
Adds paging parameters (skip, take, total) to invocation parameter map.

> Map<String, String> addPagingParams(Map\<String, String\> params, [PagingParams](../../../commons/data/paging_params) paging)

- **params**: Map\<String, String\> - invocation parameters.
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **returns**: Map\<String, String\> - invocation parameters with added paging parameters.



#### call
Calls a remote method via HTTP/REST protocol.

> Future call(String method, String route, String correlationId, Map\<String, String\> params, [data])
- **method**: String - HTTP method: "get", "head", "post", "put", "delete"
- **route**: String - a command route. Base route will be added to this route
- **correlationId**: String - (optional) transaction id used to trace execution through a call chain.
- **params**: Map\<String, String\> - (optional) query parameters.
- **data**: dynamic - (optional) body object.
- **returns**: Future - that receives result object


#### close
Closes a component and frees used resources.

`@override`
> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through a call chain.


#### configure
Configures a component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> Timing instrument(String correlationId, String name)

- **correlationId**: String - (optional) transaction id used to trace execution through a call chain.
- **name**: String - method name.
- **returns**: [Timing](../../../components/timing) - InstrumentTiming object used to end the time measurement.


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - True if the component is open and False otherwise.


#### open
Opens the component.

`@override`
> Future open(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through a call chain.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references used to locate the component dependencies.

### Examples

```dart
class MyRestClient extends RestClient implements IMyClient {
   ...
    Future<MyData> getData(String correlationId, String id) async {
       var timing = instrument(correlationId, 'myclient.get_data');
      try{
        var result = await call('get', '/get_data' correlationId, { id: id }, null);
        timing.endTiming();
        return result;
      } catch (err) {
           timing.endTiming();
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
- #### [RestService](../../services/rest_service)
- #### [CommandableHttpService](../../services/commandable_http_service)
