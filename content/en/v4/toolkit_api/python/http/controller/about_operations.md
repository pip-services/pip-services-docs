---
type: docs
title: "AboutOperations"
linkTitle: "AboutOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-http-python"
description: >
    Class used to obtain information about running services.
---

**Implements:** [RestOperations](../rest_operations)

### Description

The AboutOperations class is used to obtain information about running services.

### Instance methods

#### get_about
Gets information from a service.

> get_about(): str

- **returns**: str - JSON string with information about the service.


#### get_about_operation
Gets the service's information.

> get_about_operation(): Callable

- **returns**: Callable - get_about method


#### set_references
Sets the references of the service.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - service's references.
