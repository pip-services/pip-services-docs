---
type: docs
title: "IWriter"
linkTitle: "IWriter"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-persistence-python"
description: >
    Interface for data processing components that can create, update and delete data items.
---

### Description

The IWriter interface is used by data processng components that can create, update and delete data items.

### Instance methods

#### create
Creates a data item.

> create(context: Optional[IContext], item: T): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: T - created item


#### update
Updates a data item.

> update(context: Optional[IContext], item: T): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: T - updated item


#### delete_by_id
Updates a data item.

> delete_by_id(context: Optional[str], id: Any): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: Any - id of the item to be deleted
- **returns**: T - deleted item.
