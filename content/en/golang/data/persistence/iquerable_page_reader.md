---
type: docs
title: "IQuerablePageReader"
linkTitle: "IQuerablePageReader"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
description: >
    Interface for data processing components that can query a page of data items.
---

### Description

The IQuerablePageReader interface is used by data processing components that can query a page of data items.

### Methods

#### GetPageByQuery
Gets a page of data items using a query string.

> GetPageByQuery(correlation_id string, query string, paging [*data.PagingParams](../../../commons/data/paging_params), sort [*data.SortParams](../../../commons/data/sort_params)) (page interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **query**: string - (optional) query string
- **paging**: [*data.PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: [*data.SortParams](../../../commons/data/sort_params) - (optional) sorting parameters
- **returns**: (page interface{}, err error) - list of items
