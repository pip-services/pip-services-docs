---
type: docs
title: "OperationTrace"
linkTitle: "OperationTrace"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
description: >
    Data object to store captured operation traces.
    
---

### Description

The OperationTrace class allows you to create a data object used to store captured operation traces.

Important points

- This object is used by [CachedTracer](../cached_tracer). 

### Constructors
Create new instance of OperationTrace

> OperationTrace(ZonedDateTime time, String source, String component, String operation, String traceId, long duration, [ErrorDescription](../../../commons/errors/error_description) error)

- **time**: datetime - The time when operation was executed
- **source**: String - source (context name)
- **component**: String - name of the component
- **operation**: String - name of the executed operation
- **trace_id**: String - transaction id to trace execution through call chain. 
- **duration**: long - duration of the operation in milliseconds
- **error**: [ErrorDescription](../../../commons/errors/error_description) - The description of the captured error
- 

### Fields

<span class="hide-title-link">

#### time
The time when operation was executed
> ZonedDateTime **time**

#### source
The source (context name)
> String **source** 

#### component
 The name of the component
> String **component**

#### operation
The name of the executed operation
> String **operation**

#### trace_id
The transaction id to trace execution through call chain. 
> String **traceId**

#### duration
The duration of the operation in milliseconds
> long **duration**

#### error
The description of the captured error.  
See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> [ErrorDescription](../../../commons/errors/error_description) **error**

</span>
