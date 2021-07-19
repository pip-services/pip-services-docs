---
type: docs
title: "CachedLogger"
linkTitle: "CachedLogger"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
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

### Constructors
Creates a new instance of the logger.

> CachedLogger()

### Fields

<span class="hide-title-link">

#### cache
List containing log messages.
> **cache**: List<[LogMessage](../log_message)>

#### updated
Boolean variable indicating whether there has been an update or not.
> **updated**: bool = false

#### interval
Interval in milliseconds to save log messages (default: 10 seconds)
> **interval**: int = 10000

#### lastDumpTime
Time of the last dump
> **lastDumpTime**: int

#### maxCacheSize
Maximum number of messages stored in the cache (default: 100)
> **maxCacheSize**: int = 100

</span>


### Instance methods

#### clear
Clears (removes) all cached log messages.

> void clear()

#### configure
Configures component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### dump
Dumps (writes) the currently cached log messages.

> void dump()

#### update
Sets message cache as updated and dumps it when timeout expires.

> void update()

#### save
Saves log messages from the cache.

> Future save(List<[LogMessage](../log_message)> messages)

- **messages**: List<[LogMessage](../log_message)> - a list with log messages



### See also
- #### [Logger](../logger)
- #### [ILogger](../ilogger)
- #### [LogMessage](../log_message)
