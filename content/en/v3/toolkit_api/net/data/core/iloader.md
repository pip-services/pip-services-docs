---
type: docs
title: "ILoader<T>"
linkTitle: "ILoader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-data-dotnet"
description: >
    Interface for data processing components that load data items.
---

### Description

The ILoader interface is used by data processing components that load data items.

### Instance methods

#### LoadAsync
Loads data items.

> Task\<List\<T\>\> LoadAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Task\<List\<T\>\> - list of data items

