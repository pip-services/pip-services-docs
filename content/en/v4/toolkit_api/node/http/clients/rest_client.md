---
type: docs
title: "RestClient"
linkTitle: "RestClient"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-http-node"
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
> `protected` **_counters**: [ICounters](../../../observability/count/icounters)[] = []

#### _client
The HTTP client.
> `protected` **_client**: any

#### _uri
The remote service uri which is defined on openning.
> `protected` **_uri**: string

#### _timeout
The invocation timeout in milliseconds.
> `protected` **_timeout**: number = 1000

#### _connectionResolver
The connection resolver.
> `protected` **_connectionResolver**: [HttpConnectionResolver](../../../config/connect/http_connection_resolver) = HttpConnectionResolver()

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger) = CompositeLogger()

#### _counters
The performance counters.
> `protected` **_counters**: [CompositeCounters](../../../observability/count/composite_counters) = CompositeCounters()

#### _tracer
The tracer.
> `protected` **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer) = CompositeTracer()

#### _options
The configuration options.
> `protected` **_options**: [ConfigParams](../../../components/config/config_params) = ConfigParams()

#### _baseRoute
The base route.
> `protected` **_baseRoute**: string

#### _retries
The number of retries.
> `protected` **_retries** = 1

#### _headers
The default headers to be added to every request.
> `protected` **_headers**: any = {}

#### _connectTimeout
The connection timeout in milliseconds.
> `protected` **_connectTimeout**: number = 1000

#### _contextIdLocation
Defines where to add the correlation id.
> `protected` **_contextLocation**: string = "query"

</span>



### Instance methods

#### addTraceId
Adds a trace id (trace_id) to invocation parameter map.

> `protected` addTraceId(params: any, context: [IContext](../../../components/context/icontext)): any

- **params**: any - invocation parameters.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: any - invocation parameters with added correlation id.


#### addFilterParams
Adds filter parameters (with the same name as they defined)
to the invocation parameter map.

> `protected` addFilterParams(params: any, filters: any): any

- **params**: any -  invocation parameters.
- **filters**: any -  (optional) filter parameters
- **returns**: any - invocation parameters with added filter parameters.


#### addPagingParams
Adds paging parameters (skip, take, total) to invocation parameter map.

> `protected` addPagingParams(params: any, paging: any): any

- **params**: any - invocation parameters.
- **paging**: any - (optional) paging parameters
- **returns**: any - invocation parameters with added paging parameters.



#### call
Calls a remote method via HTTP/REST protocol.

> `protected` call\<T\>(method: string, route: string, context?: string, params: any = {}, data?: any): Promise\<T\>
- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - a command route. Base route will be added to this route
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: any - (optional) query parameters.
- **data**: any - (optional) body object.
- **returns**: Promise\<T\> - result object


#### close
Closes a component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` instrument(context: [IContext](../../../components/context/icontext), name: string): [InstrumentTiming](../../../rpc/trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - InstrumentTiming object used to end the time measurement.


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component is open and False otherwise.


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references used to locate the component dependencies.

### Examples

```typescript
class MyRestClient extends RestClient implements IMyClient {
   ...
   public async getData(context: IContext, id: string): Promise<MyData> {
        let timing = this.instrument(context, 'myclient.get_data');
        try {
            return await this.call("get", "/get_data" context, { id: id }, null);
        } catch (ex) {
            timing.endFailure(ex);
        } finally {
            timing.endTiming();
        }
   }
   ...
}

let client = new MyRestClient();
client.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

let result = await client.getData("123", "1");
```

### See also
- #### [RestController](../../controllers/rest_controller)
- #### [CommandableHttpController](../../controllers/commandable_http_controller)
