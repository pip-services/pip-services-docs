---
type: docs
title: "OperationTrace"
linkTitle: "OperationTrace"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-observability-dotnet"
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

#### IContext
Transaction id used to trace execution through the call chain. 
> `public` **IContext**: string

#### Duration
Duration of the operation in milliseconds
> `public` **Duration**: long

#### ErrorDescription
Description of the captured error.  
See also [ErrorDescription](../../../commons/errors/error_description), [ApplicationException](../../../commons/errors/application_exception)
> `public` **ErrorDescription**: [ErrorDescription](../../../commons/errors/error_description)

</span>

