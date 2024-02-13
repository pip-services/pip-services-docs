---
type: docs
title: "ErrorDescriptionFactory"
linkTitle: "ErrorDescriptionFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Factory used to create a serializeable [ErrorDescription](../error_description) from [ApplicationError](../application_error)
    or from arbitrary errors.  

    
---

### Description

The ErrorDescriptionFactory class provides a factory to create a serializeable [ErrorDescription](../error_description) from [ApplicationError](../application_error) or from arbitrary errors.  

Important points

- Error descriptions are used to pass errors through the wire between microservices implemented in different languages. They allow to restore exceptions on the receiving side close to the original type and preserve additional information.

### Methods

#### Create
Creates a serializable ErrorDescription from error object.

> (c *TErrorDescriptionFactory) Create(err any) [*ErrorDescription](../error_description)

- **error**: any - error object
- **returns**: [*ErrorDescription](../error_description) - serializeable ErrorDescription object that describes the error.

### See also
- #### [ApplicationError](../application_error)
- #### [ErrorDescription](../error_description)

