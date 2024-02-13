---
type: docs
title: "CachedLogger"
linkTitle: "CachedLogger"
MethodsgitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
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
    - **interval**: interval (in milliseconds) to save log messages (default: 10 seconds)
    - **max_cache_size**: maximum number of messages stored in this cache (default: 100)

#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify counters source

### Fields

<span class="hide-title-link">

#### Cache
List containing log messages.
> **Cache**: [][*LogMessage](../log_message)

#### Updated
Boolean variable indicating whether there has been an update or not.
> **Updated**: bool

#### Interval
Interval (in milliseconds) to save log messages (default: 10 seconds)
> **Interval**: int

#### LastDumpTime
Time of the last dump
> **LastDumpTime**: time.Time

#### MaxCacheSize
Maximum number of messages stored in the cache (default: 100)
> **MaxCacheSize**: int

</span>


### Methods

#### Clear
Clears (removes) all cached log messages.

> (c [*CachedLogger]()) Clear(ctx context.Context)

- **ctx**: context.Context - operation context.

#### Configure
Configures a component by passing configuration parameters.

> (c [*CachedLogger]()) Configure(ctx context.Context, cfg [*config.ConfigParams](../../../components/config/config_params)

- **ctx**: context.Context - operation context.
- **cfg**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### Dump
Dumps (writes) the currently cached log messages.

> (c [*CachedLogger]()) Dump(ctx context.Context) error

- **ctx**: context.Context - operation context.
- **returns**: error - returned error if not dumped.

#### Update
Sets message cache as updated and dumps it when timeout expires.

> (c [*CachedLogger]()) Update(ctx context.Context)

- **ctx**: context.Context - operation context.

#### Save
Saves log messages from the cache.

> Save(messages [][*LogMessage](../log_message)) error

- **messages**: [][*LogMessage](../log_message) - list with log messages.
- **returns**: error - returned error if not saved.

#### Write
Writes a log message to the logger destination.

> func (c [*CachedLogger]()) Write(ctx context.Context, level [LevelType](../log_level), context [IContext](../../../components/context/icontext), err error, message string)

- **ctx**: context.Context - operation context.
- **level**: LevelType - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ex**: error - an error object associated with this message.
- **message**: string - a human-readable message to log.

### See also
- #### [Logger](../logger)
- #### [ILogger](../ilogger)
- #### [LogMessage](../log_message)

