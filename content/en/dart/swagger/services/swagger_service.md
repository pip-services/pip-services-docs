---
type: docs
title: "SwaggerService"
linkTitle: "SwaggerService"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-swagger-dart"
description: >
    Swagger UI service.
---

**Implements:** [ISwaggerService](../../../rpc/services/iswagger_service)

**Extends**: [RestService](../../../rpc/services/rest_service)

### Description

The SwaggerService class allows you to create a Swagger UI service.

### Instance methods

#### register
Registers the Swagger service.

`@override`
> void register()

#### registerOpenApiSpec
Performs the required Swagger registration steps.

`@override`
> void registerOpenApiSpec(String? baseRoute, String? swaggerRoute)

- **baseRoute**: String - base route
- **swaggerRoute**: String - Swagger route 
