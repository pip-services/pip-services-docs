---
type: docs
title: "Redis module"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-redis-dart"
no_list: true
weight: 30
description: > 
    Redis components for Pip.Services in Dart 

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.

    It contains packages for working with a Redis database of type key-value. 
---

### Packages

The module contains the following packages:
- [**Build**](build) - factory to create Redis components by their descriptors.
- [**Cache**](cache) - Redis Cache Components
- [**Lock**](lock) - components for working with locks in Redis


### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services3_redis: version
```

Now you can install the package from the command line:
```bash
pub get
```
