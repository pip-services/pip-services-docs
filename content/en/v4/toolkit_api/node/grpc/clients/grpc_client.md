---
type: docs
title: "GrpcClient"
linkTitle: "GrpcClient"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-grpc-node"
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
> `protected` **_connectionResolver**: [HttpConnectionResolver](../../../config/connect/http_connection_resolver)

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)()

#### _counters
The performance counters.
> `protected` **_counters**: [CompositeCounters](../../../observability/count/composite_counters)()

#### _options
The configuration options.
> `protected` **_options**: [ConfigParams](../../../components/config/config_params)()

#### _connectTimeout
The connection timeout in milliseconds.
> `protected` **_connectTimeout**: number = 100000

#### _timeout
The invocation timeout in milliseconds.
> `protected` **_timeout**: number = 100000

#### _uri
The remote service uri which is calculated on openning.
> `protected` **_uri**: string

#### _tracer
The tracer.
> `protected` **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer) = CompositeTracer()

</span>


### Instance methods

#### call
Calls a remote method via GRPC protocol.

> `protected` call(method: string, context?: [IContext](../../../components/context/icontext), request: any = {}): Promise\<any\>

- **method**: string - name of the calling method
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **request**: any - (optional) request object.
- **returns**: Promise\<any\> - (optional) feature that receives the result object or error.


#### close
Closes the component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a CounterTiming object that is used to end the time measurement.

> `protected` instrument(context: [IContext](../../../components/context/icontext), name: string): [InstrumentTiming](../../../rpc/trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - CounterTiming object used to end the time measurement.


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - Returns True if the component is open and False otherwise.


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


### Examples

```typescript
class MyGrpcClient extends GrpcClient implements IMyClient {
    ...
    public getData(context: IContext, id: string): Promise<MyData> {
   
        let timing = this.instrument(context, 'myclient.get_data');
        try {
           return await this.call("get_data", context, { id: id });
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endSuccess();
        }
    }       
   ...
}

let client = new MyGrpcClient();
client.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

let result = await client.getData("123", "1", );
```
