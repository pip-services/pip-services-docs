---
type: docs
title: "LogEventSource  "
linkTitle: "LogEventSource  "
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
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

> void Debug(string correlationId, string message)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.



#### Error
Error

> void Error(string correlationId, string message)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.


#### Fatal
Fatal

> void Fatal(string correlationId, string message)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.



#### Info
Info

> void Info(string correlationId, string message)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.


#### Trace
Trace

> void Trace(string correlationId, string message)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: string - a human-readable message to log.


#### Warn
Warn

> void Warn(string correlationId, string message)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: string - a human-readable message to log.



### See also
- #### [Logger](../logger)
