---
type: docs
title: "ISaver<T>"
linkTitle: "ISaver"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-persistence-java"
description: >
    Interface for data processing components that save data items.
---

### Description

The ISaver interface is used by data processing components that save data items.

### Instance methods

#### save
Saves given data items.

> void save([IContext](../../../components/context/icontext) context, List<T> entities) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **entities**: List<T> - a list of items to save.

