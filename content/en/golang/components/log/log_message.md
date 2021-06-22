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

- **level**: int - an log level.
- **source**: string - an source.
- **correlationId**: string -  transaction id to trace execution through call chain.
- **err**: [errors.ErrorDescription](../../../commons/errors/error_description) - an error object associated with this message.
- **message**: string - a human-readable message to log.


### Fields

<span class="hide-title-link">

#### Time
The time the message was generated
> **Time**: time.Time

#### Level
This log level
> **Level**: int

#### Source
The source (context name)
> **Source**: string

#### CorrelationId
The transaction id to trace execution through a call chain.
> **CorrelationId**: string

#### Error
The transaction id to trace execution through a call chain.

See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> **Error**: [ErrorDescription](../../../commons/errors/error_description)

#### Message
The human-readable message
> **Message**: string

</span>
