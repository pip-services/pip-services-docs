---
type: docs
title: "LogCounters"
linkTitle: "LogCounters"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-observability-dart"
description: >
    Performance counters that periodically dump counters' measurements to logger.
---

**Implements:** [CachedCounters](../cached_counters), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The LogCounters allows you to create performance counters that periodically dump counters' measurements to logger.

#### Configuration parameters

**options**:
- **interval**: interval in milliseconds to save current counters measurements (default: 5 mins)
- **reset_timeout**: timeout in milliseconds to reset the counters. 0 disables the reset (default: 0)


#### References
- **\*:logger:\*:\*:1.0** - [ILogger](../../log/ilogger) components to dump the captured counters
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify counters source

### Constructors
Creates a new instance of the counters.
> LogCounters()

### Instance methods

#### save
Saves the current counters measurements.

`@override`
> void save(List<[Counter](../counter)>? counters)

- **counters**: List<[Counter](../counter)>? - current counters measurements to be saved.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Examples

```dart
var counters = LogCounters();
counters.setReferences(References.fromTuples([
    Descriptor("pip-services", "logger", "console", "default", "1.0"), ConsoleLogger()
]));

counters.increment("mycomponent.mymethod.calls");
var counter_timing = counters.beginTiming("mycomponent.mymethod.exec_time");

try {
    ...
} finally {
    counter_timing.endTiming();
}

counters.dump();
```

### See also
- #### [Counter](../counter)
- #### [CachedCounters](../cached_counters)
- #### [CompositeLogger](../../log/composite_logger)
