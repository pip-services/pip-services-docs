---
type: docs
title: "LogCounters"
linkTitle: "LogCounters"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Performance counters that periodically dump counters' measurements to logger.
---

**Implements:** [CachedCounters](../cached_counters)

### Description

The LogCounters allows you to create performance counters that periodically dump counters' measurements to logger.

#### Configuration parameters

**options**:
- **interval**: interval in milliseconds to save current counters measurements (default: 5 mins)
- **reset_timeout**: timeout in milliseconds to reset the counters. 0 disables the reset (default: 0)


#### References
- **\*:logger:\*:\*:1.0** - [ILogger](../../log/ilogger) components to dump the captured counters
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify counters source


### Constructors

#### NewLogCounters
Creates a new instance of the counters.

> NewLogCounters() [*LogCounters]()

### Methods

#### Save
Saves the current counters measurements.

> (c [*LogCounters]()) Save(counters [][*Counter](../counter)) error

- **counters**: [][*Counter](../counter) - current counters measurements to be saved.
- **returns**: error - return erro if not saved.


#### SetReferences
Sets references to dependent components.

> (c [*LogCounters]()) SetReferences(references [refer.IReferences](../../../commons/refer/ireferences))

- **references**: [refer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples

```go
counters := NewLogCounters();
counters.SetReferences(NewReferencesFromTuples(
    NewDescriptor("pip-services", "logger", "console", "default", "1.0"), NewConsoleLogger()
));

counters.Increment("mycomponent.mymethod.calls");
timing := counters.BeginTiming("mycomponent.mymethod.exec_time");
defer  timing.EndTiming();

// do something

counters.Dump();
```

### See also
- #### [Counter](../counter)
- #### [CachedCounters](../cached_counters)
- #### [CompositeLogger](../../log/composite_logger)
