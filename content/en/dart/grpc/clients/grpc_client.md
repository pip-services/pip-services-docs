---
type: docs
title: "GrpcClient"
linkTitle: "GrpcClient"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-grpc-dart"
description: > 
    Abstract client that calls remote endpoints using the gRPC protocol.

---

**Implements:** [IOpenable](../../../commons/run/iopenable), [IReferenceable](../../../commons/refer/ireferenceable),
[IConfigurable](../../../commons/config/iconfigurable)

### Description

The GrpcClient class allows you to create clients that call remote endpoints using the gRPC protocol.

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

Creates a new instance of the gRPC client.

> GrpcClient(String clientName)

- **clientName**: String - client's name.


### Fields

<span class="hide-title-link">

#### _channel
gRPC client.
> **_channel**: grpc.ClientChannel

#### _connectionResolver
Connection resolver.
> **_connectionResolver**: [HttpConnectionResolver](../../../rpc/connect/http_connection_resolver)

#### _logger
Logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)()

#### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)()

#### _options
Configuration options.
> **_options**: [ConfigParams](../../../commons/config/config_params)()

#### _connectTimeout
Connection timeout in milliseconds.
> **_connectTimeout**: int = 100000

#### _timeout
Invocation timeout in milliseconds.
> **_timeout**: int = 100000

#### _uri
Remote service URI which is calculated on openning.
> **_uri**: String

</span>


### Instance methods

#### call
Calls a remote method via gRPC protocol.

> grpc.ResponseFuture\<R\>call\<Q extends GeneratedMessage, R extends GeneratedMessage\>(String method, String correlationId, Q request, {grpc.CallOptions options})

- **method**: String - name of the calling method
- **correlationId**: String - current client
- **request**: Q - (optional) request object.
- **options**: grpc.CallOptions - (optional) call options
- **returns**: grpc.ResponseFuture\<R\> - (optional) Future that receives result object or error.


#### close
Closes the component and frees used resources.

`@override`
> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measure call time.
It returns a CounterTiming object that is used to end the time measurement.

> [Timing](../../../components/count/timing) instrument(String correlationId, String name)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **name**: String - method name.
- **returns**: [Timing](../../../components/count/timing) - CounterTiming object used to end the time measurement.


#### instrumentError
Adds instrumentation to error handling.

> void instrumentError(String correlationId, String name, err, [bool reerror = false])

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **name**: String - method name.
- **err**: dynamic - occured error
- **reerror**: bool - if true - throw error


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

`@override`
> Future open(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```dart
class MyGrpcClient extends GrpcClient implements IMyClient {
   ...
   Future<MyData> getData(String correlationId, string id) async {
       var timing = this.instrument(correlationId, 'myclient.get_data');
       var request = MyDataRequest();
       request.id = id;
       var response = await call<MydataRequest,MyDataResponse>('get_data', correlationId, request)
       timing.endTiming();
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
