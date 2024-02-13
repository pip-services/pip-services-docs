---
type: docs
title: "IQuerablePageReader"
linkTitle: "IQuerablePageReader"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
description: >
    Interface for data processing components that can query a page of data items.
---

### Description

The `IQuerablePageReader[T any]` interface is used by data processing components that can query a page of data items.

- T any type

### Methods

#### GetPageByQuery
Gets a page of data items using a query string.

> GetPageByQuery(ctx context.Context, context [IContext](../../../components/context/icontext), query string, paging [*data.PagingParams](../../../data/query/paging_params), sort [*data.SortParams](../../../data/query/sort_params)) (page [DataPage[T]](../../../data/query/data_page), err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **query**: string - (optional) query string
- **paging**: [*data.PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: [*data.SortParams](../../../data/query/sort_params) - (optional) sorting parameters
- **returns**: (page [DataPage[T]](../../../data/query/data_page), err error) - list of items

