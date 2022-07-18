---
type: docs
title: "SwaggerService"
linkTitle: "SwaggerService"
gitUrl: "https://github.com/pip-services3-go/pip-services3-swagger-go"
description: >
    Swagger UI service.
---

**Implements**: [RestService](../../../rpc/services/rest_service)

### Description

The SwaggerService class allows you to create a Swagger UI service.


### Constructors

#### NewSwaggerService
Creates a new instance of the Swagger service.  

> NewSwaggerService() [*SwaggerService]()

### Methods

#### register
Registers the Swagger service.

> (c [*SwaggerService]()) Register()

#### RegisterOpenApiSpec
Performs the required Swagger registration steps.

> (c [*SwaggerService]()) RegisterOpenApiSpec(baseRoute string, swaggerRoute string)

- **baseRoute**: string - base route
- **swaggerRoute**: string - Swagger route 
