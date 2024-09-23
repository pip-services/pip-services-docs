---
type: docs
title: "Container module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-container-java"
no_list: true
weight: 50
description: > 
    
    Provides an inversion-of-control (IoC) container used to facilitate the development of services and applications composed of loosely coupled components.

---
### Important points

* The module contains a basic in-memory container that can be embedded inside a service or application, or can be run by itself.
It also has container type can run as a system level process and can be configured via command line arguments.

* These containers can read configuration from JSON or YAML files, and use it as a recipe for instantiating and configuring components.
* Component factories are used to create components based on their locators (descriptor) defined in the container configuration.
The factories shall be registered in containers or dynamically in the container configuration file.

### Packages

The module contains the following packages:

* [**Containers**](containers) - Basic in-memory and process containers
* [**Build**](build) - Default container factory
* [**Config**](config) - Container configuration components
* [**Refer**](refer) - Inter-container reference management (implementation of the Referenceable pattern inside an IoC container)
* [**Test**](test) - minimal set of test components to make testing easier

### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-container</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```
