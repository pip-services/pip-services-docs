---
type: docs
title: "IQuerableReader"
linkTitle: "IQuerableReader"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
description: >
    Interface for data processing components that can query a list of data items.
---

### Description

The IQuerableReader interface is used by data processing components that can query a list of data items.

### Methods

#### GetListByQuery
Gets a list of data items using a query string.

> GetListByQuery(correlation_id string, query string, sort [*data.SortParams](../../../commons/data/sort_params)) (items []interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **query**: string - (optional) query string
- **sort**: [*data.SortParams](../../../commons/data/sort_params) - (optional) sorting parameters
- **returns**: (items []interface{}, err error) - list of items
