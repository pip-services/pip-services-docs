---
type: docs
title: "Observability module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
no_list: true
weight: 30
description: > 
 
    The Observability module contains observability component definitions that can be used to build applications and services.

---


### Packages

The module contains the following packages:

- [**Build**](build) - factory used to create observability components by their descriptors
- [**Count**](count) - performance counters
- [**Log**](log) - basic logging components that provide console and composite logging, as well as an interface for developing custom loggers
- [**Trace**](trace) - tracing components



### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-observability</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```
