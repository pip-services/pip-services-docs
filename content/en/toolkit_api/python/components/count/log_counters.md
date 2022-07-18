---
type: docs
title: "LogCounters"
linkTitle: "LogCounters"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Performance counters that periodically dump counters' measurements to logger.
---

**Implements:** [CachedCounters](../cached_counters), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The LogCounters allows you to create performance counters that periodically dump counters' measurements to logger.

#### Configuration parameters

**options**:
- **interval**: interval in milliseconds to save current counters measurements (default: 5 mins)
- **reset_timeout**: timeout in milliseconds to reset the counters. 0 disables the reset (default: 0)


#### References
- **\*:logger:\*:\*:1.0** - [ILogger](../../log/ilogger) components to dump the captured counters
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify counters source



### Instance methods

#### _save
Saves the current counters measurements.

> _save(counters: List[[Counter](../counter)])

- **counters**: List[[Counter](../counter)] - current counters measurements to be saved.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples

```python
counters = LogCounters()
counters.set_references(References.from_tuples(
            Descriptor("pip-services", "logger", "console", "default", "1.0"), ConsoleLogger()))

counters.increment("mycomponent.mymethod.calls")
timing = counters.begin_timing("mycomponent.mymethod.exec_time")
# do something
timing.end_timing()
```

### See also
- #### [Counter](../counter)
- #### [CachedCounters](../cached_counters)
- #### [CompositeLogger](../../log/composite_logger)
