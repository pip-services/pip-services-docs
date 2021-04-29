---
type: docs
title: "Errors"
linkTitle: "Errors"
no_list: true
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Todo: Rewrite this description.  

    Portable and localizable Exceptions classes. Each Exception, in addition to a description 
    and stack trace has a unique string code, details array (which can be used for creating 
    localized strings). 


    Way to use:
    - An existing exception class can be used.
    - A child class that extends [ApplicationException](application_exception) can we written.
    - A exception can be wrapped around (into?) an existing application exception.


    Exceptions are serializable. The exception classes themselves are not serializable, but 
    they can be converted to ErrorDescriptions, which are serializable in one language, transferred 
    to the receiving side, and deserialized in another language. After deserialization, the initial 
    exception class can be restored. 


    Additionally: when transferring an exception from one language to another, the exception type 
    that is closest to the initial exception type is chosen from the exceptions available in the 
    target language.
---
---

<div class="module-body"> 

### Classes

#### [ApplicationException](application_exception)
Defines a base class to defive various application exceptions.
Most languages have own definition of base exception (error) types.
However, this class is implemented symmetrically in all languages
supported by PipServices toolkit. It allows to create portable implementations
and support proper error propagation in microservices calls.

#### [ApplicationExceptionFactory](application_exception_factory)
Factory to recreate exceptions from [ErrorDescription](error_description) values passed through the wire.

#### [BadRequestException](badRequest_exception)
Errors due to improper user requests. 
For example: missing or incorrect parameters.

#### [ConfigException](config_exception)
Errors related to mistakes in the microservice's user-defined configurations.

#### [ConflictException](conflict_exception)
Errors raised by conflicts between object versions that were
posted by the user and those that are stored on the server.

#### [ConnectionException](connection_exception)
Errors that occur during connections to remote services.
They can be related to misconfiguration, network issues, or the remote service itself.

#### [ErrorCategory](error_category)
Defines standard error categories to application exceptions
supported by PipServices toolkit.

#### [ErrorDescription](error_description)
Serializeable error description. It is use to pass information about errors
between microservices implemented in different languages. On the receiving side
[ErrorDescription](error_description) is used to recreate exception object close to its original type
without missing additional details.

#### [ErrorDescriptionFactory](error_description_factory)
Factory to create serializeable [ErrorDescription](error_description) from
[ApplicationException](application_exception) or from arbitrary errors.
The ErrorDescriptions are used to pass errors through the wire between microservices
implemented in different languages. They allow to restore exceptions on the receiving side
close to the original type and preserve additional information.

#### [FileException](file_exception)
A helper class to parameters from "options" configuration section.

#### [InternalException](internal_exception)
Errors caused by programming mistakes.

#### [InvalidStateException](invalid_state_exception)
Errors related to calling operations, which require the component to be in a specific state.
For instance: business calls when the component is not ready.

#### [InvocationException](invocation_exception)
Errors returned by remote services or by the network during call attempts.

#### [NotFoundException](not_found_exception)
Errors caused by attempts to access missing objects.

#### [UnauthorizedException](unauthorized_exception)
Access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).

#### [UnknownException](unknown_exception)
Unknown or unexpected errors.

#### [UnsupportedException](unsupported_exception)
Errors caused by calls to unsupported or not yet implemented functionality.

</div>