---
type: docs
title: "AzureFunctionClient"
linkTitle: "AzureFunctionClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-azure-python"
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
> **_client**: [requests.Session](https://requests.readthedocs.io/en/latest/user/advanced/)

### _connectTimeout
The connection timeout in milliseconds.
> **_connectTimeout**: int = 10000

### _connection
The Azure Function connection parameters
> **_connection**: [AzureConnectionParams](../../connect/azure_connection_params)

### _connection_resolver
The connection resolver.
> **_connectionResolver**: [AzureConnectionResolver](../../connect/azure_connection_resolver)

### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters)

### _dependency_resolver
Dependencies resolver.
> **_dependency_resolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

### _headers
The default headers to be added to every request.
> **_headers**: dict = {}

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

#### _call
Calls a Azure Function action.

> _call(cmd: str, correlation_id: Optional[str], params: dict = {}): Any

- **cmd**: str - an action name to be called.
- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **params**: dict - (optional) action parameters.
- **returns**: Any - action result.

#### close
Closes component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### _instrument
Adds instrumentation to log calls and measure call time.
It returns a CounterTiming object that is used to end the time measurement.

> _instrument(correlation_id: Optional[str], name: str): [InstrumentTiming](../../../rpc/services/instrument_timing)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **name**: str - a method name.
- **return**: [InstrumentTiming](../../../rpc/services/instrument_timing) - object to end the time measurement.


#### _invoke
Performs Azure Function invocation.

> _invoke\<T\>(cmd: str, correlation_id: Optional[str], args: dict): Any

- **cmd**: srt - action result.
- **correlation_id**: Optional[str] - action result.
- **args**: dict - action result.
- **returns**: Any - action result.


#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies. 



### Examples

```python
class MyAzureFunctionClient(AzureFunctionClient, IMyClient):
    ...
    def get_data(self, correlation_id: Optional[str], id: str) -> MyData:
        timing = self._instrument(correlation_id, 'myclient.get_data')
        result = self._call('get_data', correlation_id, {'id': id}
        timing.end_timing()
        return result
    ...

client = MyAzureFunctionClient()

client.open("123")

client.configure(ConfigParams.from_tuples(
    "connection.uri", "http://myapp.azurewebsites.net/api/myfunction",
    "connection.protocol", "http",
    "connection.app_name", "myapp",
    "connection.function_name", "myfunction"
    "credential.auth_code", "XXXX"
))

result = client.get_data('123', '1')
```


### See also
- #### [AzureFunction](../../containers/azure_function/)
- #### [CommandableAzureFunctionClient](../commandable_azure_function_client)
