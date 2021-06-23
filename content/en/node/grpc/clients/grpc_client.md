---
type: docs
title: "GrpcClient"
linkTitle: "GrpcClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-grpc-nodex"
description: > 
    Abstract client that calls remote endpoints using the GRPC protocol.

---

**Implements:** [IOpenable](../../../commons/run/iopenable), [IReferenceable](../../../commons/refer/ireferenceable),
[IConfigurable](../../../commons/config/iconfigurable)

### Description

The GrpcClient class allows you to create clients that call remote endpoints using the GRPC protocol.

#### Configuration parameters

**connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)    
    - **protocol**: connection protocol: http or https    
    - **host**: host name or IP address    
    - **port**: port number     
    - **uri**: resource URI or connection string with all parameters in it    
**options**:    
    - **retries**: number of retries (default: 3)    
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)    
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)     


### Constructors

Creates a new instance of the grpc client.

> `public` constructor(clientTypeOrPath: any, clientName?: string, packageOptions?: any)

- **clientTypeOrPath**: any - TODO: add description
- **clientName**: string - client's name.
- **packageOptions**: any - TODO: add description


### Fields

<span class="hide-title-link">

#### _client
The GRPC client.
> `protected` **_client**: any

#### _connectionResolver
The connection resolver.
> `protected` **_connectionResolver**: [HttpConnectionResolver](../../../rpc/connect/http_connection_resolver)

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)()

#### _counters
The performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters)()

#### _options
The configuration options.
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params)()

#### _connectTimeout
The connection timeout in milliseconds.
> `protected` **_connectTimeout**: number = 100000

#### _timeout
The invocation timeout in milliseconds.
> `protected` **_timeout**: number = 100000

#### _uri
The remote service uri which is calculated on openning.
> `protected` **_uri**: string

</span>


### Instance methods

#### call
Calls a remote method via GRPC protocol.

> `protected` call(method: string, correlationId?: string, request: any = {}): Promise\<any\>

- **method**: string - name of the calling method
- **client**: any - current client
- **request**: any - (optional) request object.
- **returns**: Promise\<any\> - (optional) feature that receives the result object or error.


#### close
Closes the component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a CounterTiming object that is used to end the time measurement.

> protected instrument(correlationId: string, name: string): [CounterTiming](../../../components/cout/counter_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method name.
- **returns**: [CounterTiming](../../../components/cout/counter_timing) - CounterTiming object used to end the time measurement.


#### instrumentError
Adds instrumentation to error handling.

> `protected` instrumentError(correlationId: string, name: string, err: any, result: any = null, callback: (err: any, result: any) => void = null): void 

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **name**: string - method name.
- **err**: Exception - occured error
- **result**: bool - (optional) an execution result
- **callback**: (err: any, result: any) => void - (optional) an execution callback


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - Returns True if the component is open and False otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```typescript
class MyGrpcClient extends GrpcClient implements IMyClient {
   ...
   public getData(correlationId: string, id: string, 
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
