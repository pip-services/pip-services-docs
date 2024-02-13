---
type: docs
title: "ElasticSearchLogger"
linkTitle: "ElasticSearchLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-expressions-dotnet"
description: > 
    Logger that dumps execution logs to ElasticSearch service.

---

**Inherits:** [CachedLogger](../../../observability/log/cached_logger), [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable)

### Description

The ElasticSearchLogger class allows you to create loggers that dump execution logs to an ElasticSearch service.

**Important points**

- Elasticsearch is a popular search index. It is often used to store and index execution logs by itself or as a part of ELK (ElasticSearch - Logstash - Kibana) stack.
- Authentication is not supported in this version.

#### Configuration parameters

- **level**: maximum log level to capture
- **source**: source (context) name

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
- **protocol**: connection protocol: http or https
- **host**: host name or IP address
- **port**: port number
- **uri**: resource URI or connection string with all parameters in it

**options**:
- **interval**: interval in milliseconds to save log messages (default: 10 seconds)
- **max_cache_size**: maximum number of messages stored in this cache (default: 100)
- **index**: ElasticSearch index name (default: "log")
- **date_format**: date format used to create the index name. Eg. log-YYYYMMDD (default: "YYYYMMDD").
- **daily**: true to create a new index every day by adding a date suffix to the index name (default: False)
- **reconnect**: reconnect timeout in milliseconds (default: 60 sec)
- **timeout**: invocation timeout in milliseconds (default: 30 sec)
- **max_retries**: maximum number of retries (default: 3)
- **index_message**: true to enable indexing for message object (default: False)
- **include_type_name**: will create using a "typed" index compatible with ElasticSearch 6.x (default: false)

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify the counter's source.

### Constructors

Creates a new instance of the logger.

> `public` ElasticSearchLogger()


### Instance methods

#### Close
Closes the component and frees used resources.

> `public` Task CloseAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Configure
Closes the component and frees used resources.

> `public override` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> `public` Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Save
Saves log messages from the cache.

> `protected override` void Save(List\<[LogMessage](../../../observability/log/log_message)\> messages)

- **messages**: List\<[LogMessage](../../../observability/log/log_message)\> - list with log messages


#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **messages**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

#### Write
Writes a log message to the logger destination.

> `protected override` void Write([LogLevel](../../../observability/log/log_level) level, IContext context, Exception error, string message)

- **level**: [LogLevel](../../../observability/log/log_level) - log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.


### Examples

```cs
var logger = new ElasticSearchLogger();
logger.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 9200 
));
logger.Open("123");

logger.Error("123", ex, "Error occured: %s", ex.message);
logger.Debug("123", "Everything is OK.");
```
