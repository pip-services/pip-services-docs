---
type: docs
title: "SwaggerController"
linkTitle: "SwaggerController"
gitUrl: "https://github.com/pip-services3-python/pip-services3-swagger-python"
description: >
    Swagger UI controller.
---

**Implements:** [RestController](../../../http/controller/rest_controller), [ISwaggerController](../../../http/controllers/iswagger_controller)

### Description

The SwaggerController class allows you to create a Swagger UI controller.

### Instance methods

#### register
Registers the Swagger controller.

> register()

#### register_open_api_spec
Performs the required Swagger registration steps.

> register_open_api_spec(base_route: str, swagger_route: str = None)

- **base_route**: str - base route
- **swagger_route**: str - Swagger route 
