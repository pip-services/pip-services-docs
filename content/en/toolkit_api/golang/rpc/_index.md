---
type: docs
title: "RPC module"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rpc-go"
no_list: true
weight: 70
description: > 
    Provides synchronous communication using local calls or the HTTP(S) protocol. It contains both server and client side implementations.
---


### Modules

The module contains the following packages:

- [**Auth**](auth) - authentication and authorization components
- [**Build**](build) - HTTP service factory
- [**Clients**](clients) - mechanisms for retrieving connection settings from the microservice’s configuration and providing clients and services with these settings
- [**Connect**](connect) - helper module to retrieve connections for HTTP-based services and clients
- [**Services**](services) - basic implementation of services for connecting via the HTTP/REST protocol and using the Commandable pattern over HTTP

### Use

Get the package from the Github repository:
```bash
go get -u github.com/pip-services3-go/pip-services3-rpc-go@latest
```

TODO: add example