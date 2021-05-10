---
type: docs
title: "TestRestClient"
linkTitle: "TestRestClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    REST client used for automated testing.
---

**Implements:** [RestClient](../../clients/rest_client)

### Constructors
TODO add description

> TestRestClient(base_route: str)

- **base_route**: str - TODO add description


### Methods

#### call
Calls a remote method via HTTP/REST protocol.

> call(method: str, route: str, correlation_id: Optional[str] = None, params: Any = None, data: Any = None): Any

- **method**: str - HTTP method: "get", "head", "post", "put", "delete"
- **route**: str - a command route. Base route will be added to this route
- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **params**: Any - (optional) query parameters.
- **data**: Any - (optional) body object.
- **returns**: Any - a result object.

