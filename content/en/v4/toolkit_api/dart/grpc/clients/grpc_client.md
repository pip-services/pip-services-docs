---
type: docs
title: "GrpcClient"
linkTitle: "GrpcClient"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-grpc-dart"
description: > 
    Abstract client that calls remote endpoints using the gRPC protocol.

---

**Implements:** [IOpenable](../../../components/run/iopenable), [IReferenceable](../../../components/refer/ireferenceable),
[IConfigurable](../../../components/config/iconfigurable)

### Description

The GrpcClient class allows you to create clients that call remote endpoints using the gRPC protocol.

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

Creates a new instance of the gRPC client.

> GrpcClient(String clientName)

- **clientName**: String - client's name.


### Fields

<span class="hide-title-link">

#### _channel
gRPC client.
> **_channel**: grpc.ClientChannel?

#### _connectionResolver
Connection resolver.
> **_connectionResolver**: [HttpConnectionResolver](../../../config/connect/http_connection_resolver)

#### _logger
Logger.
> **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### _options
Configuration options.
> **_options**: [ConfigParams](../../../components/config/config_params)

#### _connectTimeout
Connection timeout in milliseconds.
> **_connectTimeout**: int = 100000

#### _timeout
Invocation timeout in milliseconds.
> **_timeout**: int = 100000

#### _tracer
The tracer.
> **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

#### _uri
Remote service URI which is calculated on openning.
> **_uri**: String?

</span>


### Instance methods

#### addFilterParams
AddFilterParams method are adds filter parameters (with the same name as they defined)
to invocation parameter map.

> [StringValueMap](../../../commons/data/string_value_map) addFilterParams([StringValueMap?](../../../commons/data/string_value_map) params, [FilterParams?](../../../data/query/filter_params) filter)

- **params**: [StringValueMap?](../../../commons/data/string_value_map) - invocation parameters.
- **filter**: [FilterParams?](../../../data/query/filter_params) - (optional) filter parameters
- **returns**: [StringValueMap](../../../commons/data/string_value_map) -  invocation parameters with added filter parameters.

#### addPagingParams
AddPagingParams method are adds paging parameters (skip, take, total) to invocation parameter map.

> [StringValueMap](../../../commons/data/string_value_map) addPagingParams([StringValueMap?](../../../commons/data/string_value_map) params, [PagingParams?](../../../data/query/paging_params) paging)

- **params**: [StringValueMap?](../../../commons/data/string_value_map) - invocation parameters.
- **paging**: [PagingParams?](../../../data/query/paging_params) - (optional) paging parameters
- **returns**: [StringValueMap](../../../commons/data/string_value_map) -  invocation parameters with added paging parameters.

#### call
Calls a remote method via gRPC protocol.

> grpc.ResponseFuture\<R\>call\<Q extends GeneratedMessage, R extends GeneratedMessage\>(String method, IContext? context, Q request, {grpc.CallOptions? options})

- **method**: String - name of the calling method
- **context**: IContext? - current client
- **request**: Q - (optional) request object.
- **options**: grpc.CallOptions? - (optional) call options
- **returns**: grpc.ResponseFuture\<R\> - (optional) Future that receives result object or error.


#### close
Closes the component and frees used resources.

`@override`
> Future close(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures the component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measure call time.
It returns a CounterTiming object that is used to end the time measurement.

> [InstrumentTiming](../../../rpc/trace/instrument_timing) instrument(IContext? context, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: String - method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - CounterTiming object used to end the time measurement.


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

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


### Examples

```dart
class MyGrpcClient extends GrpcClient implements IMyClient {
   ...
   Future<MyData> getData(IContext? context, string id) async {
       var counter_timing = this.instrument(context, 'myclient.get_data');
       var request = MyDataRequest();
       request.id = id;
       var response = await call<MydataRequest,MyDataResponse>('get_data', context, request)
       counter_timing.endTiming();
       MyData item;
       ///... convert MyDataResponse to MyData
       return item;
   }
   ...
}
var client = MyGrpcClient();
client.configure(ConfigParams.fromTuples([
    'connection.protocol', 'http',
    'connection.host', 'localhost',
    'connection.port', 8080
]));

var item = await client.getData('123', '1')
  ...
```
