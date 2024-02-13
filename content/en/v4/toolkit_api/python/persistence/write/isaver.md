---
type: docs
title: "ISaver"
linkTitle: "ISaver"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-persistence-python"
description: >
    Interface for data processing components that save data items.
---

### Description

The ISaver interface is used by data processing components that save data items.

### Instance methods

#### save
Saves given data items.

> save(context: Optional[IContext], items: List[T])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **items**: List[T] - list of items to save.

