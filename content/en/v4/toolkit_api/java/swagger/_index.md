---
type: docs
title: "Swagger module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-swagger-java"
no_list: true
weight: 500
description: > 
  Provides a Swagger UI that can be added into microservices and is seamlessly integrated with existing REST and Commandable HTTP.
---


### Packages

The module contains the following packages:

- [**Build**](build) - Swagger service factory
- [**Controllers**](controllers) - Swagger UI controller

### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-swagger</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```