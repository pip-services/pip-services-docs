---
type: docs
title: "IWriter<T, K>"
linkTitle: "IWriter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-persistence-java"
description: >
    Interface for data processing components that can create, update and delete data items.
---

### Description

The IWriter interface is used by data processng components that can create, update and delete data items.

### Instance methods

#### create
Creates a data item.

> T create([IContext](../../../components/context/icontext) context, T entity) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **entity**: T - item to be created.
- **returns**: T - created item


#### update
Updates a data item.

> T update([IContext](../../../components/context/icontext) context, T entity) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **entity**: T - item to be updated.
- **returns**: T - updated item


#### deleteById
Updates a data item.

> T deleteById([IContext](../../../components/context/icontext) context, K id) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be deleted
- **returns**: T - deleted item.
