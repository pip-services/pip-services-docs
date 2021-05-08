---
type: docs
title: "IQuerablePageReader"
linkTitle: "IQuerablePageReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components that can query a page of data items.
---


### Methods

#### get_page_by_query
Gets a page of data items using a query string.

> get_page_by_query(correlation_id: Optional[str], query: Optional[str], paging: Optional[[PagingParams](../../../commons/data/paging_params)], sort: Optional[[SortParams](../../../commons/data/sort_params)] = None): [DataPage](../../../commons/data/data_page)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **query**: Optional[str] - (optional) a query string
- **paging**: Optional[[PagingParams](../../../commons/data/paging_params)] - (optional) paging parameters
- **sort**: Optional[[SortParams](../../../commons/data/sort_params)] - (optional) sort parameters
- **returns**: [DataPage](../../../commons/data/data_page) - list of items
