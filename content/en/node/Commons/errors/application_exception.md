---
type: docs
title: "ApplicationException"
linkTitle: "ApplicationException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Todo: Rewrite this description.  

    Defines a base class to defive various application exceptions.


    Most languages have own definition of base exception (error) types.
    However, this class is implemented symmetrically in all languages
    supported by PipServices toolkit. It allows to create portable implementations
    and support proper error propagation in microservices calls.


    Error propagation means that when microservice implemented in one language
    calls microservice(s) implemented in a different language(s), errors are returned
    throught the entire call chain and restored in their original (or close) type.


    Since number of potential exception types is endless, PipServices toolkit
    supports only 12 standard categories of exceptions defined in [ErrorCategory](../error_category).
    This [ApplicationException]() class acts as a basis for
    all other 12 standard exception types.


    Most exceptions have just free-form message that describes occured error.
    That may not be sufficient to create meaninful error descriptions.
    The [ApplicationException]() class proposes an extended error definition
    that has more standard fields:
    - message: is a human-readable error description
    - category: one of 12 standard error categories of errors
    - status: numeric HTTP status code for REST invocations
    - code: a unique error code, usually defined as "MY_ERROR_CODE"
    - correlation_id: a unique transaction id to trace execution through a call chain
    - details: map with error parameters that can help to recreate meaningful error description in other languages
    - stack_trace: a stack trace
    - cause: original error that is wrapped by this exception


    ApplicationException class is not serializable. To pass errors through the wire
    it is converted into [ErrorDescription](../error_description) object and restored on receiving end into
    identical exception type.
---

**Extends:** Error

See also [ErrorCategory](../error_category), [ErrorDescription](../error_description)


#### Constructors
Creates a new instance of application exception and assigns its values.

> constructor(category: string = null, correlation_id: string = null, code: string = null, message: string = null): [ApplicationException]()

- **category**: string = null - (optional) a standard error category. Default: Unknown
- **correlation_id**: string = null - (optional) a unique transaction id to trace execution through call chain.
- **code**: string = null - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string = null - (optional) a human-readable description of the error.

### Fields

<span class="hide-title-link">

#### message
A human-readable error description (usually written in English)
> `public` message: string

#### category
Standard error category
> `public` category: string

#### status
HTTP status code associated with this error type
> `public` status: number = 500

#### status
A unique error code
> `public` code: string = 'UNKNOWN'

#### details
A map with additional details that can be used to restore error description in other languages
> `public` details: [StringValueMap](../../data/string_value_map)

#### correlation_id
A unique transaction id to trace execution throug call chain
> `public` correlation_id: string;

#### stack_trace
Stack trace of the exception
> `public` stack_trace: string;

#### cause
Original error wrapped by this exception
> `public` cause: string;

</span>

### Methods

#### getCauseString
Gets original error wrapped by this exception as a string message.

> `public` getCauseString(): string

- **returns**: string - an original error message.

#### getStackTraceString
Gets a stack trace where this exception occured.

> `public` getStackTraceString(): string 

- **returns**: string - a stack trace as a string.

#### setCauseString
Sets original error wrapped by this exception as a string message.

> `public` setCauseString(value: string): void

- **value**: string - an original error message.

#### setStackTraceString
Sets a stack trace where this exception occured.

> `public` setStackTraceString(value: string): void

- **value**: string - a stack trace as a string

#### withCause
Sets a original error wrapped by this exception
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> `public` withCause(cause: Error): [ApplicationException]()

- **cause**: Error - original error object
- **returns**: [ApplicationException]() - this exception object

#### withCode
Sets a unique error code.  
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> `public` withCode(code: string): [ApplicationException]()

- **code**: string - a unique error code
- **returns**: [ApplicationException]() - this exception object

#### withCorrelationId
Sets a correlation id which can be used to trace this error through a call chain.  
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> `public` withCorrelationId(correlationId: string): [ApplicationException]()

- **correlationId**: string - a unique transaction id to trace error through call chain
- **returns**: [ApplicationException]() - this exception object

#### withDetails
Sets a parameter for additional error details. 
This details can be used to restore error description in other languages.  

This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> `public` withDetails(key: string, value: any): [ApplicationException]()

- **key**: string - key a details parameter name
- **value**: any - value a details parameter name
- **returns**: [ApplicationException]() - this exception object


#### withStackTrace
Sets a stack trace for this error.  
This method returns reference to this exception to implement Builder pattern
to chain additional calls

> `public` withStackTrace(stackTrace: string): [ApplicationException]()

- **stackTrace**: string -stackTrace a stack trace where this error occured
- **returns**: [ApplicationException]() - this exception object


#### withStatus
Sets a HTTP status code which shall be returned by REST calls. 
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> `public` withStatus(status: number): [ApplicationException]()

- **status**: number - an HTTP error code.
- **returns**: [ApplicationException]() - this exception object


#### wrap
Wraps another exception into an application exception object.

If original exception is of ApplicationException type it is returned without changes.
Otherwise a new ApplicationException is created and original error is set as its cause.

> `public` wrap(cause: any): [ApplicationException]()

- **cause**: any - an original error object
- **returns**: [ApplicationException]() - an original or newly created ApplicationException

#### unwrapError
Unwraps original exception through wrapped exception objects. 

Many frameworks like Seneca or restify wrap original exception.
That may result in propagating less specific errors and can hide
causes of the errors.

> `public static` unwrapError(error: any): any

- **error**: any - an error object
- **returns**: any - an original error object


####
Wraps another exception into specified application exception object.

If original exception is of ApplicationException type it is returned without changes.
Otherwise the original error is set as a cause to specified ApplicationException object.

> `public static` wrapError(error: [ApplicationException](), cause: any): [ApplicationException]()

- **error**: [ApplicationException]() - an ApplicationException object to wrap the cause
- **cause**: any - an original error object
- **returns**: [ApplicationException]() - an original or newly created ApplicationException



### See also
- #### [ErrorCategory](../error_category)
- #### [ErrorDescription](../error_description)