---
type: docs
title: "Messaging module"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-messaging-dart"
no_list: true
weight: 30
description: > 
    Asynchronous Messaging for Pip.Services in Dart  

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    The Messaging module contains a set of interfaces and classes for working with message queues, as well as an in-memory message queue implementation. 
---

### Modules

The module contains the following packages:

- [**Build**](build) - in-memory message queue factory
- [**Queues**](queues) - contains interfaces for working with message queues, subscriptions for receiving messages from the queue, and an in-memory message queue implementation.
- [**Connect**](connect) - TODO: add description
- [**Test**](test) - TODO: add description

### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services3_messaging: version
```

Now you can install package from the command line:
```bash
pub get
```
