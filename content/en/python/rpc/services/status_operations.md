---
type: docs
title: "StatusOperations"
linkTitle: "StatusOperations"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    Handles status requests for REST operations.
---

**Implements:** [RestOperations](../rest_operations)

### Description

The StatusOperations class allows you to handle status requests for REST operations.  

### Methods

#### get_status_operation
Gets the status of the operation.

> get_status_operation(): Callable

- **returns**: Callable - status of the operation (JSON)


#### set_references
Sets references to dependent components.

>  set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### status
Handles status requests.

>  status(): str
