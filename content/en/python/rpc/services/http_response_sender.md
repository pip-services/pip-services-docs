---
type: docs
title: "HttpResponseSender"
linkTitle: "HttpResponseSender"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    Helper class that handles HTTP-based responses.
---

### Description

The HttpResponseSender class allows you to handle HTTP-based responses.

### Static methods

#### send_created_result
Creates a callback function that sends a newly created object as JSON.
This callack function call be called directly or passed
as a parameter to business logic components.

If the object is not None, it returns 201 status code.
For None results, it returns 204 status code.
If an error occurs, it sends ErrorDescription with approproate status code.

> `static` send_created_result(result: Any): Optional[str]

- **result**: Any - an execution result
- **return**: Optional[str] - JSON text response


#### send_deleted_result
Creates a callback function that sends a deleted object as JSON.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not None, it returns 201 status code.
For None results, it returns 204 status code.
If an error occurs, it sends ErrorDescription with approproate status code.

> `static` send_deleted_result(result: Any = None): Optional[str]

- **result**: Any - an execution result
- **return**: Optional[str] - JSON text response


#### send_empty_result
Creates a callback function that sends an empty result with 204 status code.
If an error occurs, it sends ErrorDescription with approproate status code.


> `static` send_empty_result(result: Any = None): Optional[str]

- **result**: Any - an execution result 
- **return**: Optional[str] - JSON text response


#### send_error
Sends an error serialized as ErrorDescription object
and an appropriate HTTP status code.
If status code is not defined, it uses 500 status code.


> `static` send_error(error: Any): str

- **result**: Any - an execution result 
- **return**: Optional[str] - JSON text response


#### send_result
Creates a callback function that sends a result as a JSON object.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not None, it returns 200 status code.
For None results, it returns 204 status code.
If error occur, it sends ErrorDescription with approproate status code.


> `static` send_result(result: Any): Optional[str]

- **result**: Any - an execution result 
- **return**: Optional[str] - JSON text response
