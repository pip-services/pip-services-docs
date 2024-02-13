---
type: docs
title: "CloudFunctionClient"
linkTitle: "CloudFunctionClient"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-container-python"
description: >
    Abstract client that calls Google Functions.
---

**Implements:** [IOpenable](../../../components/run/iopenable), [IConfigurable](../../../components/refer/ireferenceable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description
When making calls "cmd" parameter determines which what action shall be called, while
other parameters are passed to the action itself.


#### Configuration parameters

- **connections**:
    - **uri**:           full connection uri with specific app and function name
    - **protocol**:      connection protocol
    - **project_id**:    is your Google Cloud Platform project ID
    - **region**:        is the region where your function is deployed
    - **function_name**: is the name of the HTTP function you deployed
- **options**:
    - **retries**:               number of retries (default: 3)
    - **connect_timeout**:       connection timeout in milliseconds (default: 10 sec)
    - **timeout**:               invocation timeout in milliseconds (default: 10 sec)
- **credentials**:
    - **account**: the service account name
    - **auth_token**:    Google-generated ID token, if use custom authorization provide empty string

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connections.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Fields

<span class="hide-title-link">

#### _client
The HTTP client.
> **_client**: [requests.Session](https://requests.readthedocs.io/en/latest/user/advanced/)

### _connect_timeout
The connection timeout in milliseconds.
> **_connect_timeout**: int = 10000

### _connection
The Google Function connection parameters
> **_connection**: [GcpConnectionParams](../../connect/gcp_connection_params)

### _connection_resolver
The connection resolver.
> **_connection_resolver**: [GcpConnectionResolver](../../connect/gcp_connection_resolver)

### _counters
Performance counters.
> **_counters**: [CompositeCounters](../../../observability/count/composite_counters)

### _dependency_resolver
Dependencies resolver.
> **_dependency_resolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

### _headers
The default headers to be added to every request.
> **_headers**: Dict[str, Any] = {}

### _logger
Logger.
> **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

### _timeout
The invocation timeout in milliseconds.
> **_timeout**: int = 10000

### _tracer
The tracer.
> **_tracer**: [CompositeTracer](../../../observability/trace/composite_tracer)

### _uri
The remote controller uri which is calculated on open.
> **_uri**: str


</span>


### Instance methods

#### call
Calls a Google Function action.

> _call(cmd: str, context: Optional[IContext], params: dict = None): Optional[dict]

- **cmd**: str - an action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: dict - (optional) action parameters.
- **returns**: Optional[dict] - action result.

#### close
Closes component and frees used resources.

> close(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### _instrument
Adds instrumentation to log calls and measure call time.
It returns a CounterTiming object that is used to end the time measurement.

> _instrument(context: Optional[IContext], name: str): [InstrumentTiming](../../../rpc/trace/instrument_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **name**: str - a method name.
- **return**: [InstrumentTiming](../../../rpc/trace/instrument_timing) - object to end the time measurement.


#### _invoke
Performs Google Function invocation.

> _invoke(cmd: str, context: Optional[IContext], args: dict = None): Optional[dict]

- **cmd**: str - an action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: dict - action arguments
- **returns**: Optional[dict] - action result.


#### isOpen
Checks if the component is opened.

> isOpen(): bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### open
Opens the component.

> open(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies. 



### Examples

```python
class MyCloudFunctionClient(CloudFunctionClient, IMyClient):
    
    def get_data(self, context, id) -> MyData:
        timing = self._instrument(context, 'myclient.get_data')
        result = self._call("get_data", context, {'id': id})
        data = MyData(**result)
        timing.end_timing()
        return data

client = MyCloudFunctionClient()

client.configure(ConfigParams.from_tuples(
    'connection.uri", "http://region-id.cloudfunctions.net/myfunction',
    'connection.protocol', 'http',
    'connection.region', 'region',
    'connection.function', 'myfunction',
    'connection.project_id', 'id',
    'credential.auth_token', 'XXX',
))

client.open("123")
result = client.get_data("123", "1")
...
```


### See also
- #### [CloudFunction](../../containers/cloud_function/)
- #### [CommandableCloudFunctionClient](../commandable_cloud_function_client)
