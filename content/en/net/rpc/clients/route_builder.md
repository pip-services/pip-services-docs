---
type: docs
title: "RouteBuilder"
linkTitle: "RouteBuilder"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Route builder helper class to create routes based on input parameters.
---

### Description
The RouteBuilder class allows you to create routes based on input paramters.

**Important points**

- It might be useful in rest clients for microservices built on top of rest operations.


### Instance methods

#### AddParameter
Adds a parameter.

> `public` [RouteBuilder]() AddParameter(string name, string value)

- **name**: string - parameter's name
- **value**: string - parameter's value
- **returns**: [RouteBuilder]() - route builder


#### AddFilterParams
Adds a parameter filter.

> `public` [RouteBuilder]() AddFilterParams([FilterParams](../../../commons/data/filter_params) filter)

- **filter**: [FilterParams](../../../commons/data/filter_params) - (optional) filter
- **returns**: [RouteBuilder]() - route builder


#### AddPagingParams
Adds pagin parameters.

> `public` [RouteBuilder]() AddPagingParams([PagingParams](../../../commons/data/paging_params) paging)

- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **returns**: [RouteBuilder]() - route builder


#### AddSortParams
Adds sorting paramters.

> `public` [RouteBuilder]() AddSortParams([SortParams](../../../commons/data/sort_params) sort)

- **sort**: [SortParams](../../../commons/data/sort_params) - (optional) sorting paramters
- **returns**: [RouteBuilder]() - route builder


#### AddProjectionParams
Adds projection paramters.

> `public` [RouteBuilder]() AddProjectionParams([ProjectionParams](../../../commons/data/projection_params) projection)

- **projection**: [ProjectionParams](../../../commons/data/projection_params) - (optional) projection paramters
- **returns**: [RouteBuilder]() - route builder


#### Build
TODO: add description

> `public` string Build()

- **returns**: string - TODO: add description

### Static methods
Builds and creates a route.

> `public static` [RouteBuilder]() Route(string route)

- **route**: string - created route


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
