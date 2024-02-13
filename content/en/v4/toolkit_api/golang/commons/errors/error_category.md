---
type: docs
title: "ErrorCategory"
linkTitle: "ErrorCategory"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
    Defines the 12 standard error categories supported by the PipServices toolkit.
    
---

### Description

The ErrorCategory defines the 12 standard error categories supported by the PipServices toolkit.

### Constants

<span class="hide-title-link"> 

#### Unknown
Unknown or unexpected errors.
>  **Unknown**: string = "Unknown"

#### Internal
Internal errors caused by programming mistakes.
> **Internal**: string = "Internal"

#### Misconfiguration	
Errors related to mistakes in user-defined configurations.
> **Misconfiguration**: string = "Misconfiguration"
	
#### InvalidState
Errors caused by an incorrect object state.. 
For example: business calls when the component is not ready.
> **InvalidState**: string = "InvalidState"
	
#### NoResponse	
Errors caused by remote calls timed out and not returning results.
It allows to clearly separate communication related problems
from other application errors.
> **NoResponse**: string = "NoResponse"

#### FailedInvocation	
Errors caused by remote calls failed due to unidenfied reasons.
> **FailedInvocation**: string = "FailedInvocation"

#### FileError
Errors in read/write local disk operations.
> **FileError**: string = "FileError"

#### BadRequest
Errors due to incorrectly specified invocation parameters.
For example: missing or incorrect parameters.
> **BadRequest**: string = "BadRequest"
	
#### Unauthorized
Access errors caused by missing user identity (authentication error)
or incorrect security permissions (authorization error).
> **Unauthorized**: string = "Unauthorized"

#### NotFound
Errors caused by attempts to access missing objects.
> **NotFound**: string = "NotFound"
	
#### Conflict
Errors raised by conflicts between object versions that were
posted by the user and those that are stored on the server.
> **Conflict**: string = "Conflict"	
	
#### Unsupported	
Errors caused by calls to unsupported or not yet implemented functionality.
>  **Unsupported**: string = "Unsupported"

</span> 

