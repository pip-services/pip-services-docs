---
type: docs
title: "LogMessage"
linkTitle: "LogMessage"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
description: >
    Data object used to store captured log messages.
   
---

### Description

The LogMessage class allows you to create data objects used to store captured log messages.

Important points

- This object is used by [CachedLogger](../cached_logger).

### Fields

<span class="hide-title-link">

#### time
The time the message was generated
> **_time**: datetime

#### level
This log level
> **_level**: [LogLevel](../log_level)

#### source
The source (context name)
> **_source**: str

#### context
A context to trace execution through a call chain.
> **_context**: Optional[IContext]

#### error
An error object associated with this message.

See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> **_error**: [ErrorDescription](../../../commons/errors/error_description)

#### message
The human-readable message
> **_message**: str

#### traceId
The transaction id to trace execution through call chain.
> **_traceID**: str
</span>
