---
type: docs
title: "IQuerablePageReader"
linkTitle: "IQuerablePageReader"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-data-gox"
description: >
    Interface for data processing components that can query a page of data items.
---

### Description

The `IQuerablePageReader[T any]` interface is used by data processing components that can query a page of data items.

- T any type

### Methods

#### GetPageByQuery
Gets a page of data items using a query string.

> GetPageByQuery(ctx context.Context, correlation_id string, query string, paging [*data.PagingParams](../../../commons/data/paging_params), sort [*data.SortParams](../../../commons/data/sort_params)) (page [DataPage[T]](../../../commons/data/data_page), err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **query**: string - (optional) query string
- **paging**: [*data.PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: [*data.SortParams](../../../commons/data/sort_params) - (optional) sorting parameters
- **returns**: (page [DataPage[T]](../../../commons/data/data_page), err error) - list of items
