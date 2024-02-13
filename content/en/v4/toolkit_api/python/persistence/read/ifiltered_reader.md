---
type: docs
title: "IFilteredReader"
linkTitle: "IFilteredReader"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-persistence-python"
description: >
    Interface for data processing components that can retrieve a list of data items through the use of a filter.
---

### Description

The IFilteredReader interface is used by data processing components that can retrieve a list of data items through the use of a filter.

### Instance methods

#### get_list_by_filter
Gets a list of data items using filter parameters.

> get_list_by_filter(context: Optional[IContext], filter: Optional[[FilterParams](../../../data/query/filter_params)], paging: Optional[[PagingParams](../../../data/query/paging_params)], sort: Optional[[SortParams](../../../data/query/sort_params)] = None): [DataPage](../../../data/query/data_page)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Optional[[FilterParams](../../../data/query/filter_params)] - (optional) filter parameters
- **sort**: Optional[[SortParams](../../../data/query/sort_params)] - (optional) sort parameters
- **returns**: List[T] - list of items

