---
type: docs
title: "IFilteredPageReader<T>"
linkTitle: "IFilteredPageReader"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
description: >
    Interface for data processing components that can retrieve a page of data items by a filter.
---

### Description

The IFilteredPageReader interface is used by data processing components that can retrieve a page of data items through the use of a filter.

### Instance methods

#### getPageByFilter
Gets a page of data items using filter parameters.

> Future<[DataPage](../../../commons/data/data_page)\<T\>> getPageByFilter(String correlation_id, [FilterParams](../../../commons/data/filter_params) filter, [PagingParams](../../../commons/data/paging_params) paging, [SortParams](../../../commons/data/sort_params) sort)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **filter**: [FilterParams](../../../commons/data/filter_params) - (optional) filter parameters
- **paging**: [PagingParams](../../../commons/data/paging_params) -  (optional) paging parameters
- **sort**: [SortParams](../../../commons/data/sort_params) - (optional) sort parameters
- **returns**: Future<[DataPage](../../../commons/data/data_page)\<T\>> - list of items

