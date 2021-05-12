---
type: docs
title: "OperationTrace"
linkTitle: "OperationTrace"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Data object to store captured operation traces.
    
---

### Description

The OperationTrace class allows you to create a data object used to store captured operation traces.

Important points

- This object is used by [CachedTracer](../cached_tracer). 

### Constructors
Create new instance of OperationTrace

> OperationTrace(time: datetime, source: str, component: str, operation: str, correlation_id: str, duration: float, error: [ErrorDescription](../../../commons/errors/error_description))

- **time**: datetime - The time when operation was executed
- **source**: str - The source (context name)
- **component**: str - The name of component
- **operation**: str - The name of the executed operation
- **correlation_id**: str - The transaction id to trace execution through call chain. 
- **duration**: float - The duration of the operation in milliseconds
- **error**: [ErrorDescription](../../../commons/errors/error_description) - The description of the captured error
- 

### Fields

<span class="hide-title-link">

#### time
The time when operation was executed
> **time**: datetime

#### source
The source (context name)
> **source**: str 

#### component
 The name of component
> **component**: str

#### operation
The name of the executed operation
> **operation**: str

#### correlation_id
The transaction id to trace execution through call chain. 
> **correlation_id**: str

#### duration
The duration of the operation in milliseconds
> **duration**: float

#### error
The description of the captured error.  
See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> **error**: [ErrorDescription](../../../commons/errors/error_description)

</span>
