---
type: docs
title: "SwaggerController"
linkTitle: "SwaggerController"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-swagger-java"
description: >
    Swagger UI service.
---

**Implements:** [ISwaggerController](../../../http/controllers/iswagger_controller)

**Extends**: [RestController](../../../http/controllers/rest_controller)

### Description

The SwaggerController class allows you to create a Swagger UI service.

### Instance methods

#### register
Registers the Swagger service.

> `public` void register()

#### registerOpenApiSpec
Performs the required Swagger registration steps.

> `public` void registerOpenApiSpec(String baseRoute, String swaggerRoute)

- **baseRoute**: string - base route
- **swaggerRoute**: string - Swagger route 
