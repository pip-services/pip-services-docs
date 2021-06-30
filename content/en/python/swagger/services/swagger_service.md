---
type: docs
title: "SwaggerService"
linkTitle: "SwaggerService"
gitUrl: "https://github.com/pip-services3-python/pip-services3-swagger-python"
description: >
    Swagger UI service.
---

**Implements:** [ISwaggerService](../../../rpc/services/iswagger_service)

### Description

The SwaggerService class allows you to create a Swagger UI service.

### Instance methods

#### register
Registers the Swagger service.

> register()

#### register_open_api_spec
Performs the required Swagger registration steps.

> register_open_api_spec(base_route: str, swagger_route: str = None)

- **base_route**: str - base route
- **swagger_route**: str - Swagger route 
