---
type: docs
title: "IWriter<T, in K>"
linkTitle: "IWriter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-data-dotnet"
description: >
    Interface for data processing components that can create, update and delete data items.
---

### Description

The IWriter interface is used by data processng components that can create, update and delete data items.

### Instance methods

#### CreateAsync
Creates a data item.

> Task\<T\> CreateAsync(string correlationId, T item)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Task\<T\> - created item


#### UpdateAsync
Updates a data item.

> Task\<T\> UpdateAsync(string correlationId, T item)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be updated.
- **returns**: Task\<T\> - updated item


#### DeleteByIdAsync
Updates a data item.

> Task\<T\> DeleteByIdAsync(string correlationId, K id)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the item to be deleted
- **returns**: Task\<T\> - deleted item.
