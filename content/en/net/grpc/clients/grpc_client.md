---
type: docs
title: "GrpcClient"
linkTitle: "GrpcClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-grpc-dotnet"
description: > 
    Abstract client that calls remote endpoints using the GRPC protocol.

---

**Inherits:** [IOpenable](../../../commons/run/iopenable), [IReferenceable](../../../commons/refer/ireferenceable),
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

> `public` GrpcClient(string name = null)

- **name**: string - client's name.



### Fields

<span class="hide-title-link">

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
> `protected` **_connectTimeout**: int = 100000

#### _serviceName
TODO: add description
> `protected` **_serviceName**: string

</span>


### Instance methods

#### CallAsync
Calls a remote method via GRPC protocol.

> `protected` Task\<TResponse\> CallAsync\<TRequest, TResponse\>(string name, TRequest request)

- **name**: string - name of the calling method
- **request**: TRequest - request object.
- **returns**: Task\<TResponse\> - feature that receives the result object .


#### CloseAsync
Closes the component and frees used resources.

> `public virtual` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures the component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a CounterTiming object that is used to end the time measurement.

> `protected` [CounterTiming](../../../components/cout/counter_timing) Instrument(string correlationId, [CallerMemberName] string methodName = null)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **methodName**: string - method name.
- **returns**: [CounterTiming](../../../components/cout/counter_timing) - CounterTiming object used to end the time measurement.


#### InstrumentError
Adds instrumentation to error handling.

> `protected` void InstrumentError(string correlationId, [CallerMemberName] string methodName = null, Exception ex = null, bool rethrow = false)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **methodName**: string - method name.
- **ex**: Exception - occured error
- **rethrow**: bool -  if True - throw error


#### IsOpen
Checks if the component is open.

> `public virtual` bool IsOpen()

- **returns**: bool - Returns True if the component is open and False otherwise.


#### Open
Opens the component.

> `public virtual` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### GetOrCreateMethod
Creates a method definition to be called using GRPC.

- where TRequest : class, IMessage\<TRequest\>, new()
- where TResponse : class, IMessage\<TResponse\>, new()

> `protected` Method\<TRequest, TResponse\> GetOrCreateMethod\<TRequest, TResponse\>(string name)

- **name**: string - name of gRPC method
- **returns**: Method\<TRequest, TResponse\> - TRequest - type of request message, TResponse - type of response message.

#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```cs


class MyCommandableHttpClient: GrpcClient, IMyClient 
{
    ...
   public MyData GetData(string correlationId, string id) {
   
       var timing = this.Instrument(correlationId, 'myclient.get_data');
       var request = new MyDataObjectRequest
		{
			CorrelationId = correlationId,
			MyDataId = ConvertFromPublic(id)
		};

       var item = await this.CallAsync<MyDataObjectRequest, ProtoMyData>("get_data", correlationId, request);  
       timing.EndTiming();      

       return ConvertToPublic(item);
   }
   ...
}

var client = new MyGrpcClient();
client.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

client.GetData("123", "1");
```
