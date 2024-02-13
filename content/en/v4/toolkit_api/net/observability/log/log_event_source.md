---
type: docs
title: "LogEventSource  "
linkTitle: "LogEventSource  "
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-observability-dotnet"
description: >
    Defines the levels that describe log events.
---

**Inherits**: EventSource

### Description

The LogEventSource class defines the levels that descrie log events.


### Fields

<span class="hide-title-link">

#### Current
Current

> `public static` Current: [LogEventSource]() = new LogEventSource();

</span>

### Instance methods

#### Debug
Debug

> void Debug(IContext context, string message)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - a human-readable message to log.



#### Error
Error

> void Error(IContext context, string message)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - a human-readable message to log.


#### Fatal
Fatal

> void Fatal(IContext context, string message)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - a human-readable message to log.



#### Info
Info

> void Info(IContext context, string message)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - a human-readable message to log.


#### Trace
Trace

> void Trace(IContext context, string message)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - a human-readable message to log.


#### Warn
Warn

> void Warn(IContext context, string message)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - a human-readable message to log.



### See also
- #### [Logger](../logger)

