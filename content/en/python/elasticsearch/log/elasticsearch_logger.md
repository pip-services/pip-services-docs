---
type: docs
title: "ElasticSearchLogger"
linkTitle: "ElasticSearchLogger"
gitUrl: "https://github.com/pip-services3-python/pip-services3-elasticsearch-python"
description: > 
    Logger that dumps execution logs to ElasticSearch service.

---

**Implements:** [CachedLogger](../../../components/log/cached_logger), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

The ElasticSearchLogger class allows you to create a logger that dumps execution logs to the ElasticSearch service.

Important points

- ElasticSearch is a popular search index. It is often used to store and index execution logs by itself or as a part of ELK (ElasticSearch - Logstash - Kibana) stack.
- Authentication is not supported in this version.

#### Configuration parameters

- **level**: maximum log level to capture
- source: source (context) name

**connection(s)**:
- **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **protocol**: connection protocol: http or https
- **host**: host name or IP address
- **port**: port number
- **uri**: resource URI or connection string with all parameters in it

**options**:
- **interval**: interval in milliseconds to save log messages (default: 10 seconds)
- **max_cache_size**: maximum number of messages stored in this cache (default: 100)
- **index**: ElasticSearch index name (default: "log")
- **date_format**: The date format to use when creating the index name. Eg. log-YYYYMMDD (default: "YYYYMMDD").
- **daily**: True to create a new index every day by adding date suffix to the index name (default: False)
- **reconnect**: reconnect timeout in milliseconds (default: 60 sec)
- **timeout**: invocation timeout in milliseconds (default: 30 sec)
- **max_retries**: maximum number of retries (default: 3)
- **index_message**: True to enable indexing for message object (default: False)
- **include_type_name**: Will create using a "typed" index compatible with ElasticSearch 6.x (default: false)

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/info/context_info) to detect the context id and specify thecounters source.

### Constructors

Creates a new instance of the logger.

> ElasticSearchLogger()


### Methods

#### close
Closes component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### configure
Closes component and frees used resources.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - True if the component has been opened and False otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### _save
Saves log messages from the cache.

> _save(messages: List[[LogMessage](../../../components/log/log_message)])

- **messages**: List[[LogMessage](../../../components/log/log_message)] - a list with log messages


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **messages**: List[[LogMessage](../../../components/log/log_message)] - references to locate the component dependencies.

### Examples

```python
logger = new ElasticSearchLogger()
logger.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 9200
))

try:
    logger.open("123")
except Exception as err:
    logger.error("123", err, "Error occured: {}", err.message)
    # do something

logger.debug("123", "Everything is OK.");
```
