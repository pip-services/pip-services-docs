---
type: docs
title: "IQuerablePageReader"
linkTitle: "IQuerablePageReader"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-persistence-python"
description: >
    Interface for data processing components that can query a page of data items.
---

### Description

The IQuerablePageReader interface is used by data processing components that can query a page of data items.

### Instance methods

#### get_page_by_query
Gets a page of data items using a query string.

> get_page_by_query(context: Optional[IContext], query: Optional[str], paging: Optional[[PagingParams](../../../data/query/paging_params)], sort: Optional[[SortParams](../../../data/query/sort_params)] = None): [DataPage](../../../data/query/data_page)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **query**: Optional[str] - (optional) query string
- **paging**: Optional[[PagingParams](../../../data/query/paging_params)] - (optional) paging parameters
- **sort**: Optional[[SortParams](../../../data/query/sort_params)] - (optional) sorting parameters
- **returns**: [DataPage](../../../data/query/data_page) - list of items
