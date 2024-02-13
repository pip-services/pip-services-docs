---
type: docs
title: "AboutOperations"
linkTitle: "AboutOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-http-go"
description: >
    Class used to obtain information about running controllers.
---

**Implements:** [RestOperations](../rest_operations)

### Description

The AboutOperations class is used to obtain information about running controllers.

### Constructors

#### NewAboutOperations

> NewAboutOperations() [*AboutOperations]()

### Methods

#### About
Gets information from a controller.
Send JSON string with information about the controller.

> (c [*AboutOperations]()) About(res http.ResponseWriter, req *http.Request)
- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response


#### GetAboutOperation
Gets the controller's information.

> (c [*AboutOperations]()) GetAboutOperation() func(res http.ResponseWriter, req *http.Request)

- **returns**: func(res http.ResponseWriter, req *http.Request) - the about method


#### SetReferences
Sets the references of the controller.

> (c [*AboutOperations]()) SetReferences(ctx context.Context, references [crefer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [crefer.IReferences](../../../components/refer/ireferences) - controller's references.

