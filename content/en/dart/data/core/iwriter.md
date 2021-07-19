---
type: docs
title: "IWriter<T, K>"
linkTitle: "IWriter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
description: >
    Interface for data processing components that can create, update and delete data items.
---

### Description

The IWriter interface is used by data processng components that can create, update and delete data items.

### Instance methods

#### create
Creates a data item.

> Future\<T\> create(String correlation_id, T item)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Future\<T\> - created item


#### update
Updates a data item.

> Future\<T\> update(String correlation_id, T item)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be updated.
- **returns**: Future\<T\> - updated item


#### deleteById
Updates a data item.

> Future\<T\> deleteById(String correlation_id, K id)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the item to be deleted
- **returns**: Future\<T\> - deleted item.
