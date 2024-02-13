---
type: docs
title: "IFilteredReader<T>"
linkTitle: "IFilteredReader"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-persistence-node"
description: >
    Interface for data processing components that can retrieve a list of data items through the use of a filter.
---

### Description

The IFilteredReader interface is used by data processing components that can retrieve a list of data items through the use of a filter.

### Instance methods

#### getListByFilter
Gets a list of data items using filter parameters.

> getListByFilter(context: [IContext](../../../components/context/icontext), filter: [FilterParams](../../../data/query/filter_params), paging: [PagingParams](../../../data/query/paging_params), sort: [SortParams](../../../data/query/sort_params)): [DataPage](../../../data/query/data_page)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: [FilterParams](../../../data/query/filter_params) - (optional) filter parameters
- **sort**: [SortParams](../../../data/query/sort_params) - (optional) sort parameters
- **returns**: Promise\<T[]\> - list of items

