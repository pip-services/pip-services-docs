---
type: docs
title: "CachedLogger"
linkTitle: "CachedLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-observability-python"
description: >
    Logger that caches captured log messages in memory and periodically dumps them.
   
---

**Implements:** [Logger](../logger)

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
> **_cache**: List[[LogMessage](../log_message)] = []

#### _updated
Boolean variable indicating whether there has been an update or not.
> **_updated** = False

#### _interval
Interval in milliseconds to save log messages (default: 10 seconds)
> **_interval** = 10000

#### _last_dump_time
Time of the last dump
> **_last_dump_time**: float

#### _max_cache_size
Maximum number of messages stored in the cache (default: 100)
> **_max_cache_size**: int = 100

</span>


### Instance methods

#### clear
Clears (removes) all cached log messages.

> clear()

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### dump
Dumps (writes) the currently cached log messages.

> dump()

#### _update
Sets message cache as updated and dumps it when timeout expires.

> _update()

#### _write
Writes a log message to the logger destination.

> _write(level: [LogLevel](../log_level), context: Optional[IContext], ex: Exception, message: str)

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ex**: Exception - an error object associated with this message.
- **message**: str - a human-readable message to log.

#### _save
Saves log messages from the cache.

> _save(messages: List[[LogMessage](../log_message)])

- **messages**: List[[LogMessage](../log_message)] - a list with log messages



### See also
- #### [Logger](../logger)
- #### [ILogger](../ilogger)
- #### [LogMessage](../log_message)
