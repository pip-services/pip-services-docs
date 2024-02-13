---
type: docs
title: "ISetter<T>"
linkTitle: "ISetter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-data-dotnet"
description: >
    Interface for data processing components that can set (create or update) data items.
---

### Description

The ISetter interface is used by data processing components that can set (create or update) data items.

### Instance methods

#### SetAsync
Sets a data item. If the data item exists it updates it, otherwise it creates a new data item.

> Task\<T\> SetAsync(string correlationId, T item)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set.
- **returns**: Task\<T\> - updated item

