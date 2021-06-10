---
type: docs
title: "RestClient"
linkTitle: "RestClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
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

#### _counters
A list of counters.
> `protected` **_counters**: [ICounters](../icounters)[] = []

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
> `protected` **_connectionResolver**: [HttpConnectionResolver](../../connect/http_connection_resolver) = HttpConnectionResolver()

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### _counters
The performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### _tracer
The tracer.
> `protected` **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer) = CompositeTracer()

#### _options
The configuration options.
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params) = ConfigParams()

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

#### _correlationIdLocation
Defines where to add the correlation id.
> `protected` **_correlationIdLocation**: string = "query"

</span>



### Instance methods

#### addCorrelationId
Adds a correlation id (correlationId) to the invocation parameter map.

> `protected` addCorrelationId(params: any, correlationId: string): any

- **params**: any - invocation parameters.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
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

> `protected` call\<T\>(method: string, route: string, correlationId?: string, params: any = {}, data?: any): Promise\<T\>
- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - a command route. Base route will be added to this route
- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **params**: any - (optional) query parameters.
- **data**: any - (optional) body object.
- **returns**: Promise\<T\> - result object


#### close
Closes a component and frees used resources.

> `public` close(correlationId: string): Promise<void>

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.


#### configure
Configures a component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> `protected` instrument(correlationId: string, name: string): [InstrumentTiming](../../services/instrument_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [InstrumentTiming](../../services/instrument_timing) - InstrumentTiming object used to end the time measurement.


#### isOpen
Checks if the component is open.

> isOpen(): boolean

- **returns**: boolean - True if the component is open and False otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references used to locate the component dependencies.

### Examples

```typescript
class MyRestClient extends RestClient implements IMyClient {
   ...
   public async getData(correlationId: string, id: string): Promise<MyData> {
        let timing = this.instrument(correlationId, 'myclient.get_data');
        try {
            return await this.call("get", "/get_data" correlationId, { id: id }, null);
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
- #### [RestService](../../services/rest_service)
- #### [CommandableHttpService](../../services/commandable_http_service)
