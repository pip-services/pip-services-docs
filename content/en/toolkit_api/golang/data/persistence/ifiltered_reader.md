---
type: docs
title: "IFilteredReader"
linkTitle: "IFilteredReader"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-data-gox"
description: >
    Interface for data processing components that can retrieve a list of data items through the use of a filter.
---

### Description

The `IFilteredReader[T any]` interface is used by data processing components that can retrieve a list of data items through the use of a filter.

- T any type

### Methods

#### GetListByFilter
Gets a list of data items using filter parameters.

> GetListByFilter(ctx context.Context, correlation_id string, filter [*data.FilterParams](../../../commons/data/filter_params), sort [*data.SortParams](../../../commons/data/sort_params)) (items []T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: [*data.FilterParams](../../../commons/data/filter_params) - (optional) filter parameters
- **sort**: [*data.SortParams](../../../commons/data/sort_params) - (optional) sort parameters
- **returns**: (items []T, err error) - list of items

