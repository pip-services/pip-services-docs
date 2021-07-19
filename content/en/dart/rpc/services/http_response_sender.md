---
type: docs
title: "HttpResponseSender"
linkTitle: "HttpResponseSender"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
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

> static void sendCreatedResult(angel.RequestContext req, angel.ResponseContext res, err, result)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **err**: dynamic - execution error
- **result**: dynamic - execution result


#### sendDeletedResult
Creates a sendDeletedResult function that sends a deleted object as JSON.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not null, it returns 201 status code.
For null results, it returns 204 status code.
If an error occurs, it sends ErrorDescription with the approproate status code.

> `static` void sendDeletedResult(angel.RequestContext req, angel.ResponseContext res, err, result)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **err**: dynamic - execution error
- **result**: dynamic - an execution result


#### sendEmptyResult
Creates a callback function that sends an empty result with 204 status code.
If an error occurs, it sends ErrorDescription with approproate status code.


> `static` void sendEmptyResult(angel.RequestContext req, angel.ResponseContext res, err)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **err**: dynamic - an execution error


#### sendError
Sends an error serialized as ErrorDescription object
and an appropriate HTTP status code.
If status code is not defined, it uses 500 status code.


> `static` void sendError(angel.RequestContext req, angel.ResponseContext res, error)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **err**: dynamic - an execution error


#### sendResult
Creates a callback function that sends a result as a JSON object.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not null, it returns 200 status code.
For null results, it returns 204 status code.
If error occur, it sends ErrorDescription with the approproate status code.


> static void sendResult(angel.RequestContext req, angel.ResponseContext res, err, result)

- **req**: angel.RequestContext - an HTTP request context
- **res**: angel.ResponseContext - an HTTP response context
- **err**: dynamic - an execution error
- **result**: dynamic - execution result 
