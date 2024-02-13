---
type: docs
title: "ISaver<T>"
linkTitle: "ISaver"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-persistence-dart"
description: >
    Interface for data processing components that save data items.
---

### Description

The ISaver interface is used by data processing components that save data items.

### Instance methods

#### save
Saves given data items.

> Future save(IContext context, List\<T\> items)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **items**: List\<T\> - list of items to save.

