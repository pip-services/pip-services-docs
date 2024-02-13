---
type: docs
title: "IFilteredPageReader"
linkTitle: "IFilteredPageReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components that can retrieve a page of data items by a filter.
---

### Description

The IFilteredPageReader interface is used by data processing components that can retrieve a page of data items through the use of a filter.

### Instance methods

#### get_page_by_filter
Gets a page of data items using filter parameters.

> get_page_by_filter(correlation_id: Optional[str], filter: Optional[[FilterParams](../../../commons/data/filter_params)], paging: Optional[[PagingParams](../../../commons/data/paging_params)], sort: Optional[[SortParams](../../../commons/data/sort_params)] = None): [DataPage](../../../commons/data/data_page)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **filter**: Optional[[FilterParams](../../../commons/data/filter_params)] - (optional) filter parameters
- **paging**: Optional[[PagingParams](../../../commons/data/paging_params)] -  (optional) paging parameters
- **sort**: Optional[[SortParams](../../../commons/data/sort_params)] - (optional) sort parameters
- **returns**: [DataPage](../../../commons/data/data_page) - list of items

