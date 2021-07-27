---
type: docs
title: "TestRestClient"
linkTitle: "TestRestClient"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    REST client used for automated testing.
---

**Inherits:** [RestClient](../../clients/rest_client)

### Description

The TestRestClient class allows you to create a REST client that can be used for automated testing.

### Constructors
Creates a new instance of the TestRestClient class.

> `public new` TestRestClient(string baseRoute)

- **baseRoute**: string - base route to the REST client.


### Instance methods

#### CallAsync
Calls a remote method via the HTTP/REST protocol.

> `public new` Task CallAsync(string correlationId, HttpMethod method, string route)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. The base route will be added to this route


> `public new` Task CallAsync(string correlationId, HttpMethod method, string route, object requestEntity)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. The base route will be added to this route.
- **requestEntity**: object - request body object.


> `public new` Task\<T\> CallAsync\<T\>(string correlationId, HttpMethod method, string route)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. The base route will be added to this route.
- **returns**: Task\<T\> - result object.



> `public new` Task\<T\> CallAsync\<T\>(string correlationId, HttpMethod method, string route, object requestEntity)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. The base route will be added to this route.
- **requestEntity**: object - request body object.
- **returns**: Task\<T\> - result object.

#### SafeCallAsync
Safely calls a remote method via HTTP/REST protocol and logs execution time.

> `public new` Task\<T\> SafeCallAsync\<T\>(string correlationId, HttpMethod method, string route, object requestEntity)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete".
- **route**: string - a command route. Base route will be added to this route.
- **requestEntity**: object - request body object.
- **returns**: Task\<T\> - result object.


> `public new` Task\<T\> SafeCallAsync\<T\>(string correlationId, HttpMethod method, string route)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **method**: HttpMethod - HTTP method: "get", "head", "post", "put", "delete".
- **route**: string - a command route. Base route will be added to this route.
- **returns**: Task\<T\> - result object.


