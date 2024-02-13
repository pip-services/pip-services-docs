---
type: docs
title: "StatusOperations"
linkTitle: "StatusOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
description: >
    Handles status requests for REST operations.
---

**Extends:** [RestOperations](../rest_operations)

### Description

The StatusOperations class allows you to handle status requests for REST operations.  

### Instance methods

#### getStatusOperation
Gets the status of the operation.

> `public` Function<ContainerRequestContext, Response> getStatusOperation()

- **returns**: Function<ContainerRequestContext, Response> - status operation method


#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException, ConfigException

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### status
Handles status requests.

> `public` Response status(ContainerRequestContext req)

- **req**: ContainerRequestContext - an HTTP request
- **returns**: Response - response
