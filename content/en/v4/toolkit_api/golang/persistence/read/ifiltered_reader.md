---
type: docs
title: "IFilteredReader"
linkTitle: "IFilteredReader"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
description: >
    Interface for data processing components that can retrieve a list of data items through the use of a filter.
---

### Description

The `IFilteredReader[T any]` interface is used by data processing components that can retrieve a list of data items through the use of a filter.

- T any type

### Methods

#### GetListByFilter
Gets a list of data items using filter parameters.

> GetListByFilter(ctx context.Context, context_id [IContext](../../../components/context/icontext), filter [*data.FilterParams](../../../data/query/filter_params), sort [*data.SortParams](../../../data/query/sort_params)) (items []T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: [*data.FilterParams](../../../data/query/filter_params) - (optional) filter parameters
- **sort**: [*data.SortParams](../../../data/query/sort_params) - (optional) sort parameters
- **returns**: (items []T, err error) - list of items


