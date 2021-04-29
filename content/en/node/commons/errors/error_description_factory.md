---
type: docs
title: "ErrorDescriptionFactory"
linkTitle: "ErrorDescriptionFactory"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Factory to create serializeable [ErrorDescription](../error_description) from [ApplicationException](../application_exception)
    or from arbitrary errors.  

    The ErrorDescriptions are used to pass errors through the wire between microservices
    implemented in different languages. They allow to restore exceptions on the receiving side
    close to the original type and preserve additional information.
---
See also [ApplicationException](../application_exception), [ErrorDescription](../error_description)


### Methods

#### create
Creates a serializable ErrorDescription from error object.

> `public static` create(error: any): [ErrorDescription](../error_description)

- **error**: any - an error object
- **returns**: [ErrorDescription](../error_description) - a serializeable ErrorDescription object that describes the error.

### See also
- #### [ApplicationException](../application_exception)
- #### [ErrorDescription](../error_description)