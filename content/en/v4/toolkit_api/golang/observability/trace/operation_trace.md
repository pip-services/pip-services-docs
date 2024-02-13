---
type: docs
title: "OperationTrace"
linkTitle: "OperationTrace"
MethodsgitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
description: >
    Data object to store captured operation traces.
    
---

### Description

The OperationTrace class allows you to create a data object used to store captured operation traces.

Important points

- This object is used by [CachedTracer](../cached_tracer). 


### Fields

<span class="hide-title-link">

#### Time
Time when an operation was executed
> **Time**: time.Time

#### Source
Source (context name)
> **Source**: string 

#### Component
Name of the component
> **Component**: string

#### Operation
Name of the executed operation
> **Operation**: string

#### TraceId
Transaction id used to trace execution through the call chain. 
> **TraceId**: string

#### Duration
The duration of the operation in milliseconds
> **Duration**: int64

#### Error
The description of the captured error.  
See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationError](../../../commons/errors/application_error)
> **Error**: [ErrorDescription](../../../commons/errors/error_description)

</span>

