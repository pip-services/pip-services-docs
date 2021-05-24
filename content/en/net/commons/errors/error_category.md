---
type: docs
title: "ErrorCategory"
linkTitle: "ErrorCategory"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Defines the 12 standard error categories supported by the PipServices toolkit.
    
---

### Description

The ErrorCategory class defines the 12 standard error categories supported by the PipServices toolkit.

### Fields

<span class="hide-title-link">

#### Unknown
Unknown or unexpected errors.
> `public const` **Unknown**: string = "Unknown"

#### Internal
Internal errors caused by programming mistakes.
> `public const` **Internal**: string  = "Internal"

#### Misconfiguration	
Errors related to mistakes in user-defined configurations.
> `public const` **Misconfiguration**: string = "Misconfiguration"
	
#### InvalidState
Errors caused by incorrect object state.. 
For example: business calls when the component is not ready.
> `public const` **InvalidState**: string = "InvalidState"
	
#### NoResponse	
Errors caused by remote calls timeouted and not returning results.
It allows to clearly separate communication related problems
from other application errors.
> `public const` **NoResponse**: string = "NoResponse"

#### FailedInvocation	
Errors caused by remote calls failed due to unidenfied reasons.
> `public const` **FailedInvocation**: string = "FailedInvocation"

#### FileError
Errors in read/write local disk operations.
> `public const` **NoFileAccess**: string = "NoFileAccess"

#### BadRequest
Errors due to incorrectly specified invocation parameters.
For example: missing or incorrect parameters.
> `public const` **BadRequest**: string = "BadRequest"
	
#### Unauthorized
Access errors caused by missing user identity (authentication error)
or incorrect security permissions (authorization error).
> `public const` **Unauthorized**: string = "Unauthorized"

#### NotFound
Errors caused by attempts to access missing objects.
> `public const` **NotFound**: string = "NotFound"
	
#### Conflict
Errors raised by conflicts between object versions that were
posted by the user and those that are stored on the server.
> `public const` **Conflict**: string = "Conflict"	
	
#### Unsupported	
Errors caused by calls to unsupported or not yet implemented functionality.
> `public const` **Unsupported** = "Unsupported"

</span>
