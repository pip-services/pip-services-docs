---
type: docs
title: "IQuerableReader<T>"
linkTitle: "IQuerableReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-persistence-dotnet"
description: >
    Interface for data processing components that can query a list of data items.
---

### Description

The IQuerableReader interface is used by data processing components that can query a list of data items.

### Instance methods

#### getListByQuery
Gets a list of data items using a query string.

> Task\<List\<T\>\> GetListByQueryAsync(IContext context, string query, [SortParams](../../../data/query/sort_params) sort)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **query**: string - (optional) query string
- **sort**: [SortParams](../../../data/query/sort_params) - (optional) sorting parameters
- **returns**: Task\<List\<T\>\> - list of items

