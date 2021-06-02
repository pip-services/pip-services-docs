---
type: docs
title: "IPartialUpdater<T, K>"
linkTitle: "IPartialUpdater"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-data-nodex"
description: >
    Interface for data processing components to update data items partially.
---

### Description

The IPartialUpdater interface is used by data processing components to update data items partially.

### Instance methods

#### updatePartially
Updates only few selected fields in a data item.

> updatePartially(correlationId: string, id: K, data: [AnyValueMap](../../../commons/data/any_value_map)): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Promise\<T\> - updated item
