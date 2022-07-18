---
type: docs
title: "IQuerablePageReader<T>"
linkTitle: "IQuerablePageReader"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-data-nodex"
description: >
    Interface for data processing components that can query a page of data items.
---

### Description

The IQuerablePageReader interface is used by data processing components that can query a page of data items.

### Instance methods

#### getPageByQuery
Gets a page of data items using a query string.

> getPageByQuery(correlationId: string, query: string, paging: [PagingParams](../../../commons/data/paging_params), sort: [SortParams](../../../commons/data/sort_params)): Promise<[DataPage](../../../commons/data/data_page)\<T\>>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **query**: string - (optional) query string
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: [SortParams](../../../commons/data/sort_params) - (optional) sorting parameters
- **returns**: Promise<[DataPage](../../../commons/data/data_page)\<T\>> - list of items
