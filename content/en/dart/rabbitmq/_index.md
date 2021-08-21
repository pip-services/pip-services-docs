---
type: docs
title: "RabbitMQ module"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rabbitmq-dart"
no_list: true
weight: 30
description: > 
    RabbitMQ specific components for Dart  

    This library is a part of [Pip.Services](https://www.pipservices.org/) project.
    The RabbitMQ module contains a set of components for working with the message queue in RabbitMQ through the AMQP protocol.
---

### Packages

The module contains the following packages:
- [**Build**](build) - Factory for constructing module components
- [**Connect**](connect) - Message Queuing components that implement the standard [Messaging](https://github.com/pip-services3-dart/pip-services3-messaging-dart) module interface
- [**Queues**](queues) - components for working with a message queue via the RabbitMQ protocol


### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services3_rabbitmq: version
```

Now you can install package from the command line:
```bash
pub get
```
