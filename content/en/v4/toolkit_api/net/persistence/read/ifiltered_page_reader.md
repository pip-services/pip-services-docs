---
type: docs
title: "IFilteredPageReader<T>"
linkTitle: "IFilteredPageReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-persistence-dotnet"
description: >
    Interface for data processing components that can retrieve a page of data items by a filter.
---

### Description

The IFilteredPageReader interface is used by data processing components that can retrieve a page of data items through the use of a filter.

### Instance methods

#### GetPageByFilterAsync
Gets a page of data items using filter parameters.

> Task\<[DataPage](../../../data/query/data_page)\<T\>\> GetPageByFilterAsync(IContext context, [FilterParams](../../../net/data/query/filter_params) filter, [PagingParams](../../../data/query/paging_params) paging, [SortParams](../../../commons/data/sort_params) sort)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: [FilterParams](../../../net/data/query/filter_params) - (optional) filter parameters
- **paging**: [PagingParams](../../../data/query/paging_params) -  (optional) paging parameters
- **sort**: [SortParams](../../../data/query/sort_params) - (optional) sort parameters
- **returns**: Task\<[DataPage](../../../data/query/data_page)\<T\>\> - list of items


