---
type: docs
title: "ISaver<in T>"
linkTitle: "ISaver"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-persistence-dotnet"
description: >
    Interface for data processing components that save data items.
---

### Description

The ISaver interface is used by data processing components that save data items.

### Instance methods

#### SaveAsync
Saves given data items.

> Task SaveAsync(IContext context, IEnumerable\<T\> items)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **items**: IEnumerable\<T\> - list of items to save.


