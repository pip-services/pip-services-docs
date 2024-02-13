---
type: docs
title: "CachedLogger"
linkTitle: "CachedLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
description: >
    Logger that caches captured log messages in memory and periodically dumps them.
   
---

**Extends:** [Logger](../logger)

### Description

The CachedLogger class allows you to create a logger that caches captured log messages in memory and periodically dumps them.

Important points

- Child classes implement saving cached messages to their specified destinations.

#### Configuration parameters

- **level**: maximum log level to capture
- **source**: source (context) name
- **options**:
    - **interval**: interval in milliseconds to save log messages (default: 10 seconds)
    - **max_cache_size**: maximum number of messages stored in this cache (default: 100)

#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify counters source

### Fields

<span class="hide-title-link">

#### _cache
List containing log messages.
> `protected` List<LogMessage> **_cache** = new ArrayList<>()

#### _updated
Boolean variable indicating whether there has been an update or not.
> `protected` boolean **_updated** = false

#### _interval
Interval in milliseconds to save log messages (default: 10 seconds)
> `protected` long **_interval** = 10000

#### _lastDumpTime
Time of the last dump
> `protected` long **_lastDumpTime** = System.currentTimeMillis()

#### _maxCacheSize
Maximum number of messages stored in the cache (default: 100)
> `protected` **_maxCacheSize**: number = 100
int **_maxCacheSize** = 100
</span>


### Instance methods

#### clear
Clears (removes) all cached log messages.

> void clear()

#### configure
Configures component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### dump
Dumps (writes) the currently cached log messages.

> `public` void dump()

#### update
Sets message cache as updated and dumps it when timeout expires.

> `protected` void update()

#### write
Writes a log message to the logger destination.

> `protected` void write([LogLevel](../log_level) level, [IContext](../../../components/context/icontext) context, Exception ex, String message)

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **ex**: Exception - an exception object associated with this message.
- **message**: string - a human-readable message to log.

### Abstract methods

#### save
Saves log messages from the cache.

> `protected abstract` void save(List<[LogMessage](../log_message)> messages) throws InvocationException

- **messages**: [LogMessage](../log_message)[] - a list with log messages



### See also
- #### [Logger](../logger)
- #### [ILogger](../ilogger)
- #### [LogMessage](../log_message)
