---
type: docs
title: "LogMessage"
linkTitle: "LogMessage"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-observability-dotnet"
description: >
    Data object used to store captured log messages.
   
---

### Description

The LogMessage class allows you to create data objects used to store captured log messages.

**Important points**

- This object is used by [CachedLogger](../cached_logger).

### Properties


#### Time
Time the message was generated
> `public` DateTime Time { get; set; }

#### level
Log level
> `public` string Level { get; set; }

#### Source
Source (context name)
> `public` string Source { get; set; }

#### TraceId
Transaction id used to trace execution through a call chain.
> `public` string TraceId { get; set; }

#### Error
Error

See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> `public` [ErrorDescription](../../../commons/errors/error_description) Error { get; set; }

#### Message
Human-readable message
> `public` string Message { get; set; }


