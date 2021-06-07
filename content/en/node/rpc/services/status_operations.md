---
type: docs
title: "StatusOperations"
linkTitle: "StatusOperations"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
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


#### set_references
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### status
Handles status requests.

> `public` status(req, res): void
- **req**: an HTTP request
- **res**: an HTTP response
