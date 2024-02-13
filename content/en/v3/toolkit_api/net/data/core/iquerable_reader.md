---
type: docs
title: "IQuerableReader<T>"
linkTitle: "IQuerableReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-data-dotnet"
description: >
    Interface for data processing components that can query a list of data items.
---

### Description

The IQuerableReader interface is used by data processing components that can query a list of data items.

### Instance methods

#### getListByQuery
Gets a list of data items using a query string.

> Task\<List\<T\>\> GetListByQueryAsync(string correlationId, string query, [SortParams](../../../commons/data/sort_params) sort)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **query**: string - (optional) query string
- **sort**: [SortParams](../../../commons/data/sort_params) - (optional) sorting parameters
- **returns**: Task\<List\<T\>\> - list of items
