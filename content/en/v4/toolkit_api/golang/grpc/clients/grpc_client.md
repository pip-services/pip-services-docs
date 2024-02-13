---
type: docs
title: "GrpcClient"
linkTitle: "GrpcClient"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
description: > 
    Abstract client that calls remote endpoints using the GRPC protocol.

---

**Implements:** [IOpenable](../../../components/run/iopenable), [IReferenceable](../../../components/refer/ireferenceable),
[IConfigurable](../../../components/config/iconfigurable)

### Description

The GrpcClient class allows you to create clients that call remote endpoints using the GRPC protocol.

#### Configuration parameters

- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)    
    - **protocol**: connection protocol: http or https    
    - **host**: host name or IP address    
    - **port**: port number     
    - **uri**: resource URI or connection string with all parameters in it    
- **options**:    
    - **retries**: number of retries (default: 3)    
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)    
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)     


### Constructors

Creates a new instance of the grpc client.

> NewGrpcClient(name string) [*GrpcClient]()

- **name**: string - service name.


### Fields

<span class="hide-title-link">

#### Client
The GRPC client.
> **Client**: grpcproto.CommandableClient

#### Connection
The GRPC connection
> **Connection** *grpc.ClientConn

#### ConnectionResolver
The connection resolver.
> **_connectionResolver**: [*HttpConnectionResolver](../../../config/connect/http_connection_resolver)

#### Logger
The logger.
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)()

#### Counters
The performance counters.
> **Counters**: [*CompositeCounters](../../../observability/count/composite_counters)()

#### Options
The configuration options.
> **Options**: [*ConfigParams](../../../components/config/config_params)()

#### ConnectTimeout
The connection timeout in milliseconds.
> **ConnectTimeout**: time.Duration


> **Tracer**: [*CompositeTracer](../../../observability/trace/composite_tracer)()
#### Timeout
The invocation timeout in milliseconds.
> **Timeout**: time.Duration

#### Uri
The remote service uri which is calculated on openning.
> **Uri**: string

#### interceptors
interceptors
> **interceptors** []grpc.DialOption

</span>


### Methods

#### AddInterceptors
AddInterceptors method are registers a middleware for methods in gRPC client.

See [See interceptor](https://github.com/grpc/grpc-go/tree/master/examples/features/interceptor)
> (c [*GrpcClient]()) AddInterceptors(interceptors ...grpc.DialOption)

- **interceptors**: ...grpc.DialOption - interceptor functions (Stream or Unary use grpc.WithUnaryInterceptor() or grpc.WithStreamInterceptor() for inflate in grpc.ServerOption)

#### AddFilterParams
AddFilterParams method are adds filter parameters (with the same name as they defined)

> (c [*GrpcClient]()) AddFilterParams(params [*cdata.StringValueMap](../../../commons/data/string_value_map), filter [*cdata.FilterParams](../../../data/query/filter_params)) [*cdata.StringValueMap](../../../commons/data/string_value_map)

- **params**: [*cdata.StringValueMap](../../../commons/data/string_value_map) - invocation parameters.
- **filter**: [*cdata.FilterParams](../../../data/query/filter_params) - (optional) filter parameters.
- **returns**: [*cdata.StringValueMap](../../../commons/data/string_value_map) - invocation parameters with added filter parameters.

#### AddFilterParams
AddFilterParams method are adds filter parameters (with the same name as they defined)

> (c [*GrpcClient]()) AddPagingParams(params [*cdata.StringValueMap](../../../commons/data/string_value_map), paging [*cdata.PagingParams](../../../data/query/paging_params)) [*cdata.StringValueMap](../../../commons/data/string_value_map)

- **params**: [*cdata.StringValueMap](../../../commons/data/string_value_map) - invocation parameters.
- **filter**: [*cdata.PagingParams](../../../data/query/paging_params) - (optional) filter parameters.
- **returns**: [*cdata.StringValueMap](../../../commons/data/string_value_map) - invocation parameters with added filter parameters.

#### Call
Calls a remote method via GRPC protocol.

> (c [*GrpcClient]()) Call(method string, context [IContext](../../../components/context/icontext), request interface{}, response interface{}) error

- **method**: string - name of the calling method
- **client**: interface{} - current client
- **request**: interface{} - (optional) request object.
- **returns**: error -  error or nil no errors occured.

#### CallWithContext
CallWithContext method are calls a remote method via gRPC protocol.

> (c [*GrpcClient]()) CallWithContext(ctx context.Context, context [IContext](../../../components/context/icontext), method string, request interface{}, response interface{}) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain.
- **method**: string - gRPC method name
- **request**: interface{} - request query parameters.
- **response**: interface{} - response body object.
- **returns**: error -  error or nil no errors occured.


#### Close
Closes the component and frees used resources.

> (c [*GrpcClient]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error -  error or nil no errors occured.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*GrpcClient]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a CounterTiming object that is used to end the time measurement.

> (c [*GrpcClient]()) Instrument(ctx context.Context, context [IContext](../../../components/context/icontext), name string) [*ccount.CounterTiming](../../../observability/count/counter_timing)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [*ccount.CounterTiming](../../../observability/count/counter_timing) - CounterTiming object used to end the time measurement.


#### InstrumentError
Adds instrumentation to error handling.

> (c [*GrpcClient]()) InstrumentError(ctx context.Context, context [IContext](../../../components/context/icontext), name string, inErr error, inRes interface{}) (result interface{}, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **inErr**: error - occured error
- **inRes**: interface{} - (optional) an execution result
- **returns**: (result interface{}, err error) - input result and error.


#### IsOpen
Checks if the component is open.

> (c [*GrpcClient]()) IsOpen() bool

- **returns**: bool - Returns True if the component is open and False otherwise.


#### open
Opens the component.

> (c [*GrpcClient]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error -  error or nil no errors occured.


#### SetReferences
Sets references to dependent components.

> (c [*GrpcClient]()) SetReferences(ctx context.Context, references [cref.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [cref.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


### Examples

```go
type MyGrpcClient struct{
	*GrpcClient
}

func  (c *MyGrpcClient) GetData(ctx context.Context, context IContext, id string) (res any, err error) {
	req := &testproto.MyDataIdRequest{
	    Context: context,
	    mydataId:       id,
	}
	reply := new(testproto.MyData)
	err = c.Call("get_mydata_by_id", context, req, reply)
	c.Instrument(context, "mydata.get_one_by_id")
	if err != nil {
	    return nil, err
	}

	result = toMyData(reply)
	if result != nil && result.Id == "" && result.Key == "" {
	    result = nil
	}

	return result, nil
}

var client = NewMyGrpcClient();
client.Configure(ctx, NewConfigParamsFromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080,
));

result, err := client.GetData(ctx, "123", "1")
...
```

