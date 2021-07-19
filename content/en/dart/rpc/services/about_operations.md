---
type: docs
title: "AboutOperations"
linkTitle: "AboutOperations"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
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

> void about(req, res)
- **req**: dynamic - an HTTP request
- **res**: dynamic - an HTTP response


#### getAboutOperation
Gets the service's information.

> Function(angel.RequestContext req, angel.ResponseContext res) getAboutOperation()

- **returns**: Function(angel.RequestContext req, angel.ResponseContext res) - the about method


#### setReferences
Sets the references of the service.

`@override`
> void setReferences(IReferences references)

- **references**: [IReferences](../../../commons/refer/ireferences) - service's references.
