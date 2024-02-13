---
type: docs
title: "IQuerablePageReader<T>"
linkTitle: "IQuerablePageReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-persistence-dotnet"
description: >
    Interface for data processing components that can query a page of data items.
---

### Description

The IQuerablePageReader interface is used by data processing components that can query a page of data items.

### Instance methods

#### GetPageByQueryAsync
Gets a page of data items using a query string.

> Task<[DataPage](../../../data/query/data_page)\<T\>> GetPageByQueryAsync(IContext context, string query, [PagingParams](../../../data/query/paging_params) paging, [SortParams](../../../data/query/sort_params) sort)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **query**: string - (optional) query string
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: [SortParams](../../../data/query/sort_params) - (optional) sorting parameters
- **returns**: Task<[DataPage](../../../data/query/data_page)\<T\>> - list of items

