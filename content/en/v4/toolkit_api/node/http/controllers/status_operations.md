---
type: docs
title: "StatusOperations"
linkTitle: "StatusOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-http-node"
description: >
    Handles status requests for REST operations.
---

**Extends:** [RestOperations](../rest_operations)

### Description

The StatusOperations class allows you to handle status requests for REST operations.  

### Instance methods

#### getStatusOperation
Gets the status of the operation.

> `public` getStatusOperation(): function

- **returns**: function - status operation method


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### status
Handles status requests.

> `public` status(req, res): void
- **req**: any - an HTTP request
- **res**: any - an HTTP response
