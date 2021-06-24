---
type: docs
title: "ISaver<in T>"
linkTitle: "ISaver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-data-dotnet"
description: >
    Interface for data processing components that save data items.
---

### Description

The ISaver interface is used by data processing components that save data items.

### Instance methods

#### SaveAsync
Saves given data items.

> Task SaveAsync(string correlationId, IEnumerable\<T\> items)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **items**: IEnumerable\<T\> - a list of items to save.

