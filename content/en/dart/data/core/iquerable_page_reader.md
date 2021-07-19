---
type: docs
title: "IQuerablePageReader<T>"
linkTitle: "IQuerablePageReader"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
description: >
    Interface for data processing components that can query a page of data items.
---

### Description

The IQuerablePageReader interface is used by data processing components that can query a page of data items.

### Instance methods

#### getPageByQuery
Gets a page of data items using a query string.

> Future<[DataPage](../../../commons/data/data_page)\<T\>> getPageByQuery(String correlation_id, String query, [PagingParams](../../../commons/data/paging_params) paging, [SortParams](../../../commons/data/sort_params) sort)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **query**: string - (optional) query string
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: [SortParams](../../../commons/data/sort_params) - (optional) sorting parameters
- **returns**: Future<[DataPage](../../../commons/data/data_page)\<T\>> - list of items
