---
type: docs
title: "HttpResponseSender"
linkTitle: "HttpResponseSender"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    Helper class that handles HTTP-based responses.
---


### Methods

#### send_created_result
Creates a callback function that sends newly created object as JSON.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not null it returns 201 status code.
For null results it returns 204 status code.
If error occur it sends ErrorDescription with approproate status code.

> `static` send_created_result(result: Any): Optional[str]

- **result**: Any - an execution result
- **return**: Optional[str] - JSON text response


#### send_deleted_result
Creates a callback function that sends newly created object as JSON.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not null it returns 201 status code.
For null results it returns 204 status code.
If error occur it sends ErrorDescription with approproate status code.

> `static` send_deleted_result(result: Any = None): Optional[str]

- **result**: Any - an execution result
- **return**: Optional[str] - JSON text response


#### send_empty_result
Creates a callback function that sends an empty result with 204 status code.
If error occur it sends ErrorDescription with approproate status code.


> `static` send_empty_result(result: Any = None): Optional[str]

- **result**: Any - an execution result 
- **return**: Optional[str] - JSON text response


#### send_error
Sends error serialized as ErrorDescription object
and appropriate HTTP status code.
If status code is not defined, it uses 500 status code.


> `static` send_error(error: Any): str

- **result**: Any - an execution result 
- **return**: Optional[str] - JSON text response


#### send_result
Creates a callback function that sends result as JSON object.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not null it returns 200 status code.
For null results it returns 204 status code.
If error occur it sends ErrorDescription with approproate status code.


> `static` send_result(result: Any): Optional[str]

- **result**: Any - an execution result 
- **return**: Optional[str] - JSON text response
