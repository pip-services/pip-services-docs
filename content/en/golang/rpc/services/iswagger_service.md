---
type: docs
title: "ISwaggerService"
linkTitle: "ISwaggerService"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rpc-go"
description: >
    Interface to perform Swagger registrations.
---

### Description

The  ISwaggerService interface is used to perform Swagger registrations.

### Methods

#### RegisterOpenApiSpec
Performs the required Swagger registration steps.

> RegisterOpenApiSpec(baseRoute string, content string)

- **baseRoute**: string - base route
- **swaggerRoute**: string - Swagger route

