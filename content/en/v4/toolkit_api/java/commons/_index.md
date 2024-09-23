---
type: docs
title: "Commons module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
no_list: true
weight: 30
description: > 
 
    It provides a set of basic patterns used in microservices or backend services.
    Also the module implemenets a reasonably thin abstraction layer over most fundamental functions across
    all languages supported by the toolkit to facilitate symmetric implementation.

---


### Packages

The module contains the following packages:

* [**Convert**](convert) - portable value converters
* [**Data**](data) - data patterns
* [**Errors**](errors) - application errors
* [**Reflect**](reflect) - portable reflection utilities



### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-commons</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```

