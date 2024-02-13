---
type: docs
title: "IQuerableReader"
linkTitle: "IQuerableReader"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-data-gox"
description: >
    Interface for data processing components that can query a list of data items.
---

### Description

The `IQuerableReader[T any]` interface is used by data processing components that can query a list of data items.

- T any type


### Methods

#### GetListByQuery
Gets a list of data items using a query string.

> GetListByQuery(ctx context.Context, correlation_id string, query string, sort [*data.SortParams](../../../commons/data/sort_params)) (items []T, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **query**: string - (optional) query string
- **sort**: [*data.SortParams](../../../commons/data/sort_params) - (optional) sorting parameters
- **returns**: (items []T, err error) - list of items
