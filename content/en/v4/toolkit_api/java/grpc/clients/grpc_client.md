---
type: docs
title: "GrpcClient"
linkTitle: "GrpcClient"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-grpc-java"
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

> `public` public GrpcClient(io.grpc.ServiceDescriptor serviceDescriptor)


### Fields

<span class="hide-title-link">

#### _connectionResolver
The connection resolver.
> `protected` [HttpConnectionResolver](../../../config/connect/http_connection_resolver) **_connectionResolver** = new HttpConnectionResolver()

#### _logger
The logger.
> `protected` CompositeLogger **_logger** = new CompositeLogger()

#### _counters
The performance counters.
> `protected` [CompositeCounters](../../../observability/count/composite_counters) **_counters** = new CompositeCounters()

#### _options
The configuration options.
> `protected` [ConfigParams](../../../components/config/config_params) **_options** = new ConfigParams()

#### _connectTimeout
The connection timeout in milliseconds.
> `protected` long **_connectTimeout** = 10000

#### _timeout
The invocation timeout in milliseconds.
> `protected` long **_timeout** = 10000

#### _uri
The remote service uri which is calculated on openning.
> `protected` String **_uri**

#### _tracer
The tracer.
> `protected` [CompositeTracer](../../../observability/trace/composite_tracer) **_tracer** = new CompositeTracer()

</span>


### Instance methods

#### call
Calls a remote method via GRPC protocol.

> `protected` <TRequest, TResponse> TResponse call(String methodName, [IContext](../../../components/context/icontext) context, TRequest request)

- **methodName**: string - name of the calling method
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **request**: TRequest - (optional) request object.
- **returns**: <TRequest, TResponse> TResponse - (optional) feature that receives the result object or error.


#### close
Closes the component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures the component by passing its configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measures call time.
It returns a CounterTiming object that is used to end the time measurement.

> `protected` [InstrumentTiming](../../../rpc/trace/instrument_timing) instrument([IContext](../../../components/context/icontext) context, String name)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: String - method name.
- **returns**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - CounterTiming object used to end the time measurement.


#### isOpen
Checks if the component is open.

> `public` boolean isOpen()

- **returns**: boolean - Returns True if the component is open and False otherwise.


#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException, ConfigException

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


### Examples

```java
{@code
  class MyGrpcClient extends GrpcClient implements IMyClient {
 
      public MyCommandableGrpcClient() {
          super(myGrpcService.getServiceDescriptor());
      }
 
      // ...
 
      @Override
      MyData getData(IContext context, String id) {
          var request = GetDataRequest.newBuilder();
          request.setid(id);
 
          this.instrument(context, "myclient.get_data");
 
          MyData result = this.call("get_data",
                  context,
                  request.build()
          );
 
          if (result != null && Objects.equals(result.getId(), ""))
              return null;
 
          return new MyData(result.getId(), result.getKey(), result.getContent());
      }
 
      public static void main(String[] args) throws ConfigException {
          var client = new MyCommandableGrpcClient();
          client.configure(ConfigParams.fromTuples(
                  "connection.protocol", "http",
                  "connection.host", "localhost",
                  "connection.port", 8080
          ));
 
          var result = client.getData("123", "1");
      }
  }
  }
```
