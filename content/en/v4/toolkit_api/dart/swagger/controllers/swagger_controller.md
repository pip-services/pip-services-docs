---
type: docs
title: "SwaggerController"
linkTitle: "SwaggerController"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-swagger-dart"
description: >
    Swagger UI controller.
---

**Implements:** [ISwaggerController](../../../http/controllers/iswagger_controller)

**Extends**: [RestController](../../../http/controllers/rest_controller)

### Description

The SwaggerController class allows you to create a Swagger UI controller.

### Instance methods

#### register
Registers the Swagger controller.

`@override`
> void register()

#### registerOpenApiSpec
Performs the required Swagger registration steps.

`@override`
> void registerOpenApiSpec(String? baseRoute, String? swaggerRoute)

- **baseRoute**: String - base route
- **swaggerRoute**: String - Swagger route 
