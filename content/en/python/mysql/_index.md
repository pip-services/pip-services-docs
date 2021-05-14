---
type: docs
title: "MySQL"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mysql-python"
no_list: true
description: > 
    MySQL components for Python

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
---

### Packages

The module contains the following packages:
- [**Build**](build) - a standard factory for constructing components
- [**Connect**](connect) - instruments for configuring connections to the database.
- [**Persistence**](persistence) - abstract classes for working with the database that can be used for connecting to collections and performing basic CRUD operations


### Use

Install the Python package as
```bash
pip install pip-services3-mysql
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

The library is created and maintained by:
- **Sergey Seroukhov**
- **Danil Prisiazhnyi**

The documentation is written by **Mark Makarychev**.
