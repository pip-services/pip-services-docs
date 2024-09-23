---
type: docs
title: "Redis module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-redis-java"
no_list: true
weight: 500
description: > 

 
   Contains packages for working with Redis databses of type key-value.
---

### Packages

The module contains the following packages:
- [**Build**](build) - factory to create Redis components by their descriptors.
- [**Cache**](cache) - Redis Cache Components
- [**Lock**](lock) - components for working with locks in Redis


### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-redis</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```
