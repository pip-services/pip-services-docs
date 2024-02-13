---
type: docs
title: "IPartialUpdater"
linkTitle: "IPartialUpdater"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-persistence-python"
description: >
    Interface for data processing components to update data items partially.
---

### Description

The IPartialUpdater interface is used by data processing components to update data items partially.

### Instance methods

#### update_partially
Updates only few selected fields in a data item.

> update_partially(context: Optional[IContext], id: Any, data: [AnyValueMap](../../../commons/data/any_value_map)): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: Any - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: T - updated item
