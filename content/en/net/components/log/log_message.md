---
type: docs
title: "LogMessage"
linkTitle: "LogMessage"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
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
> `public` **time**: Date

#### level
This log level
> `public` **level**: [LogLevel](../log_level)

#### source
The source (context name)
> `public` **source**: string

#### correlation_id
The transaction id to trace execution through a call chain.
> `public` **correlation_id**: string

#### error
The transaction id to trace execution through a call chain.

See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> `public` **error**: [ErrorDescription](../../../commons/errors/error_description)

#### message
The human-readable message
> `public` **message**: string

</span>
