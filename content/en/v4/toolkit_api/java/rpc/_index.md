---
type: docs
title: "RPC module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-redis-java"
no_list: true
weight: 70
description: > 
    The rpc module provides the synchronous communication compoents. It contains both server and client side implementations.
---


### Modules

The module contains the following packages:

- [**Clients**](clients) - mechanisms for retrieving connection settings from the microservice’s configuration and providing clients and services with these settings
- [**Commands**](commands) - commanding and eventing patterns
- [**Trace**](trace) - logging and tracing utilities


### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-rpc</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```
