---
type: docs
title: "IFilteredPageReader<T>"
linkTitle: "IFilteredPageReader"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-persistence-java"
description: >
    Interface for data processing components that can retrieve a page of data items by a filter.
---

### Description

The IFilteredPageReader interface is used by data processing components that can retrieve a page of data items through the use of a filter.

### Instance methods

#### getPageByFilter
Gets a page of data items using filter parameters.

>[DataPage](../../../data/query/data_page) getPageByFilter([IContext](../../../components/context/icontext) context, [FilterParams](../../../data/query/filter_params) filter, [PagingParams](../../../data/query/paging_params) paging, [SortParams](../../../data/query/sort_params) sort) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: [FilterParams](../../../data/query/filter_params) - (optional) filter parameters
- **paging**: [PagingParams](../../../data/query/paging_params) -  (optional) paging parameters
- **sort**: [SortParams](../../../data/query/sort_params) - (optional) sort parameters
- **returns**: [DataPage](../../../data/query/data_page)\<T\> - list of items

