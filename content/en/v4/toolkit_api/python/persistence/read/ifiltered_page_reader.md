---
type: docs
title: "IFilteredPageReader"
linkTitle: "IFilteredPageReader"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-persistence-python"
description: >
    Interface for data processing components that can retrieve a page of data items by a filter.
---

### Description

The IFilteredPageReader interface is used by data processing components that can retrieve a page of data items through the use of a filter.

### Instance methods

#### get_page_by_filter
Gets a page of data items using filter parameters.

> get_page_by_filter(context: Optional[IContext], filter: Optional[[FilterParams](../../../data/query/filter_params)], paging: Optional[[PagingParams](../../../data/query/paging_params)], sort: Optional[[SortParams](../../../data/query/sort_params)] = None): [DataPage](../../../data/query/data_page)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Optional[[FilterParams](../../../data/query/filter_params)] - (optional) filter parameters
- **paging**: Optional[[PagingParams](../../../data/query/paging_params)] -  (optional) paging parameters
- **sort**: Optional[[SortParams](../../../data/query/sort_params)] - (optional) sort parameters
- **returns**: [DataPage](../../../data/query/data_page) - list of items

