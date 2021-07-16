---
type: docs
title: "GrpcClient"
linkTitle: "GrpcClient"
gitUrl: "https://github.com/pip-services3-go/pip-services3-grpc-go"
description: > 
    Abstract client that calls remote endpoints using the GRPC protocol.

---

**Implements:** [IOpenable](../../../commons/run/iopenable), [IReferenceable](../../../commons/refer/ireferenceable),
[IConfigurable](../../../commons/config/iconfigurable)

### Description

The GrpcClient class allows you to create clients that call remote endpoints using the GRPC protocol.

#### Configuration parameters

- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)    
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
> **_connectionResolver**: [*HttpConnectionResolver](../../../rpc/connect/http_connection_resolver)

#### Logger
The logger.
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)()

#### Counters
The performance counters.
> **Counters**: [*CompositeCounters](../../../components/count/composite_counters)()

#### Options
The configuration options.
> **Options**: [*ConfigParams](../../../commons/config/config_params)()

#### ConnectTimeout
The connection timeout in milliseconds.
> **ConnectTimeout**: time.Duration

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

> (c [*GrpcClient]()) AddFilterParams(params [*cdata.StringValueMap](../../../commons/data/string_value_map), filter [*cdata.FilterParams](../../../commons/data/filter_params)) [*cdata.StringValueMap](../../../commons/data/string_value_map)

- **params**: [*cdata.StringValueMap](../../../commons/data/string_value_map) - invocation parameters.
- **filter**: [*cdata.FilterParams](../../../commons/data/filter_params) - (optional) filter parameters.
- **returns**: [*cdata.StringValueMap](../../../commons/data/string_value_map) - invocation parameters with added filter parameters.

#### AddFilterParams
AddFilterParams method are adds filter parameters (with the same name as they defined)

> (c [*GrpcClient]()) AddPagingParams(params [*cdata.StringValueMap](../../../commons/data/string_value_map), paging [*cdata.PagingParams](../../../commons/data/paging_params)) [*cdata.StringValueMap](../../../commons/data/string_value_map)

- **params**: [*cdata.StringValueMap](../../../commons/data/string_value_map) - invocation parameters.
- **filter**: [*cdata.PagingParams](../../../commons/data/paging_params) - (optional) filter parameters.
- **returns**: [*cdata.StringValueMap](../../../commons/data/string_value_map) - invocation parameters with added filter parameters.

#### Call
Calls a remote method via GRPC protocol.

> (c [*GrpcClient]()) Call(method string, correlationId string, request interface{}, response interface{}) error

- **method**: string - name of the calling method
- **client**: interface{} - current client
- **request**: interface{} - (optional) request object.
- **returns**: error -  error or nil no errors occured.

#### CallWithContext
CallWithContext method are calls a remote method via gRPC protocol.

> (c [*GrpcClient]()) CallWithContext(ctx context.Context, correlationId string, method string, request interface{}, response interface{}) error

- **ctx**: context.Context - context
- **correlationId**: string - transaction id to trace execution through call chain.
- **method**: string - gRPC method name
- **request**: interface{} - request query parameters.
- **response**: interface{} - response body object.
- **returns**: error -  error or nil no errors occured.


#### Close
Closes the component and frees used resources.

> (c [*GrpcClient]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error -  error or nil no errors occured.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*GrpcClient]()) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a CounterTiming object that is used to end the time measurement.

> (c [*GrpcClient]()) Instrument(correlationId string, name string) [*ccount.CounterTiming](../../../components/cout/counter_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method name.
- **returns**: [*ccount.CounterTiming](../../../components/cout/counter_timing) - CounterTiming object used to end the time measurement.


#### InstrumentError
Adds instrumentation to error handling.

> (c [*GrpcClient]()) InstrumentError(correlationId string, name string, inErr error, inRes interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
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

> (c [*GrpcClient]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error -  error or nil no errors occured.


#### SetReferences
Sets references to dependent components.

> (c [*GrpcClient]()) SetReferences(references [cref.IReferences](../../../commons/refer/ireferences))

- **references**: [cref.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```go
type MyCommandableHttpClient struct{
 	*CommandableHttpClient
}

func  (c *MyCommandableHttpClient) GetData(correlationId string, id string) (res interface{}, err error) {

    req := &testproto.MyDataIdRequest{
        CorrelationId: correlationId,
        mydataId:       id,
    }

    reply := new(testproto.MyData)
    err = c.Call("get_mydata_by_id", correlationId, req, reply)
    c.Instrument(correlationId, "mydata.get_one_by_id")
    if err != nil {
        return nil, err
    }
    result = toMyData(reply)
    if result != nil && result.Id == "" && result.Key == "" {
        result = nil
    }
    return result, nil
}

var client = NewMyCommandableHttpClient();
client.Configure(NewConfigParamsFromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080,
));

result, err := client.GetData("123", "1")
...
```
