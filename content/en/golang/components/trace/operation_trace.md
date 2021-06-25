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

#### CorrelationId
Transaction id used to trace execution through the call chain. 
> **CorrelationId**: string

#### Duration
The duration of the operation in milliseconds
> **Duration**: int64

#### Error
The description of the captured error.  
See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> **Error**: [ErrorDescription](../../../commons/errors/error_description)

</span>
