---
type: docs
title: "HttpResponseSender"
linkTitle: "HttpResponseSender"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Helper class that handles HTTP-based responses.
---

### Description

The HttpResponseSender class allows you to handle HTTP-based responses.

### Static methods

#### SendCreatedResultAsync
Creates a callback function that sends a newly created object as JSON.
This callack function call be called directly or passed
as a parameter to business logic components.

If the object is not null, it returns 201 status code.
For null results, it returns 204 status code.
If an error occurs, it sends ErrorDescription with approproate status code.

> `public static` Task SendCreatedResultAsync(HttpResponse response, object result)

- **response**: HttpResponse - an HTTP request
- **result**: object - an HTTP response


#### SendDeletedResultAsync
Creates a SendDeletedResult function that sends a deleted object as JSON.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not null, it returns 201 status code.
For null results, it returns 204 status code.
If an error occurs, it sends ErrorDescription with the approproate status code.

> `public static` Task SendDeletedResultAsync(HttpResponse response, object result)

- **response**: HttpResponse - an HTTP response.
- **result**: object - execution result


#### SendEmptyResultAsync
Creates a callback function that sends an empty result with 204 status code.
If an error occurs, it sends ErrorDescription with approproate status code.


> `public static` Task SendEmptyResultAsync(HttpResponse response)

- **response**: HttpResponse - an HTTP response


#### SendErrorAsync
Sends an error serialized as ErrorDescription object
and an appropriate HTTP status code.
If status code is not defined, it uses 500 status code.


> `public static` Task SendErrorAsync(HttpResponse response, Exception ex)

- **response**: HttpResponse - an HTTP response
- **ex**: Exception - execution result 


#### SendResultAsync
Creates a callback function that sends a result as a JSON object.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not null, it returns 200 status code.
For null results, it returns 204 status code.
If error occur, it sends ErrorDescription with the approproate status code.


> `public static` Task SendResultAsync(HttpResponse response, object result)

- **response**: HttpResponse - an HTTP response
- **result**: object - execution result 
