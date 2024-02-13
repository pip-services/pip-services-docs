---
type: docs
title: "IPartialUpdater<T, K>"
linkTitle: "IPartialUpdater"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-persistence-dart"
description: >
    Interface for data processing components to update data items partially.
---

### Description

The IPartialUpdater interface is used by data processing components to update data items partially.

### Instance methods

#### updatePartially
Updates only few selected fields in a data item.

> Future\<T\> updatePartially(IContext context, K id, [AnyValueMap](../../../commons/data/any_value_map) data)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Future\<T\> - updated item
