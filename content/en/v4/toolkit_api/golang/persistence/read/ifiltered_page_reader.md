---
type: docs
title: "IFilteredPageReader"
linkTitle: "IFilteredPageReader"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
description: >
    Interface for data processing components that can retrieve a page of data items by a filter.
---

### Description

The `IFilteredPageReader[T any]` interface is used by data processing components that can retrieve a page of data items through the use of a filter.

- T any type

### Methods

#### GetPageByFilter
Gets a page of data items using filter parameters.

> GetPageByFilter(ctx context.Context, correlation_id string, filter [*data.FilterParams](../../../data/query/filter_params), paging [*data.PagingParams](../../../data/query/paging_params), sort [*data.SortParams](../../../data/query/sort_params)) (page [DataPage[T]](../../../data/query/data_page), err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: [*data.FilterParams](../../../data/query/filter_params) - (optional) filter parameters
- **paging**: [*data.PagingParams](../../../data/query/paging_params) -  (optional) paging parameters
- **sort**: [*data.SortParams](../../../data/query/sort_params) - (optional) sort parameters
- **returns**: (page [DataPage[T]](../../../data/query/data_page), err error) - list of items


