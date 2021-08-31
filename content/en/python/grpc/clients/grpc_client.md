---
type: docs
title: "GrpcClient"
linkTitle: "GrpcClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-grpc-python"
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

> GrpcClient(client_name: str)

- **client_name**: str - client's name.


### Fields

<span class="hide-title-link">

#### _channel
The GRPC client channel
> **_channel**: grpc.Channel

#### _connection_resolver
The connection resolver.
> **_connection_resolver**: [HttpConnectionResolver](../../../rpc/connect/http_connection_resolver)

#### _logger
The logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _counters
The performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _options
The configuration options.
> **_options**: [ConfigParams](../../../commons/config/config_params)

#### _connection_timeout
The connection timeout in milliseconds.
> **_connection_timeout** = 100000

#### _timeout
The invocation timeout in milliseconds.
> **_timeout** = 100000

#### _uri
The remote service uri which is calculated on openning.
> **_uri**: str

#### _tracer
The tracer.
> **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer) = CompositeTracer()

</span>


### Instance methods


#### _add_filter_params
AddFilterParams method adds filter parameters (with the same name as they defined)
to the invocation parameter map.

> _add_filter_params(params: Any, filter: Any): Any

- **params**: Any - invocation parameters.
- **filter**: Any - (optional) filter parameters
- **returns**: Any - invocation parameters with added filter parameters.


#### _add_paging_params
AddPagingParams method adds paging parameters (skip, take, total) to the invocation parameter map.

> _add_filter_params(params: Any, paging: Any): Any

- **params**: Any - invocation parameters.
- **paging**: Any - (optional) paging parameters
- **returns**: Any - invocation parameters with added paging parameters.


#### _call
Calls a remote method via GRPC protocol.

> _call(method: str, correlation_id: Optional[str], request: Any): Any

- **method**: str - name of the calling method
- **correlation_id**: Any - (optional) transaction id to trace execution through call chain.
- **request**: Any - (optional) request object.
- **returns**: Any - (optional) feature that receives the result object or error.


#### close
Closes the component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### _instrument
Adds instrumentation to log calls and measures call time.
It returns a CounterTiming object that is used to end the time measurement.

> _instrument(correlation_id: Optional[str], name: str): [InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **name**: str - method name.
- **returns**: [InstrumentTiming](../../../rpc/services/instrument_timing) - InstrumentTiming object used to end the time measurement.


#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - Returns True if the component is open and False otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```python
class MyGrpcClient(GrpcClient, IMyClient):
    def __init__(self):
        self._client = my_data_pb2_grpc.MyDataStub

    ...
    def get_data(self, correlation_id, id ):
        timing = self.instrument(correlation_id, 'myclient.get_data')
        result = self._call("get_data", correlation_id, { id: id })
        timing.end_timing()
        return result
    ...

client = MyGrpcClient()
client.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))
result = client.get_data("123", "1")
```
