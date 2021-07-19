---
type: docs
title: "IQuerableReader<T>"
linkTitle: "IQuerableReader"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
description: >
    Interface for data processing components that can query a list of data items.
---

### Description

The IQuerableReader interface is used by data processing components that can query a list of data items.

### Instance methods

#### getListByQuery
Gets a list of data items using a query string.

> Future\<List\<T\>\> getListByQuery(String correlation_id, String query, [SortParams](../../../commons/data/sort_params) sort)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **query**: String - (optional) query string
- **sort**: [SortParams](../../../commons/data/sort_params) - (optional) sorting parameters
- **returns**: Future\<List\<T\>\> - list of items
