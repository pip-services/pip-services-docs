---
type: docs
title: "AboutOperations"
linkTitle: "AboutOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-http-dart"
description: >
    Class used to obtain information about running services.
---

**Extends:** [RestOperations](../rest_operations)

### Description

The AboutOperations class is used to obtain information about running services.

### Instance methods

#### about
Gets information from a service.
Sends a JSON string with information about the service.

> FutureOr\<shelf.Response\> about(shelf.Request req)
- **req**: shelf.Request - an HTTP request
- **returns**: FutureOr\<shelf.Response\> - an HTTP response


#### getAboutOperation
Gets the service's information.

> Function(shelf.Request req) getAboutOperation()

- **returns**: Function(shelf.Request req) - about method


#### setReferences
Sets the references of the service.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - service's references.

