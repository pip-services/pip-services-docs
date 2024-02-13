---
type: docs
title: "IWriter<T, in K>"
linkTitle: "IWriter"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-persistence-dotnet"
description: >
    Interface for data processing components that can create, update and delete data items.
---

### Description

The IWriter interface is used by data processng components that can create, update and delete data items.

### Instance methods

#### CreateAsync
Creates a data item.

> Task\<T\> CreateAsync(IContext context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Task\<T\> - created item


#### UpdateAsync
Updates a data item.

> Task\<T\> UpdateAsync(IContext context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: Task\<T\> - updated item


#### DeleteByIdAsync
Updates a data item.

> Task\<T\> DeleteByIdAsync(IContext context, K id)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be deleted
- **returns**: Task\<T\> - deleted item.

