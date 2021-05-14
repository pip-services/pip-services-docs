---
type: docs
title: "Messaging"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
no_list: true
description: > 
    Asynchronous Messaging for Pip.Services in Python

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    The Messaging module contains a set of interfaces and classes for working with message queues, as well as an in-memory message queue implementation. 
---

### Modules

The module contains the following packages:

- [**Build**](build) - in-memory message queue factory
- [**Queues**](queues) - contains interfaces for working with message queues, subscriptions for receiving messages from the queue, and an in-memory message queue implementation.
- [**Connect**](connect) - TODO: add description


### Use

Install the Python package as
```bash
pip install pip-services3-messaging
```

### Develop

For development you shall install the following prerequisites:
* Python 3.7+
* Visual Studio Code or another IDE of your choice
* Docker

Install dependencies:
```bash
pip install -r requirements.txt
```

Run automated tests:
```bash
python test.py
```

Generate API documentation:
```bash
./docgen.ps1
```

Before committing changes run dockerized build and test as:
```bash
./build.ps1
./test.ps1
./clear.ps1
```

### Contacts

The Python version of Pip.Services is created and maintained by:
- **Sergey Seroukhov**
- **Danil Prisiazhnyi**