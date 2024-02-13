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

**Important points**

- This object is used by [CachedTracer](../cached_tracer). 


### Fields

<span class="hide-title-link">

#### Time
Time when operation was executed
> `public` **Time**: DateTime

#### Source
Source (context name)
> `public` **Source**: string 

#### component
 Name of the component
> `public` **Component**: string

#### Operation
Name of the executed operation
> `public` **Operation**: string

#### CorrelationId
Transaction id used to trace execution through the call chain. 
> `public` **CorrelationId**: string

#### Duration
Duration of the operation in milliseconds
> `public` **Duration**: long

#### Error
Description of the captured error.  
See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> `public` **Error**: [ErrorDescription](../../../commons/errors/error_description)

</span>
