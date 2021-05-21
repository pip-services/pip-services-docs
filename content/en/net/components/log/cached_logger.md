---
type: docs
title: "CachedLogger"
linkTitle: "CachedLogger"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
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
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify counters source

### Fields

<span class="hide-title-link">

#### _cache
List containing log messages.
> `protected` **_cache**: [LogMessage](../log_message)[] = []

#### _updated
Boolean variable indicating whether there has been an update or not.
> `protected` **_updated** = false

#### _interval
Interval in milliseconds to save log messages (default: 10 seconds)
> `protected` **_interval** = 10000

#### _lastDumpTime
Time of the last dump
> `protected` **_lastDumpTime**: number

#### _maxCacheSize
Maximum number of messages stored in the cache (default: 100)
> `protected` **_maxCacheSize**: number = 100

</span>


### Instance methods

#### clear
Clears (removes) all cached log messages.

> clear(): void

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### dump
Dumps (writes) the currently cached log messages.

> dump(): void

#### update
Sets message cache as updated and dumps it when timeout expires.

> `protected` update()

### Abstract methods

#### save
Saves log messages from the cache.

> `protected abstract` save(messages: [LogMessage](../log_message)[])

- messages: [LogMessage](../log_message)[] - a list with log messages



### See also
- #### [Logger](../logger)
- #### [ILogger](../ilogger)
- #### [LogMessage](../log_message)
