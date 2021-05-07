---
type: docs
title: "CachedLogger"
linkTitle: "CachedLogger"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Abstract logger that caches captured log messages in memory and periodically dumps them.
    Child classes implement saving cached messages to their specified destinations.
---

**Implemenst:** [Logger](../logger)

See also [Logger](../logger), [ILogger](../ilogger), [LogMessage](../log_message)


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
TODO add description
> **_cache**: List[[LogMessage](../log_message)] = []

#### _updated
TODO add description
> **_updated** = False

#### _interval
TODO add description
> **_interval** = 10000

#### _last_dump_time
TODO add description
> **_last_dump_time**: float

#### _max_cache_size
TODO add description
> **_max_cache_size**: int = 100

</span>


### Methods

#### clear
Clears (removes) all cached log messages.

> clear()

#### configure
Configures component by passing configuration parameters.

> configure(self, config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### dump
Dumps (writes) the currently cached log messages.

> dump()

#### _update
Makes message cache as updated and dumps it when timeout expires.

> _update


#### _save
Saves log messages from the cache.

> _save(self, messages: List[[LogMessage](../log_message)])

- messages: List[[LogMessage](../log_message)] - a list with log messages



### See also
- #### [Logger](../logger)
- #### [ILogger](../ilogger)
- #### [LogMessage](../log_message)
