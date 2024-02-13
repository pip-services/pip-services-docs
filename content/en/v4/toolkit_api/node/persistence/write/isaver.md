---
type: docs
title: "ISaver<T>"
linkTitle: "ISaver"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-persistence-node"
description: >
    Interface for data processing components that save data items.
---

### Description

The ISaver interface is used by data processing components that save data items.

### Instance methods

#### save
Saves given data items.

> save(context: [IContext](../../../components/context/icontext), items: T[]): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **items**: T[] - a list of items to save.

