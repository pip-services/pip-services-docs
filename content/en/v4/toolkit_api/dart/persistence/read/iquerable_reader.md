---
type: docs
title: "IQuerableReader<T>"
linkTitle: "IQuerableReader"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-persistence-dart"
description: >
    Interface for data processing components that can query a list of data items.
---

### Description

The IQuerableReader interface is used by data processing components that can query a list of data items.

### Instance methods

#### getListByQuery
Gets a list of data items using a query string.

> Future\<List\<T\>\> getListByQuery(IContext? context, String? query, [SortParams?](../../../data/query/sort_params) sort)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **query**: String? - (optional) query string
- **sort**: [SortParams?](../../../data/query/sort_params) - (optional) sorting parameters
- **returns**: Future\<List\<T\>\> - list of items
