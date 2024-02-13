---
type: docs
title: "ApplicationException"
linkTitle: "ApplicationException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    
    Defines a base class used to define various application exceptions.

---

**Inherits**: Exception

### Description

The ApplicationException class defines a base class used to define various application exceptions.

**Important points**

- Most languages have their own definition of base exception (error) types. However, this class is implemented symmetrically in all languages supported by the PipServices toolkit and  allows to create portable implementations and support proper error propagation in microservices calls.
- Error propagation means that when a microservice implemented in one language calls a microservice(s) implemented in a different language(s), errors are returned throught the entire call chain and restored in their original (or close) type.
- Since the number of potential exception types is endless, the PipServices toolkit supports only 12 standard categories of exceptions, which are defined in [ErrorCategory](../error_category). The [ApplicationException]() class acts as a basis for these 12 standard exception types.
- Most exceptions use a free-form message that describes the occured error. However, this may not be sufficient to create meaninful error descriptions. Therefore, the [ApplicationException]() class proposes an extended error definition that has more standard fields:
    - message: a human-readable error description
    - category: one of the 12 standard error categories
    - status: numeric HTTP status code for REST invocations
    - code: a unique error code, usually defined as "MY_ERROR_CODE"
    - correlation_id: unique transaction id used to trace execution through a call chain
    - details: map with error parameters that can help to recreate meaningful error description in other languages
    - stack_trace: stack trace
    - cause: the original error that is wrapped by this exception
- The ApplicationException class is not serializable. To pass errors through the wire it must be converted into an [ErrorDescription](../error_description) object and then restored on the receiving end into an identical exception type.

### Constructors
Creates a new instance of application exception and assigns its values.

> `public` ApplicationException(string category = null, string correlationId = null, string code = null, string message = null)

- **category**: string - (optional) standard error category. Default: Unknown
- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.

Creates a new instance of ApplicationException.
> `public` ApplicationException()


Creates a new instance of ApplicationException with string message.
> `protected` ApplicationException(string message)

- **message**: string - human-readable description of the error.


Creates a new instance of ApplicationException.

> `protected` ApplicationException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - serialization information
- **context**: StreamingContext - streaming context

### Properties

#### BaseMessage
A human-readable error description (usually written in English).
> `public` string BaseMessage { get; set; }

#### Category
Standard error category.
> `public` string Category { get; set; }

#### Status
HTTP status code associated with this error type.
> `public` int Status = 500 { get; set; }

#### Code
A unique error code.
> `public` string Code = 'UNKNOWN' { get; set; }

#### Details
Map with additional details that can be used to restore error descriptions in other languages.
> `public` [StringValueMap](../../data/string_value_map) Details

#### CorrelationId
A unique transaction id used to trace execution throug a call chain.
> `public` string CorrelationId { get; set; }


#### StackTrace
Stack trace of the exception.
> `public new` string StackTrace { get; set; }

#### Cause
Original error wrapped by this exception.
> `public` string Cause { get; set; }



### Instance methods

#### GetObjectData
Gets information such as category, correlation_id, etc.

> `public override` void GetObjectData(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - serialization information
- **context**: StreamingContext - streaming context

#### WithCause
Sets a original error wrapped by this exception
This method returns a reference to this exception to the implement Builder pattern
to chain additional calls.

> `public` [ApplicationException]() WithCause(Exception cause)

- **cause**: Exception  - original error object
- **returns**: [ApplicationException]() - exception object

#### WithCode
Sets a unique error code.  
This method returns reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` [ApplicationException]() WithCode(string code)

- **code**: string - unique error code
- **returns**: [ApplicationException]() - exception object

#### WithCorrelationId
Sets a correlation id which can be used to trace this error through a call chain.  
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` [ApplicationException]() WithCorrelationId(string correlationId)

- **correlationId**: string - unique transaction id used to trace an error through the call chain
- **returns**: [ApplicationException]() - exception object

#### WithDetails
Sets a parameter for additional error details. 
This details can be used to restore error description in other languages.  

This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` [ApplicationException]() WithDetails(string key, object value)

- **key**: string - key of the details parameter name
- **value**: object - value of the details parameter name
- **returns**: [ApplicationException]() - exception object


#### WithStackTrace
Sets a stack trace for this error.  
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls

> `public` [ApplicationException]() WithStackTrace(string stackTrace)

- **stackTrace**: string - stack trace where this error occured
- **returns**: [ApplicationException]() - exception object


#### WithStatus
Sets a HTTP status code which shall be returned by REST calls. 
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` [ApplicationException]() WithStatus(int status)

- **status**: int  - HTTP error code.
- **returns**: [ApplicationException]() - exception object


#### Wrap
Wraps another exception into an application exception object.

If the original exception is of ApplicationException type, it is returned without changes.
Otherwise, a new ApplicationException is created and the original error is set as its cause.

> `public` [ApplicationException]() Wrap(Exception cause)

- **cause**: Exception - original error object
- **returns**: [ApplicationException]() - original or newly created ApplicationException


### Static methods

#### WrapException
Wraps another exception into a specified application exception object.

If the original exception is of ApplicationException type, it is returned without changes.
Otherwise, the original error is set as a cause for the specified ApplicationException object.

> `public static` [ApplicationException]() WrapException([ApplicationException]() error, Exception cause)

- **error**: [ApplicationException]() - ApplicationException object to wrap the cause
- **cause**: Exception - original error object
- **returns**: [ApplicationException]() - original or newly created ApplicationException



### See also
- #### [ErrorCategory](../error_category)
- #### [ErrorDescription](../error_description)
