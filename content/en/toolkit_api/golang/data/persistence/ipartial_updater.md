---
type: docs
title: "IPartialUpdater"
linkTitle: "IPartialUpdater"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-data-gox"
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

> UpdatePartially(ctx context.Context, correlation_id string, id K, data [*data.AnyValueMap](../../../commons/data/any_value_map)) (item T, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of the data item to be updated.
- **data**: [*data.AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: (item T, err error) - updated item
