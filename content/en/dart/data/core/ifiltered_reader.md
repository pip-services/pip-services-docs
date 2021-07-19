---
type: docs
title: "IFilteredReader<T>"
linkTitle: "IFilteredReader"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
description: >
    Interface for data processing components that can retrieve a list of data items through the use of a filter.
---

### Description

The IFilteredReader interface is used by data processing components that can retrieve a list of data items through the use of a filter.

### Instance methods

#### getListByFilter
Gets a list of data items using filter parameters.

> Future\<List\<T\>\> getListByFilter(String correlation_id, [FilterParams](../../../commons/data/filter_params) filter, [SortParams](../../../commons/data/sort_params) sort)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: [FilterParams](../../../commons/data/filter_params) - (optional) filter parameters
- **sort**: [SortParams](../../../commons/data/sort_params) - (optional) sort parameters
- **returns**: Future\<List\<T\>\> - list of items

