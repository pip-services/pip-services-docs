---
type: docs
title: "IFilteredPageReader<T>"
linkTitle: "IFilteredPageReader"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-data-nodex"
description: >
    Interface for data processing components that can retrieve a page of data items by a filter.
---

### Description

The IFilteredPageReader interface is used by data processing components that can retrieve a page of data items through the use of a filter.

### Instance methods

#### getPageByFilter
Gets a page of data items using filter parameters.

> getPageByFilter(correlationId: string, filter: [FilterParams](../../../commons/data/filter_params), paging: [PagingParams](../../../commons/data/paging_params), sort: [SortParams](../../../commons/data/sort_params)): Promise<[DataPage](../../../commons/data/data_page)\<T\>>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: [FilterParams](../../../commons/data/filter_params) - (optional) filter parameters
- **paging**: [PagingParams](../../../commons/data/paging_params) -  (optional) paging parameters
- **sort**: [SortParams](../../../commons/data/sort_params) - (optional) sort parameters
- **returns**: Promise<[DataPage](../../../commons/data/data_page)\<T\>> - list of items

