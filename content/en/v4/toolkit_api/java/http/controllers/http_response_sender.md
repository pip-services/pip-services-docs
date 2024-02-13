---
type: docs
title: "HttpResponseSender"
linkTitle: "HttpResponseSender"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
description: >
    Helper class that handles HTTP-based responses.
---

### Description

The HttpResponseSender class allows you to handle HTTP-based responses.

### Static methods

#### sendCreatedResult
Creates a callback function that sends a newly created object as JSON.
This callack function call be called directly or passed
as a parameter to business logic components.

If the object is not null, it returns 201 status code.
For null results, it returns 204 status code.
If an error occurs, it sends ErrorDescription with approproate status code.

> `public static` Response sendCreatedResult(Object result)

- **result**: Object - an execution result
- **returns**: Response - response.

#### sendDeletedResult
Creates a sendDeletedResult function that sends a deleted object as JSON.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not null, it returns 201 status code.
For null results, it returns 204 status code.
If an error occurs, it sends ErrorDescription with the approproate status code.

> `public static` Response sendDeletedResult(Object result)

- **result**: Object - an execution result
- **returns**: Response - response.


#### sendEmptyResult
Creates a callback function that sends an empty result with 204 status code.
If an error occurs, it sends ErrorDescription with approproate status code.


> `public static` Response sendEmptyResult()

- **returns**: Response - response.


#### sendError
Sends an error serialized as ErrorDescription object
and an appropriate HTTP status code.
If status code is not defined, it uses 500 status code.


> `public static` Response sendError(Exception ex)

- **ex**: Exception - exception
- **returns**: Response - response.


#### sendResult
Creates a callback function that sends a result as a JSON object.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not null, it returns 200 status code.
For null results, it returns 204 status code.
If error occur, it sends ErrorDescription with the approproate status code.


> `public static` Response sendResult(Object result)

- **result**: Object - an execution result
- **returns**: Response - response.
