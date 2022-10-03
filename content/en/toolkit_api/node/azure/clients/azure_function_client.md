---
type: docs
title: "AzureFunctionClient"
linkTitle: "AzureFunctionClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
description: >
    Abstract client that calls Azure Functions.
---

**Implements:** [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description
When making calls "cmd" parameter determines which what action shall be called, while
other parameters are passed to the action itself.


#### Configuration parameters

- **connections**:                   
    - **uri**: (optional) full connection string or use protocol, app_name and function_name to build
    - **protocol**: (optional) connection protocol
    - **app_name**: (optional) Azure Function application name
    - **function_name**: (optional) Azure Function name
- **options**:
     - **retries**: number of retries (default: 3)
     - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
     - **timeout**: invocation timeout in milliseconds (default: 10 sec)
- **credentials**:
    - **auth_code**: Azure Function auth code if use custom authorization provide empty string

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Fields

<span class="hide-title-link">

#### _client
The HTTP client.
> **_client**: any

### _connectTimeout
The connection timeout in milliseconds.
> **_connectTimeout**: number = 10000

### _connection
The Azure Function connection parameters
> **_connection**: [AzureFunctionConnectionParams](../../connect/azure_function_connection_params)

### _connectionResolver
The connection resolver.
> **_connectionResolver**: [AzureFunctionConnectionResolver](../../connect/azure_function_connection_resolver)

### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)

### _dependencyResolver
Dependencies resolver.
> **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

### _headers
The default headers to be added to every request.
> **_headers**: any = {}

### _logger
Logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

### _timeout
The invocation timeout in milliseconds.
> **_timeout**: number = 10000

### _tracer
The tracer.
> **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer)

### _uri
The remote service uri which is calculated on open.
> **_uri**: string


</span>


### Instance methods

#### call
Calls a Azure Function action.

> `protected` call\<T\>(cmd: string, correlationId: string, params: any = {}): Promise\<T\>

- **cmd**: string - an action name to be called.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **params**: any - (optional) action parameters.
- **returns**: Promise\<T\> - action result.

#### close
Closes component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### instrument
Adds instrumentation to log calls and measure call time.
It returns a CounterTiming object that is used to end the time measurement.

> `protected` instrument(correlationId: string, name: string): [InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **name**: string - a method name.
- **return**: [InstrumentTiming](../../../rpc/services/instrument_timing) - object to end the time measurement.


#### invoke
Performs Azure Function invocation.

> `protected` invoke\<T\>(cmd: string, correlationId: string, args: any): Promise\<T\>

- **cmd**: string - action result.
- **correlationId**: string - action result.
- **args**: any - action result.
- **returns**: Promise\<T\> - action result.


#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies. 



### Examples

```typescript
class MyAzureFunctionClient extends AzureFunctionClient implements IMyClient {
    ...
 
    public async getData(correlationId: string, id: string): Promise<MyData> {
        let timing = this.instrument(correlationId, 'myclient.get_data');
        const result = await this.call("get_data" correlationId, { id: id });
        timing.endTiming();
        return result;
    }
    ...
}

let client = new MyAzureFunctionClient();
client.configure(ConfigParams.fromTuples(
    "connection.uri", "http://myapp.azurewebsites.net/api/myfunction",
    "connection.protocol", "http",
    "connection.app_name", "myapp",
    "connection.function_name", "myfunction"
    "credential.auth_code", "XXXX"
));
   
const result = await client.getData("123", "1");
```


### See also
- #### [AzureFunction](../../azure_function/)
- #### [CommandableAzureClient](../commandable_azure_client)