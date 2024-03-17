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

### Instance methods

#### getType
Gets the type.

> `public` String getType()

- **returns**: string - type.

#### setType
Sets the type.
> `public` void setType(String value)

- **value**: String - type.
  
#### getCategory
Gets the category.
> `public` String getCategory()

- **returns**: String - category.
  
#### setCategory
Sets the category.
> `public` void setCategory(String value)

- **value**: String - category.

#### getStatus
Gets the status.
> `public` int getStatus()

- **returns**: String - status.
  
#### setStatus
Sets the status.
> `public` void setStatus(int value)

- **value**: int - status.

#### getCode
Gets the code.
> `public` String getCode()

- **returns**: String - code.
  
#### setCode
Sets the code.
> `public` void setCode(String value)

- **value**: String - code.

#### getMessage
Gets the message.
> `public` String getMessage()

- **returns**: String - message.
  
#### setMessage
Sets the message.
> `public` void setMessage(String value)

- **value**: String - message.

#### getDetails
Gets the details.
> `public` StringValueMap getDetails()

- **returns**: String - detais.
  
#### setDetails
Sets the details.
> `public` void setDetails(StringValueMap value)

- **value**: StringValueMap - details.

#### getTraceId
Gest the traceID.
> `public` String getTraceId()

- **returns**: String - traceId.
  
#### setTraceId
Sets the traceId.
> `public` void setTraceId(String value)

- **value**: String - traceId.

#### getCause
Gets the cause.
> `public` String getCause()

- **returns**: String - cause.
  
#### setCause
Sets the cause.
> `public` void setCause(String value)

- **value**: String - cause.

#### getStackTrace
Gets the stackTrace.
> `public` String getStackTrace()

- **returns**: String - stackTrace.
  
#### setStackTrace
Sets the stackTrace.
> `public` void setStackTrace(String value)

- **value**: String - stackTrace.

### See also
- #### [ApplicationException](../application_exception)
- #### [ApplicationExceptionFactory](../application_exception_factory)
