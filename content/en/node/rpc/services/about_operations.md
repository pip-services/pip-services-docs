---
type: docs
title: "AboutOperations"
linkTitle: "AboutOperations"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
description: >
    Class used to obtain information about running services.
---

**Extends:** [RestOperations](../rest_operations)

### Description

The AboutOperations class is used to obtain information about running services.

### Instance methods

#### about
Gets information from a service.
Send JSON string with information about the service.

> `public` about(req, res): void 
- **req**: any - an HTTP request
- **res**: any - an HTTP response


#### getAboutOperation
Gets the service's information.

> `public` getAboutOperation(): function

- **returns**: function - the about method


#### setReferences
Sets the references of the service.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - service's references.
