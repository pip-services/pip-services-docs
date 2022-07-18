---
type: docs
title: "IPartialUpdater"
linkTitle: "IPartialUpdater"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
description: >
    Interface for data processing components to update data items partially.
---

### Description

The IPartialUpdater interface is used by data processing components to update data items partially.

### Methods

#### UpdatePartially
Updates only few selected fields in a data item.

> UpdatePartially(correlation_id string, id interface{}, data [*data.AnyValueMap](../../../commons/data/any_value_map)) (item interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of the data item to be updated.
- **data**: [*data.AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: (item interface{}, err error) - updated item
