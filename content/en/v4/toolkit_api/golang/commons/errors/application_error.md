---
type: docs
title: "ApplicationError"
linkTitle: "ApplicationError"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    
    Defines a base class used to define various application exceptions.

---

### Description

The ApplicationError class defines a base class used to define various application exceptions.

Important points

- Most languages have own definition of base exception (error) types. However, this class is implemented symmetrically in all languages supported by the PipServices toolkit and  allows to create portable implementations and support proper error propagation in microservices calls.
- Error propagation means that when a microservice implemented in one language calls a microservice(s) implemented in a different language(s), errors are returned throught the entire call chain and restored in their original (or close) type.
- Since the number of potential exception types is endless, the PipServices toolkit supports only 12 standard categories of exceptions, which are defined in [ErrorCategory](../error_category). The [ApplicationError]() class acts as a basis for these 12 standard exception types.
- Most exceptions use a free-form message that describes occured error. However, this may not be sufficient to create meaninful error descriptions. Therefore, the [ApplicationError]() class proposes an extended error definition that has more standard fields:
    - message: a human-readable error description
    - category: one of the 12 standard error categories
    - status: numeric HTTP status code for REST invocations
    - code: a unique error code, usually defined as "MY_ERROR_CODE"
    - correlation_id: a unique transaction id used to trace execution through a call chain
    - details: map with error parameters that can help to recreate meaningful error description in other languages
    - stack_trace: a stack trace
    - cause: the original error that is wrapped by this exception
- The ApplicationError class is not serializable. To pass errors through the wire it must be converted into a [ErrorDescription](../error_description) object and then restored on the receiving end into an identical exception type.

### Constructors

#### NewError
Creates a new instance of an application exception and assigns its values.

> NewError(message string) [*ApplicationError]()

- **message**: string - (optional) a human-readable description of the error.

### Fields

<span class="hide-title-link">

#### Message
A human-readable error description (usually written in English)
> **Message**: string

#### Category
Standard error category
> **Category**: string

#### Status
HTTP status code associated with this error type
> **Status**: int

#### Code
A unique error code
> **Code**: string

#### Details
Map with additional details that can be used to restore error description in other languages
> **Details**: [StringValueMap](../../data/string_value_map)

#### CorrelationId
Unique transaction id used to trace execution through the call chain
> **CorrelationId**: string

#### StackTrace
Stack trace of the exception
> **StackTrace**: string

#### Cause
Original error wrapped by this exception
> **Cause**: string

</span>

### Methods

#### WithCauseString
Sets original error wrapped by this exception as a string message.

> (e [*ApplicationError]()) WithCauseString(cause string) [*ApplicationError]()

- **value**: string - an original error message.


#### WithCause
Sets a original error wrapped by this exception
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> (e [*ApplicationError]()) WithCause(cause error) [*ApplicationError]()

- **cause**: error - original error object
- **returns**: [*ApplicationError]() - this exception object

#### WithCode
Sets a unique error code.  
This method returns reference to this exception to implement the Builder pattern
to chain additional calls.

> (e [*ApplicationError]()) WithCode(code string) [*ApplicationError]()

- **code**: string - unique error code
- **returns**: [*ApplicationError]() - this exception object

#### WithCorrelationId
Sets a correlation id which can be used to trace this error through the call chain.  
This method returns reference to this exception to implement the Builder pattern
to chain additional calls.

> (e [*ApplicationError]()) WithCorrelationId(correlationId string) [*ApplicationError]()

- **correlationId**: string - unique transaction id used to trace error through the call chain
- **returns**: [*ApplicationError]() - this exception object

#### WithDetails
Sets a parameter for additional error details. 
These details can be used to restore the error description in other languages.  

This method returns reference to this exception to implement the Builder pattern
to chain additional calls.

> (e [*ApplicationError]()) WithDetails(key string, value any) [*ApplicationError]()

- **key**: string - key a details parameter name
- **value**: any - value a details parameter name
- **returns**: [*ApplicationError]() - this exception object


#### WithStatus
Sets a HTTP status code which shall be returned by REST calls. 
This method returns reference to this exception to implement the Builder pattern
to chain additional calls.

> (e [*ApplicationError]()) WithStatus(status int) [*ApplicationError]()

- **status**: int - HTTP error code.
- **returns**: [*ApplicationError]() - this exception object


#### Wrap
Wraps another exception into an application exception object.

If the original exception is of ApplicationError type, it is returned without changes.
Otherwise a new ApplicationError is created and original error is set as its cause.

> (e [*ApplicationError]()) Wrap(err error) [*ApplicationError]()

- **cause**: error - original error object
- **returns**: [*ApplicationError]() - original or newly created ApplicationError


#### WrapError
Wraps another exception into a specified application exception object.

If the original exception is of ApplicationError type, it is returned without changes.
Otherwise the original error is set as a cause to the specified ApplicationError object.

> WrapError(err error, message string) [*ApplicationError]()

- **error**: error - ApplicationError object to wrap the cause
- **cause**: string - original error object
- **returns**: [*ApplicationError]() - original or newly created ApplicationError



### See also
- #### [ErrorCategory](../error_category)
- #### [ErrorDescription](../error_description)

