---
type: docs
title: "IGetter"
linkTitle: "IGetter"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-persistence-python"
description: >
    Interface for data processing components that can get data items.
---

**Implements:** [IIdentifiable](../../../data/data/iidentifiable)

### Description

The IGetter interface is used by data processing components that are capable of getting data items.

### Instance methods

#### get_one_by_id
Gets a data item by its unique id.

> get_one_by_id(context: Optional[IContext], id: Any): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: Any - id of the item to be retrieved.
- **returns**: T - returned item.

