---
type: docs
title: "IQuerablePageReader<T>"
linkTitle: "IQuerablePageReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-persistence-dart"
description: >
    Interface for data processing components that can query a page of data items.
---

### Description

The IQuerablePageReader interface is used by data processing components that can query a page of data items.

### Instance methods

#### getPageByQuery
Gets a page of data items using a query string.

> Future<[DataPage](../../../data/query/data_page)\<T\>> getPageByQuery(IContext? context, String? query, [PagingParams?](../../../data/query/paging_params) paging, [SortParams?](../../../data/query/sort_params) sort)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **query**: String? - (optional) query string
- **paging**: [PagingParams?](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: [SortParams?](../../../data/query/sort_params) - (optional) sorting parameters
- **returns**: Future<[DataPage](../../../data/query/data_page)\<T\>> - list of items
