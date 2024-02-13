---
type: docs
title: "ErrorCategory"
linkTitle: "ErrorCategory"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Defines the 12 standard error categories supported by the PipServices toolkit.
    
---

### Description

The ErrorCategory class defines the 12 standard error categories supported by the PipServices toolkit.

### Fields

<span class="hide-title-link">

#### Unknown
Unknown or unexpected errors.
> `static` **Unknown**: str = "Unknown"

#### Internal
Internal errors caused by programming mistakes.
> `static` **Internal**: str = "Internal"

#### Misconfiguration	
Errors related to mistakes in user-defined configurations.
> `static` **Misconfiguration**: str = "Misconfiguration"
	
#### InvalidState
Errors caused by incorrect object state. 
For example: business calls when the component is not ready.
> `static` **InvalidState**: str = "InvalidState"
	
#### NoResponse	
Errors caused by remote calls timeouted and not returning results.
It allows to clearly separate communication related problems
from other application errors.
> `static` **NoResponse**: str = "NoResponse"

#### FailedInvocation	
Errors caused by remote calls failed due to unidenfied reasons.
> `static` **FailedInvocation**: str = "FailedInvocation"

#### FileError
Errors in read/write local disk operations.
> `static` **FileError**: str = "FileError"

#### BadRequest
Errors due to incorrectly specified invocation parameters.
For example: missing or incorrect parameters.
> `static` **BadRequest**: str = "BadRequest"
	
#### Unauthorized
Access errors caused by missing user identity (authentication error)
or incorrect security permissions (authorization error).
> `static` **Unauthorized**: str = "Unauthorized"

#### NotFound
Errors caused by attempts to access missing objects.
> `static` **NotFound**: str = "NotFound"
	
#### Conflict
Errors raised by conflicts between object versions that were
posted by the user and those that are stored on the server.
> `static` **Conflict**: str = "Conflict"	
	
#### Unsupported	
Errors caused by calls to unsupported or not yet implemented functionality.
> `static` **Unsupported**: str = "Unsupported"

</span>
