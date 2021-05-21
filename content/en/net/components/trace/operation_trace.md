---
type: docs
title: "OperationTrace"
linkTitle: "OperationTrace"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Data object to store captured operation traces.
    
---

### Description

The OperationTrace class allows you to create a data object used to store captured operation traces.

Important points

- This object is used by [CachedTracer](../cached_tracer). 

### Constructors
Create new instance of OperationTrace

> `public` constructor(time: Date, source: string, component: string, operation: string, correlationId: string, duration: number, error: [ErrorDescription](../../../commons/errors/error_description))

- **time**: Date - The time when operation was executed
- **source**: string - source (context name)
- **component**: string - name of the component
- **operation**: string - name of the executed operation
- **correlationId**: string - transaction id to trace execution through call chain. 
- **duration**: number - duration of the operation in milliseconds
- **error**: [ErrorDescription](../../../commons/errors/error_description) - The description of the captured error
- 

### Fields

<span class="hide-title-link">

#### time
The time when operation was executed
> `public` **time**: Date

#### source
The source (context name)
> `public` **source**: string 

#### component
 The name of the component
> `public` **component**: string

#### operation
The name of the executed operation
> `public` **operation**: string

#### correlationId
The transaction id to trace execution through call chain. 
> `public` **correlationId**: string

#### duration
The duration of the operation in milliseconds
> `public` **duration**: number

#### error
The description of the captured error.  
See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> `public` **error**: [ErrorDescription](../../../commons/errors/error_description)

</span>
