---
type: docs
title: "IQuerableReader"
linkTitle: "IQuerableReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components that can query a list of data items.
---


### Methods

#### get_list_by_query
Gets a list of data items using a query string.

> get_list_by_query(correlation_id: Optional[str], query: Optional[str], sort: Optional[[SortParams](../../../commons/data/sort_params)] = None): List[Any]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **query**: Optional[str] - (optional) a query string
- **sort**: Optional[[SortParams](../../../commons/data/sort_params)] - (optional) sort parameters
- **returns**: List[T] - list of items
