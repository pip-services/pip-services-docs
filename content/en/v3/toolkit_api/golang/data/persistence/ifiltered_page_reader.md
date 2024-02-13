---
type: docs
title: "IFilteredPageReader"
linkTitle: "IFilteredPageReader"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-data-gox"
description: >
    Interface for data processing components that can retrieve a page of data items by a filter.
---

### Description

The `IFilteredPageReader[T any]` interface is used by data processing components that can retrieve a page of data items through the use of a filter.

- T any type

### Methods

#### GetPageByFilter
Gets a page of data items using filter parameters.

> GetPageByFilter(ctx context.Context, correlation_id string, filter [*data.FilterParams](../../../commons/data/filter_params), paging [*data.PagingParams](../../../commons/data/paging_params), sort [*data.SortParams](../../../commons/data/sort_params)) (page [DataPage[T]](../../../commons/data/data_page), err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: [*data.FilterParams](../../../commons/data/filter_params) - (optional) filter parameters
- **paging**: [*data.PagingParams](../../../commons/data/paging_params) -  (optional) paging parameters
- **sort**: [*data.SortParams](../../../commons/data/sort_params) - (optional) sort parameters
- **returns**: (page [DataPage[T]](../../../commons/data/data_page), err error) - list of items

