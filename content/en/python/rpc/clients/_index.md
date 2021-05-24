---
type: docs
title: "Clients"
linkTitle: "Clients"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    This package contains classes used to create 
---
---

<div class="module-body"> commandable HTTP services and different types of clients.

### Classes

#### [CommandableHttpClient](commandable_http_client)
Abstract client that calls commandable HTTP service.

Commandable services are generated automatically for
[ICommandable](../../commons/commands/icommandable)
Each command is exposed as POST operation that receives all parameters
in body object.


#### [DirectClient](direct_client)
Abstract client that calls controller directly in the same memory space.

It is used when multiple microservices are deployed in a single container (monolyth)
and communication between them can be done by direct calls rather then through 
the network.


#### [RestClient](rest_client)
Abstract client that calls remove endpoints using HTTP/REST protocol.


</div>
