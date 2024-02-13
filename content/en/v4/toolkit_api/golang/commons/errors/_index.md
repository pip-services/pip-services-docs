---
type: docs
title: "Errors"
linkTitle: "Errors"
no_list: true
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    
    Portable and localizable Errors classes. Each Error has a unique string code and details array (which can be used for creating 
    localized strings), in addition to a description and stack trace . 



---
---

<div class="module-body"> 

**Important points**

- There are three ways to use these classes:
    1. Using an existing exception class.
    2. Creating a child class that extends [ApplicationError](application_error).
    3. Wrapping an exception in an existing application exception.

- Although the exception classes themselves are not serializable, they can be converted to ErrorDescriptions, which are serializable in one language, transferred to the receiving side, and deserialized in another language. After deserialization, the initial exception class can be restored. 

- When transferring an exception from one language to another, the exception type that is closest to the initial exception type is chosen from the exceptions available in the target language.

<br>

### Types

#### [ApplicationError](application_error)
Defines a base class used to define various application exceptions.
Most languages have own definition of base exception (error) types.
However, this class is implemented symmetrically in all languages
supported by the PipServices toolkit. It allows to create portable implementations
and support proper error propagation in microservices calls.

#### [ApplicationErrorFactory](application_error_factory)
Factory to recreate exceptions from [ErrorDescription](error_description) values passed through the wire.

#### [BadRequestError](bad_request_error)
Errors due to improper user requests. 
For example: missing or incorrect parameters.

#### [ConfigError](config_error)
Errors related to mistakes in the microservice's user-defined configurations.

#### [ConflictError](conflict_error)
Errors raised by conflicts between object versions that were
posted by the user and those that are stored on the server.

#### [ConnectionError](connection_error)
Errors that occur during connections to remote services.
They can be related to misconfiguration, network issues, or the remote service itself.

#### [ErrorCategory](error_category)
Defines standard error categories supported by the PipServices toolkit.

#### [ErrorDescription](error_description)
Serializeable error description. It is used to pass information about errors
between microservices implemented in different languages. On the receiving side, 
[ErrorDescription](error_description) is used to recreate an exception object close to its original type
without missing additional details.

#### [ErrorDescriptionFactory](error_description_factory)
Factory used to create serializeable a [ErrorDescription](error_description) from
[ApplicationError](application_error) or from arbitrary errors.
The ErrorDescriptions are used to pass errors through the wire between microservices
implemented in different languages. They allow to restore exceptions on the receiving side
close to the original type and preserve additional information.

#### [FileError](file_error)
A helper class to parameters from "options" configuration section.

#### [InternalError](internal_error)
Errors caused by programming mistakes.

#### [InvalidStateError](invalid_state_error)
Errors related to calling operations, which require the component to be in a specific state.
For instance: business calls when the component is not ready.

#### [InvocationError](invocation_error)
Errors returned by remote services or by the network during call attempts.

#### [NotFoundError](not_found_error)
Errors caused by attempts to access missing objects.

#### [UnauthorizedError](unauthorized_error)
Access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).

#### [UnknownError](unknown_error)
Unknown or unexpected errors.

#### [UnsupportedError](unsupported_error)
Errors caused by calls to unsupported or not yet implemented functionality.

</div>

