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


### Fields

<span class="hide-title-link">

#### Time
The time when operation was executed
> `public` **Time**: DateTime

#### Source
The source (context name)
> `public` **Source**: string 

#### component
 The name of the component
> `public` **Component**: string

#### Operation
The name of the executed operation
> `public` **Operation**: string

#### CorrelationId
The transaction id to trace execution through call chain. 
> `public` **CorrelationId**: string

#### Duration
The duration of the operation in milliseconds
> `public` **Duration**: long

#### Error
The description of the captured error.  
See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> `public` **Error**: [ErrorDescription](../../../commons/errors/error_description)

</span>
