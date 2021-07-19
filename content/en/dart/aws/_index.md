---
type: docs
title: "AWS module"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-aws-dart"
no_list: true
weight: 30
description: > 
    AWS specific components for Dart  


    This module is part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.

    It contains components for supporting work with the AWS cloud platform.
---


### Modules

This module contains the following packages:

- [**Build**](build) - factories for constructing module components
- [**Clients**](clients) - client components for working with Lambda AWS
- [**Connect**](connect) - components for installation and connection settings
- [**Containers**](containers) - components for container creation for Lambda server-side AWS functions
- [**Count**](count) - components for working with counters (metrics) with data saving in the CloudWatch AWS service
- [**Log**](log) - logging components with saving data in the CloudWatch AWS service


### Warning!

The service is not finished at the moment. Development progress is as follows:
- The components of CloudWatchCounters and CloudWatchLogger are tested and working.
- The components for creating server-side functions for the Lambda service are tested and work, but are not assembled due to the use of dart: mirrors in dart2native. To build in OSs other than Linux, use the docker and the build_lambda.ps1 script.
- The components for creating a client for Lambda services are not fully tested. Requires full testing on AWS.


## Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services3_aws: version
```

Now you can install package from the command line:
```bash
pub get
```
