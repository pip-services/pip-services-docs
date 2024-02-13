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

##### DefaultConfig 
> *cconf.ConfigParams
                                                       
#### Counters
A list of counters.
> *ccount.CompositeCounters

#### Client
The HTTP client.
> *http.Client

#### Uri
The remote service uri which is defined on openning.
> string

#### Timeout
The invocation timeout in milliseconds.
> int

#### ConnectionResolver
The connection resolver.
> rpccon.HttpConnectionResolver

#### Logger
The logger.
> *clog.CompositeLogger

#### Counters
The performance counters.
> *ccount.CompositeCounters

#### Tracer
The tracer.
> *ctrace.CompositeTracer

#### Options
The configuration options.
> *cconf.ConfigParams

#### BaseRoute
The base route.
> string

#### Retries
The number of retries.
> int

#### Headers
The default headers to be added to every request.
> *cdata.StringValueMap

#### ConnectTimeout
The connection timeout in milliseconds.
> in t
####Timeout 
> int
</span>



### Instance methods

#### AddTraceId
Adds a trace id (trace_id) to invocation parameter map.

> (c *RestClient) AddTraceId(params *cdata.StringValueMap, ctx context.Context) *cdata.StringValueMap 

- **params**: StringValueMap - invocation parameters.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: StringValueMap - invocation parameters with added correlation id.


#### AddFilterParams
Adds filter parameters (with the same name as they defined)
to the invocation parameter map.

> (c *RestClient) AddFilterParams(params *cdata.StringValueMap, filter *cquery.FilterParams) *cdata.StringValueMap

- **params**: StringValueMap -  invocation parameters.
- **filters**: FilterParams -  (optional) filter parameters
- **returns**: StringValueMap - invocation parameters with added filter parameters.


#### AddPagingParams
Adds paging parameters (skip, take, total) to invocation parameter map.

> (c *RestClient) AddPagingParams(params *cdata.StringValueMap, paging *cquery.PagingParams) *cdata.StringValueMap

- **params**: StringValueMap - invocation parameters.
- **paging**: PagingParams - (optional) paging parameters
- **returns**: StringValueMap - invocation parameters with added paging parameters.



#### Call
Calls a remote method via HTTP/REST protocol.

> (c *RestClient) Call(ctx context.Context, method string, route string, params *cdata.StringValueMap, data any) (*http.Response, error) 
- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - a command route. Base route will be added to this route
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: StringValueMap - (optional) query parameters.
- **data**: any - (optional) body object.
- **returns**: Response - result object


#### Close
Closes a component and frees used resources.

> (c *RestClient) Close(ctx context.Context) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Configure
Configures a component by passing configuration parameters.

> (c *RestClient) Configure(ctx context.Context, config *cconf.ConfigParams)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> (c *RestClient) Instrument(ctx context.Context, name string) *trace.InstrumentTiming

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - InstrumentTiming object used to end the time measurement.


#### IsOpen
Checks if the component is open.

> (c *RestClient) IsOpen() bool

- **returns**: boolean - True if the component is open and False otherwise.


#### Open
Opens the component.

> (c *RestClient) Open(ctx context.Context) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### SetReferences
Sets references to dependent components.

> (c *RestClient) SetReferences(ctx context.Context, references crefer.IReferences)

- **references**: [IReferences](../../../components/refer/ireferences) - references used to locate the component dependencies.

### Examples

```go
		type MyRestClient struct {
			*RestClient
		}
		...
		func (c *MyRestClient) GetData(ctx context.Context,  id string) (result *tdata.MyDataPage[MyData], err error) {
			timind := c.Instrument(ctx, "myData.get_page_by_filter")
			defer timing.EndTiming(ctx)

			params := cdata.NewEmptyStringValueMap()
			params.Set("id", id)
			response, calErr := c.Call(MyDataPageType, "get", "/data", params, nil)
			if calErr != nil {
				return nil, calErr
			}

			return return clients.HandleHttpResponse[*tdata.MyDataPage[MyData]](response, cctx.GetTraceId(ctx))
		}

		client := NewMyRestClient();
		client.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
			"connection.protocol", "http",
			"connection.host", "localhost",
			"connection.port", 8080,
		));

		result, err := client.GetData(context.Background(), "123", "1")
```

### See also
- #### [RestController](../../controllers/rest_controller)
- #### [CommandableHttpController](../../controllers/commandable_http_controller)


