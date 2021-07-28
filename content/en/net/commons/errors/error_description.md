---
type: docs
title: "ErrorDescription"
linkTitle: "ErrorDescription"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Class used to pass information about errors between microservices implemented in different languages. On the receiving side,
    [ErrorDescription]() is used to recreate the exception object close to its original type
    without missing additional details.
---

### Description

The ErrorDescription class is used to pass information about errors between microservices implemented in different languages. On the receiving side, [ErrorDescription]() is used to recreate the exception object close to its original type without missing additional details. This class is serializeable.

### Properties

#### Type
Data type of the original error. 
> `public` string Type { get; set; }

#### Category
Standard error category. 
> `public` string Category { get; set; }

#### Status
HTTP status code associated with this error type. 
> `public` int Status { get; set; }

#### Code
A unique error code. 
> `public` string Code { get; set; }

#### Message
A human-readable error description (usually written in English). 
> `public` string Message { get; set; }

#### Details
Map with additional details that can be used to restore an error description in other languages. 
> `public` [StringValueMap](../../data/string_value_map) Details { get; set; }

#### CorrelationId
A unique transaction id to trace execution throug call chain.    
> `public` string CorrelationId { get; set; }

#### Cause
Original error wrapped by this exception.  
> `public` string Cause { get; set; }

#### StackTrace
Stack trace of the exception.  
> `public` string StackTrace { get; set; }


### See also
- #### [ApplicationException](../application_exception)
- #### [ApplicationExceptionFactory](../application_exception_factory)
