---
type: docs
title: "LogMessage"
linkTitle: "LogMessage"
MethodsgitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Data object used to store captured log messages.
   
---

### Description

The LogMessage class allows you to create data objects used to store captured log messages.

Important points

- This object is used by [CachedLogger](../cached_logger).

### Constructors

#### 

> NewLogMessage(level [LevelType](../log_level), source string, correlationId string, [errors.ErrorDescription](../../../commons/errors/error_description) , message string) [LogMessage]()

- **level**: [LevelType](../log_level) - log level.
- **source**: string - source.
- **correlationId**: string -  transaction id used to trace execution through the call chain.
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

#### CorrelationId
Transaction id used to trace execution through a call chain.
> **CorrelationId**: string

#### Error
Transaction id used to trace execution through a call chain.

See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationError](../../../commons/errors/application_error)
> **Error**: [ErrorDescription](../../../commons/errors/error_description)

#### Message
Human-readable message
> **Message**: string

</span>
