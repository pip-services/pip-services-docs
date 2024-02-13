---
type: docs
title: "IGetter<T extends IIdentifiable<K>, K>"
linkTitle: "IGetter"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-persistence-node"
description: >
    Interface for data processing components that can get data items.
---

### Description

The IGetter interface is used by data processing components that are capable of getting data items.

### Instance methods

#### getOneById
Gets a data item by its unique id.

> getOneById(context: [IContext](../../../components/context/icontext), id: K): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be retrieved.
- **returns**: Promise\<T\> - returned item.

