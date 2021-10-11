---
type: docs
title: "Container module"
gitUrl: "https://github.com/pip-services3-go/pip-services3-container-go"
no_list: true
weight: 50
description: > 
    
    This module provides an inversion-of-control (IoC) container used to facilitate the development of services and applications composed of loosely coupled components.

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


### Use

Get the package from the Github repository:
```bash
go get -u github.com/pip-services3-go/pip-services3-container-go@latest
```

TODO: add example
