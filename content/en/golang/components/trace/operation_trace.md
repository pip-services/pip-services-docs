---
type: docs
title: "OperationTrace"
linkTitle: "OperationTrace"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
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
The time when operation was executed
> **Time**: time.Time

#### Source
The source (context name)
> **Source**: string 

#### Component
 The name of the component
> **Component**: string

#### Operation
The name of the executed operation
> **Operation**: string

#### CorrelationId
The transaction id to trace execution through call chain. 
> **CorrelationId**: string

#### Duration
The duration of the operation in milliseconds
> **Duration**: int64

#### Error
The description of the captured error.  
See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> **Error**: [ErrorDescription](../../../commons/errors/error_description)

</span>
