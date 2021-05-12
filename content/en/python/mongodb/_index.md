---
type: docs
title: "MongoDB"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mongodb-python"
no_list: true
description: > 
    MongoDB components for Pip.Services in Python

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit. It provides a set of components to implement MongoDB persistence.
---

### Modules

The module contains the following packages:
- [**Build**](build) - Factory to create MongoDB persistence components.
- [**Connect**](connect) - Connection component to configure MongoDB connection to database.
- [**Persistence**](persistence) - abstract persistence components to perform basic CRUD operations.


### Use

Install the Python package as
```bash
pip install pip_services3_messaging
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