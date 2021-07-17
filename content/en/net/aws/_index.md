---
type: docs
title: "AWS module"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
no_list: true
weight: 30
description: > 
    AWS specific components for .NET


    This module is part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.

    It contains components for supporting work with the AWS cloud platform.
---


### Modules

This module contains the following packages:

- [**Build**](build) - factories for constructing module components
- [**Clients**](clients) - client components for working with Lambda AWS
- [**Connect**](connect) - components for installation and connection settings
- [**Container**](containers) - components for container creation for Lambda server-side AWS functions
- [**Count**](count) - components for working with counters (metrics) with data saving in the CloudWatch AWS service
- [**Log**](log) - logging components with saving data in the CloudWatch AWS service
- [**Services**](log) - contains interfaces and classes used to create Lambda services
- [**Test**](test) - contains classes used for automated testing

### Use

Install the dotnet package as
```bash
dotnet add package PipServices3.Aws
```
