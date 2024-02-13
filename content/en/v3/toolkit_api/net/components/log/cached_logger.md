---
type: docs
title: "CachedLogger"
linkTitle: "CachedLogger"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Logger that caches captured log messages in memory and periodically dumps them.
   
---

**Inherits**: [Logger](../logger)

### Description

The CachedLogger class allows you to create a logger that caches captured log messages in memory and periodically dumps them.

**Important points**

- Child classes implement saving cached messages to their specified destinations.

#### Configuration parameters

- **level**: maximum log level to capture
- **source**: source's (context) name
- **options**:
    - **interval**: interval in milliseconds to save log messages (default: 10 seconds).
    - **max_cache_size**: maximum number of messages stored in this cache (default: 100).

#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify the counters' source

### Fields

<span class="hide-title-link">

#### _cache
List containing log messages.
> `protected` **_cache**: List<[LogMessage](../log_message)>

#### _updated
Boolean variable indicating whether there has been an update or not.
> `protected` **_updated**: bool = false

#### _lastDumpTime
Time of the last dump
> `protected` **_lastDumpTime**: long = DateTime.UtcNow.Ticks

#### _maxCacheSize
Maximum number of messages stored in the cache (default: 100)
> `protected` **_maxCacheSize**: int = 100

#### _interval
Interval in milliseconds to save log messages (default: 10 seconds)
> `protected` **_interval**: int = 10000

#### _lock
Lock
> `protected` **_lock**: object

</span>


### Instance methods

#### Clear
Clears (removes) all cached log messages.

> void Clear()

#### Configure
Configures a component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### Dump
Dumps (writes) the currently cached log messages.

> `public` void Dump()

#### Update
Sets message cache as updated and dumps it when timeout expires.

> `protected` void Update()


#### Write
Writes a log message to the logger's destination.

> `public override` void Write([LogLevel](../../log/log_level) level, string correlationId, Exception error, string message)

- **level**: [LogLevel](../../log/log_level) - log level.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.

### Abstract methods

#### Save
Saves log messages from the cache.

> `protected abstract` Save(List<[LogMessage](../log_message)> messages)

- **messages**: [LogMessage](../log_message) - list with log messages



### See also
- #### [Logger](../logger)
- #### [ILogger](../ilogger)
- #### [LogMessage](../log_message)
