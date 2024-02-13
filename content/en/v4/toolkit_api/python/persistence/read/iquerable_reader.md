---
type: docs
title: "IQuerableReader"
linkTitle: "IQuerableReader"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-persistence-python"
description: >
    Interface for data processing components that can query a list of data items.
---

### Description

The IQuerableReader interface is used by data processing components that can query a list of data items.

### Instance methods

#### get_list_by_query
Gets a list of data items using a query string.

> get_list_by_query(context: Optional[IContext], query: Optional[str], sort: Optional[[SortParams](../../../data/query/sort_params)] = None): List[Any]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **query**: Optional[str] - (optional) query string
- **sort**: Optional[[SortParams](../../../data/query/sort_params)] - (optional) sorting parameters
- **returns**: List[T] - list of items
