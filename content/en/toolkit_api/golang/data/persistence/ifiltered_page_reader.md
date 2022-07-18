---
type: docs
title: "IFilteredPageReader"
linkTitle: "IFilteredPageReader"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
description: >
    Interface for data processing components that can retrieve a page of data items by a filter.
---

### Description

The IFilteredPageReader interface is used by data processing components that can retrieve a page of data items through the use of a filter.

### Methods

#### getPageByFilter
Gets a page of data items using filter parameters.

> GetPageByFilter(correlation_id string, filter [*data.FilterParams](../../../commons/data/filter_params), paging [*data.PagingParams](../../../commons/data/paging_params), sort [*data.SortParams](../../../commons/data/sort_params)) (page interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: [*data.FilterParams](../../../commons/data/filter_params) - (optional) filter parameters
- **paging**: [*data.PagingParams](../../../commons/data/paging_params) -  (optional) paging parameters
- **sort**: [*data.SortParams](../../../commons/data/sort_params) - (optional) sort parameters
- **returns**: (page interface{}, err error) - list of items

