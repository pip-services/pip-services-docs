---
type: docs
title: "AboutOperations"
linkTitle: "AboutOperations"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-rpc-gox"
description: >
    Class used to obtain information about running services.
---

**Implements:** [RestOperations](../rest_operations)

### Description

The AboutOperations class is used to obtain information about running services.

### Constructors

#### NewAboutOperations

> NewAboutOperations() [*AboutOperations]()

### Methods

#### About
Gets information from a service.
Send JSON string with information about the service.

> (c [*AboutOperations]()) About(res http.ResponseWriter, req *http.Request)
- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response


#### GetAboutOperation
Gets the service's information.

> (c [*AboutOperations]()) GetAboutOperation() func(res http.ResponseWriter, req *http.Request)

- **returns**: func(res http.ResponseWriter, req *http.Request) - the about method


#### SetReferences
Sets the references of the service.

> (c [*AboutOperations]()) SetReferences(ctx context.Context, references [crefer.IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [crefer.IReferences](../../../commons/refer/ireferences) - service's references.
