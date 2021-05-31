---
type: docs
title: "IQuerableReader"
linkTitle: "IQuerableReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components that can query a list of data items.
---

### Description

The IQuerableReader interface is used by data processing components that can query a list of data items.

### Instance methods

#### get_list_by_query
Gets a list of data items using a query string.

> get_list_by_query(correlation_id: Optional[str], query: Optional[str], sort: Optional[[SortParams](../../../commons/data/sort_params)] = None): List[Any]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **query**: Optional[str] - (optional) query string
- **sort**: Optional[[SortParams](../../../commons/data/sort_params)] - (optional) sort parameters
- **returns**: List[T] - list of items
