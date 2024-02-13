---
type: docs
title: "IPartialUpdater<T, in K>"
linkTitle: "IPartialUpdater"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-persistence-dotnet"
description: >
    Interface for data processing components to update data items partially.
---

### Description

The IPartialUpdater interface is used by data processing components to update data items partially.

### Instance methods

#### UpdatePartially
Updates only few selected fields in a data item.

> Task\<T\> UpdatePartially(IContext context, K id, [AnyValueMap](../../../commons/data/any_value_map) data)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Task\<T\> - updated item

