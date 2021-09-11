---
type: docs
title: "LogMessage"
linkTitle: "LogMessage"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Data object used to store captured log messages.
   
---

### Description

The LogMessage class allows you to create data objects used to store captured log messages.

**Important points**

- This object is used by [CachedLogger](../cached_logger/).

### Fields

<span class="hide-title-link">

#### time
Time the message was generated
> **time**: DateTime

#### level
Log level
> **level**: String

#### source
Source (context name)
> **source**: String

#### correlation_id
Transaction id used to trace execution through a call chain.
> **correlation_id**: String

#### error
Logs recoverable application error.

See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> **error**: [ErrorDescription](../../../commons/errors/error_description)

#### message
The human-readable message
> **message**: String

</span>
