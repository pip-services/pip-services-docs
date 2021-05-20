---
type: docs
title: "ErrorDescriptionFactory"
linkTitle: "ErrorDescriptionFactory"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Factory used to create a serializeable [ErrorDescription](../error_description) from [ApplicationException](../application_exception)
    or from arbitrary errors.  

    
---

### Description

The ErrorDescriptionFactory class provides a factory to create a serializeable [ErrorDescription](../error_description) from [ApplicationException](../application_exception) or from arbitrary errors.  

Important points

- Error descriptions are used to pass errors through the wire between microservices implemented in different languages. They allow to restore exceptions on the receiving side close to the original type and preserve additional information.

### Static methods

#### Create
Creates a serializable ErrorDescription from error object.

> `public static` [ErrorDescription](../error_description) Create([ApplicationException](../application_exception) error)

- **error**: [ApplicationException](../application_exception) - an error object
- **returns**: [ErrorDescription](../error_description) - a serializeable ErrorDescription object that describes the error.


#### Create
Creates a serializable ErrorDescription from throwable object with unknown error category.

> `public static` [ErrorDescription](../error_description) Create(Exception ex, string correlationId = null)		

- **ex**: Exception - an error object
- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **returns**: [ErrorDescription](../error_description) - a serializeable ErrorDescription object that describes the error.


### See also
- #### [ApplicationException](../application_exception)
- #### [ErrorDescription](../error_description)
