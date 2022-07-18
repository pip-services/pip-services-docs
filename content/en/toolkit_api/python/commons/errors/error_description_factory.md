---
type: docs
title: "ErrorDescriptionFactory"
linkTitle: "ErrorDescriptionFactory"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Factory used to create a serializeable [ErrorDescription](../error_description) from [ApplicationException](../application_exception)
    or from arbitrary errors.  

    
---

### Description

The ErrorDescriptionFactory class provides a factory to create a serializeable [ErrorDescription](../error_description) from [ApplicationException](../application_exception) or from arbitrary errors.  

Important points

- Error descriptions are used to pass errors through the wire between microservices implemented in different languages. They allow to restore exceptions on the receiving side close to the original type and preserve additional information.

### Static methods

#### create
Creates a serializable ErrorDescription from error object.

> `static` create(error: Any): [ErrorDescription](../error_description)

- **error**: Any - an error object
- **returns**: [ErrorDescription](../error_description) - a serializeable ErrorDescription object that describes the error.

### See also
- #### [ApplicationException](../application_exception)
- #### [ErrorDescription](../error_description)
