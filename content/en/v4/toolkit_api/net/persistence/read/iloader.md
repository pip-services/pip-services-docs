---
type: docs
title: "ILoader<T>"
linkTitle: "ILoader"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-persistence-dotnet"
description: >
    Interface for data processing components that load data items.
---

### Description

The ILoader interface is used by data processing components that load data items.

### Instance methods

#### LoadAsync
Loads data items.

> Task\<List\<T\>\> LoadAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Task\<List\<T\>\> - list of data items


