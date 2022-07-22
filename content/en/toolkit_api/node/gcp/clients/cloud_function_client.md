---
type: docs
title: "CloudFunctionClient"
linkTitle: "CloudFunctionClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-gcp-nodex"
description: >
    Abstract client that calls Google Functions.
---

**Implements:** [IOpenable](../../../commons/run/iopenable), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

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
- **credentials**:
    - **auth_token**:    Google-generated ID token, if use custom authorization provide empty string

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
The Google Function connection parameters
> **_connection**: [GcpConnectionParams](../../connect/gcp_connection_params)

### _connectionResolver
The connection resolver.
> **_connectionResolver**: [GcpConnectionResolver](../../connect/gcp_connection_resolver)

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
Calls a Google Function action.

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
Performs Google Function invocation.

> `protected` invoke\<T\>(cmd: string, correlationId: string, args: any): Promise\<T\>

- **cmd**: string - an action name to be called.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: any - action arguments
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
class MyCloudFunctionClient extends CloudFunctionClient implements IMyClient {
    ...
 
    public async getData(correlationId: string, id: string): Promise<MyData> {
        let timing = this.instrument(correlationId, 'myclient.get_data');
        const result = await this.call("get_data" correlationId, { id: id });
        timing.endTiming();
        return result;
    }
    ...
}

let client = new MyCloudFunctionClient();

client.configure(ConfigParams.fromTuples(
    'connection.uri", "http://region-id.cloudfunctions.net/myfunction',
    'connection.protocol', 'http',
    'connection.region', 'region',
    'connection.function_name', 'myfunction',
    'credential.project_id', 'id',
    'credential.auth_token', 'XXX',
));
  
const result = await client.getData("123", "1");
```


### See also
- #### [CloudFunction](../../cloud_function/)
- #### [CommandableGoogleClient](../commandable_google_client)