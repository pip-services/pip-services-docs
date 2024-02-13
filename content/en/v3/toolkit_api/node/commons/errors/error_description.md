---
type: docs
title: "ErrorDescription"
linkTitle: "ErrorDescription"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Class used to pass information about errors between microservices implemented in different languages. On the receiving side
    [ErrorDescription]() is used to recreate the exception object close to its original type
    without missing additional details.
---

### Description

The ErrorDescription class is used to pass information about errors between microservices implemented in different languages. On the receiving side [ErrorDescription]() is used to recreate the exception object close to its original type without missing additional details. This class is serializeable.

### Fields

<span class="hide-title-link">

#### type
Data type of the original error. 
> `public` **type**: string

#### category
Standard error category. 
> `public` **category**: string

#### status
HTTP status code associated with this error type. 
> `public` **status**: number

#### code
Unique error code. 
> `public` **code**: string

#### message
A human-readable error description (usually written in English). 
> `public` **message**: string

#### details
A map with additional details that can be used to restore error description in other languages. 
> `public` **details**: any

#### correlation_id
Unique transaction id used to trace execution through a call chain    
> `public` **correlation_id**: string

#### cause
Original error wrapped by this exception.  
> `public` **cause**: string

#### stack_trace
Stack trace of the exception.  
> `public` **stack_trace**: string

</span>


### See also
- #### [ApplicationException](../application_exception)
- #### [ApplicationExceptionFactory](../application_exception_factory)
