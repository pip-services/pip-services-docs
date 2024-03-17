---
type: docs
title: "ErrorDescription"
linkTitle: "ErrorDescription"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
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
> `private` String **_type**

#### category
Standard error category. 
> `private` String **_category**

#### status
HTTP status code associated with this error type. 
> `private` int **_status**

#### code
Unique error code. 
> `private` String **_code**

#### message
A human-readable error description (usually written in English). 
> `private` String **_message**

#### details
A map with additional details that can be used to restore error description in other languages. 
> `private` StringValueMap **_details**

#### trace_id
Unique transaction id used to trace execution through a call chain    
> `private` String **_traceId**

#### cause
Original error wrapped by this exception.  
> `private` String **_cause**

#### stack_trace
Stack trace of the exception.  
> `private` String **_stackTrace**

</span>


### See also
- #### [ApplicationException](../application_exception)
- #### [ApplicationExceptionFactory](../application_exception_factory)
