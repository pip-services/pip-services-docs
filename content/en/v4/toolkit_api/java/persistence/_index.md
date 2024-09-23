---
type: docs
title: "Persistence module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-persistence-java"
no_list: true
weight: 60
description: > 
  The persistence components come in two kinds. The first kind is a basic persistence that can work with any object types and provides only minimal set of operations. The second kind is called “identifieable” persistence and works with “identifable” data objects, i.e. objects that have unique ID field. The identifiable persistence provides a full set or CRUD operations that covers most common cases.
---

### Description
The persistence components are of two types. The first type is a basic one that can be used with any kinds of objects and offers only a minimal set of operations. The second type is known as "identifiable" persistence and is designed to work specifically with data objects that have a unique ID field. This type provides a complete set of CRUD operations, which covers the most common scenarios for managing data effectively.

### Packages

The module contains the following packages:

- [**Read**](read) - generic data reading interfaces.
- [**Write**](write) - generic data writing interfaces.
- [**Persistence**](persistence) - in-memory and file persistence components, as well as JSON persister class.


### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-persistence</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```
