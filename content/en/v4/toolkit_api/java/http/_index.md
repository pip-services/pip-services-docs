---
type: docs
title: "HTTP module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
no_list: true
weight: 30
description: > 
 
    The rpc module provides the synchronous communication using local calls or the HTTP(S) protocol. It contains both server and client side implementations.

---


### Packages

The module contains the following packages:

- [**Auth**](auth) - authentication and authorization components
- [**Build**](build) - HTTP service factory
- [**Clients**](clients) - mechanisms for retrieving connection settings from the microservice’s configuration and providing clients and services with these settings
- [**Controllers**](controllers) - basic implementation of controllers for connecting via the HTTP/REST protocol and using the Commandable pattern over HTTP



### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-http</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```
