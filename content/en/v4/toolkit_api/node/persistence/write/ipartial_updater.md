---
type: docs
title: "IPartialUpdater<T, K>"
linkTitle: "IPartialUpdater"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-persistence-node"
description: >
    Interface for data processing components to update data items partially.
---

### Description

The IPartialUpdater interface is used by data processing components to update data items partially.

### Instance methods

#### updatePartially
Updates only few selected fields in a data item.

> updatePartially(context: [IContext](../../../components/context/icontext), id: K, data: [AnyValueMap](../../../commons/data/any_value_map)): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Promise\<T\> - updated item
