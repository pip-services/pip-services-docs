---
type: docs
title: "OperationTrace"
linkTitle: "OperationTrace"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Data object to store captured operation traces.
    
---

### Description

The OperationTrace class allows you to create a data object used to store captured operation traces.

Important points

- This object is used by [CachedTracer](../cached_tracer). 

### Constructors
Create new instance of OperationTrace

> constructor(time: Date, source: String, component: String, operation: String, correlationId: String, duration: number, error: [ErrorDescription](../../../commons/errors/error_description))

- **time**: Date - The time when operation was executed
- **source**: String - source (context name)
- **component**: String - name of the component
- **operation**: String - name of the executed operation
- **correlationId**: String - transaction id to trace execution through call chain. 
- **duration**: number - duration of the operation in milliseconds
- **error**: [ErrorDescription](../../../commons/errors/error_description) - The description of the captured error
- 

### Fields

<span class="hide-title-link">

#### time
The time when operation was executed
> **time**: DateTime?

#### source
The source (context name)
> **source**: String?

#### component
 The name of the component
> **component**: String?

#### operation
The name of the executed operation
> **operation**: String?

#### correlationId
The transaction id to trace execution through call chain. 
> **correlationId**: String?

#### duration
The duration of the operation in milliseconds
> **duration**: int?

#### error
The description of the captured error.  
See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> **error**: [ErrorDescription](../../../commons/errors/error_description)

</span>
