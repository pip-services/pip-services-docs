---
type: docs
title: "IPartialUpdater"
linkTitle: "IPartialUpdater"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
description: >
    Interface for data processing components to update data items partially.
---

### Description

The `IPartialUpdater[T any, K any]` interface is used by data processing components to update data items partially.

- T any type
- K type of id (key)

### Methods

#### UpdatePartially
Updates only few selected fields in a data item.

> UpdatePartially(ctx context.Context, context [IContext](../../../components/context/icontext), id K, data [*data.AnyValueMap](../../../commons/data/any_value_map)) (item T, err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: interface{} - id of the data item to be updated.
- **data**: [*data.AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: (item T, err error) - updated item

