---
type: docs
title: "ApplicationException"
linkTitle: "ApplicationException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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
    - correlation_id: unique transaction id used to trace execution through a call chain
    - details: map with error parameters that can help to recreate meaningful error description in other languages
    - stack_trace: stack trace
    - cause: original error that is wrapped by this exception
- The ApplicationException class is not serializable. To pass errors through the wire it must be converted into a [ErrorDescription](../error_description) object and then restored on the receiving end into an identical exception type.

### Constructors
Creates a new instance of ApplicationException and assigns its values.

> `public` constructor(category: string = null, correlation_id: string = null, code: string = null, message: string = null)

- **category**: string - (optional) standard error category. Default: Unknown
- **correlation_id**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.

### Fields

<span class="hide-title-link">

#### message
Human-readable error description (usually written in English).
> `public` **message**: string

#### category
Standard error category.
> `public` **category**: string

#### status
HTTP status code associated with this error type.
> `public` **status**: number = 500

#### code
Unique error code.
> `public` **code**: string = 'UNKNOWN'

#### details
Map with additional details that can be used to restore error descriptions in other languages.
> `public` **details**: [StringValueMap](../../data/string_value_map)

#### correlation_id
Unique transaction id used to trace execution through a call chain.
> `public` **correlation_id**: string

#### stack_trace
Stack trace of the exception.
> `public` **stack_trace**: string

#### cause
Original error wrapped by this exception.
> `public` **cause**: string

</span>

### Instance methods

#### getCauseString
Gets the original error wrapped by this exception as a string message.

> `public` getCauseString(): string

- **returns**: string - original error message.

#### getStackTraceString
Gets a stack trace where this exception occured.

> `public` getStackTraceString(): string 

- **returns**: string - stack trace as a string.

#### setCauseString
Sets original error wrapped by this exception as a string message.

> `public` setCauseString(value: string): void

- **value**: string - original error message.

#### setStackTraceString
Sets the stack trace where this exception occurred.

> `public` setStackTraceString(value: string): void

- **value**: string - stack trace as a string

#### withCause
Sets a original error wrapped by this exception
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` withCause(cause: Error): [ApplicationException]()

- **cause**: Error - original error object
- **returns**: [ApplicationException]() - exception object

#### withCode
Sets a unique error code.  
This method returns a reference to this exception used to implement the Builder pattern
to chain additional calls.

> `public` withCode(code: string): [ApplicationException]()

- **code**: string - unique error code
- **returns**: [ApplicationException]() - exception object

#### withCorrelationId
Sets a correlation id which can be used to trace this error through a call chain.  
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` withCorrelationId(correlationId: string): [ApplicationException]()

- **correlationId**: string - unique transaction id used to trace error through a call chain.
- **returns**: [ApplicationException]() - exception object

#### withDetails
Sets a parameter for additional error details. 
This details can be used to restore error descriptions in other languages.  

This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` withDetails(key: string, value: any): [ApplicationException]()

- **key**: string - key to the details parameter name
- **value**: any - value of the details parameter name
- **returns**: [ApplicationException]() - exception object


#### withStackTrace
Sets a stack trace for this error.  
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls

> `public` withStackTrace(stackTrace: string): [ApplicationException]()

- **stackTrace**: string - stack trace where this error occured.
- **returns**: [ApplicationException]() - exception object.


#### withStatus
Sets a HTTP status code which shall be returned by REST calls. 
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` withStatus(status: number): [ApplicationException]()

- **status**: number - HTTP error code.
- **returns**: [ApplicationException]() - exception object


#### wrap
Wraps another exception into an application exception object.

If original exception is of ApplicationException type, it is returned without changes.
Otherwise, a new ApplicationException object is created and the original error is set as its cause.

> `public` wrap(cause: any): [ApplicationException]()

- **cause**: any - original error object
- **returns**: [ApplicationException]() - original or newly created ApplicationException object.


### Static methods

#### unwrapError
Unwraps an original exception through wrapped exception objects. 

Many frameworks like Seneca or restify wrap original exceptions.
That may result in propagating less specific errors and can hide
causes of the errors.

> `public static` unwrapError(error: any): [ApplicationException]()

- **error**: any - error object
- **returns**: [ApplicationException]() - original error object.


#### wrapError
Wraps another exception into a specified application exception object.

If the original exception is of ApplicationException type, it is returned without changes.
Otherwise, the original error is set as a cause for the specified ApplicationException object.

> `public static` wrapError(error: [ApplicationException](), cause: any): [ApplicationException]()

- **error**: [ApplicationException]() - ApplicationException object used to wrap the cause.
- **cause**: any - original error object.
- **returns**: [ApplicationException]() - original or newly created ApplicationException object.



### See also
- #### [ErrorCategory](../error_category)
- #### [ErrorDescription](../error_description)
