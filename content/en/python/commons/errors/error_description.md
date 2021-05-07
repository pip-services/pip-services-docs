---
type: docs
title: "ErrorDescription"
linkTitle: "ErrorDescription"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Class used to pass information about errors between microservices implemented in different languages. On the receiving side
    [ErrorDescription]() is used to recreate the exception object close to its original type
    without missing additional details.
---
See also [ApplicationException](../application_exception), [ApplicationExceptionFactory](../application_exception_factory)

### Description

The ErrorDescription class is used to pass information about errors between microservices implemented in different languages. On the receiving side [ErrorDescription]() is used to recreate the exception object close to its original type without missing additional details.

### Fields

<span class="hide-title-link">

#### type
Data type of the original error 
> type: str

#### category
Standard error category 
> category: str

#### status
HTTP status code associated with this error type 
> status: number

#### code
A unique error code 
> code: str

#### message
A human-readable error description (usually written in English) 
> message: str

#### details
A map with additional details that can be used to restore error description in other languages 
> details: Any

#### correlation_id
A unique transaction id to trace execution throug call chain    
> correlation_id: Optional[str]

#### cause
Original error wrapped by this exception  
> cause: str

#### stack_trace
Stack trace of the exception  
> stack_trace: str

</span>


### See also
- #### [ApplicationException](../application_exception)
- #### [ApplicationExceptionFactory](../application_exception_factory)
