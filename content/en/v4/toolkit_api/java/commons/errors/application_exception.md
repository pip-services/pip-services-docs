---
type: docs
title: "ApplicationException"
linkTitle: "ApplicationException"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: >
    
    Defines a base class used to define various application exceptions.

---

**Extends:** Error

### Description

The ApplicationException class defines a base class used to define various application exceptions.

Important points

- Most languages have their own definition of base exception (error) types. However, this class is implemented symmetrically in all languages supported by the PipServices toolkit and  allows to create portable implementations and support proper error propagation in microservices calls.
- Error propagation means that when a microservice implemented in one language calls a microservice(s) implemented in a different language(s), errors are returned throught the entire call chain and restored in their original (or close) type.
- Since the number of potential exception types is endless, the PipServices toolkit supports only 12 standard categories of exceptions, which are defined in [ErrorCategory](../error_category). The [ApplicationException]() class acts as a basis for these 12 standard exception types.
- Most exceptions use a free-form message that describes occured errors. However, this may not be sufficient to create meaninful error descriptions. Therefore, the [ApplicationException]() class proposes an extended error definition that has more standard fields:
    - message: human-readable error description
    - category: one of the 12 standard error categories
    - status: numeric HTTP status code for REST invocations
    - code: unique error code, usually defined as "MY_ERROR_CODE"
    - trace_id: unique transaction id used to trace execution through a call chain
    - details: map with error parameters that can help to recreate meaningful error description in other languages
    - stack_trace: stack trace
    - cause: original error that is wrapped by this exception
- The ApplicationException class is not serializable. To pass errors through the wire it must be converted into a [ErrorDescription](../error_description) object and then restored on the receiving end into an identical exception type.

### Constructors
Creates a new instance of ApplicationException and assigns its values.

> `public` ApplicationException(String category, String traceId, String code, String message)

- **category**: String - (optional) standard error category. Default: Unknown
- **trace_id**: String - (optional) unique transaction id used to trace execution through the call chain.
- **code**: String - (optional) unique error code. Default: "UNKNOWN"
- **message**: String - (optional) human-readable description of the error.

### Fields

<span class="hide-title-link">

#### message
Human-readable error description (usually written in English).
> `public` String **message**

#### category
Standard error category.
> `public` String  **category**

#### status
HTTP status code associated with this error type.
> `public` String   **status**

#### code
Unique error code.
> `public` String  **code**

#### details
Map with additional details that can be used to restore error descriptions in other languages.
> `public` [StringValueMap](../../data/string_value_map) **details**

#### trace_id
Unique transaction id used to trace execution through a call chain.
> `public` String  **trace_id**

#### stack_trace
Stack trace of the exception.
> `public` String  **stack_trace**

#### cause
Original error wrapped by this exception.
> `public` String  **cause**

</span>

### Instance methods

#### getCauseString
Gets the original error wrapped by this exception as a string message.

> `public` String getCauseString()

- **returns**: string - original error message.

#### getMessage
Gets a message
> `public` String getMessage()

- **returns**: String - message.
 
#### setMessage
Sets the message.
> `public` void setMessage(String value)

- **value**: String - message.

#### getCategory
Gets the category.
> `public` String getCategory()

- **returns**: String - category.

#### setCategory
Sets the category.
> `public` void setCategory(String value)

- **value**: String - category.

#### getCode
Gets the code.
> `public` String getCode()

- **returns**: String - code.

#### setCode
Sets the code.
> `public` void setCode(String value)

- **value**: String - code.

#### getStatus
Gets the status.
> `public` int getStatus()

- **returns**: int - status.
  
#### setStatus
Sets the status.
> `public` void setStatus(int value)

- **value**: int - status.

#### getDetails
Gets the details.
> `public` StringValueMap getDetails()

- **returns**: StringValueMap - details.

#### setDetails
Sets the details.
> `public` void setDetails(StringValueMap value)

- **value**: StringValueMap - details.

#### getTraceId
Gets the traceId.
> `public` String getTraceId()

- **returns**: String - traceId.

#### setTraceId
Sets the traceId.
> `public` void setTraceId(String value)

- **value**: String - traceId.

#### getStackTraceString
Gets a stack trace where this exception occured.

> `public` String getStackTraceString() 

- **returns**: String - stack trace as a string.

#### setCauseString
Sets original error wrapped by this exception as a string message.

> `public` void setCauseString(String value)

- **value**: String - original error message.

#### setStackTraceString
Sets the stack trace where this exception occurred.

> `public` String getStackTraceString()

- **value**: String - stack trace as a string

#### withCause
Sets a original error wrapped by this exception
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public`[ApplicationException]() withCause(Throwable cause)

- **cause**: Throwable - original error object
- **returns**: [ApplicationException]() - exception object

#### withCode
Sets a unique error code.  
This method returns a reference to this exception used to implement the Builder pattern
to chain additional calls.

> `public` [ApplicationException]() withCode(String code)

- **code**: String - unique error code
- **returns**: [ApplicationException]() - exception object

#### withTraceId
Sets a trace id which can be used to trace this error through a call chain.  
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` [ApplicationException]() withtraceId(String traceId)

- **traceId**: String - unique transaction id used to trace error through a call chain.
- **returns**: [ApplicationException]() - exception object

#### withDetails
Sets a parameter for additional error details. 
This details can be used to restore error descriptions in other languages.  

This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` [ApplicationException]() withDetails(String key, Object value)

- **key**: String - key to the details parameter name
- **value**: Object - value of the details parameter name
- **returns**: [ApplicationException]() - exception object


#### withStackTrace
Sets a stack trace for this error.  
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls

> `public` [ApplicationException]() withStackTrace(String stackTrace)

- **stackTrace**: String - stack trace where this error occured.
- **returns**: [ApplicationException]() - exception object.


#### withStatus
Sets a HTTP status code which shall be returned by REST calls. 
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` [ApplicationException]() withStatus(int status)

- **status**: int - HTTP error code.
- **returns**: [ApplicationException]() - exception object


#### wrap
Wraps another exception into an application exception object.

If original exception is of ApplicationException type, it is returned without changes.
Otherwise, a new ApplicationException object is created and the original error is set as its cause.

> `public` [ApplicationException]() wrap(Throwable cause)

- **cause**: Throwable - original error object
- **returns**: [ApplicationException]() - original or newly created ApplicationException object.


### Static methods


#### wrapError
Wraps another exception into a specified application exception object.

If the original exception is of ApplicationException type, it is returned without changes.
Otherwise, the original error is set as a cause for the specified ApplicationException object.

> `public static` [ApplicationException]() wrapException([ApplicationException]() error, Throwable cause)

- **error**: [ApplicationException]() - ApplicationException object used to wrap the cause.
- **cause**: Throwable - original error object.
- **returns**: [ApplicationException]() - original or newly created ApplicationException object.



### See also
- #### [ErrorCategory](../error_category)
- #### [ErrorDescription](../error_description)
