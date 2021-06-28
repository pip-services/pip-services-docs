---
type: docs
title: "RouteBuilder"
linkTitle: "RouteBuilder"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Route builder helper class to create route based on input parameters.
---

### Description

It might be useful in rest clients for microservices built on top of rest operations.


### Instance methods

#### AddParameter
TODO: add description

> `public` [RouteBuilder]() AddParameter(string name, string value)

- **name**: string - TODO: add description
- **value**: string - (optional) TODO: add description
- **returns**: [RouteBuilder]() - TODO: add description


#### AddFilterParams
TODO: add description

> `public` [RouteBuilder]() AddFilterParams([FilterParams](../../../commons/data/filter_params) filter)

- **filter**: [FilterParams](../../../commons/data/filter_params) - (optional) TODO: add description
- **returns**: [RouteBuilder]() - TODO: add description


#### AddPagingParams
TODO: add description

> `public` [RouteBuilder]() AddPagingParams([PagingParams](../../../commons/data/paging_params) paging)

- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) TODO: add description
- **returns**: [RouteBuilder]() - TODO: add description


#### AddSortParams
TODO: add description

> `public` [RouteBuilder]() AddSortParams([SortParams](../../../commons/data/sort_params) sort)

- **sort**: [SortParams](../../../commons/data/sort_params) - (optional) TODO: add description
- **returns**: [RouteBuilder]() - TODO: add description


#### AddProjectionParams
TODO: add description

> `public` [RouteBuilder]() AddProjectionParams([ProjectionParams](../../../commons/data/projection_params) projection)

- **projection**: [ProjectionParams](../../../commons/data/projection_params) - (optional) TODO: add description
- **returns**: [RouteBuilder]() - TODO: add description


#### Build
TODO: add description

> `public` string Build()

- **returns**: string - TODO: add description

### Static methods
TODO: add description

> `public static` [RouteBuilder]() Route(string route)

- **route**: string - TODO: add description


### Examples

```cs
var route = RouteBuilder
    .Route("get_dummies")
    .AddFilterParams(filter)
    .AddPagingParams(paging)
    .AddSortParams(sort)
    .Build()
...
```
