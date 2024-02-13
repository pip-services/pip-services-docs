---
type: docs
title: "LogMessage"
linkTitle: "LogMessage"
MethodsgitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
description: >
    Data object used to store captured log messages.
   
---

### Description

The LogMessage class allows you to create data objects used to store captured log messages.

Important points

- This object is used by [CachedLogger](../cached_logger).

### Constructors

#### 

> NewLogMessage(level [LevelType](../log_level), source string, context [IContext](../../../components/context/icontext), [errors.ErrorDescription](../../../commons/errors/error_description) , message string) [LogMessage]()

- **level**: [LevelType](../log_level) - log level.
- **source**: string - source.
- **context**: [IContext](../../../components/context/icontext) -  a context to trace execution through a call chain.
- **err**: [errors.ErrorDescription](../../../commons/errors/error_description) - error object associated with this message.
- **message**: string - human-readable message to log.


### Fields

<span class="hide-title-link">

#### Time
Time the message was generated
> **Time**: time.Time

#### Level
Log level
> **Level**: [LevelType](../log_level)

#### Source
Source (context name)
> **Source**: string

#### TraceId
Transaction id used to trace execution through a call chain.
> **TraceId**: string

#### Error
Transaction id used to trace execution through a call chain.

See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationError](../../../commons/errors/application_error)
> **Error**: [ErrorDescription](../../../commons/errors/error_description)

#### Message
Human-readable message
> **Message**: string

</span>

