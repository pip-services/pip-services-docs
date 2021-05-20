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
> `public const` string Unknown = "Unknown"

#### Internal
Internal errors caused by programming mistakes.
> `public const` string Internal = "Internal"

#### Misconfiguration	
Errors related to mistakes in user-defined configurations.
> `public const` string Misconfiguration = "Misconfiguration"
	
#### InvalidState
Errors caused by incorrect object state.. 
For example: business calls when the component is not ready.
> `public const` string InvalidState = "InvalidState"
	
#### NoResponse	
Errors caused by remote calls timeouted and not returning results.
It allows to clearly separate communication related problems
from other application errors.
> `public const` string NoResponse = "NoResponse"

#### FailedInvocation	
Errors caused by remote calls failed due to unidenfied reasons.
> `public const` string FailedInvocation = "FailedInvocation"

#### FileError
Errors in read/write local disk operations.
> `public const` string NoFileAccess = "NoFileAccess"

#### BadRequest
Errors due to incorrectly specified invocation parameters.
For example: missing or incorrect parameters.
> `public const` string BadRequest = "BadRequest"
	
#### Unauthorized
Access errors caused by missing user identity (authentication error)
or incorrect security permissions (authorization error).
> `public const` string Unauthorized = "Unauthorized"

#### NotFound
Errors caused by attempts to access missing objects.
> `public const` string NotFound = "NotFound"
	
#### Conflict
Errors raised by conflicts between object versions that were
posted by the user and those that are stored on the server.
> `public const` string Conflict = "Conflict"	
	
#### Unsupported	
Errors caused by calls to unsupported or not yet implemented functionality.
> `public const` string Unsupported = "Unsupported"

</span>
