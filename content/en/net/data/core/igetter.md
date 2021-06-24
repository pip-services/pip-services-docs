---
type: docs
title: "IGetter<T, in K>"
linkTitle: "IGetter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-data-dotnet"
description: >
    Interface for data processing components that can get data items.
---

### Description

where T : [IIdentifiable\<K\>](../../../commons/data/iidentifiable)

The IGetter interface is used by data processing components that are capable of getting data items.

### Instance methods

#### GetOneByIdAsync
Gets a data item by its unique id.

> Task\<T\> GetOneByIdAsync(string correlationId, K id)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the item to be retrieved.
- **returns**: Task\<T\> - returned item.

