---
type: docs
title: "DataDog module"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-datadog-dotnet"
no_list: true
weight: 30
description: > 
    DataDog components for Pip.Services in .NET 
   
    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    It contains the DataDog logger and performance counters components.

---


### Packages

This module contains the following packages:

- [**Build**](build) - contains a class used to create DataDog components by their descriptors.
- [**Clients**](clients) - contains constants and classes used to define REST clients for DataDog
- [**Count**](count) - contains a class used to create performance counters that send their metrics to a DataDog service
- [**Log**](log) - contains a class used to create loggers that dump execution logs to a DataDog service.


### Use

Install the dotnet package as
```bash
dotnet add package PipServices3.Datadog
```
