---
type: docs
title: "Clients"
linkTitle: "Clients"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-http-dart"
description: >
    This package contains classes used to create different types of clients.
---
---

<div class="module-body"> 

### Classes

#### [CommandableHttpClient](commandable_http_client)
Abstract client that calls a commandable HTTP service.

Commandable services are generated automatically for
[ICommandable](../../rpc/commands/icommandable). 
Each command is exposed as a POST operation that receives all parameters
in the body object.

#### [RestClient](rest_client)
Abstract client that calls remote endpoints using the HTTP/REST protocol.


</div>

