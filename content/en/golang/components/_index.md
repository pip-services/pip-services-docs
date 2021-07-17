---
type: docs
title: "Components module"
no_list: true
weight: 30
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: > 
    Component definitions for Golang
    

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    It contains standard component definitions that can be used to build applications and services.
---


### Packages

The module contains the following packages:

* [**Auth**](auth) - authentication credential stores
* [**Build**](build) - basic factories for constructing objects
* [**Cache**](cache) - distributed cache
* [**Config**](config) - configuration readers and managers, whose main task is to deliver configuration parameters to the application from wherever they are being stored
* [**Connect**](connect) - connection discovery and configuration services
* [**Count**](count) - performance counters
* [**Info**](info) - context info implementations that manage the saving of process information and sending additional parameter sets
* [**Lock**](lock) - distributed lock components
* [**Log**](log) - basic logging components that provide console and composite logging, as well as an interface for developing custom loggers
* [**Test**](test) - minimal set of test components to make testing easier
* [**Component**](component) - the root package


### Use

Get the package from the Github repository:
```bash
go get -u github.com/pip-services3-go/pip-services3-components-go@latest
```