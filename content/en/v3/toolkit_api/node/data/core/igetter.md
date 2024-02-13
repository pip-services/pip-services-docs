---
type: docs
title: "IGetter<T extends IIdentifiable<K>, K>"
linkTitle: "IGetter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-data-nodex"
description: >
    Interface for data processing components that can get data items.
---

### Description

The IGetter interface is used by data processing components that are capable of getting data items.

### Instance methods

#### getOneById
Gets a data item by its unique id.

> getOneById(correlationId: string, id: K): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the item to be retrieved.
- **returns**: Promise\<T\> - returned item.

