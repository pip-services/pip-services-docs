---
type: docs
title: "IPartialUpdater"
linkTitle: "IPartialUpdater"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components to update data items partially.
---

### Description

The IPartialUpdater interface is used by data processing components to update data items partially.

### Instance methods

#### update_partially
Updates only few selected fields in a data item.

> update_partially(correlation_id: Optional[str], id: Any, data: [AnyValueMap](../../../commons/data/any_value_map)): T

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **id**: Any - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: T - updated item
