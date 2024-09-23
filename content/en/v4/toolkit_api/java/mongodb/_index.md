---
type: docs
title: "MongoDB module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-messaging-java"
no_list: true
weight: 500
description: > 
 A set of components used to implement MongoDB persistence.
---

### Packages

The module contains the following packages:
- [**Build**](build) - Factory to create MongoDB persistence components.
- [**Connect**](connect) - Connection component to configure MongoDB connection to database.
- [**Persistence**](persistence) - abstract persistence components to perform basic CRUD operations.


### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-mongodb</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```
