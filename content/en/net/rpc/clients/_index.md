---
type: docs
title: "Clients"
linkTitle: "Clients"
no_list: true
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    This package contains classes used to create different types of clients.
---
---

<div class="module-body"> 

### Classes

#### [CommandableHttpClient](commandable_http_client)
Abstract client that calls a commandable HTTP service.

Commandable services are generated automatically for
[ICommandable](../../commons/commands/icommandable). 
Each command is exposed as a POST operation that receives all parameters
in the body object.


#### [DirectClient](direct_client)
Abstract client that calls a controller directly in the same memory space.

It is used when multiple microservices are deployed in a single container (monolyth)
and communication between them can be done by direct calls rather than through 
the network.


#### [RestClient](rest_client)
Abstract client that calls remote endpoints using the HTTP/REST protocol.


#### [RouteBuilder](route_builder)
Route builder helper class to create routes based on input parameters.


</div>
