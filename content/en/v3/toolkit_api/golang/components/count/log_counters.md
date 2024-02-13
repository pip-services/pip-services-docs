---
type: docs
title: "LogCounters"
linkTitle: "LogCounters"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Performance counters that periodically dump counters' measurements to logger.
---

**Implements:** [CachedCounters](../cached_counters)

### Description

The LogCounters class allows you to create performance counters that periodically dump counters' measurements to a logger.

#### Configuration parameters

**options**:
- **interval**: interval (in milliseconds) to save current counters measurements (default: 5 mins)
- **reset_timeout**: timeout (in milliseconds) to reset the counters. 0 disables the reset (default: 0)


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

> (c [*LogCounters]()) Save(ctx context.Context, counters [][*Counter](../counter)) error

- **ctx**: context.Context - operation context.
- **counters**: [][*Counter](../counter) - current counters measurements to be saved.
- **returns**: error - return erro if not saved.


#### SetReferences
Sets references to dependent components.

> (c [*LogCounters]()) SetReferences(ctx context.Context, references [refer.IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [refer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples

```go
counters := NewLogCounters();
counters.SetReferences(context.Background(), NewReferencesFromTuples(
	NewDescriptor("pip-services", "logger", "console", "default", "1.0"), NewConsoleLogger()
));
counters.IncrementOne(context.Background(), "mycomponent.mymethod.calls")
timing := counters.BeginTiming(context.Background(),"mycomponent.mymethod.exec_time")
defer timing.EndTiming(context.Background())

// do something
counters.Dump(context.Background())
```

### See also
- #### [Counter](../counter)
- #### [CachedCounters](../cached_counters)
- #### [CompositeLogger](../../log/composite_logger)
