---
type: docs
title: "AzureFunctionResponseSender"
linkTitle: "AzureFunctionResponseSender"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-azure-dotnet"
description: >
    Contains methods used to get correlationIds, commands and bodies from the Azure Function request.
---

### Description

The AzureFunctionResponseSender class contains methods used to get correlationIds, commands and bodies from the Azure Function request.


### Static methods

#### SendErrorAsync
Extracts parameter from query by name

> `public static` IActionResult SendErrorAsync(Exception ex)

- **ex**: Exception - the error being sent.
- **returns**: IActionResult - result of send operation.

#### SendResultAsync
Read body from request

> `public static` IActionResult SendResultAsync(object result)

- **result**: object - a body object to result.
- **returns**: IActionResult - result of send operation.

#### SendEmptyResultAsync
Sends an empty result with 204 status code.
If error occur it sends ErrorDescription with approproate status code.

> `public static` IActionResult SendEmptyResultAsync(object result)

- **result**: object - a body object to result.
- **returns**: IActionResult - result of send operation.

#### SendCreatedResultAsync
Sends newly created object as JSON. 
That be called directly or passed as a parameter to business logic components.

If object is not null it returns 201 status code. For null results it returns
204 status code. If error occur it sends ErrorDescription with approproate status code.

> `public static` IActionResult SendCreatedResultAsync(object result)

- **result**: object - a body object to created result.
- **returns**: IActionResult - result of send operation.

#### SendDeletedResultAsync
Creates a callback function that sends deleted object as JSON. That callack
function call be called directly or passed as a parameter to business logic components.

If object is not null it returns 200 status code. For null results it returns
204 status code. If error occur it sends ErrorDescription with approproate status code.

> `public static` IActionResult SendDeletedResultAsync(object result)

- **result**: object - a body object to deleted result.
- **returns**: IActionResult - result of send operation.