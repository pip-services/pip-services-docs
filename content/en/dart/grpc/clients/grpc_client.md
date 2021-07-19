---
type: docs
title: "GrpcClient"
linkTitle: "GrpcClient"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-grpc-dart"
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

> GrpcClient(String clientName)

- **clientName**: String - client's name.


### Fields

<span class="hide-title-link">

#### _channel
The GRPC client.
> **_channel**: grpc.ClientChannel

#### _connectionResolver
The connection resolver.
> **_connectionResolver**: [HttpConnectionResolver](../../../rpc/connect/http_connection_resolver)

#### _logger
The logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)()

#### _counters
The performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)()

#### _options
The configuration options.
> **_options**: [ConfigParams](../../../commons/config/config_params)()

#### _connectTimeout
The connection timeout in milliseconds.
> **_connectTimeout**: int = 100000

#### _timeout
The invocation timeout in milliseconds.
> **_timeout**: int = 100000

#### _uri
The remote service uri which is calculated on openning.
> **_uri**: String

</span>


### Instance methods

#### call
Calls a remote method via GRPC protocol.

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
Adds instrumentation to log calls and measures call time.
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

- **returns**: bool - Returns True if the component is open and False otherwise.


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

```typescript
class MyGrpcClient extends GrpcClient implements IMyClient {
   ...
   public getData(correlationId: String, id: String, 
       callback: (err: any, result: MyData) => void): void {
   
       let timing = this.instrument(correlationId, 'myclient.get_data');
       this.call("get_data", correlationId, { id: id }, (err, result) => {
           timing.endTiming();
           callback(err, result);
       });        
   }
   ...
}

let client = new MyGrpcClient();
client.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

client.getData("123", "1", (err, result) => {
  ...
});
```
