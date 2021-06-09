---
type: docs
title: "ElasticSearchLogger"
linkTitle: "ElasticSearchLogger"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-elasticsearch-nodex"
description: > 
    Logger that dumps execution logs to ElasticSearch service.

---

**Implements:** [CachedLogger](../../../components/log/cached_logger), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

The ElasticSearchLogger class allows you to create loggers that dump execution logs to an ElasticSearch service.

Important points

- Elasticsearch is a popular search index. It is often used to store and index execution logs by itself or as a part of ELK (ElasticSearch - Logstash - Kibana) stack.
- Authentication is not supported in this version.

#### Configuration parameters

- **level**: maximum log level to capture
- **source**: source (context) name

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
- **date_format**: date format used to create the index name. Eg. log-YYYYMMDD (default: "YYYYMMDD").
- **daily**: True to create a new index every day by adding a date suffix to the index name (default: False)
- **reconnect**: reconnect timeout in milliseconds (default: 60 sec)
- **timeout**: invocation timeout in milliseconds (default: 30 sec)
- **max_retries**: maximum number of retries (default: 3)
- **index_message**: True to enable indexing for message object (default: False)
- **include_type_name**: will create using a "typed" index compatible with ElasticSearch 6.x (default: false)

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/info/context_info) to detect the context id and specify the counter's source.

### Constructors

Creates a new instance of the logger.

> `public` constructor()


### Instance methods

#### close
Closes the component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Closes the component and frees used resources.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component is open and False otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### _save
Saves log messages from the cache.

> `protected` save(messages: [LogMessage](../../../components/log/log_message)[]): Promise\<void\>

- **messages**: [LogMessage](../../../components/log/log_message)[] - list with log messages


#### setReferences
Sets references to dependent components.

> setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **messages**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples

```typescript
let logger = new ElasticSearchLogger();
logger.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 9200
));
    
await logger.open("123");
    
logger.error("123", ex, "Error occured: %s", ex.message);
logger.debug("123", "Everything is OK.");
```
