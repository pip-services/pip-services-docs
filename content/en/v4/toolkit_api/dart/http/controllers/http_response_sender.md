---
type: docs
title: "HttpResponseSender"
linkTitle: "HttpResponseSender"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-http-dart"
description: >
    Helper class that handles HTTP-based responses.
---

### Description

The HttpResponseSender class allows you to handle HTTP-based responses.

### Static methods

#### sendCreatedResult
Creates a callback function that sends a newly created object as JSON.
This callack function can be called directly or passed
as a parameter to business logic components.

If the object is not null, it returns 201 status code.
For null results, it returns 204 status code.
If an error occurs, it sends ErrorDescription with approproate status code.

> static FutureOr\<Response\> sendCreatedResult(shelf.Request req, err, result)

- **req**: angel.RequestContext - HTTP request context
- **err**: dynamic - execution error
- **result**: dynamic - execution result
- **returns**: FutureOr\<Response\> - HTTP response context


#### sendDeletedResult
Creates a sendDeletedResult function that sends a deleted object as JSON.
That callack function can be called directly or passed
as a parameter to business logic components.

If object is not null, it returns 201 status code.
For null results, it returns 204 status code.
If an error occurs, it sends ErrorDescription with the approproate status code.

> `static` FutureOr\<Response\> sendDeletedResult(shelf.Request req, err, result)

- **req**: angel.RequestContext - HTTP request context
- **err**: dynamic - execution error
- **result**: dynamic - execution result
- **returns**: FutureOr\<Response\> - HTTP response context


#### sendEmptyResult
Creates a callback function that sends an empty result with 204 status code.
If an error occurs, it sends ErrorDescription with approproate status code.


> `static` FutureOr\<Response\> sendEmptyResult(shelf.Request req, err)

- **req**: angel.RequestContext - HTTP request context
- **err**: dynamic - execution error
- **returns**: FutureOr\<Response\> - HTTP response context


#### sendError
Sends an error serialized as ErrorDescription object
and an appropriate HTTP status code.
If status code is not defined, it uses 500 status code.


> `static` FutureOr\<Response\> sendError(shelf.Request req, error)

- **req**: angel.RequestContext - an HTTP request context
- **err**: dynamic - an execution error
- **returns**: FutureOr\<Response\> - an HTTP response context


#### sendResult
Creates a callback function that sends a result as a JSON object.
That callack function can be called directly or passed
as a parameter to business logic components.

If object is not null, it returns 200 status code.
For null results, it returns 204 status code.
If error occur, it sends ErrorDescription with the approproate status code.


> static FutureOr\<Response\> sendResult(shelf.Request req, err, result)

- **req**: angel.RequestContext - HTTP request context
- **err**: dynamic - execution error
- **result**: dynamic - execution result 
- **returns**: FutureOr\<Response\> - HTTP response context
