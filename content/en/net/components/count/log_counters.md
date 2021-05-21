---
type: docs
title: "LogCounters"
linkTitle: "LogCounters"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
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

#### save
Saves the current counters measurements.

> `protected` save(counters: [Counter](../counter)[]): void

- **counters**: [Counter](../counter)[] - current counters measurements to be saved.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples

```typescript
let counters = new LogCounters();
counters.setReferences(References.fromTuples(
    new Descriptor("pip-services", "logger", "console", "default", "1.0"), new ConsoleLogger()
));
 
counters.increment("mycomponent.mymethod.calls");
let timing = counters.beginTiming("mycomponent.mymethod.exec_time");
try {
    ...
} finally {
    timing.endTiming();
}

counters.dump();
```

### See also
- #### [Counter](../counter)
- #### [CachedCounters](../cached_counters)
- #### [CompositeLogger](../../log/composite_logger)
