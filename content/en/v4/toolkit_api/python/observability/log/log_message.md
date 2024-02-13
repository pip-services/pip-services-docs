---
type: docs
title: "LogMessage"
linkTitle: "LogMessage"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-observability-python"
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
> **time**: datetime

#### level
This log level
> **level**: [LogLevel](../log_level)

#### source
The source (context name)
> **source**: str

#### context
A context to trace execution through a call chain.
> **context**: Optional[IContext]

#### error
An error object associated with this message.

See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> **error**: [ErrorDescription](../../../commons/errors/error_description)

#### message
The human-readable message
> **message**: str

</span>
