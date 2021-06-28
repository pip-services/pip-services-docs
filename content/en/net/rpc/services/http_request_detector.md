---
type: docs
title: "HttpRequestHelper"
linkTitle: "HttpRequestHelper"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Helper class that handles HTTP-based requests.
---

### Description

TODO: add description

### Static methods

#### GetCorrelationId
TODO: add description

> `public static` string GetCorrelationId(HttpRequest request)

- **request**: HttpRequest - HTTP request to process.
- **returns**: string - TODO: add description


#### GetFilterParams
TODO: add description

> `public static` [FilterParams](../../../commons/data/filter_params) GetFilterParams(HttpRequest request)

- **request**: HttpRequest - HTTP request to process.
- **returns**: [FilterParams](../../../commons/data/filter_params) - TODO: add description


#### GetPagingParams
TODO: add description

> `public static` [PagingParams](../../../commons/data/paging_params) GetPagingParams(HttpRequest request)

- **request**: HttpRequest - HTTP request to process.
- **returns**: [PagingParams](../../../commons/data/paging_params) - TODO: add description


#### GetParameters
TODO: add description

> `public static` [RestOperationParameters](../rest_operation_parameters) GetParameters(HttpRequest request)

- **request**: HttpRequest - HTTP request to process.
- **returns**: [RestOperationParameters](../rest_operation_parameters) - TODO: add description

#### GetSortParams
TODO: add description

> `public static` [SortParams](../../../commons/data/sort_params) GetSortParams(HttpRequest request)

- **request**: HttpRequest - HTTP request to process.
- **returns**: [SortParams](../../../commons/data/sort_params) - TODO: add description

#### GetContextItem
TODO: add description

> `public static` T GetContextItem\<T\>(HttpRequest request, string name)

- **request**: HttpRequest - HTTP request to process.
- **name**: string - TODO: add description
- **returns**: T - TODO: add description

#### ExtractFromQuery
TODO: add description

> `public static` string ExtractFromQuery(string parameter, HttpRequest request)

- **parameter**: string - TODO: add description
- **request**: HttpRequest - HTTP request to process.
- **returns**: [RestOperationParameters](../rest_operation_parameters) - TODO: add description