---
type: docs
title: "AboutOperations"
linkTitle: "AboutOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
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

> `public` Response about(ContainerRequestContext req) throws SocketException, UnknownHostException
- **req**: ContainerRequestContext - an HTTP request
- **returns**: Response - an HTTP response


#### getAboutOperation
Gets the service's information.

> `public` Function<ContainerRequestContext, Response> getAboutOperation()

- **returns**: Function<ContainerRequestContext, Response> - the about method


#### setReferences
Sets the references of the service.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException, ConfigException

- **references**: [IReferences](../../../components/refer/ireferences) - service's references.
