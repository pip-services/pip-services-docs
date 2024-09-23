---
type: docs
title: "AWS module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-aws-java"
no_list: true
weight: 500
description: > 
    Components for supporting work with the AWS cloud platform.
---


### Modules

This module contains the following packages:

- [**Build**](build) - factories for constructing module components
- [**Clients**](clients) - client components for working with Lambda AWS
- [**Connect**](connect) - components for installation and connection settings
- [**Container**](containers) - components for container creation for Lambda server-side AWS functions
- [**Count**](count) - components for working with counters (metrics) with data saving in the CloudWatch AWS service
- [**Log**](log) - logging components with saving data in the CloudWatch AWS service
- [**Controllers**](controllers) - contains interfaces and classes used to create Lambda services
- [**Test**](test) - contains classes used for automated testing

### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-aws</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```

