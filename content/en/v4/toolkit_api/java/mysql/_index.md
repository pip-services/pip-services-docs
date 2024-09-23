---
type: docs
title: "MySQL module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-mongodb-java"
no_list: true
weight: 500
description: > 
    Contains components used to implement MySQL persistence.  
---

### Packages

The module contains the following packages:
- [**Build**](build) - a standard factory for constructing components
- [**Connect**](connect) - instruments for configuring connections to the database.
- [**Persistence**](persistence) - abstract classes for working with the database that can be used for connecting to collections and performing basic CRUD operations


### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-mysql</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```

