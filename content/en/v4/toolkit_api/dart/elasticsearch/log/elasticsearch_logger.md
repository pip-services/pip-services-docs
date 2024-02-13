---
type: docs
title: "ElasticSearchLogger"
linkTitle: "ElasticSearchLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-elasticsearch-dart"
description: > 
    Logger that dumps execution logs to ElasticSearch service.

---

**Extends:** [CachedLogger](../../../observability/log/cached_logger)

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable)

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

Creates a new instance of the logger.

> ElasticSearchLogger()


### Instance methods

#### close
Closes the component and frees used resources.

`@override`
> Future close(IContext? Context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Closes the component and frees used resources.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### getLogItem
Converts elasticsearch object to 6.x or 7.x version by **include_type_name** parameter.

> Map\<String, dynamic\> getLogItem()

- **returns**: Map\<String, dynamic\> - map in elasticsearch object format

#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

`@override`
> Future open(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### save
Saves log messages from the cache.

`@override`
> Future save(List<[LogMessage](../../../observability/log/log_message)> messages)

- **messages**: List<[LogMessage](../../../observability/log/log_message)> - list with log messages


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **messages**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Examples

```dart
var logger = ElasticSearchLogger();
logger.configure(ConfigParams.fromTuples([
    'connection.protocol', 'http',
    'connection.host', 'localhost',
    'connection.port', 9200
]));
await logger.open('123')
    ...
logger.error('123', ex, 'Error occured: %s', ex.message);
logger.debug('123', 'Everything is OK.');
```
