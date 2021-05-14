---
type: docs
title: "RPC"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
no_list: true
description: > 
    Remote Procedure Calls for Pip.Services in Python 


    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.


    The rpc module provides the synchronous communication using local calls or the HTTP(S) protocol. It contains both server and client side implementations.
---


### Modules

The module contains the following packages:

- [**Auth**](auth) - authentication and authorization components
- [**Build**](build) - HTTP service factory
- [**Clients**](clients) - mechanisms for retrieving connection settings from the microservice’s configuration and providing clients and services with these settings
- [**Connect**](connect) - helper module to retrieve connections for HTTP-based services and clients
- [**Services**](services) - basic implementation of services for connecting via the HTTP/REST protocol and using the Commandable pattern over HTTP
- [**Test**](test) - TODO add description


### Use

Install the Python package as
```bash
pip install pip-services3-rpc
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

The Python version of Pip.Services is created and maintained by
- **Sergey Seroukhov**
- **Danil Prisiazhnyi**