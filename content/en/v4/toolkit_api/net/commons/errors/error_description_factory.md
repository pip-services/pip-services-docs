---
type: docs
title: "ErrorDescriptionFactory"
linkTitle: "ErrorDescriptionFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-commons-dotnet"
description: >
    Factory used to create a serializeable [ErrorDescription](../error_description) from [ApplicationException](../application_exception)
    or from arbitrary errors.  

    
---

### Description

The ErrorDescriptionFactory class provides a factory to create a serializeable [ErrorDescription](../error_description) from [ApplicationException](../application_exception) or from arbitrary errors.  

**Important points**

- Error descriptions are used to pass errors through the wire between microservices implemented in different languages. They allow to restore exceptions on the receiving side close to the original type and preserve additional information.

### Static methods

#### Create
Creates a serializable ErrorDescription from an error object.

> `public static` [ErrorDescription](../error_description) Create([ApplicationException](../application_exception) error)

- **error**: [ApplicationException](../application_exception) - error object
- **returns**: [ErrorDescription](../error_description) - serializeable ErrorDescription object that describes the error.


#### Create
Creates a serializable ErrorDescription from a throwable object with an unknown error category.

> `public static` [ErrorDescription](../error_description) Create(Exception ex, Context context = null)		

- **ex**: Exception - error object
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: [ErrorDescription](../error_description) - serializeable ErrorDescription object that describes the error.


### See also
- #### [ApplicationException](../application_exception)
- #### [ErrorDescription](../error_description)

