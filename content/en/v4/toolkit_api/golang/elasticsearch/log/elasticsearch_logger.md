---
type: docs
title: "ElasticSearchLogger"
linkTitle: "ElasticSearchLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-datadog-go"
description: > 
    Logger that dumps execution logs to ElasticSearch service.

---

**Implements:** [CachedLogger](../../../observability/log/cached_logger)


### Description

The ElasticSearchLogger class allows you to create loggers that dump execution logs to an ElasticSearch service.

Important points

- Elasticsearch is a popular search index. It is often used to store and index execution logs by itself or as a part of ELK (ElasticSearch - Logstash - Kibana) stack.
- Authentication is not supported in this version.

#### Configuration parameters

- **level**: maximum log level to capture
- **source**: source (context) name

**connection(s)**:
- **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
- **protocol**: connection protocol: http or https
- **host**: host name or IP address
- **port**: port number
- **uri**: resource URI or connection string with all parameters in it

**options**:
- **interval**: interval in milliseconds to save log messages (default: 10 seconds)
- **max_cache_size**: maximum number of messages stored in this cache (default: 100)
- **index**: ElasticSearch index name (default: "log")
- **date_format**: date format used to create the index name. Eg. log-YYYYMMDD (default: "YYYYMMDD").
- **daily**: True to create a new index every day by adding a date suffix to the index name (default: False)
- **reconnect**: reconnect timeout in milliseconds (default: 60 sec)
- **timeout**: invocation timeout in milliseconds (default: 30 sec)
- **max_retries**: maximum number of retries (default: 3)
- **index_message**: True to enable indexing for message object (default: False)
- **include_type_name**: will create using a "typed" index compatible with ElasticSearch 6.x (default: false)

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify the counter's source.

### Constructors

#### NewElasticSearchLogger

Creates a new instance of the logger.

> NewElasticSearchLogger() [*ElasticSearchLogger]()


### Methods

#### Close
Closes the component and frees used resources.

> (c [*ElasticSearchLogger]()) Close(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not closed


#### Configure
Closes the component and frees used resources.

> (c [*ElasticSearchLogger]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is open.

> (c [*ElasticSearchLogger]()) IsOpen() bool

- **returns**: bool - True if the component is open and False otherwise.


#### Open
Opens the component.

> (c [*ElasticSearchLogger]()) Open(ctx context.Context, correlationId string) (err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not opened


#### Save
Saves log messages from the cache.

> (c [*ElasticSearchLogger]()) Save(ctx context.Context, messages [][*clog.LogMessage](../../../observability/log/log_message)) (err error)

- **ctx**: context.Context - operation context.
- **messages**: [][*clog.LogMessage](../../../observability/log/log_message) - list with log messages
- **returns**: error - returns error if not saved


#### SetReferences
Sets references to dependent components.

> (c [*ElasticSearchLogger]()) SetReferences(ctx context.Context, references [cref.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **messages**: [cref.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Examples

```go
logger := NewElasticSearchLogger()
logger.Configure(contex.Background(), cconf.NewConfigParamsFromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", "9200"б
))

logger.Open(contex.Background(), "123")

logger.Error(contex.Background(), "123", ex, "Error occured: %s", ex.Message)
logger.Debug(contex.Background(), "123", "Everything is OK.")
```

