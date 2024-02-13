---
type: docs
title: "ISetter<T>"
linkTitle: "ISetter"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-persistence-node"
description: >
    Interface for data processing components that can set (create or update) data items.
---

### Description

The ISetter interface is used by data processing components that can set (create or update) data items.

### Instance methods

#### set
Sets a data item. If the data item exists it updates it, otherwise it creates a new data item.

> set(context: [IContext](../../../components/context/icontext), item: T): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set.
- **returns**: Promise\<T\> - updated item

