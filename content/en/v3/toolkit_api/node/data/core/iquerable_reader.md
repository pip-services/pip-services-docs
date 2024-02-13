---
type: docs
title: "IQuerableReader<T>"
linkTitle: "IQuerableReader"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-data-nodex"
description: >
    Interface for data processing components that can query a list of data items.
---

### Description

The IQuerableReader interface is used by data processing components that can query a list of data items.

### Instance methods

#### getListByQuery
Gets a list of data items using a query string.

> getListByQuery(correlationId: string, query: string, sort: [SortParams](../../../commons/data/sort_params)): Promise\<T[]\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **query**: string - (optional) query string
- **sort**: [SortParams](../../../commons/data/sort_params) - (optional) sorting parameters
- **returns**: Promise\<T[]\> - list of items
