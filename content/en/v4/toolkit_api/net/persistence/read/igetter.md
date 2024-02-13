---
type: docs
title: "IGetter<T, in K>"
linkTitle: "IGetter"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-persistence-dotnet"
description: >
    Interface for data processing components that can get data items.
---

### Description

The IGetter interface is used by data processing components that are capable of getting data items.

### Instance methods

#### GetOneByIdAsync
Gets a data item by its unique id.

> Task\<T\> GetOneByIdAsync(IContext context, K id)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be retrieved.
- **returns**: Task\<T\> - returned item.


