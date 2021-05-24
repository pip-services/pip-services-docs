---
type: docs
title: "LogCounters"
linkTitle: "LogCounters"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Performance counters that periodically dump counters' measurements to logger.
---

**Inherits**: [CachedCounters](../cached_counters), [IReferenceable](../../../commons/refer/ireferenceable)

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

#### Save
Saves the current counters measurements.

> `protected override` void Save(IEnumerable<[Counter](../counter)> counters)

- **counters**: IEnumerable<[Counter](../counter)> - current counters measurements to be saved.


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples

```cs
var counters = new LogCounters();
counters.SetReferences(References.FromTuples(
    new Descriptor("pip-services3", "logger", "console", "default", "1.0"), new ConsoleLogger()
));

counters.Increment("mycomponent.mymethod.calls");
var timing = counters.BeginTiming("mycomponent.mymethod.exec_time");

try {
    ...
    }
finally {
    timing.EndTiming();
}

counters.Dump();
```

### See also
- #### [Counter](../counter)
- #### [CachedCounters](../cached_counters)
- #### [CompositeLogger](../../log/composite_logger)
