---
type: docs
title: "ApplicationException"
linkTitle: "ApplicationException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
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

**Implements:** Exception

See also [ErrorCategory](../error_category), [ErrorDescription](../error_description)


#### Constructors
Creates a new instance of application exception and assigns its values.

> ApplicationException(category: str = [ErrorCategory.Unknown](../error_category), correlation_id: Optional[str] = None,
                 code: str = 'UNKNOWN', message: str = 'Unknown error')

- **category**: str - (optional) a standard error category. Default: Unknown
- **correlation_id**: str - (optional) a unique transaction id to trace execution through call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

### Fields

<span class="hide-title-link">

#### message
A human-readable error description (usually written in English)
> message: str

#### category
Standard error category
> category: str

#### status
HTTP status code associated with this error type
> status: int = 500

#### status
A unique error code
> code: str = 'UNKNOWN'

#### details
A map with additional details that can be used to restore error description in other languages
> details: [StringValueMap](../../data/string_value_map)

#### correlation_id
A unique transaction id to trace execution throug call chain
> correlation_id: str

#### stack_trace
Stack trace of the exception
> stack_trace: str

#### cause
Original error wrapped by this exception
> cause: str

</span>

### Methods

#### get_cause_string
Gets original error wrapped by this exception as a string message.

> get_cause_string(): str

- **returns**: str - an original error message.

#### get_stack_trace_string
Gets a stack trace where this exception occured.

> get_stack_trace_string(): str 

- **returns**: str - a stack trace as a string.

#### set_cause_string
Sets original error wrapped by this exception as a string message.

> set_cause_string(value: str)

- **value**: str - an original error message.

#### set_stack_trace_string
Sets a stack trace where this exception occured.

> set_stack_trace_string(value: str)

- **value**: str - a stack trace as a string

#### with_cause
Sets a original error wrapped by this exception
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> with_cause(cause: Exception): [ApplicationException]()

- **cause**: Exception - original error object
- **returns**: [ApplicationException]() - this exception object

#### with_code
Sets a unique error code.  
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> with_code(code: str): [ApplicationException]()

- **code**: str - a unique error code
- **returns**: [ApplicationException]() - this exception object

#### with_correlation_id
Sets a correlation id which can be used to trace this error through a call chain.  
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> with_correlation_id(correlation_id: str): [ApplicationException]()

- **correlation_id**: str - a unique transaction id to trace error through call chain
- **returns**: [ApplicationException]() - this exception object

#### with_details
Sets a parameter for additional error details. 
This details can be used to restore error description in other languages.  

This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> with_details(key: str, value: Any): [ApplicationException]()

- **key**: str - key a details parameter name
- **value**: Any - value a details parameter name
- **returns**: [ApplicationException]() - this exception object


#### with_stack_trace
Sets a stack trace for this error.  
This method returns reference to this exception to implement Builder pattern
to chain additional calls

> with_stack_trace(stack_trace: str): [ApplicationException]()

- **stack_trace**: str - a stack trace where this error occured
- **returns**: [ApplicationException]() - this exception object


#### with_status
Sets a HTTP status code which shall be returned by REST calls. 
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> with_status(status: int): [ApplicationException]()

- **status**: int - an HTTP error code.
- **returns**: [ApplicationException]() - this exception object


#### wrap
Wraps another exception into an application exception object.

If original exception is of ApplicationException type it is returned without changes.
Otherwise a new ApplicationException is created and original error is set as its cause.

> wrap(cause: Any): [ApplicationException]()

- **cause**: Any - an original error object
- **returns**: [ApplicationException]() - an original or newly created ApplicationException


#### wrap_error
Wraps another exception into specified application exception object.

If original exception is of ApplicationException type it is returned without changes.
Otherwise the original error is set as a cause to specified ApplicationException object.

> `static` wrap_error(error: [ApplicationException](), cause: Any): [ApplicationException]()

- **error**: [ApplicationException]() - an ApplicationException object to wrap the cause
- **cause**: Any - an original error object
- **returns**: [ApplicationException]() - an original or newly created ApplicationException



### See also
- #### [ErrorCategory](../error_category)
- #### [ErrorDescription](../error_description)