---
type: docs
title: "HttpRequestHelper"
linkTitle: "HttpRequestHelper"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Helper class that handles HTTP-based requests.
---

### Description

The HttpRequestHelper class is used to handle HTTP-based requests.

### Static methods

#### GetCorrelationId
Gets the correlationId. 

> `public static` string GetCorrelationId(HttpRequest request)

- **request**: HttpRequest - HTTP request to process.
- **returns**: string - TODO: correlationId or null if not found.

#### GetFilterParams
Gets the filter parameters

> `public static` [FilterParams](../../../commons/data/filter_params) GetFilterParams(HttpRequest request)

- **request**: HttpRequest - HTTP request to process.
- **returns**: [FilterParams](../../../commons/data/filter_params) - filter parameters.


#### GetPagingParams
Gets the paging paramters

> `public static` [PagingParams](../../../commons/data/paging_params) GetPagingParams(HttpRequest request)

- **request**: HttpRequest - HTTP request to process.
- **returns**: [PagingParams](../../../commons/data/paging_params) - paging paramters

#### GetParameters
Gets the paramters from an Http request.

> `public static` [RestOperationParameters](../rest_operation_parameters) GetParameters(HttpRequest request)

- **request**: HttpRequest - HTTP request to process.
- **returns**: [RestOperationParameters](../rest_operation_parameters) - parameters.

#### GetSortParams
Gets sort parameters.

> `public static` [SortParams](../../../commons/data/sort_params) GetSortParams(HttpRequest request)

- **request**: HttpRequest - HTTP request to process.
- **returns**: [SortParams](../../../commons/data/sort_params) - sort parameters.

#### GetContextItem
Gets a context item.

> `public static` T GetContextItem\<T\>(HttpRequest request, string name)

- **request**: HttpRequest - HTTP request to process.
- **name**: string - name of context item
- **returns**: T - value of context item or null otherwise.

#### ExtractFromQuery
Gets a parameter from a query.

> `public static` string ExtractFromQuery(string parameter, HttpRequest request)

- **parameter**: string - parameter
- **request**: HttpRequest - HTTP request to process.
- **returns**: [RestOperationParameters](../rest_operation_parameters) - parameter or empty string.
