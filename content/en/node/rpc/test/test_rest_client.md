---
type: docs
title: "TestRestClient"
linkTitle: "TestRestClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
description: >
    REST client used for automated testing.
---

**Extends:** [RestClient](../../clients/rest_client)

### Description

The TestRestClient class allows you to create a REST client that can be used for automated testing.

### Constructors
Creates a new instance of the TestRestClient class.

> `public` constructor(baseRoute: string)

- **baseRoute**: string - base route to the REST client.


### Instance methods

#### call
Calls a remote method via the HTTP/REST protocol.

> `public` call\<T\>(method: string, route: string, correlationId?: string, params: any = {}, data?: any): Promise\<T\>

- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. The base route will be added to this route
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **params**: Any - (optional) query parameters.
- **data**: Any - (optional) body object.
- **returns**: Promise\<T\> - result object.

