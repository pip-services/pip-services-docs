---
type: docs
title: "TestRestClient"
linkTitle: "TestRestClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    REST client used for automated testing.
---

**Implements:** [RestClient](../../clients/rest_client)

### Description

The TestRestClient class allows you to create a REST client that can be used for automated testing.

### Constructors
Creates a new instance of the TestRestClient class.

> TestRestClient(base_route: str)

- **base_route**: str - base route to the REST client.


### Instance methods

#### _call
Calls a remote method via the HTTP/REST protocol.

> call(method: str, route: str, correlation_id: Optional[str] = None, params: Any = None, data: Any = None): Any

- **method**: str - HTTP method: "get", "head", "post", "put", "delete"
- **route**: str - command route. The base route will be added to this route
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **params**: Any - (optional) query parameters.
- **data**: Any - (optional) body object.
- **returns**: Any - result object.

