---
type: docs
title: "SwaggerService"
linkTitle: "SwaggerService"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-swagger-nodex"
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

> `public` register()

#### registerOpenApiSpec
Performs the required Swagger registration steps.

> `public` registerOpenApiSpec(baseRoute: string, swaggerRoute?: string): void

- **baseRoute**: string - base route
- **swaggerRoute**: string - Swagger route 
