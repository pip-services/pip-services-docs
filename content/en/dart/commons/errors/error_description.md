---
type: docs
title: "ErrorDescription"
linkTitle: "ErrorDescription"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
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
> **type**: String

#### category
Standard error category. 
> **category**: String

#### status
HTTP status code associated with this error type. 
> **status**: int

#### code
Unique error code. 
> **code**: String

#### message
A human-readable error description (usually written in English). 
> **message**: String

#### details
A map with additional details that can be used to restore error description in other languages. 
> **details**: [StringValueMap](../../data/string_value_map)

#### correlation_id
Unique transaction id used to trace execution through a call chain    
> **correlation_id**: String

#### cause
Original error wrapped by this exception.  
> **cause**: String

#### stack_trace
Stack trace of the exception.  
> **stack_trace**: String

</span>

### Instance methods

#### fromJson
Adds field to [ErrorDescription]() from json map

> void fromJson(Map\<String, dynamic\> json)

- json: Map\<String, dynamic\> - serealized json map

#### toJson
Converts [ErrorDescription]() to json Map

> Map\<String, dynamic\> toJson()

- **returns**: Map\<String, dynamic\> - serealized json map




### See also
- #### [ApplicationException](../application_exception)
- #### [ApplicationExceptionFactory](../application_exception_factory)
