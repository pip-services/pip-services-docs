---
type: docs
title: "CloudFunctionClient"
linkTitle: "CloudFunctionClient"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-gcp-go"
description: >
    Abstract client that calls Google Functions.
---

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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Fields

<span class="hide-title-link">

#### Client
The HTTP client.
> **Client**: *http.Client

### ConnectTimeout
The connection timeout in milliseconds.
> **ConnectTimeout**: int = 10000

### Connection
The Google Function connection parameters
> **Connection**: [*GcpConnectionParams](../../connect/gcp_connection_params)

### ConnectionResolver
The connection resolver.
> **ConnectionResolver**: [*GcpConnectionResolver](../../connect/gcp_connection_resolver)

### Counters
Performance counters.
> **Counters**: [*CompositeCounters](../../../observability/count/composite_counters)

### DependencyResolver
Dependencies resolver.
> **DependencyResolver**: [*DependencyResolver](../../../components/refer/dependency_resolver)

### Headers
The default headers to be added to every request.
> **Headers**: [*cdata.StringValueMap](../../../commons/data/string_value_map)

### Logger
Logger.
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

### Timeout
The invocation timeout in milliseconds.
> **Timeout**: int = 10000

### Tracer
The tracer.
> **Tracer**: [*CompositeTracer](../../../observability/trace/composite_tracer)

### Uri
The remote service uri which is calculated on open.
> **Uri**: string


</span>

### Constructors

#### NewCloudFunctionClient
Creates new instance of CloudFunctionClient

> NewCloudFunctionClient() [*CloudFunctionClient]()

### Instance methods

#### AddFilterParams
AddFilterParams method are adds filter parameters (with the same name as they defined)
to invocation parameter map.

> (c [*CloudFunctionClient]()) AddFilterParams(params [*StringValueMap](../../../commons/data/string_value_map), filter [*FilterParams](../../../data/query/filter_params)) [*StringValueMap](../../../commons/data/string_value_map)

- **params**: [*StringValueMap](../../../commons/data/string_value_map) - invocation parameters.
- **filter**: [*FilterParams](../../../data/query/filter_params) - (optional) filter parameters
- **returns**: [*StringValueMap](../../../commons/data/string_value_map) - invocation parameters with added filter parameters.

#### AddPagingParams
AddPagingParams method are adds paging parameters (skip, take, total) to invocation parameter map.

> (c [*CloudFunctionClient]()) AddPagingParams(params [*StringValueMap](../../../commons/data/string_value_map), paging [*PagingParams](../../../data/query/paging_params)) [*StringValueMap](../../../commons/data/string_value_map)

- **params**: [*StringValueMap](../../../commons/data/string_value_map) - invocation parameters.
- **paging**: [*PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **returns**: [*StringValueMap](../../../commons/data/string_value_map) - invocation parameters with added paging parameters.

#### Call
Calls a Google Function action.

> (c [*CloudFunctionClient]()) Call(ctx context.Context, cmd string, context [IContext](../../../components/context/icontext), args [*AnyValueMap](../../../commons/data/any_value_map)) (*http.Response, error)

- **ctx**: context.Context - operation context.
- **cmd**: string - an action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**:  [*AnyValueMap](../../../commons/data/any_value_map) - (optional) action parameters.
- **returns**: (*http.Response, error) - action result.

#### Close
Closes component and frees used resources.

> (c [*CloudFunctionClient]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error close.


#### Configure
Configures component by passing configuration parameters.

> (c [*CloudFunctionClient]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Instrument
Adds instrumentation to log calls and measure call time.
It returns a CounterTiming object that is used to end the time measurement.

> (c [*CloudFunctionClient]()) Instrument(ctx context.Context, context [IContext](../../../components/context/icontext), name string) [*InstrumentTiming](../../../rpc/trace/instrument_timing)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - a method name.
- **return**: [*InstrumentTiming](../../../rpc/trace/instrument_timing) - object to end the time measurement.


#### IsOpen
Checks if the component is opened.

> (c [*CloudFunctionClient]()) IsOpen() bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### Open
Opens the component.

> (c [*CloudFunctionClient]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - open error.

#### SetReferences
Sets references to dependent components.

> (c [*CloudFunctionClient]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies. 



### Examples

```go
type MyCloudFunctionClient struct {
	clients.CloudFunctionClient
}

func NewMyCloudFunctionClient() *MyCloudFunctionClient {
	return &MyCloudFunctionClient{
		CloudFunctionClient: *gcpclient.NewCloudFunctionClient(),
	}
}

func (c *MyCloudFunctionClient) GetData(ctx context.Context, correlationId string, id string) MyData {
	timing := c.Instrument(ctx, correlationId, "myclient.get_data")

	response, err := c.Call(ctx, "get_data", correlationId, data.NewAnyValueMapFromTuples("id", dummyId))

	defer timing.EndTiming(ctx, err)
	return rpcclients.HandleHttpResponse[MyData](response, correlationId)
}

...

client := NewMyCloudFunctionClient()
client.Configure(config.NewConfigParamsFromTuples(
	"connection.uri", "http://region-id.cloudfunctions.net/myfunction",
	"connection.protocol", "http",
	"connection.region", "region",
	"connection.function", "myfunction",
	"connection.project_id", "id",
	"credential.auth_token", "XXX",
))
result := client.GetData("123", "1")
```


### See also
- #### [CloudFunction](../../containers/cloud_function/)
- #### [CommandableCloudFunctionClient](../commandable_cloud_function_client)
