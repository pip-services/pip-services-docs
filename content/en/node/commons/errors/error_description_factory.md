---
type: docs
title: "ErrorDescriptionFactory"
linkTitle: "ErrorDescriptionFactory"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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
Creates a serializable ErrorDescription from n error object.

> `public static` create(error: any): [ErrorDescription](../error_description)

- **error**: any - error object
- **returns**: [ErrorDescription](../error_description) - serializeable ErrorDescription object that describes the error.

### See also
- #### [ApplicationException](../application_exception)
- #### [ErrorDescription](../error_description)
