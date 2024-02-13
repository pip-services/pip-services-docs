---
type: docs
title: "ISetter"
linkTitle: "ISetter"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-persistence-python"
description: >
    Interface for data processing components that can set (create or update) data items.
---

### Description

The ISetter interface is used by data processing components that can set (create or update) data items.

### Instance methods

#### set
Sets a data item. If the data item exists it updates it, otherwise it creates a new data item.

> set(context: Optional[IContext], item: T): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set.
- **returns**: T - updated item

