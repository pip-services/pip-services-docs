---
type: docs
title: "ErrorDescription"
linkTitle: "ErrorDescription"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Class used to pass information about errors between microservices implemented in different languages. On the receiving side
    [ErrorDescription]() is used to recreate the exception object close to its original type
    without missing additional details.
---

### Description

The ErrorDescription class is used to pass information about errors between microservices implemented in different languages. On the receiving side [ErrorDescription]() is used to recreate the exception object close to its original type without missing additional details. This class is serializeable.

### Fields

<span class="hide-title-link">

#### Type
Data type of the original error 
> **Type**: string

#### Category
Standard error category 
> **Category**: string

#### Status
HTTP status code associated with this error type 
> **Status**: int

#### Code
A unique error code 
> **Code**: string

#### Message
A human-readable error description (usually written in English) 
> **Message**: string

#### Details
Map with additional details that can be used to restore error description in other languages 
> **Details**: map[string]any

#### CorrelationId
Unique transaction id used to trace execution through the call chain    
> **CorrelationId**: string

#### Cause
Original error wrapped by this exception  
> **Cause**: string

#### StackTrace
Stack trace of the exception  
> **StackTrace**: string

</span>


### See also
- #### [ApplicationError](../application_error)
- #### [ApplicationErrorFactory](../application_error_factory)

