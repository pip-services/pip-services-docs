---
type: docs
title: "LogMessage"
linkTitle: "LogMessage"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Data object used to store captured log messages.
   
---

### Description

The LogMessage class allows you to create data objects used to store captured log messages.

Important points

- This object is used by [CachedLogger](../cached-logger).

### Constructors

#### 

> NewLogMessage(level int, source string, correlationId string, [errors.ErrorDescription](../../../commons/errors/error_description) , message string) [LogMessage]()

- **level**: int - log level.
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
> **Level**: int

#### Source
Source (context name)
> **Source**: string

#### CorrelationId
Transaction id used to trace execution through a call chain.
> **CorrelationId**: string

#### Error
Transaction id used to trace execution through a call chain.

See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> **Error**: [ErrorDescription](../../../commons/errors/error_description)

#### Message
Human-readable message
> **Message**: string

</span>
