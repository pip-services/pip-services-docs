---
type: docs
title: "RestClient"
linkTitle: "RestClient"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
description: >
    Abstract client that calls remote endpoints using the HTTP/REST protocol.
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable)

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
    - **context**: a context to trace execution through a call chain.


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../observability/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve a connection





### Fields

<span class="hide-title-link">

#### _counters
A list of counters.
> `protected` CompositeCounters **_counters** = new CompositeCounters()

#### _client
The HTTP client.
> `protected` Client **_client**

#### _uri
The remote service uri which is defined on openning.
> `protected` String **_url**

#### _timeout
The invocation timeout in milliseconds.
> `protected` long **_timeout** = 10000

#### _connectionResolver
The connection resolver.
> `protected` [HttpConnectionResolver](../../../config/connect/http_connection_resolver) **_connectionResolver** = new HttpConnectionResolver()

#### _logger
The logger.
> `protected` [CompositeLogger](../../../observability/log/composite_logger) **_logger** = new CompositeLogger()

#### _counters
The performance counters.
> `protected` [CompositeCounters](../../../observability/count/composite_counters) **_counters** = new CompositeCounters()

#### _tracer
The tracer.
> `protected` [CompositeTracer](../../../observability/trace/composite_tracer) **_tracerv = new CompositeTracer()

#### _options
The configuration options.
> `protected` [ConfigParams](../../../components/config/config_params) **_options** = new ConfigParams()

#### _baseRoute
The base route.
> `protected` String **_baseRoute**

#### _retries
The number of retries.
> `protected` int **_retries** = 1

#### _headers
The default headers to be added to every request.
> `protected` MultivaluedMap<String, Object> **_headers** = new MultivaluedHashMap<>()

#### _connectTimeout
The connection timeout in milliseconds.
> `protected` long **_connectTimeout** = 10000

</span>



### Instance methods

#### addTraceId
Adds a trace id (trace_id) to invocation parameter map.

> `protected` String addTraceId(String route, [IContext](../../../components/context/icontext) context)

- **route**: String - route.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: String - trace id.


#### addFilterParams
Adds filter parameters (with the same name as they defined)
to the invocation parameter map.

> `protected` String addFilterParams(String route, FilterParams filter)

- **params**: route -  route.
- **filter**: FilterParams -  (optional) filter parameters
- **returns**: String - invocation parameters with added filter parameters.


#### addPagingParams
Adds paging parameters (skip, take, total) to invocation parameter map.

> `protected` String addPagingParams(String route, PagingParams paging)

- **route**: String - invocation parameters.
- **paging**: PagingParams - (optional) paging parameters
- **returns**: String - invocation parameters with added paging parameters.



#### call
Calls a remote method via HTTP/REST protocol.

> `protected` <T> T call(Class<T> type, [IContext](../../../components/context/icontext) context, String method, String route, Object requestEntity) throws ApplicationException

- **type**: Class<T> - the class type of data.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **method**: String - HTTP method: "get", "head", "post", "put", "delete"
- **route**: String - a command route. Base route will be added to this route
- **requestEntity**: Object - request body object.
- **returns**: <T> T - result object


#### close
Closes a component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` [InstrumentTiming](../../../rpc/trace/instrument_timing) instrument([IContext](../../../components/context/icontext) context, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - InstrumentTiming object used to end the time measurement.


#### isOpen
Checks if the component is open.

> `public` boolean isOpen()

- **returns**: boolean - True if the component is open and False otherwise.


#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException

- **references**: [IReferences](../../../components/refer/ireferences) - references used to locate the component dependencies.

### Examples

```java
{@code
  class MyRestClient extends RestClient implements IMyClient {
     ...
 
     public MyData getData(IContext context, String id) {
         Timing timing = this.instrument(context, 'myclient.get_data');
         MyData result = this.execute(MyData.class, context, HttpMethod.POST, "/get_data", new MyData(id));
         timing.endTiming();
         return result;
     }
     ...
  }
 
  MyRestClient client = new MyRestClient();
  client.configure(ConfigParams.fromTuples(
      "connection.protocol", "http",
      "connection.host", "localhost",
      "connection.port", 8080
  ));
 
  MyData data = client.getData("123", "1");
  ...
  }
```

### See also
- #### [RestController](../../controllers/rest_controller)
- #### [CommandableHttpController](../../controllers/commandable_http_controller)
