---
type: docs
title: "IQuerableReader"
linkTitle: "IQuerableReader"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
description: >
    Interface for data processing components that can query a list of data items.
---

### Description

The `IQuerableReader[T any]` interface is used by data processing components that can query a list of data items.

- T any type


### Methods

#### GetListByQuery
Gets a list of data items using a query string.

> GetListByQuery(ctx context.Context, context [IContext](../../../components/context/icontext), query string, sort [*data.SortParams](../../../data/query/sort_params)) (items []T, err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **query**: string - (optional) query string
- **sort**: [*data.SortParams](../../../data/query/sort_params) - (optional) sorting parameters
- **returns**: (items []T, err error) - list of items

