---
type: docs
title: "IQuerableReader<T>"
linkTitle: "IQuerableReader"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-persistence-node"
description: >
    Interface for data processing components that can query a list of data items.
---

### Description

The IQuerableReader interface is used by data processing components that can query a list of data items.

### Instance methods

#### getListByQuery
Gets a list of data items using a query string.

> getListByQuery(correlationId: string, query: string, sort: [SortParams](../../../data/query/sort_params)): Promise\<T[]\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **query**: string - (optional) query string
- **sort**: [SortParams](../../../data/query/sort_params) - (optional) sorting parameters
- **returns**: Promise\<T[]\> - list of items
