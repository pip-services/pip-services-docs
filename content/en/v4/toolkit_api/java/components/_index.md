---
type: docs
title: "Components module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
no_list: true
weight: 40
description: > 
    It defines a portable component model interfaces and provides utility classes to handle component lifecycle.
---


### Packages

The module contains the following packages:

* [**Build**](build) - basic factories for constructing objects
* [**Config**](config) - configuration readers and managers, whose main task is to deliver configuration parameters to the application from wherever they are being stored
* [**Context**](context) - 
* [**Exec**](exec) - connection discovery and configuration services
* [**Refer**](refer) - this package provides interfaces and classes used to create different types of tracers
* [**Run**](run) - the root package



### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-components</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```
