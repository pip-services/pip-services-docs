---
type: docs
title: "Data module"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
no_list: true
weight: 30
description: > 
   
    Persistence components for Golang This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit. It contains generic interfaces for data access components as well as abstract implementations for in-memory and file persistence.      
    
    The persistence components come in two kinds. The first kind is a basic persistence that can work with any object types and provides only minimal set of operations. The second kind is so called "identifieable" persistence with works with "identifable" data objects, i.e. objects that have unique ID field. The identifiable persistence provides a full set or CRUD operations that covers most common cases.


---


### Packages

The module contains the following packages:

* [**Persistence**](persistence) - in-memory and file persistence components, as well as JSON persister class.


### Use

Get the package from the Github repository:
```bash
go get -u github.com/pip-services3-go/pip-services3-data-go@latest
```

TODO: add example