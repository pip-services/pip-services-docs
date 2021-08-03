---
type: docs
title: "LogEventSource  "
linkTitle: "LogEventSource  "
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    TODO: add description

---

**Inherits**: EventSource

### Description

TODO: add description


### Fields

<span class="hide-title-link">

#### Current
TODO: add description

> `public static` Current: [LogEventSource]() = new LogEventSource();

</span>

### Instance methods

#### Debug
TODO: add description

> void Debug(string correlationId, string message)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.



#### Error
TODO: add description

> void Error(string correlationId, string message)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.


#### Fatal
TODO: add description

> void Fatal(string correlationId, string message)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.



#### Info
TODO: add description

> void Info(string correlationId, string message)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.


#### Trace
TODO: add description

> void Trace(string correlationId, string message)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: string - a human-readable message to log.


#### Warn
TODO: add description

> void Warn(string correlationId, string message)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: string - a human-readable message to log.



### See also
- #### [Logger](../logger)
