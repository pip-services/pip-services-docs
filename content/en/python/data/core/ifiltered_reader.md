---
type: docs
title: "IFilteredReader"
linkTitle: "IFilteredReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components that can retrieve a list of data items through the use of a filter.
---

### Description

The IFilteredReader interface is used by data processing components that can retrieve a list of data items through the use of a filter.

### Instance methods

#### get_list_by_filter
Gets a list of data items using filter parameters.

> get_list_by_filter(correlation_id: Optional[str], filter: Optional[[FilterParams](../../../commons/data/filter_params)], paging: Optional[[PagingParams](../../../commons/data/paging_params)], sort: Optional[[SortParams](../../../commons/data/sort_params)] = None): [DataPage](../../../commons/data/data_page)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **filter**: Optional[[FilterParams](../../../commons/data/filter_params)] - (optional) filter parameters
- **sort**: Optional[[SortParams](../../../commons/data/sort_params)] - (optional) sort parameters
- **returns**: List[T] - list of items

