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

Important points

- This object is used by [CachedLogger](../cached-logger).

### Fields

<span class="hide-title-link">

#### time
The time the message was generated
> **time**: DateTime

#### level
This log level
> **level**: String

#### source
The source (context name)
> **source**: String

#### correlation_id
The transaction id to trace execution through a call chain.
> **correlation_id**: String

#### error
The transaction id to trace execution through a call chain.

See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> **error**: [ErrorDescription](../../../commons/errors/error_description)

#### message
The human-readable message
> **message**: String

</span>
