---
type: docs
title: "LogMessage"
linkTitle: "LogMessage"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Data object used to store captured log messages.
   
---

### Description

The LogMessage class allows you to create data objects used to store captured log messages.

Important points

- This object is used by [CachedLogger](../cached-logger).

### Fields

<span class="hide-title-link">

#### time
The time then message was generated
> **time**: datetime

#### level
This log level
> **level**: [LogLevel](../log_level)

#### source
The source (context name)
> **source**: str

#### correlation_id
The transaction id to trace execution through call chain.
> **correlation_id**: Optional[str]

#### error
The transaction id to trace execution through call chain.

See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> **error**: [ErrorDescription](../../../commons/errors/error_description)

#### message
The human-readable message
> **message**: str

</span>
