---
type: docs
title: "IFilteredReader<T>"
linkTitle: "IFilteredReader"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-data-nodex"
description: >
    Interface for data processing components that can retrieve a list of data items through the use of a filter.
---

### Description

The IFilteredReader interface is used by data processing components that can retrieve a list of data items through the use of a filter.

### Instance methods

#### getListByFilter
Gets a list of data items using filter parameters.

> getListByFilter(correlationId: string, filter: [FilterParams](../../../commons/data/filter_params), paging: [PagingParams](../../../commons/data/paging_params), sort: [SortParams](../../../commons/data/sort_params)): [DataPage](../../../commons/data/data_page)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: [FilterParams](../../../commons/data/filter_params) - (optional) filter parameters
- **sort**: [SortParams](../../../commons/data/sort_params) - (optional) sort parameters
- **returns**: Promise\<T[]\> - list of items

