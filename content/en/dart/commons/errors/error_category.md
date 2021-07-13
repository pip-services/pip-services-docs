---
type: docs
title: "ErrorCategory"
linkTitle: "ErrorCategory"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Defines the 12 standard error categories supported by the PipServices toolkit.
    
---

### Description

The ErrorCategory class defines the 12 standard error categories supported by the PipServices toolkit.

### Fields

<span class="hide-title-link">

#### Unknown
Unknown or unexpected errors.
> `static final` **Unknown**: String = "Unknown"

#### Internal
Internal errors caused by programming mistakes.
> `static final` **Internal**: String = "Internal"

#### Misconfiguration	
Errors related to mistakes in user-defined configurations.
> `static final` **Misconfiguration**: String = "Misconfiguration"
	
#### InvalidState
Errors caused by incorrect object state.. 
For example: business calls when the component is not ready.
> `static final` **InvalidState**: String = "InvalidState"
	
#### NoResponse	
Errors caused by remote calls timeouted and not returning results.
It allows to clearly separate communication related problems
from other application errors.
> `static final` **NoResponse**: String = "NoResponse"

#### FailedInvocation	
Errors caused by remote calls failed due to unidenfied reasons.
> `static final` **FailedInvocation**: String = "FailedInvocation"

#### FileError
Errors in read/write local disk operations.
> `static final` **FileError**: String = "FileError"

#### BadRequest
Errors due to incorrectly specified invocation parameters.
For example: missing or incorrect parameters.
> `static final` **BadRequest**: String = "BadRequest"
	
#### Unauthorized
Access errors caused by missing user identity (authentication error)
or incorrect security permissions (authorization error).
> `static final` **Unauthorized**: String = "Unauthorized"

#### NotFound
Errors caused by attempts to access missing objects.
> `static final` **NotFound**: String = "NotFound"
	
#### Conflict
Errors raised by conflicts between object versions that were
posted by the user and those that are stored on the server.
> `static final` **Conflict**: String = "Conflict"	
	
#### Unsupported	
Errors caused by calls to unsupported or not yet implemented functionality.
> `static final` **Unsupported**: String = "Unsupported"

</span>
